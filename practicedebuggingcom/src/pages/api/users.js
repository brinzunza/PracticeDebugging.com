import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    try {
        if (req.method === 'GET') {
            // Fetch all users
            const users = await prisma.user.findMany();
            return res.status(200).json(users);
        } else if (req.method === 'POST') {
            // Create a new user
            const { name, email } = req.body;

            // Validate input
            if (!name || !email) {
                return res.status(400).json({ error: 'Name and email are required' });
            }

            // Create user in the database
            const newUser = await prisma.user.create({
                data: {
                    name,
                    email,
                },
            });
            return res.status(201).json(newUser);
        } else {
            // Handle any other HTTP method
            res.setHeader('Allow', ['GET', 'POST']);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.error("Error occurred:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await prisma.$disconnect(); // Ensure the Prisma client is disconnected
    }
} 
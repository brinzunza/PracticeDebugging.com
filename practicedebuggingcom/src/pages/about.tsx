import { Link } from "react-router-dom";
import { Bug, Code, BookOpen, Users, Github, BugOff, FileSearch, Brain, LightbulbIcon } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 container mx-auto max-w-6xl py-12 px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">About PracticeDebugging</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="lead text-xl">
            PracticeDebugging is dedicated to improving one of the most undervalued yet crucial skills in programming: 
            the art of finding and fixing bugs. While numerous platforms focus on teaching coding, we specialize in 
            the vital skill of debugging.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">Why Debugging Matters</h2>
          <p>
            As computer science continues its rapid growth, industry professionals must master the fundamentals. 
            While platforms like LeetCode excel at teaching algorithmic problem-solving, none specifically address 
            debugging skills—arguably the most time-consuming part of a developer's daily work.
          </p>
          <p>
            With the rise of generative AI, writing initial code has become easier, but AI tools often lack the context 
            to create perfectly compatible code. This makes debugging capabilities even more critical for modern developers 
            who need to understand how to integrate, fix, and optimize code from various sources.
          </p>
          <p>
            Studies show that developers spend 30-50% of their time debugging. Despite this, debugging remains one of the 
            least formally taught aspects of programming. PracticeDebugging aims to change that.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">The Debugging Learning Gap</h2>
          <div className="bg-muted p-6 rounded-lg my-6">
            <p className="italic">
              "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as 
              cleverly as possible, you are, by definition, not smart enough to debug it."
            </p>
            <p className="text-right">— Brian W. Kernighan</p>
          </div>
          <p>
            Being able to debug effectively proves that you truly understand a system. Simply memorizing patterns 
            and solutions doesn't develop the same depth of knowledge as working through problems and fixing broken code.
          </p>
          <p>
            In today's professional environment, most work involves reading, debugging, and improving existing code 
            rather than writing new systems from scratch. PracticeDebugging develops these crucial professional skills.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">Our Approach to Teaching Debugging</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
            <div className="flex flex-col items-center text-center p-4 bg-card rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <BugOff className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Real-World Scenarios</h3>
              <p className="text-muted-foreground">
                Practice on bugs that simulate actual issues developers encounter in production environments.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 bg-card rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FileSearch className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Systematic Approach</h3>
              <p className="text-muted-foreground">
                Learn methodical debugging techniques that work across languages and frameworks.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 bg-card rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Mental Models</h3>
              <p className="text-muted-foreground">
                Develop frameworks for understanding and approaching complex debugging challenges.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 bg-card rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <LightbulbIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Best Practices</h3>
              <p className="text-muted-foreground">
                Learn prevention techniques to write more robust code from the start.
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">Debugging Philosophies We Teach</h2>
          <ul className="space-y-4">
            <li>
              <strong>Minimal Reproduction:</strong> Start by removing code and hardcoding values little by little, 
              changing one thing at a time until you isolate the problem.
            </li>
            <li>
              <strong>Comparative Analysis:</strong> Write a similar-but-working piece of code directly above the 
              problematic code and compare to identify differences.
            </li>
            <li>
              <strong>Divide and Conquer:</strong> Use binary search techniques to narrow down where in the codebase 
              a bug might be occurring.
            </li>
            <li>
              <strong>Component Swapping:</strong> Systematically replace components to identify which one contains the bug.
            </li>
            <li>
              <strong>Understanding First:</strong> Focus on understanding the system fully before attempting solutions.
              <ul className="ml-6 mt-2">
                <li>What's happening?</li>
                <li>What do you expect to happen?</li>
                <li>When does it happen?</li>
                <li>When does it not happen?</li>
              </ul>
            </li>
            <li>
              <strong>The Debugging Loop:</strong> 
              <ul className="ml-6 mt-2">
                <li>Form a hypothesis about what might be happening</li>
                <li>Design an experiment to check that hypothesis</li>
                <li>Repeat until you understand what's going on</li>
              </ul>
            </li>
            <li>
              <strong>Question Assumptions:</strong> Challenge common assumptions that might be hiding bugs:
              <ul className="ml-6 mt-2">
                <li>"This variable must be set correctly"</li>
                <li>"That function definitely does what I think"</li>
                <li>"I'm editing the right file"</li>
                <li>"There can't be typos in such a short piece of code"</li>
                <li>"The documentation must be correct"</li>
              </ul>
            </li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">Our Story</h2>
          <p>
            PracticeDebugging was created by a team of seasoned developers who recognized that most programming 
            education focuses on writing new code rather than maintaining and fixing existing code. We wanted to 
            create a resource that specifically addresses the skills gap in debugging education.
          </p>
          <p>
            After years of mentoring junior developers and seeing them struggle with debugging, we built this 
            platform to provide structured, practical debugging experience that mimics real-world scenarios.
          </p>
          <p>
            Our mission is to elevate debugging from a frustrating necessity to a valuable skill that developers
            can approach systematically and confidently.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">Join Our Community</h2>
          <p>
            PracticeDebugging is more than just a learning platform—it's a community of developers committed to 
            improving their debugging skills. Share your solutions, learn from others, and contribute to building 
            a comprehensive resource for debugging education.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            <a className="flex items-center gap-2" href='https://www.github.com'>
              <Github className="h-5 w-5" />
              Contribute on GitHub
            </a>
            <Link to="/problem">
              <Link to='/problem'>
                Try a Challenge
              </Link>
            </Link>
          </div>
        </div>
      </main>
      
      <footer className="bg-card border-t border-border py-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Bug className="h-5 w-5 text-primary" />
              <span className="font-bold text-lg">PracticeDebugging</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} PracticeDebugging. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
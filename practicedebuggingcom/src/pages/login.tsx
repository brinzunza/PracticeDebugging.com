import { CredentialResponse, GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode, JwtPayload } from "jwt-decode";
//import { createUser, findUserByEmail } from "../api/users";
import { Link, Navigate } from "react-router-dom";
import React, { useState } from 'react';

// Define a custom interface extending JwtPayload
interface CustomJwtPayload extends JwtPayload {
    email: string;
    name: string;
}

export default function Login() {

    return (
        <>
            <GoogleOAuthProvider clientId={"512008525729-u84nf5vbffil0btvhqvi1nmrgsgl3u1k.apps.googleusercontent.com"}>
                <h1>Login</h1>
                <GoogleLogin
                    onSuccess={(credentialResponse) => {
                        console.log(jwtDecode(credentialResponse.credential || ""));
                        const decoded = jwtDecode<CustomJwtPayload>(credentialResponse.credential || "");
                        //if (findUserByEmail(decoded.email) == null) {
                        //    createUser(decoded.name, decoded.email);
                        //}

                        <Navigate to="/practice" />
                    }}  
                    onError={() => {
                        console.error("Login Failed");
                    }}
                />
            </GoogleOAuthProvider>
        </>
    );
}
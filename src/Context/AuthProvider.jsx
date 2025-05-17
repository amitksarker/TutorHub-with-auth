import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';


export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('State Captured', currentUser)
            setLoading(false);
        })
        return () =>{
            unsubscribe();
        }
    }, [])
    const AuthInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser,

    }

    return (
        <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;

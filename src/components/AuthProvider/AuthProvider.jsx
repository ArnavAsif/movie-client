import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.init";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const singUpEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const handleSignOut = () =>{
        return signOut(auth);
    }
    useEffect(() => {
        const disconnect = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })

        return () => {
            disconnect();
        }
    }, [])

    const authInfo = {
        user,
        singUpEmail,
        signInEmail,
        handleSignOut
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
import { createContext, useState, useContext, useEffect } from "react";
import { auth } from "../services/firebase"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

type User = {
    id: string;
    name: string;
    avatar: string
}

type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType)

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }: {children: React.ReactNode}) => {
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                const { displayName, photoURL, uid } = user
                if (!displayName || !photoURL ) {
                    throw new Error('Missing information from Google Account.')
                }
                setUser({
                    id:uid,
                    name: displayName,
                    avatar: photoURL
                })
            }
        })

        return () => unsubscribe()
    }, [])

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        if (result.user) {
            const { displayName, photoURL, uid } = result.user
            if (!displayName || !photoURL ) {
                throw new Error('Missing information from Google Account.')
            }
            setUser({
                id:uid,
                name: displayName,
                avatar: photoURL
            })
        }
    };

    return(
        <AuthContext.Provider value={{user, signInWithGoogle }}>{children}</AuthContext.Provider>
    )
}

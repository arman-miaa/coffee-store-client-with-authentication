import { createContext, useState } from "react";
import auth from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }

    const sigInUser = (email, password) => {
        setLoading(true)
     return   signInWithEmailAndPassword(auth,email,password)
    }

    const userInfo = {
        user,
        loading,
        createUser,
        sigInUser,

    }
    
    return (
        <div>
            
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
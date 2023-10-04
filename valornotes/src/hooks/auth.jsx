import { createContext, useContext, useState, UseEffect } from "react";
import { api } from "../service/api";
import { useEffect } from "react";


export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn ({ email, password }) {
        try {
             const response = await api.post("/sessions", { email, password });
             const { user, token } = response.data;

             localStorage.setItem("@valornotes:user", JSON.stringify(user));
             localStorage.setItem("@valornotes:token", token);

             api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
             setData({user, token})
            } catch (error) {
            if(error.response) {
                alert(error.response.data.message);
            }else {
                alert("Cannot Login");
            }
        }
}

    function signOut() {
        localStorage.removeItem("@valornotes:token");
        localStorage.removeItem("@valornotes:user");

        setData({});

   }

   async function updateProfile({user, avatarFile}) {
    try{
        
        if(avatarFile) {
            const fileUploadForm = new FormData();
            fileUploadForm.append("avatar", avatarFile);

            const response = await api.patch("/users/avatar", fileUploadForm);
            user.avatar = response.data.avatar;
        }

        await api.put("./users", user);
        localStorage.setItem("@valornotes:user", JSON.stringify(user));

        setData({ user, token: data.token });
        alert("Profile succesfully updated!");

    } catch (error) {
        if(error.response) {
            alert(error.response.data.message);
        } else {
            alert("Profile Update gone wrong!");
        }
    }

   };


    useEffect(() => {
        const token = localStorage.getItem("@valornotes:token");
        const user = localStorage.getItem("@valornotes:user");

        if(token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            });
        }


    }, []);

    return (
    <AuthContext.Provider value={{ 
        signIn,
        signOut,
        updateProfile,
        user: data.user 
        }}>
        {children}
    </AuthContext.Provider>
    )
};

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth }
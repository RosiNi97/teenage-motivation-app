import { useEffect, useState } from 'react';
import { User } from "firebase/auth";
import { checkAuthState } from '../firebase/authentication';

import { useRouter } from 'next/router';
import { UserState } from '../types/userInterface';
import { DocumentData } from 'firebase/firestore';

const useUser = (): UserState => {

    const [userAuth, setUser] = useState<User>();
    const [userData, setUserData] = useState<DocumentData>();

    const router = useRouter();

    const updateUserStateData = (userData: DocumentData) => {
        setUserData(userData);
    }


    useEffect(() => {
        checkAuthState((user: User) => {
            if (user) {
                setUser(user);
            } else {
                setUser(undefined);
                router.replace('/login');
            }
        });
    }, [userAuth]);

    return { user, updateUserStateData }
}

export default useUser;
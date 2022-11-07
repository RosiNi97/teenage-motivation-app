import { User } from "firebase/auth";
import { DocumentData } from "firebase/firestore";

export interface UserState {
    user: UserTMApp | undefined;
}

export interface UserTMApp {
    userAuth: User | undefined;
    userData: DocumentData | undefined;
}


export interface UserCollection {
    userAuthId: string;
    fullName: string;
    rol: string;
    family: {};
    requestMembers: string[];
    currentTasks: [];
    doneTasks: [];
    points: number;
}
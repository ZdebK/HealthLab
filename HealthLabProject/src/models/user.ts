import { Time } from "@angular/common";

export interface User {
    email: string;
    password: string;
}

export interface Pills{
    title: string;
    description: string;
    date: Date;
    time: Time;
    id: number;
}
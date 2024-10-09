import { base_url } from "../constantes";
import { CreateUserRecuest, LoginRecuest, UserResponse } from "./models/auth.models";

const baseUrl = base_url;
// const baseUrl = 'http://192.168.1.76:3000/api/v1/'

export function login(loginData: LoginRecuest): Promise<any> {
    const url = `${baseUrl}auth/login`
    return fetch(
        url,
        {
            method: 'post',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(loginData)
        }
    );
}

export function createUser(userData: CreateUserRecuest): Promise<any> {
    const url = `${baseUrl}auth/register`
    return fetch(
        url,
        {
            method: 'post',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(userData)
        }
    );
}
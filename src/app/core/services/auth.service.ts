import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models';
const STORAGE_CURRENT = 'currentUser'
const validUsers: User[] = [
    {
        id: '1',
        name: 'User',
        username: 'user',
        avatar: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg',
        password: 'user',
        role:'user'

    },
    {
        id: '2',
        name: 'Admin',
        username: 'admin',
        avatar: 'https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg',
        password: 'admin',
        role:'admin'
    },
]
@Injectable()
export class AuthService {
    private currentUserSubject: BehaviorSubject<User | null>;
    public currentUser$: Observable<User | null>;

    constructor() {
        const user : User |null = this.getLocalStorageUser() ; 
        this.currentUserSubject = new BehaviorSubject<User | null>(user);
        this.currentUser$ = this.currentUserSubject.asObservable();
    }

    login(username: string, password: string): boolean {
        const user: User | undefined = validUsers.find(user => username === user.username && password === user.password)
        if (user && user.id)  {
            this.currentUserSubject.next(user);
            localStorage.setItem(STORAGE_CURRENT , user.id )
            return true;
        }

        return false;
    }

    logout(): void {
        localStorage.removeItem(STORAGE_CURRENT)
        this.currentUserSubject.next(null);
    }

    get currentUser(): User | null {
        return this.currentUserSubject.value;
    }

    isAuthenticated(): boolean {
        return !!this.currentUser;
    }

    getLocalStorageUser(): User | null {
        const userId = localStorage.getItem(STORAGE_CURRENT);
        if(userId) {
            const user  = validUsers.find(user=>user.id === userId);
            if(user){
                return user
            }
        }
        return null
    }
}
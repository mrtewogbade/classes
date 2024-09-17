import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "John Doe",
            "email": "johndoe@gmail.com",
            "role": "ADMIN"
        },
        {
            "id": 2,
            "name": "Jane Doe",
            "email": "janedoe@email.com",
            "role": "ENGINEER"
        },
        {
            "id": 3,
            "name": "John Smith",
            "email": "janesmith",
            "role": "INTERN"
        },
        { 
            "id": 4,
            "name": "Jane Smithhh",
            "email": "janesmith",
            "role": "INTERN"
        },
     

    ]

    // creating methods

    findAll(role?: 'INTERN' | "ENGINEER" | "ADMIN"){
        if(role){
            return this.users.filter(user => user.role === role)
        }
        return this.users
    }

    findOne(id: string){
        return this.users.find(user => user.id === parseInt(id))
    }

    create(user: {name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN'}){
        const userWithId = {
            id: this.users.length + 1,
            ...user
        }
        this.users.push(userWithId);
    }

    update(id: number, userUpdate: {name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN'}){
        this.users = this.users.map(user => {
            if(user.id === id){
                return {...user, ...userUpdate}
            }
            return user
        })

        return
    }


}

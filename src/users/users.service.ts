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

    }
}

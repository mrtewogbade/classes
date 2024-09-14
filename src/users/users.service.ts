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
        }

    ]
}

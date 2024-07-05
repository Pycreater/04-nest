import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class 
UsersService {

    private fakeUsers = [{ username: "pratik", email: "pratik@gmail.com"},
        { username: "mia", email: "mia69@gmail.com"},
        { username: "danny", email: "dannybbc@gmail.com"}
    ]

    fetchUsers() {
        return this.fakeUsers;
    }

    createUser(userDetails: CreateUserType) {
        this.fakeUsers.push(userDetails);
        return;
    }

    fetchUserById(id: number) {
        return { id, username: "lia", email: "lia@gmail.com"}
    }
}

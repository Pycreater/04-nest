import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { AuthGuardGuard } from 'src/users/guards/auth-guard/auth-guard.guard';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Get()
    @UseGuards(AuthGuardGuard)
    getUsers() {
        return this.userService.fetchUsers();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto) {
        console.log(userData);
        return this.userService.createUser(userData);
        
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        return this.userService.fetchUserById(id);
    }

    @Get(":name")
    getByName(@Param('name') name: string) {
        return `${name}`;
    }



}

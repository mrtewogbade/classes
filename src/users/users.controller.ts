import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
     */

    // GET /users

    @Get()
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        
        return [] // an array of users

    }
    @Get('interns') // Get users/interns
    findAllnterns() {
        return []
    }

    // In nestjs, static routes come before dynamic routes — static routes are the ones that are just pure routes while dynamic have id or take in ids. And all static routes must come before dynamic routes

    @Get(':id') // GET /users/:id
    findOne(@Param('id') id:  string){
        return {id} // a user object
    }

    @Post()
    create(@Body() user:{}){
        return user

    }
    
    @Patch(':id') // GET /users/:id
    update(@Param('id') id: string, @Body() userUpdate: {}) {
        return { id, ...userUpdate } // a user object
    }

    @Delete(':id') // GET /users/:id
    delete(@Param('id') id: string) {
        return { id } // a user object
    }

    
}

import { Body,Controller,Delete,Get,Param,Post,Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { user } from './users.model';

@Controller('users')
export class UsersController {

    constructor(private readonly service: UsersService ) {}

    @Get()
    getusers() {
        return this.service.getUsers();
    }

    @Get(':id')
    getuserById( @Param('id') id:string ) {
        return this.service.getUserById( Number( id ) );
    }
    
    @Post() 
    postusers (@Body() newUser : user) {
        return this.service.postUser( newUser );
    }
        
    @Put( ":id" )
    putusers( @Body() nuevosDatos : user, @Param("id") id:string ): boolean {
        return this.service.putUser( nuevosDatos, Number(id) );
    }

    @Delete(":id")
    deletusers( @Param("id") id:string) : boolean {
        return this.service.deleteUser( Number(id) );
    }
}
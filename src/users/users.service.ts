import { Injectable } from '@nestjs/common';
import { user } from './users.model';

@Injectable()
export class UsersService {

    userList = []

    constructor() {
        const user : user = {
            id: 1,
            nombre: "juan",
            apellido: "asdasd",
            ciudad: "asdoaidas"
        }
        this.userList.push( user );
    }

    getUsers () {
        return this.userList
    }

    getUserById ( id:number ) {
        return this.userList.find( u => u.id === id );
    }

    postUser( newuser : user ): string {
        this.userList.push( newuser );
        return newuser.nombre;
    }

    putUser( nuevosDatos: user, userToUpdateId:number ) : boolean {
        const userToUpdate : user = this.userList.find( m => m.id === userToUpdateId );
        if( userToUpdate != undefined ){
            userToUpdate.nombre = nuevosDatos.nombre;
            userToUpdate.apellido = nuevosDatos.apellido;
            userToUpdate.ciudad = nuevosDatos.ciudad;
            return true;
        } else 
            return false;
    }

    deleteUser( id:number ) : boolean {
        const indiceUsuarioAEliminar = this.userList.findIndex( u => u.id === id );
        if( indiceUsuarioAEliminar == -1 )
            return false;
        this.userList.splice( indiceUsuarioAEliminar, 1 );
        return true;
    }
}
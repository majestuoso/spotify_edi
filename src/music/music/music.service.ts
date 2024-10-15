import { Injectable } from '@nestjs/common';
import { music } from './music.model';

@Injectable()
export class MusicService {
    
    

    musicList = []

    constructor() {
        const music : music = {
            id: 1,
            nombre: "the final countdown",
            artista: "europa",
        }
        this.musicList.push( music);
    }

    getMusic () {
        return this.musicList
    }

    getMusicById ( id:number ) {
        return this.musicList.find( m => m.id === id );
    }

    getMusicByName (name: string) { 
        return this.musicList.find( m => m.nombre === name);

    }  

    postMusic( newmusic : music ): string {
        this.musicList.push( newmusic );
        return newmusic.nombre;
    }

    putMusic( nuevosDatos: music, musicToUpdateId:number  ) : boolean {
        const musicToUpdate : music = this.musicList.find( m => m.id === musicToUpdateId );
        if( musicToUpdate != undefined ){
            musicToUpdate.nombre = nuevosDatos.nombre;
            musicToUpdate.artista = nuevosDatos.artista;
            return true;
        } else 
            return false;
    }

    deleteMusic( id:number ) : boolean {
        const indicemusicAEliminar = this.musicList.findIndex( u => u.id === id );
        if( indicemusicAEliminar == -1 )
            return false;
        this.musicList.splice( indicemusicAEliminar, 1 );
        return true;
    }
}

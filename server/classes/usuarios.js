

class Usuarios {
    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala){
        let persona = { id, nombre, sala};
        this.personas.push(persona);

        return this.personas;
    }

    getPersona(id) { console.log('id:', id)
        let persona = this.personas.filter(persona => persona.id === id)[0];
        console.log('buscar:', persona)
        return persona;
    }

    getPersonas(){
        return this.personas;
    }

    getPersonasPorSala(sala){
        let personasEnSala = this.personas.filter(persona => persona.sala === sala);
        return personasEnSala;
    }

    borrarPersona(id) {

        let personaBorrada = this.getPersona(id);
        console.log('persona borrada:', personaBorrada)
        this.personas = this.personas.filter(persona =>{
            return persona.id != id
        })

        return personaBorrada;
    }
}

module.exports = {
    Usuarios
}
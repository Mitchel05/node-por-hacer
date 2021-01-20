const descripcion ={
        demand:true,
        alias: 'd',
        desc: 'Permite borrar un elemento del array'
    }

const completado ={
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}   

const argv = require('yargs')
.command('crear','Crea un elemento por hacer', {descripcion})
.command('actualizar','Actualiza el estado de una tarea',{descripcion,completado})
.command('borrar','Borrar una tarea', {descripcion})
.help()
.argv;

module.exports = {
    argv
}
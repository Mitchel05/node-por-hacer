const { throws } = require('assert');
const fs =  require('fs');
const { get } = require('http');

let listadoPorHacer = [];

const guardarDB = ()=>{
    
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (e)=>{
        if(e) throw new Error('No se pudo grabar',e)     
    });
}

const cargarDB = ()=>{

    try {
        listadoPorHacer = require('../db/data.json');
        // getListado()
    } catch (error) {
        listadoPorHacer = [];
    }
}


const getListado = () => {

    cargarDB()
  
     return listadoPorHacer;

}

const crear = (descripcion)=>{

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;

}

const actualizar = (descripcion, completado = true)=>{

    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);

    if(index >= 0 ){
        listadoPorHacer[index].completado = completado;
        guardarDB()
        return true;
    }else{
        return false;
    }
}

const borrar = (descripcion)=>{

    cargarDB()
    
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if(nuevoListado.length === listadoPorHacer.length){
        return false;
    }else{
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
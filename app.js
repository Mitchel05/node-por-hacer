const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

const comando = argv._[0];



switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
      

        break;
    case 'listar':
        
        let listado = porHacer.getListado()
      

        for(let tarea of listado)
        {
            console.log('================================= POR HACER ==================================='.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado); 
            console.log('==============================================================================='.green);
        }

        break;
    case 'actualizar':
        
        let actualziado = porHacer.actualizar(argv.descripcion,argv.completado);
        console.log(actualziado);
        break;    
        
    case 'borrar':

            let borrado = porHacer.borrar(argv.descripcion);

            // console.log(borrado);

        break

    default:
        console.log('No se reconoce el comando');
        break;
}
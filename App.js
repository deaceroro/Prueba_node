'use strict'
const mult = require('./SRC/MultipPromises.js')
const argv = require('./config/yargs.js').argv
let comando = argv._[0]

switch(comando){
	case 'mostrar':
		mult.muestraTabla(argv.base, argv.limite)
			.then((res) => console.log(res))
			.catch((err) =>console.log(err))
	break
	case 'imprimir':
		mult.creaTabla(argv.base, argv.limite)
			.then((res) => console.log(res))
			.catch((err) =>console.log(err))
	break
	default:
	console.log('La opción no es válida.')
}

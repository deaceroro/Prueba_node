const opt = {
		base:{
			demand:true,
			alias:'b'
		},
		limite:{
			default:10,
			alias:'l'
		}

}

const argv = require('yargs')
	.command('mostrar', 'Muestra la tabla de multiplicar', opt)
	.command('imprimir', 'crea la tabla de multiplicar pero no la muestra',opt)
	.argv


module.exports = {
	argv
}
'use strict'

const fs = require('fs')
let data = ``

let creaTablaMult = async(base) =>{
	data = ``
	for (let n = 1; n <= 10; n++) {
		data += `${base} * ${n} = ${base*n}\n`
	}	
}


module.exports.CreaTabla = async(base) => {
	if(!Number(base)) throw new Error(`El dato '${base}' no es un número válido`)
	else{
		let datos = await creaTablaMult(base)
		fs.writeFile(`./Tablas/Tabla_${base}.txt`, data, (err) =>{
			if(err){
				throw new Error(err)
				return '200'
			}
		});
	}
}

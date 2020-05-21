'use strict'

const fs = require('fs')
let data = ``


let creaTabla = (base, limite) => {
	return new Promise((resolve, reject) =>{
		if(!Number(base)) {
			reject(`la base "${base}" no es un número`)
			return
		}
		if(!Number(limite)) {
			reject(`El límite "${limite}" no es un número`)
			return
		}

	for (let n = 1; n <= limite; n++) {
		data += `${base} * ${n} = ${base*n}\n`
	}	

	fs.writeFile(`./Tablas/Tabla_${base}.txt`, data, (err) =>{
		if(err){
			reject(err)
			return
		}
		resolve(`Base ${base} generada con éxito`)
	});

	})
}


let muestraTabla = (base, limite) =>{
	return new Promise((resolve, reject) =>{
		if(!Number(base)) {
			reject(`la base "${base}" no es un número`)
			return
		}
		if(!Number(limite)) {
			reject(`El límite "${limite}" no es un número`)
			return
		}
		for (let i = 0; i <= limite; i++) {
			console.log(`${base} * ${i} = ${base*i}`)
		}
		resolve(`\nTabla del ${base} generada con éxito`)

	})
}


module.exports = ({
	creaTabla,
	muestraTabla
})
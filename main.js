
const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

const computerHTMLMaker = (computerObject) => {
	let computerHTMLString = `<section> id="computer--${computer.id}">`
	computerHTMLString += `\n\t<h1>${computer.manufacturer} ${computer.make} </h1>`
	computerHTMLString += `\n\t<div>${computer.specs.memory}</div>`
	computerHTMLString += `\n\t<div>${computer.specs.hardDrive}</div>`
	computerHTMLString += `\n\t<div>${computer.specs.processor}</div>`
	computerHTMLString += `\n</section>`

	return computerHTMLString
}

const stringReturnedFromFunction = computerHTMLMaker(computer)

console.log(stringReturnedFromFunction)




// /* home.js */

// import { customiseNavbar } from '../util.js'

// export async function setup(node) {
// 	console.log('USERHOME: setup')
// 	try {
// 		console.log(node)
// 		document.querySelector('header p').innerText = 'Home'
// 		customiseNavbar(['login', 'addExpense', 'getExpenses', 'logout']) // navbar if logged in
// 		const token = localStorage.getItem('authorization')
// 		console.log(token)
// 		if(token === null) customiseNavbar(['register', 'login']) //navbar if logged out
// 		// add content to the page
// 		await addContent(node)
// 	} catch(err) {
// 		console.error(err)
// 	}
// }

// // this example loads the data from a JSON file stored in the uploads directory
// async function addContent(node) {
// 	//const response = await fetch('/uploads/quotes.json')
// 	//const quotes = await response.json()
// 	const template = document.querySelector('template#userHome')
// 	for(const expense of data) {

//   const fragment = template.content.cloneNode(true)

// 	let expenseName = fragment.getElementById("expenseName")
//  expenseName.innerText = expense.ExpenseName

//  let shortline= fragment.getElementById("shortline")
//  shortline.innerText = expense.description

//  let period= fragment.getElementById("period")
//   period.innerText = expense.period

//  let amount= fragment.getElementById("amount")
//  amount.innerText = expense.amount

// 	let img = fragment.querySelector('img')
// 	img.src = `${window.location.origin}/uploads/${expense.picture_name}`

// 		node.appendChild(fragment)

// 	}
// }
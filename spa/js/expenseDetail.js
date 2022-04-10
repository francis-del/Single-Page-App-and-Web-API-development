
/* expenseDetail.js */

import { customiseNavbar } from '../util.js'

export async function setup(node) {
	console.log('HOME: setup')
	try {
		console.log(node)
  console.log("EXPENSEEEEE DEETAIL PAGE HERE")
		document.querySelector('header p').innerText = 'Expense detail'
		customiseNavbar(['home','addExpense']) // navbar if logged in
		const token = localStorage.getItem('authorization')
		console.log(token)
		if(token === null) customiseNavbar(['home', 'register', 'login']) //navbar if logged out
		// add content to the page
		await addContent(node)
	} catch(err) {
		console.error(err)
	}
}

// this example loads the data from a JSON file stored in the uploads directory
async function addContent(node) {
    const token = localStorage.getItem('authorization')
    console.log("FILEEEEEE PATTTTH")
    console.log(window.location.pathname)
    const path = window.location.pathname
    const split = path.split('_')

    const url = `/api/expenseDetail/${split[1]}`
    const options = {
    method: 'GET',
    headers: {
     'Content-Type': 'application/vnd.api+json',
     'authorization' : token
    }
   }
   const response = await fetch(url, options)
   const expense = await response.json()
   const template = document.querySelector('template#expenseDetail')
   console.log("HEREEEEEEEEEEE:")
   console.log(expense)

	
   let ExpenseName = node.getElementById("ExpenseName")
   ExpenseName.innerText = expense.ExpenseName

   let shortline= node.getElementById("shortline")
   shortline.innerText = expense.description

   let date_created= node.getElementById("date_created")
    const time = expense.date_created
    const split2 = time.split('T')
    date_created.innerText = split2[0]

   let img = node.querySelector('img')
   img.src = `${window.location.origin}/uploads/${expense.picture_name}`

}

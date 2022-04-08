import { db } from './db.js'
import {saveFile} from './util.js'


export async function getAllExpenses() {
    console.log("FUNCTION / getAllExpenses DB")
    try{
                   
        const sql = `SELECT ExpenseName,amount,description,period,picture_name FROM expenses ORDER BY period;`
        const allExpenses = await db.query(sql)
        console.log("data in all expenses:")
        console.log(allExpenses)
        if(allExpenses.length == 0){
            return JSON.stringify("")
        }
        // for (const expense of allExpenses){
        //     expense.categories = [] //empty array to store all category from expense
             
        //     const categorysql = `SELECT category FROM expense WHERE id = "${expense.expenseID}"`;
        //     const category = await db.query(sql)
        //     if(category){
        //         expense.category.push(category)
        
        //     }
            
        // }
        return JSON.stringify(allExpenses)
    }catch(err){
        console.log(err.message)
    }
}
// export async function getExpense(id) {
//     try{
//         const sql = `SELECT ExpenseID,ExpenseName,amount,description,period FROM expense WHERE id = ${ID};`
//         const expense = await db.query(sql)

//         if(expense.length == 0){
//             return JSON.stringify("")
//         }
        
//         // get all the expense from an expense by giving the ID
//         const category SQL = `SELECT category, FROM expense WHERE id = ${ID}`;
//         const category = await db.query(categorySQL)
//         expense[0].category = category
//         return JSON.stringify(expense) 
//     }catch(err){
//         console.log(err.message)
//     }
// }

export async function addExpense(data,username) {
    try{
        console.log("Adding to DB")
        const  sql= `SELECT id FROM accounts WHERE user = "${username}"`
        let getUserID = await db.query(sql)
        console.log(getUserID)
        const img_name = saveFile(data.file.base64, username)
        console.log('the ID for user ' + username + ' is : ' + getUserID[0].id)
        const sql2 = `INSERT INTO expenses(ExpenseName, period,amount,description,category,approval,userID,picture_name) VALUES("${data.Expense}", "${data.period}","${data.amount}","${data.description}","${data.category}","not-approved","${getUserID[0].id}","${img_name}")`
        await db.query(sql2)
        return true
    }catch(err){
        console.log(err.message)
    }
}

export default {addExpense}

// {
//   ExpenseName: "party",
//   period: "2021-02-23",
//   amount: "4545",
//   description: "hello",
//   category: "b"
// }
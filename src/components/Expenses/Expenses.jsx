import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    let expenseContent = <p>No Expense found.</p>

    if (filteredExpenses.length > 0) {
        expenseContent = filteredExpenses.map(expense => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {/*first way*/}
                {/*{filteredExpenses.length === 0 ? (<p>No Expense found</p>) : (*/}
                {/*    filteredExpenses.map(expense =>*/}
                {/*        <ExpenseItem*/}
                {/*            key={expense.id}*/}
                {/*            title={expense.title}*/}
                {/*            amount={expense.amount}*/}
                {/*            date={expense.date}*/}
                {/*        />*/}
                {/*    )*/}
                {/*)}*/}

                {/*second way*/}
                {expenseContent}
            </Card>
        </div>
    )
}

export default Expenses
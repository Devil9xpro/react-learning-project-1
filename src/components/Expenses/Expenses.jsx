import './Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import {useState} from "react";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
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
                <ExpenseChart expenses={filteredExpenses}/>
                <ExpenseList items={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses
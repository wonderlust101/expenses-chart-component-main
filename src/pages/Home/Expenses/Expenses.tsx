import React from "react";
import ExpensesBalance from "./ExpensesBalance";
import ExpensesSpending from "./ExpensesSpending";
import ExpenseChart from "./ExpensesSpending/ExpenseChart";
import "./Expenses.scss";

type expensesProps = {
    expensesData: expenses[];
}

export default function Expenses({expensesData}: expensesProps) {
    return (
        <section className="expenses">
            <ExpensesBalance
                accountBalance={921.48}
            />

            <ExpensesSpending
                monthlyTotal={478.33}
                monthlyDiff={2.4}
            >
                <ExpenseChart
                    expensesData={expensesData}
                    day="wed"
                />
            </ExpensesSpending>
        </section>
    );
}
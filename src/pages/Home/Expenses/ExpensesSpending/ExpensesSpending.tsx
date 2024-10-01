import React from "react";
import "./ExpensesSpending.scss";

type expensesSpendingProps = {
    children?: React.ReactNode;
    monthlyTotal: number;
    monthlyDiff: number;
}

export default function ExpensesSpending({children, monthlyTotal, monthlyDiff}: expensesSpendingProps) {
    return (
        <div className="expenses-spending">
            <h2 className="expenses-spending__header">Spending - Last 7 days</h2>

            {children}

            <hr className="expenses-spending__divider"/>

            <div className="expenses-spending__text">
                <div className="expenses-spending__month-total">
                    <p className="expenses-spending__label">Total this month</p>
                    <p className="expenses-spending__number">${monthlyTotal}</p>
                </div>

                <div className="expenses-spending__last-month">
                    <p className="expenses-spending__last-month-change">+{monthlyDiff}%</p>
                    <p className="expenses-spending__last-month-label">from last month</p>
                </div>
            </div>
        </div>
    );
}
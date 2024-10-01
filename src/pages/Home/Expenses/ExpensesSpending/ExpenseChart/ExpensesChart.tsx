import "./ExpensesChart.scss";

type expensesChartProps = {
    expensesData: expenses[];
    day: string;
}

export default function ExpensesChart({expensesData, day}: expensesChartProps) {
    let highestAmount = 0;

    expensesData.map((expense) => {
        if (expense.amount > highestAmount)
            highestAmount = expense.amount;
    });

    return (
        <div className="expense-chart">
            {expensesData.map((expense) => (
                <div className="expense-chart__day">
                    <div
                        className="expense-chart__bar"
                        style={{
                            height         : `${(expense.amount / highestAmount) * 8}rem`,
                            backgroundColor: `${day === expense.day ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)"}`
                        }}
                    />

                    <p
                        className="expense-chart__hover-amount"
                        style={{bottom: `${(expense.amount / highestAmount) * 8 + 2.5}rem`,}}
                    >
                        {expense.amount}
                    </p>

                    <p className="expense-chart__label">{expense.day}</p>
                </div>
            ))}
        </div>
    );
}
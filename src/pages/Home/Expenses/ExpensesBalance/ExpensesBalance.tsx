import logo from '/images/logo.svg'
import './ExpensesBalance.scss'

type expensesBalanceProps = {
    accountBalance: number;
}

export default function ExpensesBalance({accountBalance}: expensesBalanceProps) {
    return (
        <div className='expense-balance'>
            <div className='expense-balance__text'>
                <h2 className='expense-balance__header'>My balance</h2>
                <p className='expense-balance__number'>${accountBalance}</p>
            </div>

            <img className='expense-balance__logo' src={logo} alt="Logo"/>
        </div>
    )
}
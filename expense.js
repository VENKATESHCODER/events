import './ExpenseItem.css';

const Expense = (props) => {
    const month = props.date.toLocaleString('en-US', {month : 'long'});
    const day = props.date.toLocaleString('en-US', {day : '2-digit'});
    const year = props.date.getFullYear();
    const clickHandler = () =>{
        console.log('clicked');
    }
    const element = () =>{
        const ExpenseRemove = document.getElementById('id');
        ExpenseRemove.removeChild();
    } 
    return (
        <div className='expense-item'>
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>₹{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
            <button onClick={element}>Delete</button>
        </div>
    );
}

export default Expense;

import ExpenseDate from './ExpenseDate';
import card from './card';
import './Expenseitem.css'
function Expenseitem(props){

    
 // return <h2>Expense item</h2>;

    // const expenseDate=new Date(2021,2,28);
    // const expenseTile='Car Insurance';
    // const expenseAmount=294.67 

    return (
    // <div className="expense-item">
    // <div>{props.date.toISOString()}</div>
    // <div className='expense-item__description'>
    // <h2>{props.title}</h2>
    // <div className='expense-item__price'>${props.amount}</div>
    // </div>
    // </div>
    <card className="expense-item">
    <ExpenseDate date={props.date}/>
    <div className='expense-item__description'>
    <h2>{props.title}</h2>
    <div className='expense-item__price'>${props.amount}</div>
    </div>
    </card>
    );
}

export default Expenseitem;
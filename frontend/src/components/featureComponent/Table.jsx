import React from 'react';
import { useFinance } from '../../context/FinanceContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Table = () => {
    const finance = useFinance(); 
    const handleDelete = async (expenseId) => {  
        try {
            const data = await finance.deleteExpense(expenseId);   
            if (data.status === 200) { 
                return toast.success('Successfully Deleted!');
            } 
            return toast.error("Can't Delete!");
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <>
         {finance?.expenses?.length > 0 ? (
            <table className="table-auto w-full text-left">
                <thead className="bg-gray-100/50 rounded-lg p-3 shadow-lg">
                    <tr>
                        <th className="py-2 px-5 uppercase">Expense Name</th>
                        <th className="py-2 px-5 uppercase">Amount</th>
                        <th className="py-2 px-5 uppercase">Category</th>
                        <th className="py-2 px-5 uppercase">Date</th>
                        <th className="py-2 px-5 uppercase">
                            <span className="px-3 py-5 max-w-auto">Delete</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {finance?.expenses?.map((expense, index) => (
                        <tr
                            className={`${
                                index % 2 === 1 ? 'bg-gray-200/75' : 'text-white'
                            }`}
                            key={expense._id}
                        >
                            <td className="py-2 pl-7 capitalize">
                                <p>{expense.expenseName}</p>
                            </td>
                            <td className="py-2 pl-7">
                                <p>${expense.expenseAmount}</p>
                            </td>
                            <td className="pl-7">
                                <span
                                    className="py-2 px-5 text-white rounded capitalize"
                                    style={{ background: `#${expense.color}` }}
                                >
                                    {expense.budgetName}
                                </span>
                            </td>
                            <td className="py-2 pl-7">{expense.date}</td>
                            <td className="py-2 pl-7">
                                <button
                                    onClick={() => handleDelete(expense._id)}
                                    className="bg-red-700 px-3 py-1 text-white rounded text-sm font-medium"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        ) : (
            <p className='font-medium text-black text-center bg-gray-100/50 rounded-lg p-3 shadow-lg inline-block'>No Data to show</p>
        )}
        </>
    )
}

export default Table

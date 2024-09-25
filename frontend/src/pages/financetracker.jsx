import React from 'react';
import { useAuth } from '../context/AuthContext';
import Table from '../components/featureComponent/Table'; 
import CreateBudget from '../components/featureComponent/CreateBudget';
import NewExpense from '../components/featureComponent/NewExpense';
import BudgetList from '../components/featureComponent/BudgetList';
import { useFinance } from '../context/FinanceContext';

const FinanceTracker = () => {
  const auth = useAuth();
  const finance = useFinance();

  return (
    <div className='mx-auto max-w-8xl 2xl:max-w-7xl px-12 2xl:px-8 py-10'> 
      <div className='flex pt-4 pb-8 justify-between'> 
        <h1 className='text-4xl font-semibold capitalize'>Welcome {auth?.isUser?.name}!</h1> 
      </div> 
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>
        <CreateBudget />
        <NewExpense finance={finance} />
      </div>
      {/* budget list */}
      <div className='mt-16'>
  <h1 className='text-4xl font-semibold capitalize py-3 text-white'>
    existing budgets
  </h1>
  {finance?.budgets?.length > 0 ? (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
      {finance.budgets.map((budget) => (
        <BudgetList key={budget._id} budget={budget} />
      ))}
    </div>
  ) : (
    <p className='font-medium text-black bg-gray-100/50 rounded-lg p-3 shadow-lg inline-block'>
      No Data to show
    </p>
  )}
</div>

      {/* table */}
      <div className='mt-16 pb-10'>
        <h1 className='text-4xl font-semibold capitalize py-3 text-white'>expenses</h1>
        <Table />
      </div> 
      
    </div>
  )
}

export default FinanceTracker

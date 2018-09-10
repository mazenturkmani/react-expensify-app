import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 1500, createdAt: 1536194400006 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 300, createdAt: 1536194400006 }));
store.dispatch(addExpense({ description: 'Rent', amount: 1095, createdAt: 1536194400006 }));

setTimeout(() => {
    store.dispatch(setTextFilter(''));
});

const state = store.getState();
const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(VisibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
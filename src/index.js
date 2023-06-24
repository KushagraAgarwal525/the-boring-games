import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './reducers/gameReducer';
import { inject } from '@vercel/analytics';
 
inject();

const store = configureStore({
	reducer: {
		game: gameReducer,
	},
});

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<App />
	</Provider>
);

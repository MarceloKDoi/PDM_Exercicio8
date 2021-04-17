import React from 'react';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import contactsReducer from './store/contacts-reducers'
import ContactsNavigator from './navigation/ContactsNavigator';

export default function App() {
    const rootReducer = combineReducers({
        contacts: contactsReducer
    });

    const store = createStore(rootReducer, applyMiddleware(reduxThunk));

    return (
        <Provider store={store}>
            <ContactsNavigator />
        </Provider>
    );
}
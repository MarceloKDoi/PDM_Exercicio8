import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import contactsReducer from './store/contacts-reducers'

import ContatosNavigator from './navegacao/ContatosNavigator'

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
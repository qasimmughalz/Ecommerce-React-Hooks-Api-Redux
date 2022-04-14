import react from 'react'
import { createStore } from 'redux'
import { reducers } from './allreducers'
import { applyMiddleware } from 'redux'




const loggermiddleware = (state)=> (next)=> (action)=> {
    next(action)
}




const myMiddleWare = applyMiddleware(loggermiddleware)



export const store = createStore(reducers , myMiddleWare)
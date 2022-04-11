import react from 'react'
import { createStore } from 'redux'
import { reducers } from './allreducers'
import { applyMiddleware } from 'redux'




const loggermiddleware = (state)=> (next)=> (action)=> {
    console.log(action)
    console.log("before", action.payload)
    console.log("after", action.payload)
    next(action)
}








const myMiddleWare = applyMiddleware(loggermiddleware)



export const store = createStore(reducers , myMiddleWare)
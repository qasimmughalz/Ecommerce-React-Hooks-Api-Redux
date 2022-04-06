import react from 'react'
import { createStore } from 'redux'
import { reducers } from './allreducers'


export const store = createStore(reducers)
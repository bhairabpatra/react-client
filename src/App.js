import './App.css';
import React , {Fragment} from 'react'
import { Navabr } from './components/Navabr';
import { Landing } from './components/Landing';


export const App = () => {
  return (
    <Fragment>
      <Navabr />
      <Landing/>
    </Fragment>
  )
}
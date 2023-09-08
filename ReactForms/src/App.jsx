import { useState } from 'react'
import SignUpForm from './components/SignUpForm.jsx'
import Authenticate from './components/Authenticate.jsx'
import './App.css'

export default function App() {

  return (
    <>
      <SignUpForm />
      <Authenticate />
    </>
  )
}
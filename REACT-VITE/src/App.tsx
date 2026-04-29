// import React from 'react'
import './App.css'
import { SlidingButton } from './components/sliding-button'

export default function App() {
  return (
    <div className='flex items-center justify-center min-h-screen flex-col gap-4 bg-background'>
      <SlidingButton>
        Get Started
      </SlidingButton>
    </div>
  )
}
// import React from 'react'
import './App.css'
import { GitHubStars } from './components/github-stars-react'
import { GradientBackgroundText } from './components/gradient-background-text'
import { ExampleComponent } from './components/groot-starter'

export default function App() {
  return (
    <div className='flex items-center justify-center min-h-screen flex-col gap-4 bg-background'>
      App
      <ExampleComponent />

        <GitHubStars repo='Subhadipjana95/Next.Ref_Alumni-Connect'/>

        <h1 className='text-7xl'>This is <GradientBackgroundText>Groot UI</GradientBackgroundText></h1>
    </div>
  )
}
"use client"


import { HighlightedText } from '@/components/grootstudio/highlighted-text'
import React from 'react'

const ShowcasePage = () => {
    return (
        <div className='h-screen w-full flex flex-col flex-1 items-center justify-center'>
            <h1 className='text-7xl font-[inter] tracking-tight max-w-3xl text-balance text-left selection:bg-foreground/10'>
                <HighlightedText className='[&_svg]:text-blue-400 dark:text-blue-300 text-blue-500 tracking-normal pb-[0.2em]'>Groot Studio</HighlightedText>
            </h1>
        </div>
    )
}

export default ShowcasePage
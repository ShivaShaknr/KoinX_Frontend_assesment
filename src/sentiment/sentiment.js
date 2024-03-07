import React from 'react'
import './sentiment.css'
import Example from './carousel'

function Sentiment() {
  return (
    <>
    
    <div className='key1'>
    <div className='title_key1'>
    <h3>Sentiments</h3>
    <h5>Key Events</h5>
    </div>
        <Example/>
    <div className='title_key2'>
    <h5>Analyst Estimates</h5>
    </div>
    <div className='analyst'>
        <div className='percent_analyst'>
            <h1>76%</h1>
        </div>
        <div className='content_analyst'>
            <p>Buy <div className='gradient-line-1'></div></p>
            <p>Hold <div className='gradient-line-2'></div></p>
            <p>Sell <div className='gradient-line-3'></div></p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Sentiment
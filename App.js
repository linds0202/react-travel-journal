import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data.js'

export default function App () {
    const places = data.map(place => {
        return (
            <Card 
                key={place.id}
                {...place}
            />
        )
    })
    
    return (
        <div>
            <Navbar />
            <section className="place-list">
                {places}
            </section>
        </div>
    )
}
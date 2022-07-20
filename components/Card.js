import React from 'react'

export default function Card (props) {
    return (
        <div className='card'>
            <img src={props.imageUrl} className='image'/>
            <div className='card--details'>
                <div className='card--location'>
                    <img src='./map_dot.png' className='marker'/>
                    <h3>{props.location}</h3>
                    <a href='https://source.unsplash.com/WLxQvbMyfas' className='card--link'>View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <p className='card--date'>{props.startDate} - {props.endDate}</p>
                <p className='card--description'>{props.description}</p>
            </div>
        </div>
    )
}
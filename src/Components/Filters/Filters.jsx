import React from 'react'
import './Filters.css'

export default function Filters({onFilter,query}) {
  return (
    <div className='filters'>
      <ul className='filtersNuv'>
        <li onClick={() => {{onFilter('nature')}}}>Nature</li>
        <li onClick={() => {{onFilter('Ocean')}}}>Ocean</li>
        <li onClick={() => {{onFilter('City')}}}>City</li>
        <li onClick={() => {{onFilter('Peoples')}}}>Peoples</li>
        <li onClick={() => {{onFilter('Minimalism')}}}>Minimalism</li>
        <li onClick={() => {{onFilter('Art')}}}>Art</li>
        <li onClick={() => {{onFilter('Vehicle')}}}>Vehicle</li>
        <li onClick={() => {{onFilter('Sunrise')}}}>Sunrise</li>
        <li onClick={() => {{onFilter('Sky')}}}>Sky</li>
      </ul>
    </div>
  )
}

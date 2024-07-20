import React from 'react'
import './Filters.css'

export default function Filters(query, onChangeQuery) {
  return (
    <div className='filters'>
      <ul className='filtersNuv'>
        <li onClick={() => {{onChangeQuery('nature')}}}>Nature</li>
        <li onClick={() => {{onChangeQuery('Ocean')}}}>Ocean</li>
        <li onClick={() => {{onChangeQuery('City')}}}>City</li>
        <li onClick={() => {{onChangeQuery('Portrait')}}}>Portrait</li>
        <li onClick={() => {{onChangeQuery('Minimalism')}}}>Minimalism</li>
        <li onClick={() => {{onChangeQuery('Art')}}}>Art</li>
        <li onClick={() => {{onChangeQuery('Vehicle')}}}>Vehicle</li>
        <li onClick={() => {{onChangeQuery('Sunrise')}}}>Sunrise</li>
        <li onClick={() => {{onChangeQuery('Sky')}}}>Sky</li>
      </ul>
    </div>
  )
}

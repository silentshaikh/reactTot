import React from 'react'

export default function NotMatch({x,y,z}) {
  return (
    <div className='box'>
      <p>{x} {y} {z}</p>
      <p>This is not Match</p>
      <hr />
    </div>
  )
}

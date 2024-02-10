import React from 'react'

export default function Lsit({name,marginBottom}) {
  return (
    <div className='box' style={{marginBottom:marginBottom}}>
      <h1>{name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eaque, alias sunt minus quam reiciendis dicta illum minima harum. Impedit magnam atque ducimus pariatur minus non molestias officia facere nobis?</p>
      <p>💝</p>
    </div>
  )
}

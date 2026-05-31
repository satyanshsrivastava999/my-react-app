import React from 'react'

function Student() {
  return (
    <div>
        <H2>NAME: {props.name}</H2>
        <p>course:{props.corse}</p>
        <p>marks:{props.marks}</p>
        </div>
  )
}

export default Student
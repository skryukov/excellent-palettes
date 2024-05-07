import React from 'react'

export default function HelloReact({name}) {
  return <div>Hello {name || 'React' }!</div>
}

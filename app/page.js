import { Button } from '@/components/ui/button'
import React from 'react'
import Provider from './provider'

const page = () => {
  return (
    <Provider>
    <div>
      <h1>hey</h1>
      <Button>click me</Button>
    </div>
  </Provider>
  )
}

export default page

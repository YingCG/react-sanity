import sanityClient  from '../client.js'
import React, { useEffect, useState } from 'react'

function OnePost() {
    const [postData, setPostData] = useState(null)

    useEffect(() => {
        sanityClient.fetch()
    })

  return (
    <div>
      One post
    </div>
  )
}

export default OnePost

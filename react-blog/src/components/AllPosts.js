import React, { useEffect, useState } from 'react'
import sanityClient from '../client'
import { Link } from 'react-router-dom'

function AllPosts() {
    const [allPostsData, setAllPostsData] = useState(null)

    useEffect(() => {
        sanityClient
          .fetch(
            `*[_type == "post"]{
            title,
            slug,
            mainImage{
              asset->{
              _id,
              url
            }
          }
        }`
          )
          .then((data) => setAllPostsData(data))
          .catch(console.error);
      }, []);
  return (
    <div>
      <h2>Welcom to my dev journal</h2>
      {allPostsData && 
        allPostsData.map((post, index) => (
            <Link to={'/' + post.slug.current} key={post.slug.current}>
                <h2 key={index}>{post.title}</h2>
                <img src={post.mainImage.asset.url} alt='hero for blog post'/>
           </Link>
      ))}
    </div>
  )
}

export default AllPosts

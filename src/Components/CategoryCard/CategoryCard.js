import React from 'react'
import { useNavigate } from 'react-router-dom'

function CategoryCard({ category: {id, imgurl, name}}) {

  const navigate = useNavigate();

  return (
    <div onClick={()=>navigate("/explore?category="+id)} class="category--card margin--medium">
        <img src={imgurl} />
        <h3 class="category--title">{name}</h3>
    </div>
  )
}

export default CategoryCard
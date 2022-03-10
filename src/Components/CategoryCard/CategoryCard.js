import React from 'react'

function CategoryCard({ category: {id, img, name}}) {
  return (
    <div class="category--card margin--medium">
        <img src={img} />
        <h3 class="category--title">{name}</h3>
    </div>
  )
}

export default CategoryCard
import React from 'react'

const MenuItems = ({name,Icon}) => {
  return (
    <div className="flex gap-3 items-center hover:underline underline-offset-8 hover:cursor-pointer decoration-3">
      
        <Icon/>
        <h2>{name}</h2>
    </div>
  )
}

export default MenuItems
import React from 'react'
import list from '../data'
import Selected from './Selected'

const Cart = () => {
  return (
    <div>
        {list.map((item)=>(
            <Selected key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default Cart
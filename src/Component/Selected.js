import React, { useState } from 'react'
import * as AiIcons from "react-icons/ai";
import "../App.css";


const Selected = ({item}) => {

    const {id, merk, type, colour, size, image, cost, qty} = item;

    const [ num, setNum ] = useState(0)
    const [cart, setCart] = useState([])

    const incrementNum = () => {
      setNum(num+1)
    }
  
    const decrementNum = () => {
      if (num > 0) {
        setNum(num-1)
      }
      else{setNum(0)}
    }

    const removeFromCart = (productToRemove) => {
        setCart(cart.filter(product => product !== productToRemove))
    }

  return (
    <div>
         <div className="selected">
          <div className="img-stuf">
            <img src={image} alt="" width={100} height={100} />
          </div>
          <div className="desc-stuf ms-4">
            <h5>{merk}</h5>
            <p>{type}</p>
            <p>COLOR : {colour}</p>
            <p>SIZE : {size}</p>
            <div className="d-flex flex-row">
              <AiIcons.AiFillDelete className="icon-del mt-1 me-2" onClick={removeFromCart}/>
              <p>REMOVE ITEM</p>
              <AiIcons.AiFillHeart className="icon-love mt-1 mx-2 ms-3" />
              <p>MOVE TO WISH LIST</p>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-between ms-5">
            <div className="d-flex flex-row">
              <button onClick={decrementNum} className="btn-temp">-</button>
              <div className="qt">{num}</div>
              <button onClick={incrementNum}  className="btn-temp">+</button>
            </div>
            <p className="fw-bold ms-5">${cost}</p>
          </div>
        </div>
    </div>
  )
}

export default Selected
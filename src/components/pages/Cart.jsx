import React from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {
  const {carts}=useSelector((state)=>state.modal.carts)
  console.log(carts)
  return (
    <div>Cart</div>
  )
}

import React from 'react'
import { useSelector } from 'react-redux'
import LogIn from './LogIn'
import SignUp from './SignUp'
const LgNsPage = () => {
const show = useSelector((state) => state.cart.pageIsVisible);
  return (
    <LogIn>
        {show && <SignUp/>}
    </LogIn>
  )
}

export default LgNsPage

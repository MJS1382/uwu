import React from 'react'
import "../css/header.css"

const Header = () => {
  return (
    <>
        <div className='header'>
            <div className="head">
                <span>i hate js</span>
                <div className="logo">
                    <span>lol</span>
                </div>
            </div>
            
            <div className="img-container">
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1200px-Cat_August_2010-4.jpg'></img>
            </div>
        </div>
    </>
  )
}

export default Header
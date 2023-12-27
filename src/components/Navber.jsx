import React from 'react'

const Navber = () => {
  return (
    <>
    <header>
        <div className="nav-bar">
            <div className="brand">E-Cart</div>
            <div className="search-bar">
                <input type='text' placeholder='Search products'></input>
            </div>
            <div className="cart">Cart</div>
        </div>
        <div className="nav-bar-wrapper">
            <div className="items">Filter by {'->'}</div>
            <div className="items">No Filter</div>
            <div className="items">Mobiles</div>
            <div className="items">Laptops</div>
            <div className="items">Tablets</div>
            <div className="items">{">="}29999</div>
            <div className="items">{">="}49999</div>
            <div className="items">{">="}69999</div>
            <div className="items">{">="}89999</div>
        </div>
    </header>
      
    </>
  )
}

export default Navber

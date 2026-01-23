import React from 'react'

export default function CustomerDetailsForm() {
  return (
    <div>
        <form>
            <h1>Customer Details</h1>
            <label htmlFor="">Full Name</label>
            <input type="text" placeholder="Enter your full name" />

            <div className="">
              <div>
                <label htmlFor="">Email Address</label>
                <input type="email" placeholder="Enter your email address" />
              </div>
              <div>
                <label htmlFor="">Phone Number</label>
                <input type="email" placeholder="+234" />
              </div>
            </div>

            <label htmlFor="">Delivery Address</label>
            <input type="text" placeholder="Enter your delivery address" />

            <div className="">
              <div>
                <label htmlFor="">State</label>
                <select name="" id="">
                  <option value="">Please Select</option>
                </select>
              </div>
              <div>
                <label htmlFor="">City</label>
                <select name="" id="">
                  <option value="">Please Select</option>
                </select>
              </div>
            </div>

           <div>
             <input type="checkbox" />
             <p>Save my information for a faster checkout</p>
           </div>

        </form>
    </div>
  )
}

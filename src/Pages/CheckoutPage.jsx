import React, { useContext, useState } from 'react'
import { Link } from "react-router"
import Logo from "../assets/GadgetHub Logo.png"
import paymentVector from "../assets/onlinePaymentVector.png"
import { FaGreaterThan } from "react-icons/fa";
import CustomerDetailsForm from "../Components/CheckoutPage Components/CustomerDetailsForm"
import DeliveryDetails from "../Components/CheckoutPage Components/DeliveryDetails"
import PaymentMethod from "../Components/CheckoutPage Components/PaymentMethod"
import OrderSummary from "../Components/CheckoutPage Components/OrderSummary"
import { CartContext } from "../Context/ShoppingCartContext"
import { toast } from "react-toastify"
import Footer from "../Components/Footer"

export default function CheckoutPage() {
  const { cart } = useContext(CartContext)
  const [orderData, setOrderData] = useState({
    customer : {},
    deliveryMethod : "",
    paymentMethod: "",
  })

  const handleConfirmOrder = async () => {
    const payload = {
      ...orderData,
      items : cart
    }
    console.log("Final order :", payload);
    toast.success("Order Confirmed")
    
  }

  return (
    <div className="flex flex-col w-full">
         <div className="hidden lg:flex bg-[#191C1F] text-white">
           <div className="flex container mx-auto items-center justify-between w-full h-[7vh] px-5">
             <h1><span className="text-[#ACACAC]">Mon-Sat:</span> 9:00 AM - 5:30 PM</h1>
            <h1 className="text-[#ACACAC]">Visit our showroom in 12 Street Address City, Lagos</h1>
            <h1>Call Us: (+234) 01234 5678</h1>
           </div>
        </div>

        <div className="container mx-auto flex items-center justify-between gap-0 lg:gap-25 h-[14vh] py-10 lg:py-2 px-5">
            <Link to="/"><img src={Logo} alt="" /></Link>

            <div className="flex items-center gap-2">
                <img className="w-6 h-6" src={paymentVector} alt="" />
                <p>secure & safe payment</p>
            </div>
            
        </div>

        <div className="py-2 px-5 container mx-auto">
        <h1 className="flex items-center gap-1 text-[16px] text-[#5F6C72]">
                  <Link to="/">Home</Link>
                    <span className="text-[12px] text-[#434545]"><FaGreaterThan /></span>
                    <Link to="/cartpage"><span className="text-[#5F6C72]">Cart</span></Link>
                    <span className="text-[12px] text-[#434545]"><FaGreaterThan /></span>
                    <span className="text-[#191C1F]">Checkout</span>
                 </h1>
        </div>

      <div  className="py-2 px-5 flex justify-between gap-5 container mx-auto">
          <div className="flex flex-col gap-4 w-2/3">
          <CustomerDetailsForm onChange={(data) => setOrderData(prev => ({...prev, customer : data}))} />
          <DeliveryDetails onChange={(value) => setOrderData(prev => ({...prev, deliveryMethod : value}))} />
          <PaymentMethod onChange={(value) => setOrderData(prev => ({...prev, paymentMethod : value}))} />
          </div>
       
         <div className="w-1/3">
         <OrderSummary onConfirm={handleConfirmOrder} />
         </div>
      </div>

   
   <Footer />
        
    </div>
  )
}

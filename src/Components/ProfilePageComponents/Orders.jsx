import React, { useState } from 'react'
import OrdersCard from "../ProfilePageComponents/OrdersCard"

export default function Orders({quantity}) {
    const [ activeTab, setActiveTab ] = useState("active")

  return (
    <div>
        <h1 className="text-[24px] font-semibold">My Orders</h1>
        <div className="flex border-b-[#EEEAEA] w-full py-5">
            <button onClick={()=> setActiveTab("active")} className={`text-[18px] font-semibold flex gap-2 w-1/3 h-[46px] items-center justify-center hover:cursor-pointer ${activeTab === "active" ? "border-b-[#6C4CF1] border-b-2 bg-[#F3F0FF] text-dark" : "text-[#807D7E] bg-none border-0"}`}>Active ({quantity})</button>

            <button onClick={()=> setActiveTab("completed")} className={`text-[18px] font-semibold flex gap-2 w-1/3 h-[46px] items-center justify-center hover:cursor-pointer ${activeTab === "completed" ? "border-b-[#6C4CF1] border-b-2 bg-[#F3F0FF] text-dark" : "text-[#807D7E] bg-none border-0"}`}>Completed </button>

             <button onClick={()=> setActiveTab("cancelled")} className={`text-[18px] font-semibold flex gap-2 w-1/3 h-[46px] items-center justify-center hover:cursor-pointer ${activeTab === "cancelled" ? "border-b-[#6C4CF1] border-b-2 bg-[#F3F0FF] text-dark" : "text-[#807D7E] bg-none border-0"}`}>Cancelled</button>
        </div>
        <div>
            { activeTab === "active" && <div>

            </div>}
        </div>
    </div>
  )
}

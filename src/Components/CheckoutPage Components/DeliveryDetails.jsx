import React, { useState, useEffect } from "react";

export default function DeliveryDetails({ deliveryMethod, addressExists,onChange }) {
  // const [selectedOption, setSelectedOption] = useState("");

  // useEffect(()=>{
  //   onChange(selectedOption)
  // }, [selectedOption])
   useEffect(() => {
    if (addressExists) {
      onChange("doorstep");
    } else {
      onChange("pickup");
    }
  }, [addressExists]);
  return (
    <form className="p-4 border border-[#E8E6E6] rounded-md">
      <h1 className="text-[24px] font-semibold">Delivery Details</h1>

      <div
        className={`flex items-center p-3 gap-3 my-2 rounded-md h-[54px] w-full 
        border-[1.5px] ${deliveryMethod === "doorstep" ? "border-[#6C4CF1]" : "border-[#E8E6E6]"} ${!addressExists && "opacity-50"}`}
      >
        <input
          type="radio"
          checked={deliveryMethod === "doorstep"}
          disabled={!addressExists}
          className="w-5 h-5 accent-[#6C4CF1]"
        />
        <label>Door step Delivery</label>
      </div>

      <div
        className={`flex items-center p-3 gap-3 my-2 rounded-md h-[54px] w-full 
        border-[1.5px] ${deliveryMethod === "pickup" ? "border-[#6C4CF1]" : "border-[#E8E6E6]"}`}
      >
        <input
          type="radio"
          checked={deliveryMethod === "pickup"}
          disabled
          className="w-5 h-5 accent-[#6C4CF1]"
        />
        <label>Pick up</label>
      </div>
      <p className="text-sm text-[#6C6C6C] mt-2">
        Delivery method is automatically selected based on your address.
      </p>
    </form>
  );
}
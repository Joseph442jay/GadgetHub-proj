import React from 'react'
import PropTypes from "prop-types"

export default function OrderItems({id,name,quantity,image,description, price}) {

   

  return (
    <div>
        <div className="border-t border-b border-[#E8E6E6] p-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <img className="w-[63px] h-[63px] rounded-[3.23px]" src={image} alt={name} />
                <div className="flex gap-1">
                    <div>
                    <p className="text-[16px] font-semibold">{name}</p>
                    <p className="text-[14px] text-[#5F6C72]">{description}</p>
                    </div>
                <span className="text-[14px] text-[#5F6C72]">x{quantity}</span> 
                </div>
            </div>
            <p className="text-[14px] text-[#5F6C72]">₦{price}</p>
        </div>
    </div>
  )
}

OrderItems.propTypes = {
    id : PropTypes.number.isRequired,
    name : PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    image : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    price : PropTypes.number.isRequired,
}
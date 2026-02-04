import React from 'react'
import Button from "../Button"

export default function OrdersCard({order,onCancel}) {
    const {
    id,
    items,
    customer,
    totalAmount,
    orderStatus,
    createdAt,
    deliveryDate,
     } = order;
     const product = items[0];
    const orderDate = new Date(createdAt).toDateString();

    const statusColors = {
    Shipped: "bg-[#F3F0FF] text-[#6C4CF1]",
    processing: "bg-[#E4F2FF] text-[#056EC8]",
    delivered: "bg-[#E8FFED] text-[#009320]",
    cancelled: "bg-[#FFEDED] text-[#EE2020]",
    };
  return (
    <div className="bg-white rounded-md border border-[#E8E6E6] p-6 flex justify-between gap-6 w-full lg:w-[807px]">
      <div className="flex gap-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-[78px] h-[97px] object-cover rounded-md border"
        />

        <div className="space-y-1">
          <h1 className="font-semibold text-[16px] text-[#191C1F]">
            {product.name}
          </h1>
            <p className="text-[14px] text-[#A2A3A3]">
            {product.description}
          </p>

          <p className="text-[14px] text-[#848182]">
            Order <span className="font-medium">#{id.slice(-6)}</span>
          </p>

          <p className="text-[16px] text-[#535051]">
            Placed on {orderDate}
          </p>

          {/* <p className="text-sm text-green-600 font-medium">
            {deliveryMethod === "doorstep"
              ? "Home Delivery"
              : "Store Pickup"}
          </p> */}
          <p className="text-sm text-green-600 font-medium">
            Est Delivery: {deliveryDate}
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center text-right min-w-[140px]">
        <p className="text-[16px] font-semibold">
          Qty: {product.quantity}
        </p>
        <p className="text-[16px] font-semibold">
          ₦{totalAmount.toLocaleString()}
        </p>
      </div>


      <div className="flex flex-col justify-between items-end">
        <span
          className={`w-[82px] h-5 text-[16px] rounded-xl ${statusColors[orderStatus]}`}
        >
          {orderStatus}
        </span>

        <div className="flex gap-3 mt-6">
          <Button className="w-[133px] h-12" content="Track Order" />

          <Button classNmae="w-[129px] h-12 text-[#6C4CF1] hover:text-white border border-[#6C4CF1] hover:bg-[#6C4CF1]" content="View Detail" />

          {orderStatus === "pending" && (
            <button
              onClick={() => onCancel(id)}
              className="text-sm text-red-500 hover:underline"
            >
              Cancel Order
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { FaHelicopter } from 'react-icons/fa'

function IISServerComponent({
  Icon,
  Name,
  Price,
  Description,
  RamStorage,
  AdditionalOption = [],
}) {
  return (
    <div className="rounded-xl bg-customWhite py-10 px-6">
      <div className="flex items-center justify-start space-x-4">
        <div className="bg-secondary w-5 p-3 border-xl flex items-center justify-center ">
          <Icon className="w-full" />
        </div>
        <h2>{Name}</h2>
      </div>
    </div>
  )
}

export default IISServerComponent

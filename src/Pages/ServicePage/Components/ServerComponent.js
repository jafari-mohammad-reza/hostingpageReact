import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { FaHelicopter } from 'react-icons/fa'

function IISServerComponent({
  Icon,
  Name,
  Price,
  Description,
  CpuType,
  CpuCore,
  HddStorage,
  RamStorage,
  AdditionalOption = [],
}) {
  return (
    <div className="flex flex-col rounded-xl bg-customWhite  py-10 px-6">
      <div className="px-4 flex items-center justify-start space-x-4">
        <div className="bg-secondary  rounded-xl p-3 text-2xl  ">
          <Icon className="w-full" />
        </div>
        <h2 className="font-bold text-2xl py-10">{Name}</h2>
      </div>
      <div className="line-clamp-2 mx-auto w-3/4">
        <p className="">{Description}</p>
      </div>
      <h2 className="font-bold text-xl h-3 my-10">Details</h2>
      <div className="flex flex-col items-start pl-1 py-5  text-lg space-y-4">
        <div className="flex w-full justify-between items-center">
          <h3 className="font-bold">{CpuType} : </h3>
          <p>{CpuCore}</p>
        </div>
        <div className="flex w-full justify-between items-center">
          <h3 className="font-bold">Hdd Storage : </h3>
          <p>{HddStorage} Gig</p>
        </div>

        <div className="flex w-full justify-between items-center">
          <h3 className="font-bold">RamStorage : </h3>
          <p>{RamStorage} Gig</p>
        </div>
        <div className="flex w-full justify-between items-center">
          <h3 className="font-bold">Price : </h3>
          <p className="text-lg ">
            ${Price}/<small>Per Month</small>
          </p>
        </div>
        <button className=" btnPrimary bg-secondary hover:text-customWhite hover:bg-primary1 transform hover:scale-105 hover:text-2xl mt-10 mx-auto ">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default IISServerComponent

import React from "react";
import { newBounties } from "../../Apply/query";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from 'next/router';

const MyBountiesCard = ({data, publicKey,callBack}) => {
  
  const router = useRouter();

  const color = data.Status ==="BOUNTY RETURNED"? 'bg-red': data.Status === "BOUNTY PAID" ? "bg-greenColor" : data.Status ==="IN ESCROW" ? 'bg-lightOrange':'bg-blueColor'
  const colorAvailability = data.bounty_availability ==="REJECTED"? 'bg-red': data.bounty_availability === "APPROVED" ? "bg-greenColor" : data.bounty_availability ==="PENDING" ? 'bg-lightOrange':'bg-blueColor'


  const handleCardClick = (data) => {

    callBack(data)
  }


  return (
    <section id="cards" onClick={() => handleCardClick(data)} className="cursor-pointer">
      <div className="cardContainer rounded-2xl mt-4 bg-cardscolor py-6 px-6 lg:px-10 shadow-xl">
        <div className="flex">
          <div className="hidden lg:block w-2/12">
          <img src={`https://id.lobstr.co/${publicKey}.png`} alt="" className="w-20" />
          </div>
          <div className="w-full lg:w-10/12">
            <div className="flex flex-col lg:flex-row justify-between">
              <p className="text-sm">{data?.organization_name}</p>
            </div>
            <h1 className="text-black mt-3 text-xl lg:text-2xl">
             {data?.bounty_name}
            </h1>
            <button className="block lg:hidden mt-3 mb-2 bg-lightgrey w-40 h-7 flex items-center justify-center rounded-2xl">
                <p className="text-sm">{data?.xlm}</p>
              </button>
          </div>
        </div>
        <div className="mt-3">
          <p className="robotosimple text-[12px] lg:text-sm">
            {data?.bounty_description?.substring(0,220)}
          </p>

          <div className="mt-4">
            <div className="flex flex-wrap lg:space-x-3 justify-between">
              <button className={`${color} mb-4 w-36 lg:w-40 h-10 flex items-center justify-center rounded-2xl text-white`}>
                <p className="text-sm">{data?.Status} </p>
              </button>
              <button className={`${colorAvailability} mb-4 ml-3 lg:0 w-36 lg:w-40 h-10 flex items-center justify-center rounded-2xl text-white`}>
                <p className="text-sm">{data?.bounty_availability}</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBountiesCard;

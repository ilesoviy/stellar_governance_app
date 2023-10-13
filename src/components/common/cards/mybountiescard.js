import React from "react";
import { newBounties } from "../../Apply/query";
import { useMutation, useQuery } from "@apollo/client";

const MyBountiesCard = ({data, callBack, publicKey}) => {

const {data:newData} = useQuery(newBounties, {
  variables: {id:data.bounty_id}
})

const color = newData?.all_bounties_by_pk?.Status ==="BOUNTY RETURNED"? 'bg-red': newData?.all_bounties_by_pk?.Status === "BOUNTY PAID" ? "bg-greenColor" : newData?.all_bounties_by_pk?.Status ==="IN ESCROW" ? 'bg-lightOrange':'bg-blueColor'
const colorAvailability = newData?.all_bounties_by_pk?.bounty_availability ==="REJECTED"? 'bg-red': newData?.all_bounties_by_pk?.bounty_availability === "APPROVED" ? "bg-greenColor" : newData?.all_bounties_by_pk?.bounty_availability ==="PENDING" ? 'bg-lightOrange':'bg-blueColor'


  return (
    <section onClick={()=> callBack(newData.all_bounties_by_pk)} id="cards" className="cursor-pointer">
      <div className="cardContainer rounded-2xl mt-4 bg-cardscolor py-6 px-6 lg:px-10 shadow-xl">
        <div className="flex">
          <div className="hidden lg:block w-2/12">
          <img src={`https://id.lobstr.co/${publicKey}.png`} alt="" className="w-20" />
          </div>
          <div className="w-full lg:w-10/12">
            <div className="flex flex-col lg:flex-row justify-between">
              <p className="text-sm">{newData?.all_bounties_by_pk?.organization_name}</p>
            </div>
            <h1 className="text-black mt-3 text-xl lg:text-2xl">
             {newData?.all_bounties_by_pk?.bounty_name}
            </h1>
            <button className="block lg:hidden mt-3 mb-2 bg-lightgrey w-40 h-7 flex items-center justify-center rounded-2xl">
                <p className="text-sm">{newData?.all_bounties_by_pk?.xlm}</p>
              </button>
          </div>
        </div>
        <div className="mt-3">
          <p className="robotosimple text-[12px] lg:text-sm">
            {newData?.all_bounties_by_pk?.bounty_description?.substring(0,220)}
          </p>

          <div className="mt-4">
            <div className="flex flex-wrap lg:space-x-3 justify-between">
              <button className={`${color} mb-4 w-36 lg:w-40 h-10 flex items-center justify-center rounded-2xl text-white`}>
                <p className="text-sm">{newData?.all_bounties_by_pk?.Status} </p>
              </button>
              <button className={`${colorAvailability} mb-4 ml-3 lg:0 w-36 lg:w-40 h-10 flex items-center justify-center rounded-2xl text-white`}>
                <p className="text-sm">{newData?.all_bounties_by_pk?.bounty_availability}</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBountiesCard;

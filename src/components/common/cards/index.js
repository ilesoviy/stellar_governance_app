import React from "react";

const Cards = ({data,callBack,publicKey}) => {

  return (
    <section onClick={()=> callBack(data)} id="cards" className="cursor-pointer">
      <div className="cardContainer rounded-2xl mt-4 bg-cardscolor py-6 px-6 lg:px-10 shadow-xl">
        <div className="flex">
          <div className="hidden lg:block w-2/12">
            <img src={`https://id.lobstr.co/${publicKey}.png`} alt="" className="w-20" />
          </div>
          <div className="w-full lg:w-10/12">
            <div className="flex flex-col lg:flex-row justify-between">
              <p className="text-sm">{data.organization_name}</p>
              <button className="hidden lg:block bg-lightgrey w-40 h-7 flex items-center justify-center rounded-2xl">
                <p className="text-sm">{data.payment_amount} XLM</p>
              </button>
            </div>
            <h1 className="text-black mt-3 text-xl lg:text-2xl">
             {data.bounty_name}
            </h1>
            <button className="block lg:hidden mt-3 mb-2 bg-lightgrey w-40 h-7 flex items-center justify-center rounded-2xl">
                <p className="text-sm">{data.payment_amount} XLM</p>
              </button>
          </div>
        </div>
        <div className="mt-3">
          <p className="robotosimple text-[12px] lg:text-sm">
          {data?.bounty_description?.substring(0,260)}
          </p>

          <div className="mt-4">
            <div className="flex flex-wrap lg:space-x-3">
              <button className="bg-lightgrey mb-4 w-36 lg:w-40 h-10 flex items-center justify-center rounded-2xl">
                <p className="text-sm">{data.bounty_type} </p>
              </button>
              <button className="bg-lightgrey mb-4 ml-3 lg:0 w-36 lg:w-40 h-10 flex items-center justify-center rounded-2xl">
                <p className="text-sm">{data.bounty_difficulty}</p>
              </button>
              <button className="bg-lightgrey mb-4 w-36 lg:w-40 h-10 flex items-center justify-center rounded-2xl">
                <p className="text-sm">Smart Contracts</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;

import React, { useState, useEffect } from "react";
import MyBountiesCard from "../common/cards/bounties";
import { submitBounty, allBounties } from "./query";
import { useMutation, useQuery } from "@apollo/client";
import { useSorobanReact } from "@soroban-react/core";
import { useRouter } from 'next/router'

const NewBounty = () => {
  const router = useRouter()
  const [publicKey, setPublicKey] = useState("");
  const [bountyName, setBountyName] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [bountyType, setBountyType] = useState("");
  const [bountyDifficulty, setBountyDifficulty] = useState("");
  const [bountyDescription, setBountyDescription] = useState("");
  const [bountyTopic, setBountyTopic] = useState("");
  const [bountyData, setBountyData] = useState("");
  const [btnActive, SetBtnActive] = useState(false);

  const sorobanContext = useSorobanReact();

  const {address}= sorobanContext || {}

  const [
    submitBountyNow,
    { data: bountySubmitData, error: bountySubmitError },
  ] = useMutation(submitBounty, {
    refetchQueries: [
      { query: allBounties, variables: { public_address: publicKey } },
    ],
  });

  const { loading, data, error } = useQuery(allBounties, {
    variables: { public_address: publicKey },
  });

  const handleNewBounty = (e) => {
    
    e.preventDefault();
    submitBountyNow({
      variables: {
        bounty_name: bountyName,
        organization_name: organizationName,
        payment_amount: paymentAmount,
        bounty_type: bountyType,
        bounty_difficulty: bountyDifficulty,
        bounty_description: bountyDescription,
        public_address: publicKey,
      },
    });
    alert('New Bounty Added')
  };

  useEffect(() => {
    if(address){
      getKey(address)
    }
    if (bountySubmitError) {
      console.log(error, "My error");
    }

    if (data) {
      console.log(data, "I am data");
      setBountyData(data?.all_bounties);
    }

    if (
      bountyName &&
      organizationName &&
      paymentAmount &&
      bountyType &&
      bountyDifficulty &&
      bountyDescription &&
      bountyTopic
    ) {
      SetBtnActive(true);
    }

    else {
      SetBtnActive(false)
    }
  }, [
    bountySubmitError,
    data,
    bountyName,
    organizationName,
    paymentAmount,
    bountyType,
    bountyDifficulty,
    bountyDescription,
    address
  ]);

  const getKey = async (address) => {
      setPublicKey(address);
  
  };

  const pullData = () => {
   router.push('/bountyreview')
  }

  return (
    <>
      <section id="bounty" className="mt-3">
        <div className="w-11/12 mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <div className="submitbounty shadow-xl bg-cardscolor rounded-xl py-10 px-5 lg:h-[80vh] h-[76vh] overflow-y-auto">
              <form onSubmit={handleNewBounty}>
                <div className="top flex justify-between">
                  <h1 className="text-3xl text-dark font-bold">New Bounty</h1>
                  <button
                    disabled={!btnActive}
                    className={`${
                      btnActive ? "bg-lightblue" : "bg-darkColor"
                    } w-52 h-16 rounded-xl shadow-2xl`}
                  >
                    <p className="text-white font-semibold">Submit</p>
                  </button>
                </div>

                <div className="form mt-10">
                  <div>
                    <label class="block">
                      <span class="block text-sm font-medium text-slate-700">
                        *Bounty Name
                      </span>
                      <input
                        type="text"
                        onChange={(e) => setBountyName(e.target.value)}
                        required
                        class="mt-1 block w-full px-3 py-3 border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-lightgrey"
                      />
                    </label>
                  </div>

                  <div className="mt-4">
                    <label class="block">
                      <span class="block text-sm font-medium text-slate-700">
                        *Organization Name
                      </span>
                      <input
                        type="text"
                        onChange={(e) => setOrganizationName(e.target.value)}
                        name=""
                        required
                        class="mt-1 block w-full px-3 py-3 border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-lightgrey"
                      />
                    </label>
                  </div>

                  <div className="mt-4">
                    <label class="block">
                      <span class="block text-sm font-medium text-slate-700">
                        *Payment Amount
                      </span>
                      <input
                        type="text"
                        onChange={(e) => setPaymentAmount(e.target.value)}
                        required
                        class="mt-1 block w-full px-3 py-3 border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-lightgrey"
                      />
                    </label>
                  </div>

                  <div className="grid grid-cols-3 gap-3 my-1">
                    <div className="mt-4">
                      <label class="block">
                        <span class="block text-sm font-medium text-slate-700">
                          *Bounty Type
                        </span>
                        <select
                          id="cars"
                          name="cars"
                          class="mt-1 block w-full px-3 py-3 border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-lightgrey"
                          onChange={(e) => setBountyType(e.target.value)}
                        >
                           <option value=""></option>
                          <option value="Cooperative">Cooperative</option>
                          <option value="Competitive">Competitive</option>
                          <option value="Hackathon">Hackathon</option>
                        </select>
                      </label>
                    </div>

                    <div className="mt-4">
                      <label class="block">
                        <span class="block text-sm font-medium text-slate-700">
                          *Bounty Difficulty
                        </span>
                        <select
                          id="cars"
                          name="cars"
                          class="mt-1 block w-full px-3 py-3 border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-lightgrey"
                          onChange={(e) => setBountyDifficulty(e.target.value)}
                        >
                             <option value=""></option>
                          <option value="Beginner">Beginner</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Advanced">Advanced</option>
                        </select>
                      </label>
                    </div>

                    <div className="mt-4">
                      <label class="block">
                        <span class="block text-sm font-medium text-slate-700">
                          *Bounty Topic
                        </span>
                        <select
                          id="cars"
                          name="cars"
                          class="mt-1 block w-full px-3 py-3 border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-lightgrey"
                          onChange={(e) => setBountyTopic(e.target.value)}
                        >
                             <option value=""></option>
                          <option value="Smart Contracts">
                            Smart Contracts
                          </option>
                          <option value="Vanilla Stellar">
                            Vanilla Stellar
                          </option>
                          <option value="Design">Design</option>
                        </select>
                      </label>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label class="block">
                      <span class="block text-sm font-medium text-slate-700">
                        *Bounty Description
                      </span>
                      <textarea
                        onChange={(e) => setBountyDescription(e.target.value)}
                        rows="8"
                        cols="50"
                        required
                        class="mt-1 block w-full px-3 py-3 border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-lightgrey"
                      />
                    </label>
                  </div>
                </div>
              </form>
            </div>

            <div className="mybounty shadow-xl bg-cardscolor rounded-xl py-10 px-5 lg:h-[80vh] h-[76vh] overflow-y-auto">
              <div className="pt-2">
                <h1 className="text-3xl text-dark font-bold">My Bounties</h1>

                {data?.all_bounties.map((item, index) => (
                  <MyBountiesCard data={item} publicKey={publicKey} callBack={pullData}/>
                ))}

                <div className="flex justify-center mt-5">
                  {data?.all_bounties.length == 0 && (
                    <h1 className="text-2xl">No Bounties Found</h1>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewBounty;

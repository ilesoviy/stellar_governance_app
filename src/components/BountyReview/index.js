import React, { useState, useEffect } from "react";
import Cards from "../common/cards";
import cardSide from "../LandingPage/cards.json";
import Link from "next/link";
import { useQuery, useMutation } from "@apollo/client";
import {
  allBounties,
  fetchSubmittedData,
  updateBounty,
  updateBountyReject,
  MyAllBounties,
} from "./query";
import MyBountiesCard from "../common/cards/bounties";
import { useSorobanReact } from "@soroban-react/core";

const BountyReview = () => {
  const [publicKey, setPublicKey] = useState("");
  const [cardData, setCardData] = useState(cardSide.card[0]);
  const [mobView, setMobView] = useState(false);
  const [bountyDeclaredId, setBountyDeclaredId] = useState("");
  const sorobanContext = useSorobanReact();

  const { address } = sorobanContext || {};

  const {  data } = useQuery(MyAllBounties, {
    variables: { public_address: publicKey },
  });

  const {
    data: bountySubmittedData,
    error: bountyError,
    refetch,
  } = useQuery(fetchSubmittedData, {
    variables: {
      bounty_id: bountyDeclaredId,
    },
  });

  const [approveSetBounty, { data: approveBountyData }] =
    useMutation(updateBounty);

  const [rejectSetBounty, { data: rejectBountyData }] =
    useMutation(updateBountyReject);

  const bountyId = data?.submissions;

  useEffect(() => {
    if (address) {
      getKey(address);
    }

    if (data) {
      console.log("data", data);
    }
  }, [data, address]);

  const getKey = async (address) => {
    setPublicKey(address);
  };

  const pullData = (data) => {
    setBountyDeclaredId(data.id);
    refetch(bountyDeclaredId);
    setCardData(data);
    setMobView(true);
  };

  const approveBounty = (id) => {
    approveSetBounty({
      variables: {
        id,
      },
    });
    alert("Bounty Approved");
  };

  const rejectBounty = (id) => {
    rejectSetBounty({
      variables: {
        id,
      },
    });

    alert("Bounty Rejected");
  };

  return (
    <section id="bounty" className="mt-3">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div className="mybounty shadow-xl bg-cardscolor rounded-xl py-10 px-5 lg:h-[80vh] h-[76vh] overflow-y-auto">
            <div className="pt-2">
              <h1 className="text-3xl text-dark font-bold">Bounty Review</h1>

              {data?.all_bounties.map((item, index) => (
                <MyBountiesCard
                  data={item}
                  publicKey={publicKey}
                  callBack={pullData}
                />
              ))}

              <div className="flex justify-center mt-5">
                {bountyId?.length == 0 && (
                  <h1 className="text-2xl">No Bounties Found</h1>
                )}
              </div>
            </div>
          </div>

          <div className="content px-2 lg:px-7 py-2 lg:py-5 rounded-xl bg-cardscolor overflow-y-auto h-[73vh] lg:h-[80vh] rounded-xl shadow-xl">
            <i
              onClick={() => setMobView(false)}
              className="text-3xl lg:hidden fal fa-long-arrow-left"
            ></i>

            <h1 className="text-3xl text-dark font-bold">Bounty Review</h1>

            {bountyDeclaredId && (
              <>
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="lg:pt-10 text-base lg:text-xl">
                      {cardData?.organization_name}
                    </h1>
                    <h1 className="text-black mt-1 lg:mt-3 text-xl lg:text-3xl font-medium">
                      {cardData?.bounty_name}
                    </h1>
                  </div>
                  <button
                    disabled={!publicKey}
                    className={`${
                      publicKey ? "bg-lightblue" : "bg-darkColor"
                    } w-44 h-16 rounded-xl shadow-2xl
                w-40 h-12 text-white flex items-center justify-center rounded-2xl shadow-xl`}
                  >
                    <Link href="/applynow">
                      <p className="text-sm">IN ESCROW</p>
                    </Link>
                  </button>
                </div>

                {!bountySubmittedData?.submissions.length == 0 && (
                  <>
                  <div className="mt-14 overflow-y-auto h-[50%]">
                    <h1 className="text-sm">Submission Title:</h1>
                    <p className="mt-1">
                      {bountySubmittedData?.submissions[0]?.submission_title}
                    </p>

                    <h1 className="text-sm mt-9">Submission Link:</h1>
                    <p className="mt-1">
                      {bountySubmittedData?.submissions[0]?.submission_link}
                    </p>

                    <h1 className="text-sm mt-9">Submission Description:</h1>
                    <p className="mt-1">
                      {
                        bountySubmittedData?.submissions[0]
                          ?.submission_description
                      }
                    </p>
                  </div>
              


                <div className="buttons flex justify-around mt-5">
                  <button
                    onClick={() => approveBounty(cardData.id)}
                    disabled={!publicKey}
                    className={`${
                      publicKey ? "bg-greenColor" : "bg-darkColor"
                    } w-44 h-16 rounded-xl shadow-2xl
                w-40 h-12 text-white flex items-center justify-center rounded-2xl shadow-xl`}
                  >
                    <h1 className="robotosimple text-xl font-regular ">
                      APPROVE
                    </h1>
                  </button>

                  <button
                    onClick={() => rejectBounty(cardData.id)}
                    disabled={!publicKey}
                    className={`${
                      publicKey ? "bg-red" : "bg-darkColor"
                    } w-44 h-16 rounded-xl shadow-2xl
                w-40 h-12 text-white flex items-center justify-center rounded-2xl shadow-xl`}
                  >
                    <h1 className="robotosimple text-xl font-regular ">
                      REJECT
                    </h1>
                  </button>
                </div>
                </>
  )}

                {bountySubmittedData?.submissions.length == 0 && (
                  <div className="mt-20 flex justify-center">
                    <h2 className="text-2xl">
                      This bounty has no submissions yet.
                    </h2>
                  </div>
                )}
              </>
            )}

            {!bountyDeclaredId && (
              <div className="flex justify-center mt-10">
                <h1 className="text-2xl">Please select a bounty first</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BountyReview;

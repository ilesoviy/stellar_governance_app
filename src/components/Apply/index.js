import React, { useState, useEffect } from "react";
import cardSide from "../LandingPage/cards.json";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { submitSubmission, allBounties, updateBounty } from "./query";
import MyBountiesCard from "../common/cards/mybountiescard";
import { useSorobanReact } from "@soroban-react/core";

const ApplyNow = () => {
  const [publicKey, setPublicKey] = useState("");
  const [cardData, setCardData] = useState(cardSide.card[0]);
  const [submissionTitle, setSubmissionTitle] = useState(" ");
  const [submissionLink, setSubmissionLink] = useState(" ");
  const [submissionDesc, setSubmissionDes] = useState(" ");
  const [btnActive, SetBtnActive] = useState(false);
  const router = useRouter();

  const sorobanContext = useSorobanReact();
  const { id, bountyAddress } = router.query;
  const { address } = sorobanContext || {};

  const { loading, data, error } = useQuery(allBounties, {
    variables: { public_address: publicKey },
  });

  const [submitSubmissionNow] = useMutation(submitSubmission, {
    refetchQueries: [
      { query: allBounties, variables: { public_address: publicKey } },
    ],
  });

  const [updateBountyNow, { data: bountyUpdateData, error: bountyDataError }] =
    useMutation(updateBounty);

  const bountyId = data?.submissions;

  const pullData = (data) => {
    setCardData(data);
    setMobView(true);
  };

  useEffect(() => {
    if (address) {
      getKey(address);
    }

    if (submissionTitle && submissionLink && submissionDesc) {
      SetBtnActive(true);

      if ((bountyUpdateData, bountyDataError)) {
        console.log(bountyUpdateData, bountyDataError);
      }
    }
  }, [data, bountyUpdateData, bountyDataError, address]);

  const getKey = async (address) => {

      setPublicKey(address);
    
  };

  const handleForm = (e) => {
    e.preventDefault();

    updateBountyNow({
      variables: {
        id: id,
      },
    });

    submitSubmissionNow({
      variables: {
        bounty_id: id,
        bounty_owner_address: bountyAddress,
        sub_public_address: publicKey,
        submission_title: submissionTitle,
        submission_link: submissionLink,
        submission_description: submissionDesc,
      },
    });

    alert("Submissoion Submitted");
  };

  return (
    <>
      <section id="bounty" className="mt-3">
        <div className="w-11/12 mx-auto">
          <div className="grid grid-cols-2 gap-4">
            {!bountyAddress && (
              <div className="flex justify-center mt-32">
                <h1 className="text-3xl text-black">
                  Please Select a bounty to submit submission
                </h1>
              </div>
            )}
            {bountyAddress && (
              <form onSubmit={handleForm}>
                <div className="submitbounty shadow-xl bg-cardscolor rounded-xl py-10 px-5 lg:h-[80vh] h-[76vh] overflow-y-auto">
                  <div className="top flex justify-between">
                    <h1 className="text-3xl text-dark font-bold">
                      New Submission
                    </h1>
                    <button
                      disabled={!btnActive}
                      className={`${
                        btnActive ? "bg-lightblue" : "bg-darkColor"
                      } w-52 h-16 rounded-xl shadow-2xl`}
                    >
                      <p className="text-white font-semibold">Submit</p>
                    </button>
                  </div>

                  <div className="form mt-12">
                    <div>
                      <label class="block">
                        <span class="block text-sm font-medium text-slate-700 mb-3">
                          *Submission Title
                        </span>
                        <input
                          type="text"
                          onChange={(e) => setSubmissionTitle(e.target.value)}
                          required
                          class="mt-1 block w-full px-3 py-3 border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-lightgrey"
                        />
                      </label>
                    </div>

                    <div className="mt-8">
                      <label class="block">
                        <span class="block text-sm font-medium text-slate-700 mb-3">
                          *Submission Link
                        </span>
                        <input
                          type="text"
                          onChange={(e) => setSubmissionLink(e.target.value)}
                          required
                          class="mt-1 block w-full px-3 py-3 border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-lightgrey"
                        />
                      </label>
                    </div>

                    <div className="mt-8">
                      <label class="block">
                        <span class="block text-sm font-medium text-slate-700 mb-3">
                          *Submission Description
                        </span>
                        <textarea
                          onChange={(e) => setSubmissionDes(e.target.value)}
                          rows="14"
                          cols="50"
                          required
                          class="mt-1 block w-full px-3 py-3 border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-lightgrey"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            )}

            <div className="mybounty shadow-xl bg-cardscolor rounded-xl py-10 px-5 lg:h-[80vh] h-[76vh] overflow-y-auto">
              <div className="pt-2">
                <h1 className="text-3xl text-dark font-bold">My Submission</h1>

                {bountyId?.map((item, index) => (
                  <MyBountiesCard data={item} publicKey={publicKey} />
                ))}

                <div className="flex justify-center mt-5">
                  {bountyId?.length == 0 && (
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

export default ApplyNow;

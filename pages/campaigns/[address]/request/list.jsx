import { useRouter } from "next/router";
import { useState } from "react";
import factory from "../../../../ethereum/Factory";
import Campaign from "../../../../ethereum/campaign";
import web3 from "../../../../ethereum/web3";

export default (props) => {
  console.log("list is ", props.requests);

  return (
    <div>
      <div>
        <h2></h2>
        <p>passes props</p>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const campaigns = await factory.methods.getDeployedCampaigns().call();
  const paths = campaigns.map((address) => ({ params: { address } }));
  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const campaign = Campaign(params.address);
  const requestsCount = await campaign.methods.getRequestCount().call();

  const requests = await Promise.all(
    Array(+requestsCount)
      .fill()
      .map((element, index) => {
        return campaign.methods.requests(index).call();
      })
  );

  console.log(requests);

  return {
    props: {
      revalidate: 1,
      requestsCount,
      requests: JSON.stringify(requests),
    },
  };
};

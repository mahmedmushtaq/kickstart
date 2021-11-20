import { useEffect } from "react";
import factory from "../ethereum/Factory";
import Link from "next/link";

const CampaignsList = (props) => {
  return (
    <div>
      <h2>All Campaigns List</h2>
      <br />

      <button>
        <Link href="/campaigns/new">
          <a>Create New Campaigns</a>
        </Link>{" "}
      </button>

      <br />
      {props.campaigns &&
        props.campaigns.map((address, index) => (
          <div style={{ margin: 20 }}>
            <h2>
              {index + 1} - {address}
            </h2>
            <Link href={`/campaigns/${address}`}>
              <a>
                <h4 style={{ cursor: "pointer" }}>View Details</h4>
              </a>
            </Link>
          </div>
        ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const campaigns = await factory.methods.getDeployedCampaigns().call();
  console.log(campaigns);
  return { props: { campaigns } };
};

export default CampaignsList;

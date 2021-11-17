import { useRouter } from "next/router";
import factory from "../../../ethereum/Factory";
import Campaign from "../../../ethereum/campaign";
import { useState } from "react";
import web3 from "../../../ethereum/web3";
import Link from "next/link";

const CampaignInfo = (props) => {
  const router = useRouter();
  const [contributionAmout, setContributionAmout] = useState(0);
  const [msg, setMsg] = useState("");
  const { minimumContribution, address } = props;
  console.log(props);

  const contribute = async () => {
    const campaign = Campaign(props.address);
    try {
      setMsg("Please wait...");
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(contributionAmout, "ether"),
      });
      setMsg("contributed successfully");
    } catch (err) {
      setMsg(err.message);
    }
  };

  return (
    <div>
      {" "}
      Addresses {JSON.stringify(minimumContribution)}
      <br />
      <h2>Want to contribue</h2>
      <input
        placeholder="Amount"
        value={contributionAmout}
        onChange={(e) => setContributionAmout(e.target.value)}
      />
      <button onClick={contribute}>Contribute</button>
      {msg && <h3>{msg}</h3>}
      <br />
      <br />
      <button>
        <Link href={`/campaigns/${address}/request`}>Create New Request</Link>
      </button>
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
  const summary = await campaign.methods.getSummary().call();

  return {
    props: {
      //  revalidate: 1,
      address: params.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
    },
  };
};

export default CampaignInfo;

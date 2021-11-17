import { useRouter } from "next/router";
import { useState } from "react";
import Campaign from "../../../../ethereum/campaign";
import web3 from "../../../../ethereum/web3";

export default (props) => {
  const router = useRouter();
  const [state, setState] = useState({
    description: "",
    value: "",
    recipient: "",
  });
  const { address } = router.query;
  const [msg, setMsg] = useState("");

  const onChange = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  const submitRequest = async () => {
    try {
      const campaign = Campaign(address);
      const accounts = await web3.eth.getAccounts();

      const { description, value, recipient } = state;
      setMsg("Please wait ....");
      await campaign.methods
        .createRequest(description, web3.utils.toWei(value, "ether"), recipient)
        .send({ from: accounts[0] });
      setMsg("Request Sent Successfully");
    } catch (err) {
      console.log("err occured ", err);
      setMsg(err.message);
    }
  };

  return (
    <div>
      <div>
        <input
          placeholder="Description"
          onChange={onChange}
          name="description"
          value={state.description}
        />
        <br />
        <br />
        <input
          placeholder="Value In Ether"
          onChange={onChange}
          name="value"
          value={state.value}
        />
        <br />
        <br />
        <input
          placeholder="Recipient"
          onChange={onChange}
          name="recipient"
          value={state.recipient}
        />
        <br />
        <br />

        <button onClick={submitRequest}> Submit</button>
        {msg && <h3>Please wait </h3>}
      </div>
    </div>
  );
};

// export const getStaticProps = async (ctx) => {
//   console.log("ctx ", ctx);
//   return {
//     props: {},
//   };
// };

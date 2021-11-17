import { useState } from "react";
import factory from "../../ethereum/Factory";
import web3 from "../../ethereum/web3";
import { useRouter } from "next/router";

export default () => {
  const [value, setValue] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();

  const onChange = (e) => setValue(e.target.value);
  const submitCampaign = async () => {
    if (!value) return;

    try {
      setMsg("Please wait ...");

      const accounts = await web3.eth.getAccounts();
      await factory.methods.createCampaign(value).send({ from: accounts[0] });
      setMsg("New Campaign created successfully");
      setTimeout(() => {
        router.push("/");
      }, 500);
    } catch (err) {
      setMsg(err.message);
    }
  };
  return (
    <div>
      <h2>Create New Campaign for your project/startup</h2>
      <br />
      <input placeholder="Enter Value" onChange={onChange} value={value} /> Wei
      &nbsp;&nbsp;&nbsp;
      <button onClick={submitCampaign}>Create New One</button>
      <br />
      {msg && <h3>{msg}</h3>}
    </div>
  );
};

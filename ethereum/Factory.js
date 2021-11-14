import Web3 from "web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x39424dcdb1Cf5F6c3716149CB9cAc727133f9971"
);


export default instance;
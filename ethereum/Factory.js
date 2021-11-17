import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x8109a659AD0d1989b70Ad157afe1A5E55CBBF294"
);

export default instance;

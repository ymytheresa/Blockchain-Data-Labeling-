// factory sol is deployed to the net, campaign sol is compiled but not deployed to net yet
// this script = return the factory instance for future use

import web3 from "./web3";
import CampaignFactory from "./build/DataLabelingFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0xEa5E5834A02bD0848786D2c9Ed1E4A01bb45b2cd" //deployed factory address
);

export default instance;

import web3 from "./web3";
import DataLabeling from "./build/DataLabeling.json";

export default DataLabeling => {
  return new web3.eth.Contract(DataLabeling.abi, DataLabeling);
};

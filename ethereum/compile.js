const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');
const { fdatasync } = require('fs');

//clear the build folder, for storing the compiled contract
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

//create folder
fs.ensureDirSync(buildPath);

//compile path
const DLPath = path.resolve(__dirname, 'contracts', 'DataLabeling.sol');
const source = fs.readFileSync(DLPath, 'utf8');
const contractFileName = "DataLabeling.sol";

const input = {
    language: "Solidity",
    sources: {},
    settings: {
      outputSelection: {
        "*": {
          "*": ["*"]
        }
      }
    }
  };
  input.sources[contractFileName] = {
    content: source
  };

const output = JSON.parse(solc.compile(JSON.stringify(input)));
const contracts = output.contracts[contractFileName];   //there will be two compiled contracts since have 2 contracts code inside the same solc file

//save compiled contracts abi to the build folder
for (let contract in contracts){
    fs.outputJSONSync(
        path.resolve(buildPath, `${contract}.json`),
        contracts[contract]
    )
}
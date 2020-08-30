pragma solidity ^0.6.0;

contract DataLabelingFactory {
    DataLabeling[] public deployedDataLabelings;

    function createDataLabeling(string memory description, uint dataFee, uint serviceFee, uint targetDataAmount) public {
        DataLabeling newDataLabeling = new DataLabeling(msg.sender, description, dataFee, serviceFee, targetDataAmount);
        deployedDataLabelings.push(newDataLabeling);
    }

    function getDeployedDataLabelings() public view returns(DataLabeling[] memory) {
        return deployedDataLabelings;
    }
}

contract DataLabeling{
    address public jobOwner;
    mapping(address => bool) labelProviderExist;
    mapping(address => LabelProvider) labelProviders;
    string public description;
    uint public dataFee;           //total pay for data provider
    uint public serviceFee;        //total pay for platform per 
    uint public targetDataAmount;
    uint public approvedAmount = 0;
    uint public registeredAmount = 0;
    string public classTwo;
    string public classOne;
    Stages public stage;
    
    constructor(address _jobOwner, string memory _description, uint _dataFee, uint _serviceFee, uint _targetDataAmount) public{
        jobOwner = _jobOwner;
        description = _description;
        dataFee = _dataFee;
        serviceFee = _serviceFee;
        targetDataAmount = _targetDataAmount;
    }
    
    enum Stages {
        initial,
        collectingData,
        ended
    }
    
    struct LabelProvider {
        address payable provider;
        uint credibility;        //100 initial,
        bool submitted;
        bool paid;
    }
    
    modifier onlyOwner{
        require(msg.sender == jobOwner);
        _;
    }
    
    modifier onlyInitialStage{
        require(stage == Stages.initial);
        _;
    }
    
    modifier onlyCollectingStage{
        require(stage == Stages.collectingData);
        _;
    }
    
    modifier notEndedlStage{
        require(stage != Stages.ended);
        _;
    }
    
    function getJobSummary() public view returns(address, string memory, uint, uint, uint, uint){
        return (
            jobOwner, 
            description, 
            dataFee,
            targetDataAmount,
            approvedAmount,
            registeredAmount
        );
    }
    
    function proceedCollectStage() public onlyOwner{
        stage = Stages.collectingData;
    }
    
    function proceedEndStage() public onlyOwner{
        stage = Stages.ended;
    }
    
    function collectFee() public payable{
        require(msg.value > serviceFee + dataFee);
        stage = Stages.initial;
    }
    
    
    function setData(string memory _classOne, string memory _classTwo) public onlyInitialStage onlyOwner{
        classOne = _classOne;
        classTwo = _classTwo;
        stage = Stages.collectingData;
    }
    
    function registerLabelProvider() public onlyCollectingStage{
        require(!labelProviderExist[msg.sender]);
        require(stage == Stages.collectingData);
        LabelProvider memory newProvider = LabelProvider({
            provider: msg.sender, 
            credibility: 100,
            submitted: false,
            paid: false
        });
        labelProviders[msg.sender] = newProvider;
        labelProviderExist[msg.sender] = true;
        registeredAmount++;
        if(registeredAmount == targetDataAmount){
            stage = Stages.collectingData;
        }
    }
    
    function submitAllData(address payable dataProvider) public onlyCollectingStage{ //called only after all data are submitted
        require(labelProviderExist[dataProvider]);
        LabelProvider storage currentDp = labelProviders[dataProvider];
        currentDp.provider.transfer(dataFee*(currentDp.credibility/100));
        currentDp.submitted = true;
        approvedAmount++;
        if(approvedAmount == targetDataAmount){
            stage = Stages.ended;
        }
    }
    
    function reduceCredibility(address dataProvider, uint value) public onlyOwner{
        labelProviders[dataProvider].credibility -= value;
    }

    function increaseCredibility(address dataProvider, uint value) public onlyOwner{
        labelProviders[dataProvider].credibility += value;
    }    
}













































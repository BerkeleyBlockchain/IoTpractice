contract rpsAdvanced
{
    mapping (string => mapping(string => int)) payoffMatrix;
    address [] sensors;
    int [] choices;

    modifier notRegisteredYet()
    {
        if (inArray(msg.sender, sensors))
            throw;
        else
            _
    }

    modifier isRegistered()
    {
        if (! inArray(msg.sender, sensors))
            throw;
        else
            _
    }

    modifier sentEnoughCash(uint amount)
    {
        if (msg.value < amount) 
            throw;
        else
            _
    }
    
    modifier validChoice(uint choice)
    {
        // hack until we can use StringUtils.equal
        // makes sure the choice is 0 or 1 (0 - False, 1 - True)
        if (choice != 0 && choice != 1) 
            throw;
        else
            _
    }
    
    function rpsAdvanced() 
    {   // constructor (rename this if you rename the contract)
    }

     

    function register()
        sentEnoughCash(5)
        notRegisteredYet
    {
        sensors.push(msg.sender)
    }

    function play(int choice) 
        isRegistered
        validChoice(choice)
    {
        choices.push(choice)
    }

    
    function checkWinner()
    {
        var consensus = 0 
        var sum = 0
        var count=choices.length;
        for(var i=0;i<count;i++)
        {
            sum = sum + choices[i]
        }

        if(sum > choices.length/2) //simple majority determines consensus
            consensus = 1;
        else
            consensus = 1;

        for(var i=0;i<sensors.length;i++)
        {
            if(sensors[i] == consensus)
                sensors[i].send(this.balance/sum) //sends winners their share of the pot
        }
    }
    
    // HELPER FUNCTIONS
    function inArray(needle,haystack)
    {
        var count=haystack.length;
        for(var i=0;i<count;i++)
        {
            if(haystack[i]===needle){return true;}
        }
        return false;
    }  


    function getMyBalance () constant returns (uint amount)
    {
        return msg.sender.balance;
    }
    
    function getContractBalance () constant returns (uint amount)
    {
        return this.balance;
    }
    
    // \HELPER FUNCTIONS
}
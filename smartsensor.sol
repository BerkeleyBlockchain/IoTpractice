contract smartsensor{
	uint public sensor1val;
	uint public sensor2val;
	uint public sensor3val;
	function smartsensor(uint sensor1,uint sensor2, uint sensor3) public {
		sensor1val = sensor1;
		sensor2val = sensor2;
		sensor3val = sensor3;
	}
	function isLightsOff() constant returns (bool){
		if(sensor1val < 800 && sensor2val < 800){
			return true;
		}else if(sensor3val < 800 && sensor2val < 800){
			return true;
		}else if(sensor1val < 800 && sensor2val < 800){
			return true;
		}else{
			return false;
		}
	}

	function changeValues(uint sensor1,uint sensor2, uint sensor3){
		sensor1val = sensor1;
		sensor2val = sensor2;
		sensor3val = sensor3;

	}
}
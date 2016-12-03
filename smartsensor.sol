contract smartsensor{
	uint sensor1val = 0;
	uint sensor2val = 0;
	uint sensor3val = 0;
	function smartsensor(uint sensor1,uint sensor2, uint sensor3){
		sensor1val = sensor1;
		sensor2val = sensor2;
		sensor3val = sensor3;
	}
	function isLightsOff() constant returns (bool){
		if(sensor1val > 0 && sensor2val> 0){
			return true;
		}else if(sensor3val > 0 && sensor2val > 0){
			return true;
		}else if(sensor1val > 0 && sensor2val > 0){
			return true;
		}else{
			return false;
		}
	}
}
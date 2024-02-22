//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

inputs.forEach((input,index)=>{
	input.addEventListner('input', (event) => {handleInput(event,index)});
	input.addEventListner('keydown',(event)=>{handleBackSpace(event,index)});
});

function handleInput(event,index){
	const value = event.target.value;
	if(!isNaN(value) && value >= 0 && value <= 9){
		if(index<inputs.length-1 && value!== ''){
			inputs[index + 1].focus();
		}
		else{
			value = '';
		}
		
	}
	function handleBackSpace(event, index){
		if(event.key==='Backspace' && index>0 && event.target.value ===''){
			inputs[index-1].focus();
		}
	}
	
	
}
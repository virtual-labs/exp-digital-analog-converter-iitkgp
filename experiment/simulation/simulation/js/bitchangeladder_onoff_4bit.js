/*  Document Name:bitchangeladder_onoff_4bit.js
 Author     : Sukriti Dhang
 */

var image3,image2,image1,image0;
var b3_3,b2_2,b1_1,b0_0;
var vo,resln;
var r1;
var rf;



function sliderChange() {
    var  sliderVal = document.getElementById("vdc").value;
    document.getElementById("dc").value = sliderVal;
	r1 = document.getElementById("res").value; // in kOhm
	rf = document.getElementById("resrf").value; // in kOhm
	
				image0 = document.getElementById('b0_0'); //LSB b0
				image1 = document.getElementById('b1_1'); //b1
				image2 = document.getElementById('b2_2'); //b2
				image3 = document.getElementById('b3_3'); //MSB b3
				
				 if (image3.getAttribute('src')=="./images/off.png" && image2.getAttribute('src')=="./images/off.png" && image1.getAttribute('src')=="./images/off.png" && image0.getAttribute('src')=="./images/off.png") {
					  b3_3=0;
					  b2_2=0;
					  b1_1=0;
					  b0_0=0;
					vo=(rf/r1)*(sliderVal/16)*((b0_0*1)+(b1_1*2)+(b2_2*4)+(b3_3*8));
					resln=(sliderVal/16);//weighting of LSB  

     document.getElementById("voutput").value = vo.toPrecision(3);//volt 
	 document.getElementById("resolution").value = resln.toPrecision(3);
	 document.getElementById("binaryinp").value = '0000';
	  binarytodecimal();
				 }
				
}
function textChange() {
 var   txtVal = document.getElementById("res1").value;
    document.getElementById("res").value = txtVal;
    
}
function textChangerf() {
  var  txtValrf = document.getElementById("res1rf").value;
    document.getElementById("resrf").value = txtValrf;
	if(document.getElementById("res").value!=document.getElementById("resrf").value){
		alert("Set Feedback resistance same as  resistance R1")
	}
    
}

function changeImageb3_3() {
  image3 = document.getElementById('b3_3');
  if (image3.getAttribute('src')=="./images/off.png") {
    image3.src = "./images/on.png";
	 b3_3=1;
  } else {
    image3.src = "./images/off.png";
	b3_3=0;
  }
  switchchange();

}

function changeImageb2_2() {
   image2 = document.getElementById('b2_2');
  if (image2.getAttribute('src')=="./images/off.png") {
    image2.src = "./images/on.png";
	 b2_2=1;
  } else {
    image2.src = "./images/off.png";
	b2_2=0;
  }
  switchchange();
}

function changeImageb1_1() {
   image1 = document.getElementById('b1_1');  
  if (image1.getAttribute('src')=="./images/off.png") {
    image1.src = "./images/on.png";
	 b1_1=1;

  } else {
    image1.src = "./images/off.png";
	b1_1=0;
  }
  switchchange();
}

function changeImageb0_0() {
   image0 = document.getElementById('b0_0'); 
  if (image0.getAttribute('src')=="./images/off.png") {
    image0.src = "./images/on.png";
	 b0_0=1;
  } else {
    image0.src = "./images/off.png";
	b0_0=0;
  }
  switchchange();
}

function switchchange(){
	
	var vref = document.getElementById("dc").value;
	
	r1 = document.getElementById("res").value; // in kOhm
    rf = document.getElementById("resrf").value; // in kOhm
	image0 = document.getElementById('b0_0'); //LSB bo
	image1 = document.getElementById('b1_1'); //b1
	image2 = document.getElementById('b2_2'); //b2
	image3 = document.getElementById('b3_3'); //MSB b3
	
if(image3.getAttribute('src')=="./images/off.png" &&  image2.getAttribute('src')=="./images/off.png" && image1.getAttribute('src')=="./images/off.png" && image0.getAttribute('src')=="./images/off.png")
{ //0
		vo=(rf/r1)*(vref/16)*((b0_0*1)+(b1_1*2)+(b2_2*4)+(b3_3*8));
		resln=(vref/16);//weighting of LSB  

    document.getElementById("voutput").value = vo.toPrecision(3);//volt 
	 document.getElementById("resolution").value = resln.toPrecision(3);//volt 
	 document.getElementById("binaryinp").value = '0000';//0
	  binarytodecimal();
}
if(image3.getAttribute('src')=="./images/off.png" &&  image2.getAttribute('src')=="./images/off.png" && image1.getAttribute('src')=="./images/off.png" && image0.getAttribute('src')=="./images/on.png")
{//1
		vo=(rf/r1)*(vref/16)*((b0_0*1)+(b1_1*2)+(b2_2*4)+(b3_3*8));
		resln=(vref/16);//weighting of LSB   
		
    document.getElementById("voutput").value = vo.toPrecision(3);//volt 
	 document.getElementById("resolution").value = resln.toPrecision(3);
	 document.getElementById("binaryinp").value = '0001';//1
	  binarytodecimal();
}
if(image3.getAttribute('src')=="./images/off.png" &&  image2.getAttribute('src')=="./images/off.png" && image1.getAttribute('src')=="./images/on.png" && image0.getAttribute('src')=="./images/off.png")
{//2
	vo=(rf/r1)*(vref/16)*((b0_0*1)+(b1_1*2)+(b2_2*4)+(b3_3*8));
		resln=(vref/16);//weighting of LSB     

    document.getElementById("voutput").value = vo.toPrecision(3);//volt 
	 document.getElementById("resolution").value = resln.toPrecision(3);
	 document.getElementById("binaryinp").value = '0010';//2
	  binarytodecimal();
}
if(image3.getAttribute('src')=="./images/off.png" &&  image2.getAttribute('src')=="./images/off.png" && image1.getAttribute('src')=="./images/on.png" && image0.getAttribute('src')=="./images/on.png")
{//3
		vo=(rf/r1)*(vref/16)*((b0_0*1)+(b1_1*2)+(b2_2*4)+(b3_3*8));
		resln=(vref/16);//weighting of LSB 

    document.getElementById("voutput").value = vo.toPrecision(3);//volt 
	 document.getElementById("resolution").value = resln.toPrecision(3);
document.getElementById("binaryinp").value = '0011';	//3 
 binarytodecimal();
}
if(image3.getAttribute('src')=="./images/off.png" &&  image2.getAttribute('src')=="./images/on.png" && image1.getAttribute('src')=="./images/off.png" && image0.getAttribute('src')=="./images/off.png")
{//4
		vo=(rf/r1)*(vref/16)*((b0_0*1)+(b1_1*2)+(b2_2*4)+(b3_3*8));
		resln=(vref/16);//weighting of LSB   

    document.getElementById("voutput").value = vo.toPrecision(3);//volt 
	 document.getElementById("resolution").value = resln.toPrecision(3);
	 document.getElementById("binaryinp").value = '0100';//4
	  binarytodecimal();
}

if(image3.getAttribute('src')=="./images/off.png" &&  image2.getAttribute('src')=="./images/on.png" && image1.getAttribute('src')=="./images/off.png" && image0.getAttribute('src')=="./images/on.png")
{//5
		vo=(rf/r1)*(vref/16)*((b0_0*1)+(b1_1*2)+(b2_2*4)+(b3_3*8));
		resln=(vref/16);//weighting of LSB   
		
    document.getElementById("voutput").value = vo.toPrecision(3);//volt 
	 document.getElementById("resolution").value = resln.toPrecision(3);
	 document.getElementById("binaryinp").value = '0101';//5
	  binarytodecimal();
}
if(image3.getAttribute('src')=="./images/off.png" &&  image2.getAttribute('src')=="./images/on.png" && image1.getAttribute('src')=="./images/on.png" && image0.getAttribute('src')=="./images/off.png")
{//6
		vo=(rf/r1)*(vref/16)*((b0_0*1)+(b1_1*2)+(b2_2*4)+(b3_3*8));
		resln=(vref/16);//weighting of LSB 
		
    document.getElementById("voutput").value = vo.toPrecision(3);//volt 
	 document.getElementById("resolution").value = resln.toPrecision(3);
document.getElementById("binaryinp").value = '0110';	 //6
 binarytodecimal();
}
if(image3.getAttribute('src')=="./images/off.png" &&  image2.getAttribute('src')=="./images/on.png" && image1.getAttribute('src')=="./images/on.png" && image0.getAttribute('src')=="./images/on.png")
{//7
	//alert(b0_0);
		vo=(rf/r1)*(vref/16)*((b0_0*1)+(b1_1*2)+(b2_2*4)+(b3_3*8));
		resln=(vref/16);//weighting of LSB 
		
	document.getElementById("voutput").value = vo.toPrecision(3);//volt 
	 document.getElementById("resolution").value = resln.toPrecision(3);
document.getElementById("binaryinp").value = '0111';	 //7
 binarytodecimal();
}
if(image3.getAttribute('src')=="./images/on.png" &&  image2.getAttribute('src')=="./images/off.png" && image1.getAttribute('src')=="./images/off.png" && image0.getAttribute('src')=="./images/off.png")
{//8
	//alert(b0_0);
		vo=(rf/r1)*(vref/16)*((b0_0*1)+(b1_1*2)+(b2_2*4)+(b3_3*8));
		resln=(vref/16);//weighting of LSB 
		
	document.getElementById("voutput").value = vo.toPrecision(3);//volt 
	 document.getElementById("resolution").value = resln.toPrecision(3);
	 document.getElementById("binaryinp").value = '1000';//8
	  binarytodecimal();
}
if(image3.getAttribute('src')=="./images/on.png" &&  image2.getAttribute('src')=="./images/off.png" && image1.getAttribute('src')=="./images/off.png" && image0.getAttribute('src')=="./images/on.png")
{//9
	//alert(b0_0);
		vo=(rf/r1)*(vref/16)*((b0_0*1)+(b1_1*2)+(b2_2*4)+(b3_3*8));
		resln=(vref/16);//weighting of LSB      
		
	document.getElementById("voutput").value = vo.toPrecision(3);//volt 
	 document.getElementById("resolution").value = resln.toPrecision(3);
document.getElementById("binaryinp").value = '1001';	//9 
 binarytodecimal();
}

if(image3.getAttribute('src')=="./images/on.png" &&  image2.getAttribute('src')=="./images/off.png" && image1.getAttribute('src')=="./images/on.png" && image0.getAttribute('src')=="./images/off.png")
{//10
	//alert(b0_0);
	vo=(rf/r1)*(vref/16)*((b0_0*1)+(b1_1*2)+(b2_2*4)+(b3_3*8));
		resln=(vref/16);//weighting of LSB     
		
	document.getElementById("voutput").value = vo.toPrecision(3);//volt 
	 document.getElementById("resolution").value = resln.toPrecision(3);
document.getElementById("binaryinp").value = '1010';	//10 
 binarytodecimal();
}

if(image3.getAttribute('src')=="./images/on.png" &&  image2.getAttribute('src')=="./images/off.png" && image1.getAttribute('src')=="./images/on.png" && image0.getAttribute('src')=="./images/on.png")
{//11
	//alert(b0_0);
		vo=(rf/r1)*(vref/16)*((b0_0*1)+(b1_1*2)+(b2_2*4)+(b3_3*8));
		resln=(vref/16);//weighting of LSB 
		
	document.getElementById("voutput").value = vo.toPrecision(3);//volt 
	 document.getElementById("resolution").value = resln.toPrecision(3);
	 document.getElementById("binaryinp").value = '1011';//11
	  binarytodecimal();
}

if(image3.getAttribute('src')=="./images/on.png" &&  image2.getAttribute('src')=="./images/on.png" && image1.getAttribute('src')=="./images/off.png" && image0.getAttribute('src')=="./images/off.png")
{//12
	//alert(b0_0);
		vo=(rf/r1)*(vref/16)*((b0_0*1)+(b1_1*2)+(b2_2*4)+(b3_3*8));
		resln=(vref/16);//weighting of LSB 
		
	document.getElementById("voutput").value = vo.toPrecision(3);//volt 
	 document.getElementById("resolution").value = resln.toPrecision(3);
	 document.getElementById("binaryinp").value = '1100';//12
	  binarytodecimal();
}

if(image3.getAttribute('src')=="./images/on.png" &&  image2.getAttribute('src')=="./images/on.png" && image1.getAttribute('src')=="./images/off.png" && image0.getAttribute('src')=="./images/on.png")
{//13
	//alert(b0_0);
		vo=(rf/r1)*(vref/16)*((b0_0*1)+(b1_1*2)+(b2_2*4)+(b3_3*8));
		resln=(vref/16);//weighting of LSB   
		
	document.getElementById("voutput").value = vo.toPrecision(3);//volt 
	 document.getElementById("resolution").value = resln.toPrecision(3);
	 document.getElementById("binaryinp").value = '1101';//13
	  binarytodecimal();
}

if(image3.getAttribute('src')=="./images/on.png" &&  image2.getAttribute('src')=="./images/on.png" && image1.getAttribute('src')=="./images/on.png" && image0.getAttribute('src')=="./images/off.png")
{//14
	//alert(b0_0);
		vo=(rf/r1)*(vref/16)*((b0_0*1)+(b1_1*2)+(b2_2*4)+(b3_3*8));
		resln=(vref/16);//weighting of LSB     
		
	document.getElementById("voutput").value = vo.toPrecision(3);//volt 
	 document.getElementById("resolution").value = resln.toPrecision(3);
	 document.getElementById("binaryinp").value = '1110';//14
	  binarytodecimal();
}
if(image3.getAttribute('src')=="./images/on.png" &&  image2.getAttribute('src')=="./images/on.png" && image1.getAttribute('src')=="./images/on.png" && image0.getAttribute('src')=="./images/on.png")
{//15
	//alert(b0_0);
		vo=(rf/r1)*(vref/16)*((b0_0*1)+(b1_1*2)+(b2_2*4)+(b3_3*8));
		resln=(vref/16);//weighting of LSB      
		
	document.getElementById("voutput").value = vo.toPrecision(3);//volt 
	 document.getElementById("resolution").value = resln.toPrecision(3);
	 document.getElementById("binaryinp").value = '1111';//15
	 binarytodecimal();
}

}
var dec_value;
function binarytodecimal(){
	var bstr=document.getElementById("binaryinp").value;
	function bin_to_dec(bstr) { 
    return parseInt((bstr + '')
	.replace(/[^01]/gi, ''), 2);	
	}
	dec_value=bin_to_dec(bstr);
	//alert(dec_value);
	//document.getElementById("decimalinp").value=dec_value;
}
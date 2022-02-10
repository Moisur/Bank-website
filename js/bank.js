// add ammount ;
document.getElementById('deposit-button').addEventListener ("click", function(){
    const depositinput = document.getElementById("deposit-input");
    depositammount = depositinput.value;
    const ammoutadd = document.getElementById("totaldeposit");
    // console.log(ammoutadd)
    const totalammotadd = ammoutadd.innerText;
    // console.log(totalammotadd)
    ammoutadd.innerText = parseFloat(totalammotadd)+ parseFloat(depositammount)
    depositinput.value ='';
    // update account balance 
    const updatebalanceadd = document.getElementById("updatebalence");
    const updatebalanceaddtext = updatebalanceadd.innerText;
    const updatebalanceaddnumber = parseFloat(updatebalanceaddtext);
    updatebalanceadd.innerText = updatebalanceaddnumber+parseFloat(totalammotadd)+ parseFloat(depositammount)
 
});
// withdraw ammout 
document.getElementById('withdraw-button').addEventListener ("click", function(){
   const withdrawinput = document.getElementById("withdraw-input");
   const withdrawamount = withdrawinput.value;
   const withdrawamountNumber = parseFloat(withdrawamount);
// witgdeoammount  pat
    const withdrawamounttotal = document.getElementById("witgdeoammount");
    const withdrawamounttotalText = withdrawamounttotal.innerText;
    const withdrawamounttotalNumber = parseFloat(withdrawamounttotalText);
    const totalwrideiryi =withdrawamountNumber+withdrawamounttotalNumber;
    withdrawamounttotal.innerText = totalwrideiryi
   
 // update account balance 
    const updatebalanceadd = document.getElementById("updatebalence");
    const updatebalanceaddtext = updatebalanceadd.innerText;
     const updatebalanceaddnumber = parseFloat(updatebalanceaddtext);
    updatebalanceadd.innerText = updatebalanceaddnumber-totalwrideiryi;
    withdrawinput.value ='';
   

});
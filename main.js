
((name,callback)=> {
     document.write('Pizza ordered. <br><br>');
    
     document.write('Pizza for preparation.');
    
    setTimeout(()=> {
        let inform = `Your ${name} is ready.<br><br> The total bill amount is $140.<br><br>`;
        callback(inform);

         document.write(`On the Way Pizzahub server.`);
        
    }, 3000);
    setTimeout(()=>{
         alert(`Succesfully Deliverd. Thanks for your order.`);
        
    },6000)
})

("Pizza",(message)=>{
	document.write(message);
    
});
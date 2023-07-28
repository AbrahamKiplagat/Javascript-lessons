/**
 * Goods worth 1000 --15%
 * calculate discount and amount to pay.
 * 6000-6999 --- 10%
 * 5000-5999 ---discount 5%
 * <5000 --- No discount

let payment = ( prompt ("Please enter your goods worth: "))
let discount;
let amount;

    if( payment >= 10000){
    
      discount = 15/100 * payment;
      amount = payment - discount;
    
     
      alert(`The amount to pay = ${amount} \n The discount is : ${discount} `  )
    
    
    }
      else if (payment >= 6000 && payment < 10000) {
        discount = 10/100 * payment;
        amount = payment - discount;

      alert(`The amount to pay = ${amount} \n The discount is : ${discount} `  )

      }

      else if (payment >= 5000 && payment < 6000) {
       discount = 5/100 * payment;
       amount = payment - discount;

       alert(`The amount to pay = ${amount} \n The discount is : ${discount} `  )
    
      }

      else{
        discount = 0/100 * payment;
       amount = payment - discount;
      
      alert(`The amount to pay = ${amount} \n The discount is : ${discount} `  )
           } */
           function customPrompt() {
            // const userInput = prompt("Please enter your name:", "");
            const userInput = prompt(`
            0:Sh20 (30mins, 3hrs) \n
            1:Unlimited SMS \n
            2:Daily SMS \n
            3:Weekly SMS \n
            4:Monthly SMS \n
            5:My 5 Unlimited SMS \n
            6:Buy For My Number \n
            7:Check Ballance \n
            8:Chart Ibambe \n
            98:More \n
            `);
            //if (userInput !== null) {
              // Do something with the user input, e.g., display it on the page
              // document.getElementById("result").innerText = `Hello, ${userInput}!`;
              // const secondInput = prompt(`
              
              // 1:Unlimited SMS \n
              // 2:Daily SMS \n
              // 0:Back 00:Home \n
              // `);

              /**
               * document.getElementById("result").innerText = 'Hello' + " " + userInput;
               */
              
            //}
            if (userInput.innerHtml = 1) {
              const secondInput = prompt(`
              
              1:Unlimited SMS \n
              2:Daily SMS \n
              0:Back 00:Home \n
              `);
          }
        }
          
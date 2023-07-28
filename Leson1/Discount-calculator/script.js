/**
 * Goods worth 1000 --15%
 * calculate discount and amount to pay.
 * 6000-6999 --- 10%
 * 5000-5999 ---discount 5%
 * <5000 --- No discount
 */
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
           }
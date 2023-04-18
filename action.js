/**************************for calling functions when number range increase**************************/

let dayInputElement = document.querySelector('#day_input')
dayInputElement.addEventListener("input", checkDay);
dayInputElement.addEventListener("input", changeBtnColor);  //calling function to change btn color

let monthInputElement = document.querySelector('#month_input')
monthInputElement.addEventListener("input", checkMonth);
monthInputElement.addEventListener("input", changeBtnColor); //calling function to change btn color

let yearInputElement = document.querySelector('#year_input')
yearInputElement.addEventListener("input", checkYear);      
yearInputElement.addEventListener("input", changeBtnColor); //calling function to change btn color


/***********************************************for Day*************************************************/
function checkDay(){
    let date = document.querySelector('#day_input').value;
    document.querySelector('#day').style.color='black';
    document.querySelector('#valid_day').style.visibility='hidden';
    document.querySelector('#day_input').style.border ="1px solid black";
 
    if(date.length ===0){     // input for date is empty
        document.querySelector('#valid_day').textContent = 'This field is required';
        document.querySelector('#valid_day').style.visibility='visible';
        document.querySelector('#day').style.color='red';
        document.querySelector('#day_input').style.border ="1px solid red";
    }else if(date==0 || date >31){  // if input for date is 0 or > 31
        document.querySelector('#valid_day').textContent = 'Must be valid day';
        document.querySelector('#valid_day').style.visibility='visible';
        document.querySelector('#day').style.color='red';
        document.querySelector('#day_input').style.border ="1px solid red";

    }
}

/***********************************************for Month*************************************************/
function checkMonth(){   //when any input and function is called will do these things
    let month = document.querySelector('#month_input').value;
    document.querySelector('#month').style.color='black';
    document.querySelector('#valid_month').style.visibility='hidden';
    document.querySelector('#month_input').style.border ="1px solid black";

   if(month.length===0){          // input for month is empty
        document.querySelector('#valid_month').textContent = 'This field is required';
        document.querySelector('#valid_month').style.visibility='visible';
        document.querySelector('#month').style.color='red';
        document.querySelector('#month_input').style.border ="1px solid red";
    }else if(month==0 || month > 12){   // input for month 0 or >12
        document.querySelector('#valid_month').textContent = 'Must be valid month';
        document.querySelector('#valid_month').style.visibility='visible';
        document.querySelector('#month').style.color='red';
        document.querySelector('#month_input').style.border ="1px solid red";
    }
}

/***********************************************for Year*************************************************/
function checkYear(){     //when any input and function is called will do these things
        let cur_year = new Date().getFullYear();
        let year = document.querySelector('#year_input').value;
        document.querySelector('#year').style.color='black';
        document.querySelector('#valid_year').style.visibility='hidden';
        document.querySelector('#year_input').style.border ="1px solid black";
    
       if(year.length===0){                // input for year is empty 
            document.querySelector('#valid_year').textContent = 'This field is required';
            document.querySelector('#valid_year').style.visibility='visible';
            document.querySelector('#year').style.color='red';
            document.querySelector('#year_input').style.border ="1px solid red";
        }else if(year==0){                 // if input for year is 0
            document.querySelector('#valid_year').textContent = 'Must be valid year';
            document.querySelector('#valid_year').style.visibility='visible';
            document.querySelector('#year').style.color='red';
            document.querySelector('#year_input').style.border ="1px solid red";
        }else if(year > cur_year){          // if input for year > current year
            document.querySelector('#valid_year').textContent = 'Must be in the past';
            document.querySelector('#valid_year').style.visibility='visible';
            document.querySelector('#year').style.color='red';
            document.querySelector('#year_input').style.border ="1px solid red";
        }
}

/***********************************************for Calculate Age*************************************************/
function calculateAge(){        //when any input and function is called will do these things

    let date = document.querySelector('#day_input').value;
    let month = document.querySelector('#month_input').value;
    let year = document.querySelector('#year_input').value;

    if(date.length !=0 && month.length != 0 && year.length!=0 ){

        document.querySelector('.svg').style.backgroundColor ="black";
        document.querySelector('figure').style.backgroundColor ="black";

           // let age_time = `${+date}-${month}-${+year}`
           //age_time ကိုအပေါ်ကလိုသုံးရင် ပထမအကြိမ်အလုပ်လုပ်ပေမယ့် ဒုတိယအကြိမ်အတွက် day input မှာ
           //အပြောင်းလဲလုပ်ပြီး function run တဲ့ NAN ကိုပဲပြနေတယ်။ ဒါ်ကြောင့် အောက်က new Date နဲတန်းသုံးရင်
           //ပြသနာမရှိတော့ဘူး။ 
            let age_time = new Date(parseInt(year), parseInt(month) - 1, parseInt(date));

            let my_time = new Date(age_time).getTime();
            

            let now_time = new Date().getTime();
            let diffTime = now_time - my_time;

            let totalDays = Math.floor(diffTime/(24*60*60*1000)) //convert time to days
            
            let getYears = Math.floor(totalDays/365);     //convert days to year
            let getMonth =Math.floor((totalDays%365)/30); // convert remain days to month
            let getDays =Math.floor((totalDays%365)%30);  // get days by modulus of month

            document.querySelector('#year_span').textContent = getYears;
            document.querySelector('#month_span').textContent = getMonth;
            document.querySelector('#day_span').textContent = getDays;

       
    }
}
/***********************to change back Btn color when any input*********************** */
function changeBtnColor(){
    document.querySelector('.svg').style.backgroundColor ="hsl(259, 100%, 65%)";
    document.querySelector('figure').style.backgroundColor ="hsl(259, 100%, 65%)";
}

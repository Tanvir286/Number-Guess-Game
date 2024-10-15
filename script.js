

var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}


/*-----  iconfetti Falling start -------*/


let yay = document.querySelector('.confetti-button');
let yay2 = document.querySelector('.yay');


yay.addEventListener('click',() =>{
   
    confetti();

});




let result = document.querySelector('.result');
/*-----  image area start -------*/
let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let img3 = document.querySelector('.img3');
let img4 = document.querySelector('.img4');
let img5 = document.querySelector('.img5');
let img6 = document.querySelector('.img6');
let img7 = document.querySelector('.img7');
let img8 = document.querySelector('.img8');
let box = document.querySelector(".box");

let random ;

/*-----  Tik Cross  area Start -------*/


let tik = document.querySelector('.tik');
let tik1 = document.querySelector('.tik1');
let tik2 = document.querySelector('.tik2');
let cross = document.querySelector('.cross');
let cross1 = document.querySelector('.cross1');
let cross2 = document.querySelector('.cross2');

/*-----  Tik Cross  area End -------*/


/*-----  image area end -------*/

/*-----  show area start -------*/
let show = document.querySelector(".show");
let show2 = document.querySelector(".show2");


function show3(){
    show.classList.add('d-none');
    show2.classList.remove('d-none');

    setTimeout(() => {
        show.classList.remove('d-none');
        show2.classList.add('d-none');
    }, 1000);
}


/*-----  show area end -------*/


let list = []

/*-----  Remaing area start -------*/
let change = document.querySelector(".change");
let remaning = document.querySelector(".remaining");
let a = 5;
let b = 5;
let c = 5;

/*-----  Remaing area end -------*/



/*----- inputbox input and button area -------*/

let title = document.querySelector(".title");

let oneinput = document.querySelector(".oneinput");
let onebutton = document.querySelector(".onebutton");
let twoinput = document.querySelector(".twoinput");
let twobutton = document.querySelector(".twobutton");
let threeinput = document.querySelector(".threeinput");
let threebutton = document.querySelector(".threebutton");
let fourinput = document.querySelector(".fourinput");
let fourbutton = document.querySelector(".fourbutton");


/*----- inputbox input and button area with reamiang-------*/
/*================================
      result  box start
==================================*/
/*================================
      result  box start
==================================*/



/*----- typing strat area-------*/

let namtanumber = document.querySelector(".namtanumber");

let typing = document.querySelector(".typing");
let typing2 = document.querySelector(".typing2");
let typing3 = document.querySelector(".typing3");
let typing4 = document.querySelector(".typing4");


let close = document.querySelector(".close");
let close2 = document.querySelector(".close2");
let close3 = document.querySelector(".close3");
let close4 = document.querySelector(".close4");


/*----- typing end area-------*/
/*================================
      typing function  start
==================================*/

let myCondition = false;
let myCondition2 = false;
let myCondition3 = false;
let myCondition4 = false;
let text = typing.innerHTML.split('')
let plaintext = typing.innerHTML
let count = -1;
let count2 = -1;
let count3 = -1;
let count4 = -1;

function go() {
    
    typing.innerHTML = ''

 function typejs() {
       if (count < text.length) {
           count++;
           typing.innerHTML += plaintext.charAt(count);
           text = plaintext.split('') 
       }
       else{
        if(myCondition){
            text.pop()
            typing.innerHTML = text.join('')
            
            if(text.length == 0){
                clearInterval(stop)
                myCondition = false;
                count = -1;
               
            }
            
        }
      
   }

}


let stop = setInterval(function() {
        typejs()
        
    },100);
  
   
}

close.addEventListener("click", function () {

    close.classList.add('d-none');
    myCondition = true;
    show.classList.remove("filter1");
    
});

/*----- typing part two start-------*/

let text2 = typing2.innerHTML.split('')
let plaintext2 = typing2.innerHTML

function go2() {
  
   
    typing2.innerHTML = ''

    function typejs2() {
          if (count2 < text2.length) {
              count2++;
              typing2.innerHTML += plaintext2.charAt(count2);
              text2 = plaintext2.split('') 
          }
          else{
           if(myCondition2){
               text2.pop()
               typing2.innerHTML = text2.join('')

               if(text2.length == 0){
                clearInterval(stop2)
                myCondition2 = false;
                count2 = -1;
                typing2.classList.add("d-none")
                close2.classList.add('d-none')
               
            }
               
           }
         
      }
   
   }
   
 
   
   let stop2 = setInterval(function() {
           typejs2()
       },100);
     
      
   }


   close2.addEventListener("click", function () {
   
    close2.classList.add('d-none');
    myCondition2 = true;
    show.classList.remove("filter1");
   
  });


/*----- typing part thre start-------*/  

let text3 = typing3.innerHTML.split('')
let plaintext3 = typing3.innerHTML


function go3() {
  
    typing3.innerHTML = ''

    function typejs3() {
          if (count3 < text3.length) {
              count3++;
              typing3.innerHTML += plaintext3.charAt(count3);
              text3 = plaintext3.split('') 
          }
          else{
           if(myCondition3){
               text3.pop()
               typing3.innerHTML = text3.join('')

               if(text3.length == 0){
                clearInterval(stop3)
                myCondition3 = false;
                count3 = -1;
                typing3.classList.add("d-none")
                close3.classList.add('d-none')
               
            }
               
           }
         
      }
   
   }
   

   
   let stop3 = setInterval(function() {
           typejs3()
       },100);
     
      
   }

   close3.addEventListener("click", function () {
   
    close3.classList.add('d-none');
    myCondition3 = true;
    show.classList.remove("filter1");
  });   


/* ==============<  fourth part start  >================*/  

let text4 = typing4.innerHTML.split('')
let plaintext4 = typing4.innerHTML

function go4() {

    typing4.innerHTML = ''
   
    function typejs4() {
          if (count4 < text4.length) {
              count4++;
              typing4.innerHTML += plaintext4.charAt(count4);
              text4 = plaintext4.split('') 
          }
          else{
           if(myCondition4){
               text4.pop()
               typing4.innerHTML = text4.join('')
   
               if(text4.length == 0){
                clearInterval(stop4)
                myCondition4 = false;
                count4 = -1;
                typing4.classList.add("d-none")
                close4.classList.add('d-none')
               
            }
               
           }
         
      }
   
   }
   
   
   
   let stop4 = setInterval(function() {
           typejs4()
       },100);
     
      
   }
   
   
   close4.addEventListener("click", function () {
   
    close4.classList.add('d-none');
    myCondition4 = true;
    show.classList.remove("filter1");
    
   });

/*================================
       typing function end
==================================*/

/*================================
           result part start
==================================*/

function abc(event) {
    console.log('ami',event);
  
  img1.style.top = `-${event.clientX / 5}px`;
  img1.style.left = `-${event.clientY / 5}px`;
  
  img2.style.top = `-${event.clientX / 5}px`;
  img2.style.left = `-${event.clientY / 5}px`;

  img3.style.top = `-${event.clientX / 5}px`;
  img3.style.left = `-${event.clientY / 5}px`;

  img4.style.top = `-${event.clientX / 5}px`;
  img4.style.left = `-${event.clientY / 5}px`;

  img5.style.top = `-${event.clientX / 5}px`;
  img5.style.left = `-${event.clientY / 5}px`;

  img6.style.top = `-${event.clientX / 5}px`;
  img6.style.left = `-${event.clientY / 5}px`;

  img7.style.top = `-${event.clientX / 5}px`;
  img7.style.left = `-${event.clientY / 5}px`;

  img8.style.top = `-${event.clientX / 5}px`;
  img8.style.left = `-${event.clientY / 5}px`;



}
    

/*================================
           result part end
==================================*/


/*================================
     one button part start
==================================*/

onebutton.addEventListener("click", function () {
    if (oneinput.value == "") {
      
      typing.classList.remove("d-none")
      close.classList.remove('d-none')
      go();
      show.classList.add("filter1");

    }
    else {
          if (!(oneinput.value - 1 == 0 ? true : oneinput.value - 1)) {

            typing2.classList.remove("d-none")
            close2.classList.remove('d-none')
            go2();
            show.classList.add("filter1");
               }
         else {
              if (oneinput.value >= 11 || oneinput.value < 1) {

                typing3.classList.remove("d-none")
                close3.classList.remove('d-none')
                go3();
                show.classList.add("filter1");
            
                 }
             else {                 
                     let randomnum = Math.floor(Math.random() *10 ) + 1;
                     console.log(randomnum);

                     list.push(randomnum);
 
                      show3();
                      namtanumber.innerHTML = '**';
                      title.innerHTML = "Player Two Start Here"
  
                      
                      oneinput.classList.add("d-none");
                      onebutton.classList.add("d-none");

                      
                      twoinput.classList.remove("d-none");
                      twobutton.classList.remove("d-none");
                      change.classList.remove("d-none");
                      remaning.innerHTML = a; 

                      
                
                                    
                  }
               }
                      
            }
  });

/*================================
       one button part end
==================================*/
/*================================
     two button part end
==================================*/


twobutton.addEventListener("click", function () {


    if(twoinput.value ==  ''){
        typing.classList.remove("d-none")
        close.classList.remove('d-none')
        go();
        show.classList.add("filter1");
    }
     
    else if (!(twoinput.value - 1 == 0 ? true : twoinput.value - 1)){
        typing2.classList.remove("d-none")
        close2.classList.remove('d-none')
        go2();
        show.classList.add("filter1");
    }

    else if (twoinput.value > 100 || twoinput.value < 1){
        typing4.classList.remove("d-none")
        close4.classList.remove('d-none')
        go4();
        show.classList.add("filter1");
    }

     else{
           if(a > 1){
            a--;
            remaning.innerHTML = a; 
            if(list[0] == twoinput.value){
                
                show3();
                title.innerHTML = 'Player Three Start Here';

                twoinput.classList.add("d-none");
                twobutton.classList.add("d-none");

                oneinput.classList.add("d-none");
                onebutton.classList.add("d-none");

                threeinput.classList.remove("d-none");
                threebutton.classList.remove("d-none");

                change.classList.remove("d-none");
                remaning.innerHTML = b; 

                tik.classList.remove('d-none');}

              }
               else{

                show3();
                title.innerHTML = 'Player Three Start Here';

                twoinput.classList.add("d-none");
                twobutton.classList.add("d-none");

                oneinput.classList.add("d-none");
                onebutton.classList.add("d-none");

                threeinput.classList.remove("d-none");
                threebutton.classList.remove("d-none");

                cross.classList.remove('d-none');
                

                change.classList.remove("d-none");
                remaning.innerHTML = b;}

     }

   
  });


/*================================
       two button part end
==================================*/
/*================================
       three button part start
==================================*/

threebutton.addEventListener('click',function(){

    if(threeinput.value ==  ''){
        typing.classList.remove("d-none")
        close.classList.remove('d-none')
        go();
        show.classList.add("filter1");}

     
    else if (!(threeinput.value - 1 == 0 ? true : threeinput.value - 1)){
        typing2.classList.remove("d-none")
        close2.classList.remove('d-none')
        go2();
        show.classList.add("filter1");}

    else if (threeinput.value > 100 || threeinput.value < 1){
        typing4.classList.remove("d-none")
        close4.classList.remove('d-none')
        go4();
        show.classList.add("filter1");}

     else{
           if(b > 1){
            b--;
            remaning.innerHTML = b; 
            if(list[0] == threeinput.value){
                
                title.innerHTML = 'Player Four Start Here';

                show3();
                tik1.classList.remove('d-none');
                threeinput.classList.add("d-none");
                threebutton.classList.add("d-none");

                oneinput.classList.add("d-none");
                onebutton.classList.add("d-none");

                fourinput.classList.remove("d-none");
                fourbutton.classList.remove("d-none");

                change.classList.remove("d-none");
                remaning.innerHTML = c;  }

              }
               else{

                title.innerHTML = 'Player Four Start Here'

                show3();
                threeinput.classList.add("d-none");
                threebutton.classList.add("d-none");


                twoinput.classList.add("d-none");
                twobutton.classList.add("d-none");

                cross1.classList.remove('d-none');

                oneinput.classList.add("d-none");
                onebutton.classList.add("d-none");


                fourinput.classList.remove("d-none");
                fourbutton.classList.remove("d-none");

                change.classList.remove("d-none");
                remaning.innerHTML = c;}

     }


});

/*================================
      three button part end
==================================*/
/*================================
       four button part start
==================================*/

fourbutton.addEventListener('click',function () {

    if(fourinput.value ==  ''){
        typing.classList.remove("d-none")
        close.classList.remove('d-none')
        go();
        show.classList.add("filter1");}
     
    else if (!(fourinput.value - 1 == 0 ? true : fourinput.value - 1)){
        typing2.classList.remove("d-none")
        close2.classList.remove('d-none')
        go2();
        show.classList.add("filter1");}

    else if (fourinput.value > 100 || fourinput.value < 1){
        typing4.classList.remove("d-none")
        close4.classList.remove('d-none')
        go4();
        show.classList.add("filter1");}

    else{
        if(c > 1){       
            c--;
            remaning.innerHTML = c; 
            if(list[0] == fourinput.value){
                   
               box.classList.add('d-none');
               result.classList.add("d-none");
               tik2.classList.remove('d-none');
               yay.classList.remove('d-none');

               if(list[0] == twoinput.value && list[0] ==  threeinput.value && list[0] ==  fourinput.value ){
              

                window.addEventListener('mousemove', abc)
               
               
                img8.classList.remove('d-none'); }
                    
                else if(list[0] == twoinput.value && list[0] ==  fourinput.value ){
                   
                     window.addEventListener('mousemove', abc);
                                   
                     img7.classList.remove("d-none"); }    
                 
                 else if(list[0] == threeinput.value && list[0] ==  fourinput.value ){
                   
                        window.addEventListener('mousemove', abc);
                     
                        img6.classList.remove("d-none"); }    

                 else if(list[0] == fourinput.value){

                        window.addEventListener('mousemove', abc);
                        img4.classList.remove("d-none");}    

                 else if(list[0] == threeinput.value){

                        window.addEventListener('mousemove', abc);
                        img3.classList.remove("d-none");} 

                 else if(list[0] == twoinput.value){

                        window.addEventListener('mousemove', abc);
                        img2.classList.remove("d-none");}       

               }
   
             }


        else{
            yay.classList.remove('d-none');
             result.classList.add("d-none");
              cross2.classList.remove('d-none'); 
             box.classList.add('d-none');
            
             if(list[0] == twoinput.value && list[0] ==  threeinput.value  ){
              
                window.addEventListener('mousemove', abc)
               
                img5.classList.remove("d-none");}
         
            else if(list[0] == twoinput.value){
                   
                 window.addEventListener('mousemove', abc);
                 img2.classList.remove("d-none");}  

            else if(list[0] == threeinput.value){

                 window.addEventListener('mousemove', abc);
                  img3.classList.remove("d-none");} 

            else{
                window.addEventListener('mousemove', abc);
                img1.classList.remove("d-none");
            }      

            
            }

   

}
    
});
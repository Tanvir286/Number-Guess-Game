/*================================
      Preloader arae start
==================================*/

var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}

/*================================
      Preloader arae end
==================================*/
/*================================
      Input & Btn arae Start
==================================*/

let title = document.querySelector(".title");

let list = []


let change = document.querySelector(".change");
let remaning = document.querySelector(".remaining");
let a = 5;
let b = 5;
let c = 5;

let oneinput = document.querySelector(".oneinput");
let onebutton = document.querySelector(".onebutton");
let twoinput = document.querySelector(".twoinput");
let twobutton = document.querySelector(".twobutton");
let threeinput = document.querySelector(".threeinput");
let threebutton = document.querySelector(".threebutton");
let fourinput = document.querySelector(".fourinput");
let fourbutton = document.querySelector(".fourbutton");

/*================================
      Input & Btn arae end
==================================*/
/*================================
      Result  arae start
==================================*/


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

/*-----  Tik Cross  area Start -------*/
let namtanumber = document.querySelector(".namtanumber");

let tik = document.querySelector('.tik');
let tik1 = document.querySelector('.tik1');
let tik2 = document.querySelector('.tik2');
let cross = document.querySelector('.cross');
let cross1 = document.querySelector('.cross1');
let cross2 = document.querySelector('.cross2');


/*================================
      Result  arae end
==================================*/
/*================================
      Processing arae start
==================================*/

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

/*================================
      Processing arae end
==================================*/
/*================================
      typing function  start
==================================*/

let myCondition = false;
let result = document.querySelector('.result');
let typing = document.querySelector(".typing");
let close = document.querySelector(".close");


function go() {
   
    let text = typing.innerHTML.split('')
    let plaintext = typing.innerHTML
    let count = -1;

    typing.innerHTML = ''


   function typejs() {
       if (count < text.length) {
           count++;
           typing.innerHTML += plaintext.charAt(count);
           text = plaintext.split('') 
       }
       else{
        if(myCondition){
            text.pop();
            typing.innerHTML = text.join('');

            if(text.length == 0){           
                clearInterval(stop);
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


/*================================
       typing function end
==================================*/
/*================================
        Parallax part start
==================================*/

function abc(event) {
    
  
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
        Parallax part end
==================================*/
/*================================
     one button part start
==================================*/

onebutton.addEventListener("click", function () {
    if (oneinput.value == "") {
      
      typing.classList.remove("d-none")
      close.classList.remove('d-none')
      show.classList.add("filter1");
      typing.innerHTML = "Don't Use Blank Space ! ! !";
      go();
    }
    else {
          if (!(oneinput.value - 1 == 0 ? true : oneinput.value - 1)) {

            typing.classList.remove("d-none");
            close.classList.remove('d-none');
            show.classList.add("filter1");
            typing.innerHTML = "Don't Use String or Simbol !!!";
            go();
               }
         else {
              if (oneinput.value >= 11 || oneinput.value < 1) {

                typing.classList.remove("d-none")
                close.classList.remove('d-none')
                show.classList.add("filter1");
                typing.innerHTML = "Must Be Use Positive and 1-10 !!!";
                go();
            
                 }
             else {                 
                   for(i=9;i<10;i++){                         
                      console.log(i);                              
                      list.push(i*oneinput.value)
                      console.log(i*oneinput.value);  
                      console.log(list);
                      ;

                      show3()
                      namtanumber.innerHTML = list[0]
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
        show.classList.add("filter1");
        typing.innerHTML = "Don't Use Blank Space !!!";
        go();
    }
     
    else if (!(twoinput.value - 1 == 0 ? true : twoinput.value - 1)){
        typing.classList.remove("d-none")
        close.classList.remove('d-none')
        show.classList.add("filter1");
        typing.innerHTML = "Don't Use String or Simbol !!!";
        go();
    }

    else if (twoinput.value > 100 || twoinput.value < 1){
        typing.classList.remove("d-none")
        close.classList.remove('d-none')
        show.classList.add("filter1");
        typing.innerHTML = "Hints Please use 1-100 !!!";
        go();
    }

     else{
           if(a >= 1){
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
        show.classList.add("filter1");
        typing.innerHTML = "Don't Use Blank Space !!!";
        go();
    }

     
    else if (!(threeinput.value - 1 == 0 ? true : threeinput.value - 1)){
        typing.classList.remove("d-none")
        close.classList.remove('d-none')
        show.classList.add("filter1");
        typing.innerHTML = "Don't Use String or Simbol !!!";
        go();
    }

    else if (threeinput.value > 100 || threeinput.value < 1){
        typing.classList.remove("d-none")
        close.classList.remove('d-none')
        show.classList.add("filter1");
        typing.innerHTML = "Hints Please use 1-100 !!!";
        go();
    }

     else{
           if(b >= 1){
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
        show.classList.add("filter1");
        typing.innerHTML = "Don't Use Blank Space !!!";
        go();
    }
     
    else if (!(fourinput.value - 1 == 0 ? true : fourinput.value - 1)){
        typing.classList.remove("d-none");
        close.classList.remove('d-none');
        show.classList.add("filter1");
        typing.innerHTML = "Don't Use String or Simbol !!!";
        go();
    }

    else if (fourinput.value > 100 || fourinput.value < 1){
        typing.classList.remove("d-none")
        close.classList.remove('d-none')
        show.classList.add("filter1");
        typing.innerHTML = "Hints Please use 1-100 !!!";
        go();
    }

    else{
        if(c >= 1){       
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

/*================================
       four button part end
==================================*/
/*================================
     Piconfetti Falling start 
==================================*/

let yay = document.querySelector('.confetti-button');
let yay2 = document.querySelector('.yay');


yay.addEventListener('click',() =>{
   
    confetti();

});

/*================================
     Piconfetti Falling end 
==================================*/
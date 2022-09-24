const targetInput=document.getElementById('input')
const targetButton=document.getElementById('btn')
let getTheVale='';
targetInput.addEventListener('input', (e)=>{
// //     console.log(targetInput.value)
//     console.log(e.target.value)
document.getElementById('palindrom').innerHTML=''



})
targetButton.addEventListener('click',()=>{
     // console.log(targetInput.value)
     let userInput=targetInput.value
     let isPailndrom=userInput.split('').reverse().join('')===userInput?'This is Pailndrom':'This is not Pailndrom'
     document.getElementById('palindrom').innerHTML=isPailndrom
     if(userInput==isPailndrom){
          document.getElementById('palindrom').style.color='green'
     }else{
          document.getElementById('palindrom').style.color='red'

     }
})
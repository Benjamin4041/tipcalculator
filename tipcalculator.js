let input=document.querySelector("input")
let numPeople=document.querySelector(".people2")
let reset=document.querySelector("#reset")
let amount=document.querySelector("#b").value
let percentBtn=document.querySelectorAll(".bnt")
let costormPercent=document.querySelector("#p").value
// numPeople.addEventListener("keyup",function(e){

    
    
// })

percentBtn.forEach((items,idx)=>{
    items.addEventListener("click",()=>{
        let amount=document.querySelector("#b").value
        if (items === percentBtn[0]) {
            items.style.backgroundColor = "#C5E4E7";
            items.style.borderColor = "#C5E4E7";
            numPeople.addEventListener("keyup", (e) => {
              let tip = (amount * 0.05) / e.target.value;
              console.log(tip);
              if (numPeople.value === "" || numPeople.value === 0) {
                numPeople.style.borderColor = "red";
                numPeople.addEventListener("keydown", () => {
                  numPeople.style.borderColor = "";
                });
              }
              let total = (Number(amount) + Number(tip)) / Number(numPeople.value);
              document.querySelector(".A").textContent = tip.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              });
              document.querySelector("#A2").textContent = total.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              });
              reset.removeAttribute("disabled");
            });
        }else if(items===percentBtn[1]){
            console.log(amount)
            items.style.backgroundColor="#C5E4E7"
            items.style.borderColor="#C5E4E7"
           
            numPeople.addEventListener("keyup",(e)=>{
            let tip = (amount * 0.10) / e.target.value;
              console.log(tip)
              if(numPeople.value===""||numPeople.value===0){
                numPeople.style.borderColor="red"
                numPeople.addEventListener("keydown",()=>{
                    numPeople.style.borderColor=""
                })
            }
                
              let total = (Number(amount) + Number(tip)) / Number(numPeople.value);
              document.querySelector(".A").textContent=tip.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
              document.querySelector("#A2").textContent=total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
              reset.removeAttribute("disabled")
            //   console.log((amount/5)+tip)//total
            })
        }else if(items===percentBtn[2]){
            console.log(amount)
            items.style.backgroundColor="#C5E4E7"
            items.style.borderColor="#C5E4E7"
            numPeople.addEventListener("keyup",(e)=>{
            let tip = (amount * 0.15) / e.target.value;
              console.log(tip)
              if(numPeople.value===""||numPeople.value===0){
                numPeople.style.borderColor="red"
                numPeople.addEventListener("keydown",()=>{
                    numPeople.style.borderColor=""
                })
            }
                
            let total = (Number(amount) + Number(tip)) / Number(numPeople.value);
              document.querySelector(".A").textContent=tip.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
              document.querySelector("#A2").textContent=total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
              reset.removeAttribute("disabled")
            //   console.log((amount/5)+tip)//total
            })

        }else if(items===percentBtn[3]){
            console.log(amount)
            items.style.backgroundColor="#C5E4E7"
            items.style.borderColor="#C5E4E7"
            numPeople.addEventListener("keyup",(e)=>{
                let tip = (amount * 0.25) / e.target.value;
                console.log(tip)
                if(numPeople.value===""||numPeople.value===0){
                    numPeople.style.borderColor="red"
                    numPeople.addEventListener("keydown",()=>{
                        numPeople.style.borderColor=""
                    })
                }
                    
                let total = (Number(amount) + Number(tip)) / Number(numPeople.value);
                  document.querySelector(".A").textContent=tip.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
                  document.querySelector("#A2").textContent=total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
                  reset.removeAttribute("disabled")
                // console.log((amount/5)+tip)//total
            })
        }else if(items===percentBtn[4]){
            console.log(amount)
            items.style.backgroundColor="#C5E4E7"
            items.style.borderColor="#C5E4E7"
            numPeople.addEventListener("keyup",(e)=>{
                let tip = (amount * 0.5) / e.target.value;
                console.log(tip)
                if(numPeople.value===""||numPeople.value===0){
                    numPeople.style.borderColor="red"
                    numPeople.addEventListener("keydown",()=>{
                        numPeople.style.borderColor=""
                    })
                }
                    
                let total = (Number(amount) + Number(tip)) / Number(numPeople.value);
                  document.querySelector(".A").textContent=tip.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
                  document.querySelector("#A2").textContent=total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
                  reset.removeAttribute("disabled")
                // console.log((amount/5)+tip)//total
            })
        }
    })
})
//End of foreach

// costormPercent.addEventListener("",(e)=>{
// let amount=document.querySelector("#b").value
// let costormNum=e.target.value
// costormNum=Number(costormNum.replace('%',''))
// alert(((amount*costormNum)/100)/5)
// })

// numPeople.addEventListener("keyup",()=>{
//     let amount=document.querySelector("#b").value
//     let costormPercent=document.querySelector("#p").value
//     costormNum=Number(costormPercent.replace('%',''))
//     let tip=((amount*costormNum)/100)/numPeople.value
//   let total = (Number(amount) + Number(tip)) / Number(numPeople.value);
//     document.querySelector(".A").textContent=tip.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
//     document.querySelector("#A2").textContent=total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
//     reset.style.cursor="pointer";
//     reset.disabled=false
    

//     // console.log()
// })

numPeople.addEventListener("keyup",()=>{
    let amount = Number(document.querySelector("#b").value);
    let costormPercent = Number(document.querySelector("#p").value);
    
    // Check if the fields have values
    if (amount && costormPercent) {
      costormNum = costormPercent;
      let tip = (amount * costormNum) / (100 * numPeople.value);
      let total = (amount + tip) / numPeople.value;
      document.querySelector(".A").textContent = tip.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
      document.querySelector("#A2").textContent = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
      reset.style.cursor = "pointer";
      reset.disabled = false;
    }   
});


reset.addEventListener("click",()=>{
    window.location.reload()
    // document.querySelector("#b").value=""
    // document.querySelector(".people2").value=""
    // document.querySelector(".A").textContent="$0.00"
    // document.querySelector("#A2").textContent="$0.00"
    // reset.disabled=true
})



let tempConverters = document.querySelectorAll(".tempConverters");
const tempOutput = document.getElementById("tempOutput");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", ()=>{

    const tempInput = Number(document.getElementById("tempInput").value);
    // console.log(typeof tempInput,tempInput);

    tempConverters.forEach((tempConverter)=>{
        if(tempConverter.checked){
            if(tempConverter.id === "CelToFah"){
                tempOutput.textContent = (tempInput * (9/5) + 32);
            } else {
                tempOutput.textContent = (tempInput - 32) * 5/9;
            }
        }
    })

})
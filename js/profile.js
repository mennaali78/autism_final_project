<<<<<<< Updated upstream

function showToast(message){
    const toast=document.getElementById("toast");
    toast.textContent=message;
    toast.classList.add("show");
    setTimeout(()=>{toast.classList.remove("show");},3000);
}

const toggles=document.querySelectorAll(".saveToggle");
const kidsMode=document.getElementById("kidsMode");

window.onload=function(){

    toggles.forEach((toggle,index)=>{
        toggle.checked=localStorage.getItem("toggle"+index)==="true";
    });

    kidsMode.checked=localStorage.getItem("kidsMode")==="true";

    if(kidsMode.checked){
        document.body.style.background="#fff7e6";
    }

};


toggles.forEach((toggle,index)=>{
    toggle.addEventListener("change",()=>{
        localStorage.setItem("toggle"+index,toggle.checked);
        showToast("Setting saved");
    });
});

// kids mode
kidsMode.addEventListener("change",()=>{
    localStorage.setItem("kidsMode",kidsMode.checked);

    if(kidsMode.checked){
        document.body.style.background="#fff7e6";
        showToast("Kids Mode Activated 👶");
    }else{
        document.body.style.background="#f4f6f9";
        showToast("Kids Mode Disabled");
    }
});

const ctx=document.getElementById("progressChart");

new Chart(ctx,{
    type:'bar',
    data:{
        labels:['Speech','Emotion','Audio'],
        datasets:[{
            label:'Child Progress %',
            data:[40,70,60],
            borderWidth:1
        }]
    },
    options:{
        responsive:true
    }
});

const reports=document.querySelectorAll("#medicalList li");

const reportFiles={
"Ophthalmological Evaluation Report":"reports/eye.pdf",
"Audiology & Hearing Assessment Report":"reports/hearing.pdf",
"Neurological & Brain Evaluation Report":"reports/brain.pdf",
"Speech & Language Evaluation Report":"reports/speech.pdf"
};

reports.forEach(report=>{
    report.addEventListener("click",()=>{
        const file=reportFiles[report.textContent];
        if(file){
            window.open(file,"_blank");
        }else{
            showToast("Report not available yet");
        }
    });
});

document.getElementById("logoutBtn").addEventListener("click",()=>{
    showToast("Logged Out Successfully!");
});
=======
// //
// function showToast(message){
//     const toast=document.getElementById("toast");
//     toast.textContent=message;
//     toast.classList.add("show");
//     setTimeout(()=>{toast.classList.remove("show");},3000);
// }

// const toggles=document.querySelectorAll(".saveToggle");
// const kidsMode=document.getElementById("kidsMode");

// window.onload=function(){

//     toggles.forEach((toggle,index)=>{
//         toggle.checked=localStorage.getItem("toggle"+index)==="true";
//     });

//     kidsMode.checked=localStorage.getItem("kidsMode")==="true";

//     if(kidsMode.checked){
//         document.body.style.background="#fff7e6";
//     }

// };


// toggles.forEach((toggle,index)=>{
//     toggle.addEventListener("change",()=>{
//         localStorage.setItem("toggle"+index,toggle.checked);
//         showToast("Setting saved");
//     });
// });

// // kids mode
// kidsMode.addEventListener("change",()=>{
//     localStorage.setItem("kidsMode",kidsMode.checked);

//     if(kidsMode.checked){
//         document.body.style.background="#fff7e6";
//         showToast("Kids Mode Activated 👶");
//     }else{
//         document.body.style.background="#f4f6f9";
//         showToast("Kids Mode Disabled");
//     }
// });

// const ctx=document.getElementById("progressChart");

// new Chart(ctx,{
//     type:'bar',
//     data:{
//         labels:['Speech','Emotion','Audio'],
//         datasets:[{
//             label:'Child Progress %',
//             data:[40,70,60],
//             borderWidth:1
//         }]
//     },
//     options:{
//         responsive:true
//     }
// });

// const reports=document.querySelectorAll("#medicalList li");

// const reportFiles={
// "Ophthalmological Evaluation Report":"reports/eye.pdf",
// "Audiology & Hearing Assessment Report":"reports/hearing.pdf",
// "Neurological & Brain Evaluation Report":"reports/brain.pdf",
// "Speech & Language Evaluation Report":"reports/speech.pdf"
// };

// reports.forEach(report=>{
//     report.addEventListener("click",()=>{
//         const file=reportFiles[report.textContent];
//         if(file){
//             window.open(file,"_blank");
//         }else{
//             showToast("Report not available yet");
//         }
//     });
// });

// document.getElementById("logoutBtn").addEventListener("click",()=>{
//     showToast("Logged Out Successfully!");
// });
// //
>>>>>>> Stashed changes

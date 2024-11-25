let info=Object.keys(SAE);
let liste_SAE = ""
let s1 = ""
let s2 = ""
let description = []
let titre = []
let comp = []
let ac = []
let ressources = []
let sem =[]

for(let ind = 0; ind<info.length; ind++){
    titre.push(SAE[info[ind]].titre)
    comp.push(SAE[info[ind]].compétences)
    description.push(SAE[info[ind]].description)
    sem.push(SAE[info[ind]].semestre)
}

for(let i=0; i<info.length; i++){
    if (sem[i]==1) {
        s1 += "<a href='SAE.html?num="+info[i]+"' class='SAE_button'>"+ info[i] + " <div class='description'>"+ titre[i] + " <div class='compétence_SAE'> "+ comp[i]+" </div></div></a>";
    }
    else {
        s2 += "<a href='SAE.html?num="+info[i]+"' class='SAE_button'>"+ info[i] + " <div class='description'>"+ titre[i] + " <div class='compétence_SAE'>"+ comp[i]+"</div></div></a>";
    }
}

document.querySelector(".SAE_100").innerHTML=s1
document.querySelector(".SAE_200").innerHTML=s2

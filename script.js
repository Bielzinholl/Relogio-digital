let resultado = document.querySelector('.resultado');
setInterval (() => {
    let date = new Date();
    let horaAtual = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    let minuteAtual = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    let diaSemana = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];
    let diaAtualSemana = diaSemana[date.getDay()];
    let diaAtualMes = date.getDate();
    let mesAno = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
    let mesAtual = mesAno[date.getMonth()];
    if(horaAtual < 0 && horaAtual > 5){
        resultado.innerHTML = `   <div class="card bg-noite">  
        <div class="date">
            <h1>${horaAtual}:${minuteAtual}</h1>
            <p>${diaAtualSemana},  ${diaAtualMes} de ${mesAtual}</p>
        </div>
        <i class="fa-solid fa-moon"></i>
    </div>`
    
}else if(horaAtual > 5 && horaAtual < 12){
    resultado.innerHTML = `   <div class="card bg-manha">  
    <div class="date">
        <h1>${horaAtual}:${minuteAtual}</h1>
        <p>${diaAtualSemana},  ${diaAtualMes} de ${mesAtual}</p>
    </div>
    <i class="fa-solid fa-cloud"></i>
</div>`
}else if(horaAtual < 12 && horaAtual > 18){
    resultado.innerHTML = `   <div class="card bg-tarde">  
    <div class="date">
        <h1>${horaAtual}:${minuteAtual}</h1>
        <p>${diaAtualSemana},  ${diaAtualMes} de ${mesAtual}</p>
    </div>
    <i class="fa-solid fa-sun"></i>
</div>`
}else{
    resultado.innerHTML = `   <div class="card bg-noite">  
    <div class="date">
        <h1>${horaAtual}:${minuteAtual}</h1>
        <p>${diaAtualSemana},  ${diaAtualMes} de ${mesAtual}</p>
    </div>
    <i class="fa-solid fa-moon"></i>
</div>`

} 





}, 1000);
/***********Inicializacion de variables**********/
let semana=5;
let dia=5;
let diaActual = 0;
let diaAnterior = 0;
let semanaReal = 0;
let dailyButton = document.getElementById("DailyButton");
let weeklyButton = document.getElementById("WeeklyButton");
let monthlyButton = document.getElementById("MonthlyButton");
let workHour = document.getElementById("outWorkHour");
let readHour = document.getElementById("outReadHour");
let studyHour = document.getElementById("outStudyHour");
let execiseHour = document.getElementById("outExcerciseHour");
let lenguageHour = document.getElementById("outLenguageHour");
let petHour = document.getElementById("outPetHour");
let workLastHour = document.getElementById("outWorkLastHour");
let readLastHour = document.getElementById("outReadLastHour");
let studyLastHour = document.getElementById("outStudyLastHour");
let excerciseLastHour = document.getElementById("outExcerciseLastHour");
let lenguageLastHour = document.getElementById("outLenguageLastHour");
let petLastHour = document.getElementById("outPetLastHour");


/***********Inicializacion de arreglos**********/
let ArregloWork = [{ Semana: 0, 1: 6, 2: 6, 3: 6, 4: 6, 5: 6},
                { Semana: 1, 1: 6, 2: 6, 3: 6, 4: 6, 5: 6},
                { Semana: 2, 1: 6, 2: 6, 3: 6, 4: 6, 5: 6},
                { Semana: 3, 1: 6, 2: 6, 3: 6, 4: 6, 5: 6},
                { Semana: 4, 1: 6, 2: 6, 3: 6, 4: 6, 5: 6},
                { Semana: 5, 1: 6, 2: 6, 3: 6, 4: 6, 5: 6}
];
let ArregloReading =  [{ Semana: 0, 1: 0.5, 2: 0.5, 3: 0.5, 4: 0.5, 5: 0.5},
                { Semana: 1, 1: 0.5, 2: 0.5, 3: 0.5, 4: 0.5, 5: 0.5},
                { Semana: 2, 1: 0.5, 2: 0.5, 3: 0.5, 4: 0.5, 5: 0.5},
                { Semana: 3, 1: 0.5, 2: 0.5, 3: 0.5, 4: 0.5, 5: 0.5},
                { Semana: 4, 1: 0.5, 2: 0.5, 3: 0.5, 4: 0.5, 5: 0.5},
                { Semana: 5, 1: 0.5, 2: 0.5, 3: 0.5, 4: 0.5, 5: 0.5}
];
let ArregloStudy =  [{ Semana: 0, 1: 4, 2: 4, 3: 4, 4: 4, 5: 4},
                { Semana: 1, 1: 4, 2: 4, 3: 4, 4: 4, 5: 4},
                { Semana: 2, 1: 4, 2: 4, 3: 4, 4: 4, 5: 4},
                { Semana: 3, 1: 4, 2: 4, 3: 4, 4: 4, 5: 4},
                { Semana: 4, 1: 4, 2: 4, 3: 4, 4: 4, 5: 4},
                { Semana: 5, 1: 4, 2: 4, 3: 4, 4: 4, 5: 4}
];
let ArregloExcercise = [{ Semana: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1},
                { Semana: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1},
                { Semana: 2, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1},
                { Semana: 3, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1},
                { Semana: 4, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1},
                { Semana: 5, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1}
];
let ArregloLenguage = [{ Semana: 0, 1: 3.5, 2: 3.5, 3: 3.5, 4: 3.5, 5: 3.5},
                { Semana: 1, 1: 3.5, 2: 3.5, 3: 3.5, 4: 3.5, 5: 3.5},
                { Semana: 2, 1: 3.5, 2: 3.5, 3: 3.5, 4: 3.5, 5: 3.5},
                { Semana: 3, 1: 3.5, 2: 3.5, 3: 3.5, 4: 3.5, 5: 3.5},
                { Semana: 4, 1: 3.5, 2: 3.5, 3: 3.5, 4: 3.5, 5: 3.5},
                { Semana: 5, 1: 3.5, 2: 3.5, 3: 3.5, 4: 3.5, 5: 3.5}
];
let ArregloPet =  [{ Semana: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1},
                { Semana: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1},
                { Semana: 2, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1},
                { Semana: 3, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1},
                { Semana: 4, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1},
                { Semana: 5, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1}
];

/***********Funciones**********/
function CalcularDiaActual(Arreglo){
    var hoy = dia;
    var semanaActual = semana;
    Arreglo = Arreglo[semanaActual];
    diaActual = Arreglo[hoy];
    return diaActual;
}

function CalcularDiaAnterior(Arreglo){
    var hoy = dia;
    var semanaActual = semana;
    if (hoy==1){
        hoy = 5;
        semanaActual = semanaActual - 1;
    }
    else{
        hoy = hoy - 1;
    }
    Arreglo = Arreglo[semanaActual];
    diaAnterior = Arreglo[hoy];
    return diaAnterior;
}

function CalcularSemanaActual(Arreglo){
    var hoy = dia;
    var totalSemana = 0;
    var semanaActual = semana;
    Arreglo = Arreglo[semanaActual];
    for(var i=1; i <= hoy; i++){
        totalSemana = totalSemana + Arreglo[i];
    }
    return totalSemana;
}

function CalcularSemanaAnterior(Arreglo){
    var hoy = 5;
    var totalSemana = 0;
    var semanaAnterior = semana - 1;
    Arreglo = Arreglo[semanaAnterior];
    for(var i=1; i <= hoy; i++){
        totalSemana = totalSemana + Arreglo[i];
    }
    return totalSemana;
}

function CalcularMesActual(Arreglo){
    debugger;
    var totalActual = 0;
    var semanaActual = semana - 1;
    var NuevoArreglo = [];
    var MayorArreglo;

    for (i = 1; i  <= 3; i++){
        NuevoArreglo.push(Arreglo[semanaActual]);
        semanaActual = semanaActual - 1;
        
    }

    for (i=0; i< NuevoArreglo.length;i++){
        MayorArreglo = [];
        MayorArreglo = NuevoArreglo[i];
        for (y=1; y <=5 ; y++){
            totalActual = totalActual + MayorArreglo[y];
        }

    }


    return totalActual + CalcularSemanaActual(Arreglo);
}

function CalcularMesAnterior(Arreglo){
    debugger
    var hoy = dia;
    var totalActual = 0;
    var semanaActual = semana - 1;
    var NuevoArreglo = [];
    var MayorArreglo;

    for (i = 1; i  <= 4; i++){
        NuevoArreglo.push(Arreglo[semanaActual]);
        semanaActual = semanaActual - 1;
        
    }

    for (i=0; i< NuevoArreglo.length;i++){
        MayorArreglo = [];
        MayorArreglo = NuevoArreglo[i];
        for (y=1; y <=5 ; y++){
            totalActual = totalActual + MayorArreglo[y];
        }

    }


    return totalActual;
}

/*********Funciones para el llamado desde los botones************/
function CalculoDiario(){
    workHour.innerText = CalcularDiaActual(ArregloWork)+"Hrs";
    workLastHour.innerText = "Last day - "+CalcularDiaAnterior(ArregloWork)+"Hrs";
    readHour.innerText = CalcularDiaActual(ArregloReading)+"Hrs"
    readLastHour.innerText = "Last day - "+CalcularDiaAnterior(ArregloReading)+"Hrs";
    studyHour.innerText = CalcularDiaActual(ArregloStudy)+"Hrs"
    studyLastHour.innerText = "Last day - "+CalcularDiaAnterior(ArregloStudy)+"Hrs";
    execiseHour.innerText = CalcularDiaActual(ArregloExcercise)+"Hrs"
    excerciseLastHour.innerText = "Last day - "+CalcularDiaAnterior(ArregloExcercise)+"Hrs";
    lenguageHour.innerText = CalcularDiaActual(ArregloLenguage)+"Hrs"
    lenguageLastHour.innerText = "Last day - "+CalcularDiaAnterior(ArregloLenguage)+"Hrs";
    petHour.innerText = CalcularDiaActual(ArregloPet)+"Hrs";
    petLastHour.innerText =  "Last day - "+CalcularDiaAnterior(ArregloPet)+"Hrs";
    dailyButton.style= "font-size: 1.6rem; font-weight: 400;color: white;";
    weeklyButton.style= "font-size: 1.4rem; font-weight: 300;color: var(--PaleBlue);";
    monthlyButton.style= "font-size: 1.4rem; font-weight: 300;color: var(--PaleBlue);";
}

function CalculoSemanal(){
    workHour.innerText = CalcularSemanaActual(ArregloWork)+"Hrs";
    workLastHour.innerText =  "Last week - "+CalcularSemanaAnterior(ArregloWork)+"Hrs";
    readHour.innerText = CalcularSemanaActual(ArregloReading)+"Hrs";
    readLastHour.innerText =  "Last week - "+CalcularSemanaAnterior(ArregloReading)+"Hrs";
    studyHour.innerText = CalcularSemanaActual(ArregloStudy)+"Hrs";
    studyLastHour.innerText =  "Last week - "+CalcularSemanaAnterior(ArregloStudy)+"Hrs";
    execiseHour.innerText = CalcularSemanaActual(ArregloExcercise)+"Hrs";
    excerciseLastHour.innerText =  "Last week - "+CalcularSemanaAnterior(ArregloExcercise)+"Hrs";
    lenguageHour.innerText = CalcularSemanaActual(ArregloLenguage)+"Hrs";
    lenguageLastHour.innerText =  "Last week - "+CalcularSemanaAnterior(ArregloLenguage)+"Hrs";
    petHour.innerText = CalcularSemanaActual(ArregloPet)+"Hrs";
    petLastHour.innerText =  "Last week - "+CalcularSemanaAnterior(ArregloPet)+"Hrs";
    weeklyButton.style= "font-size: 1.6rem; font-weight: 400;color: white;";
    dailyButton.style= "font-size: 1.4rem; font-weight: 300;color: var(--PaleBlue);";
    monthlyButton.style= "font-size: 1.4rem; font-weight: 300;color: var(--PaleBlue);";
}

function CalculoMensual(){
    workHour.innerText = CalcularMesActual(ArregloWork)+"Hrs";
    workLastHour.innerText =  "Last month - "+CalcularMesAnterior(ArregloWork)+"Hrs";
    readHour.innerText = CalcularMesActual(ArregloReading)+"Hrs";
    readLastHour.innerText =  "Last month - "+CalcularMesAnterior(ArregloReading)+"Hrs";
    studyHour.innerText = CalcularMesActual(ArregloStudy)+"Hrs";
    studyLastHour.innerText =  "Last month - "+CalcularMesAnterior(ArregloStudy)+"Hrs";
    execiseHour.innerText = CalcularMesActual(ArregloExcercise)+"Hrs";
    excerciseLastHour.innerText =  "Last month - "+CalcularMesAnterior(ArregloExcercise)+"Hrs";
    lenguageHour.innerText = CalcularMesActual(ArregloLenguage)+"Hrs";
    lenguageLastHour.innerText =  "Last month - "+CalcularMesAnterior(ArregloLenguage)+"Hrs";
    petHour.innerText = CalcularMesActual(ArregloPet)+"Hrs";
    petLastHour.innerText =  "Last month - "+CalcularMesAnterior(ArregloPet)+"Hrs";


    weeklyButton.style= "font-size: 1.4rem; font-weight: 300;color: var(--PaleBlue);";
    dailyButton.style= "font-size: 1.4rem; font-weight: 300;color: var(--PaleBlue);";
    monthlyButton.style= "font-size: 1.6rem; font-weight: 400;color: white;";
}


workHour.innerText = CalcularDiaActual(ArregloWork)+"Hrs";
workLastHour.innerText = "Last day - "+CalcularDiaAnterior(ArregloWork)+"Hrs";
readHour.innerText = CalcularDiaActual(ArregloReading)+"Hrs"
readLastHour.innerText = "Last day - "+CalcularDiaAnterior(ArregloReading)+"Hrs";
studyHour.innerText = CalcularDiaActual(ArregloStudy)+"Hrs"
studyLastHour.innerText = "Last day - "+CalcularDiaAnterior(ArregloStudy)+"Hrs";
execiseHour.innerText = CalcularDiaActual(ArregloExcercise)+"Hrs"
excerciseLastHour.innerText = "Last day - "+CalcularDiaAnterior(ArregloExcercise)+"Hrs";
lenguageHour.innerText = CalcularDiaActual(ArregloLenguage)+"Hrs"
lenguageLastHour.innerText = "Last day - "+CalcularDiaAnterior(ArregloLenguage)+"Hrs";
petHour.innerText = CalcularDiaActual(ArregloPet)+"Hrs";
petLastHour.innerText =  "Last day - "+CalcularDiaAnterior(ArregloPet)+"Hrs";

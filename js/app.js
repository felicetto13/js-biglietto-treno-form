/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Formula per il calcolo: km * 0.21 = prezzoBiglietto
Stampare in HTML una lista con eta inserità, km inseriti ed il prezzo finale
eta: 50
km: 120
prezzzo: 24,50
BONUS:
validare/ controllare i dati inseriti
età è un numero?
età è stata inserita
km è un numero valido?
posso inserire un minimo / massimo di km possibili? */

/* 
    chiedere all'utente di immettere i dati (km da percorrere e età)
    questi dati verranno salvati in delle variabili
    le variabili le trasformiamo in numeri interi
    impostare il prezzo per kilometro di partenza in una variabile

    Controllare l'eta del passeggero
        -SE il passeggero è minorenne
            -allora il prezzo per kilometro sarà scontato del 20%
        -ALTRIMENTI SE il passeggero sarà over65
                        -allora il prezzo per kilometro sarà scontato del 40%
    
    Verificate queste condidizioni, calcoliamo il totale in una variabile
    Essendo che il calcolo potrà produrre un numero con 2 o più cifre decimali, usiamo la funzione .toFixed(2) per ridurre il numero degli stessi a 2

    Scriviamo i risultati nella pagina HTML come richiesto da consegna
 */     
        let nome = document.querySelector("[name='nomeCognome']");
        const eta = document.querySelector("[name='eta']");
        const km = document.querySelector("[name='kmDaPercorrere']"); 
        const prezzoKm = 0.21;
        const el = document.getElementById("submitButton");

        el.addEventListener("click", function(){
        

        console.log( eta.value, km.value, nome.value);
        });

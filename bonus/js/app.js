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
        let eta = document.querySelector("[name='eta']");
        let km = document.querySelector("[name='kmDaPercorrere']"); 
        const prezzoKm = 0.21;
        const submitButton = document.getElementById("submitButton");
        const deleteButton = document.getElementById("cancelButton");
        let totale = 0;
        deleteButton.addEventListener("click", function() {
            window.location.reload();
        })
        submitButton.addEventListener("click", function(){
            
            nome = nome.value;
            let kmDaPercorrere = parseInt(km.value);
            let etaPasseggero = parseInt(eta.value);
            let scontoDaApplicare = 1;
            let bool = true;
            if(isNaN(kmDaPercorrere) || kmDaPercorrere < 0 || kmDaPercorrere > 450){
                bool=false;
                    alert("Attenzione!! Devi inserire i Kilometri con un valore numerico valido compreso tra 0 e 450!")
            }
            if(isNaN(etaPasseggero) || etaPasseggero < 0 || etaPasseggero > 110){
                bool=false;
                alert("Attenzione!! Devi inserire l'età del passeggero con un valore numerico valido compreso tra 0 e 109!")
            }
            if(bool){
                if(etaPasseggero<18) {
                scontoDaApplicare=0.8;
            }else if (etaPasseggero>65){
                scontoDaApplicare= 0.6;
            }
            totale = kmDaPercorrere * prezzoKm * scontoDaApplicare;
            totale = totale.toFixed(2);
            const CodiceCP = Math.floor(Math.random() * 99900);
            const carrozza = Math.floor(Math.random() * 200);
            document.getElementById('biglietto-stampato').innerHTML = `
            <h1 class="my-3 text-center text-white text-uppercase">il tuo biglietto</h1>
            <div class="container bg-white mb-3 p-4">
                <h3 class="text-uppercase">dettaglio passeggeri</h3>
                <div class="row border-top border-bottom border-3">
                    <div class="col-4 p-0">
                        <div class="bg-gray" style="min-height:150px">
                        <h4 class="pt-3 px-1">NOME PASSEGGERO</h4>
                        <span>${nome}</span>
                        </div>
                    </div>
                    <div class="col-8">
                        <table class="w-100">
                        <thead>
                            <tr>
                                <th class="py-3">Offerta</th>
                                <th class="py-3">Carrozza</th>
                                <th class="py-3">Codice CP</th>
                                <th class="py-3">Costo Biglietto</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="py-3">Biglietto Standard</td>
                                <td class="py-3">${carrozza}</td>
                                <td class="py-3">${CodiceCP}</td>
                                <td class="py-3">${totale}</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
            `;
            }
            
        });

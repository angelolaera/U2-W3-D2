const nomeInput = document.getElementById("nome");
const cognomeInput = document.getElementById("cognome");
const salvaButton = document.getElementById("salva");
const cancellaButton = document.getElementById("cancella");
const showName = document.getElementById("nomeSalvato");

const iscrizioni = [];

class IscrizioneEvent {
  constructor(name, surname) {
    this.nome = nome;
    this.cognome = cognome;
  }
}

const setName = obj => {
    const output = document.createElement("div");
    output.classList.add("output");
    const paragraph = document.createElement("p")
    paragraph.textContent=${user};
}

// Salva il nome in localStorage
salvaButton.addEventListener("click", () => {
  const user = new IscrizioneEvent(nomeInput.value, cognomeInput.value);
  iscrizioni.push(user);
  localStorage.setItem("user", JSON.stringify(iscrizioni));

});

// Carica il nome salvato in localStorage
const nomeSalvato = localStorage.getItem("nome");
const cognomeSalvato = localStorage.getItem("cognome");
if (nomeSalvato & cognomeSalvato) {
  nomeInput.value = nomeSalvato;
  cognomeInput.value = cognomeSalvato;
  showName.textContent = `Nome salvato: ${nomeSalvato} ${cognomeSalvato}`;
}

// Cancella il nome da localStorage
cancellaButton.addEventListener("click", () => {
  localStorage.removeItem("nome");
  localStorage.removeItem("cognome");
  nomeInput.value = "";
  cognomeInput.value = "";
  showName.textContent = "";
});

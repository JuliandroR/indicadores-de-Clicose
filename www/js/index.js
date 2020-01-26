let adapter = new LocalStorage("db");
let db = low(adapter);

if (localStorage.createDatabase != "true") {
  db.defaults({
    medicoes: []
  }).write();
  localStorage.createDatabase = "true";
}

document.getElementById("nova_medicao").addEventListener("click", () => {
  window.location.assign("pages/nova_medicao.html");
});

const listarMedicoes = () => {
  let data = db.get("medicoes").value();

  data.forEach(item => {
    document
      .getElementById("medicoes_anteriores")
      .appendChild(criaElemento(item.dataMedicao, item.valorMedido));
  });
};

const criaElemento = (dataMedicao, valorMedido) => {
  let div = document.createElement("div");
  div.setAttribute("class", "medicao");

  let h3 = document.createElement("h3");
  h3.setAttribute("class", "data");
  h3.innerHTML = dataMedicao;
  div.appendChild(h3);

  let h2 = document.createElement("h2");
  h2.setAttribute("class", "valor");
  h2.innerHTML = valorMedido;
  div.appendChild(h2);

  return div;
};

listarMedicoes();

let adapter = new LocalStorage("db");
let db = low(adapter);

console.log(db.get("medicoes").value);

document.getElementById("salvar").addEventListener("click", () => {
  let divideData = document.getElementById("data_medicao").value.split("-");
  let data = `${divideData[2]}/${divideData[1]}/${divideData[0]}`;

  db.get("medicoes")
    .push({
      dataMedicao: data,
      valorMedido: document.getElementById("valor_medicao").value
    })
    .write();

  window.location.assign("../index.html");
});

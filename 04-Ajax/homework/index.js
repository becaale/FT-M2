$("#boton").click(() => {
  $.get("http://localhost:5000/amigos", (response) => {
    for (const elemento of response) {
      $(`<li>${elemento.name}</li>`).appendTo("#lista");
    }
  });
});

$("#search").click(() => {
  $.get(
    `http://localhost:5000/amigos/${document.querySelector("#input").value}`,
    (response) => {
      document.querySelector("#amigo").innerHTML = response.name;
    }
  );
});
$("#delete").click(() => {
  $.ajax({
    url: `http://localhost:5000/amigos/${
      document.querySelector("#inputDelete").value
    }`,
    type: "DELETE",
    success: function (result) {
      document.querySelector("#success").innerHTML =
        "Tu amigo fue borrado con exito";
    },
  });
});

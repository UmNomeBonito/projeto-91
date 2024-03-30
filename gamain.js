function send()
{
    Número1 = document.getElementById("número1").value;
    Número2 = document.getElementById("número2").value;
    resposta_verdadeira = parseInt(Número1) * parseInt(Número2);
    questão = '<h4>' + Número1 + 'x' + Número2 + '</h4>';
    input_box = '<br>Resposta: <input type="text" id="inputCheckBox"';
    check_button = '<br><br><Button class=" btn btn-info">Checar</Button>';
    row = questão + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("número1").value = "";
    document.getElementById("número2").value = "";
};

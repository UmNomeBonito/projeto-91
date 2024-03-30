function addNames() 
{

player1_name = document.getElementById("caixa-de-texto1").value;
player2_name = document.getElementById("caixa-de-texto2").value;

localStorage.setItem("player1_name", player1_name);
localStorage.setItem("player2_name", player2_name);

};

function addNames()
{
    window.location = "gamePage.html";
}
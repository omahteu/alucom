import {adas} from "../../../../php/core/c"

$(document).on("click", "#abaMovimentacaoAluguel", function() {
    var searchClient = document.querySelector("#searchClientAluguel")
    var autocomplete = document.querySelector("#ACClientAluguel")
    searchClient.addEventListener("input", _.throttle(async event => {


        try {
            const {data} = await axios.get("../../../../php/core/clientes.php")
        } catch (error) {
            console.log(error)
        }







        console.log(event.target.value)
    }, 500))
})

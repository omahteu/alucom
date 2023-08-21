$(document).on("click", "#abaMovimentacaoAluguel", function() {
    var searchClient = document.querySelector("#searchClientAluguel")
    var autocomplete = document.querySelector("#ACClientAluguel")
    searchClient.addEventListener("input", _.throttle(async event => {


        try {
            const {data} = await axios.get("/dados.json")
            console.log('data')
        } catch (error) {
            console.log('error')
        }







        //console.log(event.target.value)
    }, 500))
})

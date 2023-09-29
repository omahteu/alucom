$(document).on("click", "#abaCadastroCliente", function() {
    let area = $("#main-content")
    area.html(
        `
        <form method="post" id="cadastroClientes">
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="">Nome/Razão Social</label>
                    <input type="text" class="form-control" name="nrs" placeholder="Nome/Razão Social">
                </div>
                <div class="form-group col-md-4">
                    <label for="">Secretaria</label>
                    <select class="form-control" name="secretaria">
                        <option hidden>Secretaria</option>
                    </select>
                </div>
                <div class="form-group col-md-4">
                    <label for="">Tipo</label>
                    <select class="form-control" name="tipo">
                        <option hidden>Tipo</option>
                        <option>Física</option>
                        <option>Jurídica</option>
                    </select>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="">CPF/CNPJ</label>
                    <input type="text" class="form-control" name="cpfcnpj" placeholder="CPF/CNPJ">
                </div>
                <div class="form-group col-md-4">
                    <label for="">RG/CGF</label>
                    <input type="text" class="form-control" name="rgcgf" placeholder="RG/CGF">
                </div>
                <div class="form-group col-md-4">
                    <label for="inputEmail4">CGC</label>
                    <input type="text" class="form-control" name="cgc" placeholder="CGC">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="">CEP</label>
                    <input type="text" class="form-control" name="cep" placeholder="CEP">
                </div>
                <div class="form-group col-md-8">
                    <label for="">Endereço</label>
                    <input type="text" class="form-control" name="endereco" placeholder="Endereço">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="">Bairro</label>
                    <input type="text" class="form-control" name="bairro" placeholder="Bairro">
                </div>
                <div class="form-group col-md-4">
                    <label for="">Cidade</label>
                    <input type="text" class="form-control" name="cidade" placeholder="Cidade">
                </div>
                <div class="form-group col-md-4">
                    <label for="">Estado</label>
                    <select class="form-control" name="estado">
                        <option hidden>Estado</option>
                        <option>AC</option>
                        <option>AL</option>
                        <option>AM</option>
                        <option>AP</option>
                        <option>BA</option>
                        <option>CE</option>
                        <option>DF</option>
                        <option>ES</option>
                        <option>GO</option>
                        <option>MA</option>
                        <option>MG</option>
                        <option>MS</option>
                        <option>MT</option>
                        <option>PA</option>
                        <option>PB</option>
                        <option>PE</option>
                        <option>PI</option>
                        <option>PR</option>
                        <option>RJ</option>
                        <option>RN</option>
                        <option>RO</option>
                        <option>RR</option>
                        <option>RS</option>
                        <option>SC</option>
                        <option>SE</option>
                        <option>SP</option>
                        <option>TO</option>
                    </select>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Salvar</button>
        </form>
        `
    )
})
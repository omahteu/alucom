$(document).on("click", "#abaCadastroEquipamento", function() {
    let area = $("#main-content")
    area.html(
        `
        <form>
            <div class="form-row">
                <div class="form-group col-md-3">
                    <label for="inputPassword4">Tipo</label>
                    <select class="form-control">
                        <option hidden>Tipo</option>
                    </select>
                </div>
                <div class="form-group col-md-3">
                    <label for="inputPassword4">Repetir este registro</label>
                    <input type="text" class="form-control" placeholder="Repetir este registro">
                </div>
                <div class="form-group col-md-3">
                    <label for="inputPassword4">Número</label>
                    <input type="text" class="form-control" placeholder="Número">
                </div>
                <div class="form-group col-md-3">
                    <label for="inputPassword44">Numeração Automática</label>
                    <input type="radio" class="form-control" id="inputPassword44">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-12">
                    <label for="inputEmail4">Observações</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Observações">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-12">
                    <label for="inputEmail4">Descrição</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Descrição">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="inputEmail4">CEP</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="CEP">
                </div>
                <div class="form-group col-md-8">
                    <label for="inputEmail4">Endereço</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Endereço">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputCity">Bairro</label>
                    <input type="text" class="form-control" id="inputCity" placeholder="Bairro">
                </div>
                <div class="form-group col-md-4">
                    <label for="inputState">Cidade</label>
                    <input type="text" class="form-control" id="inputCity" placeholder="Cidade">
                </div>
                <div class="form-group col-md-2">
                    <label for="inputZip">Estado</label>
                    <select class="form-control">
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
            <button type="button" class="btn btn-primary">Salvar</button>
        </form>
        `
    )
})
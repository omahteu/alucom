$(document).on("click", "#abaCadastroEquipamento", function() {
    let area = $("#main-content")
    area.html(
        `
        <form>
            <div class="form-row">
                <div class="form-group col-md-3">
                    <label for="">Tipo</label>
                    <select class="form-control" name="tipo">
                        <option hidden>Tipo</option>
                    </select>
                </div>
                <div class="form-group col-md-3">
                    <label for="">Repetir este registro</label>
                    <input type="text" class="form-control" name="repeticoes" placeholder="Repetir este registro">
                </div>
                <div class="form-group col-md-3">
                    <label for="">Número</label>
                    <input type="text" class="form-control" name="numero" placeholder="Número">
                </div>
                <div class="form-group col-md-3">
                    <label for="">Numeração Automática</label>
                    <input type="radio" class="form-control" name="numeracaoauto">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-12">
                    <label for="">Observações</label>
                    <input type="text" class="form-control" name="observacoes" placeholder="Observações">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-12">
                    <label for="">Descrição</label>
                    <input type="text" class="form-control" name="descricao" placeholder="Descrição">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-3">
                    <label for="">Valor em Dólar</label>
                    <input type="text" class="form-control" name="vdolar" placeholder="Valor em Dólar">
                </div>
                <div class="form-group col-md-3">
                    <label for="">Valor em Real</label>
                    <input type="text" class="form-control" name="vreal" placeholder="Valor em Real">
                </div>
                <div class="form-group col-md-3">
                    <label for="">Valor para Aluguel</label>
                    <input type="text" class="form-control" name="valuguel" placeholder="Valor para Aluguel">
                </div>
                <div class="form-group col-md-3">
                    <label for="">Valor Alugado</label>
                    <input type="text" class="form-control" name="valoralugado" placeholder="Valor Alugado">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-3">
                    <label for="">Fornecedor</label>
                    <select class="form-control" name="fornecedor">
                        <option hidden>Fornecedor</option>
                    </select>
                </div>
                <div class="form-group col-md-3">
                    <label for="">Data da Aquisição</label>
                    <input type="datetime-local" class="form-control" name="daquisicao" id="">
                </div>
                <div class="form-group col-md-3">
                    <label for="">Data da Locação</label>
                    <input type="datetime-local" class="form-control" name="dlocacao" id="">
                </div>
                <div class="form-group col-md-3">
                    <label for="">Data da Garantia Até</label>
                    <input type="datetime-local" class="form-control" name="dgarantia" id="">
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Salvar</button>
        </form>
        `
    )
})
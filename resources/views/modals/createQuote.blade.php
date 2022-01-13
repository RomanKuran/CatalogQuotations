<div class="modal fade" id="modalCreteQuote" tabindex="-1" aria-labelledby="modalCreteQuoteLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalCreteQuoteLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="create-quote-form" action="{{ route('createQuotes') }}" method="get">
                    <div class="form-group">
                        <label for="source-add-field" class="col-form-label">Источник:</label>
                        <input name="source" class="js-source-add-field" placeholder="" type="text" id="source-add-field" required>
                    </div>

                    <div class="form-group">
                        <label for="quote-add-field" class="col-form-label">Цитата:</label>
                        <textarea class="js-quote-add-field" name="quote" id="quote-add-field" cols="30" rows="10"
                            required></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary js-create-quote" data-bs-dismiss="modal">Close</button>
                <button type="submit" form="create-quote-form" class="btn btn-primary js-create-quote">Save changes</button>
            </div>
        </div>
    </div>
</div>

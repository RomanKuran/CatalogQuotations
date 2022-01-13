<div class="quotes-item">
    <div class="quotes">
        source: {{ $quote->source }}
    </div>
    <div class="quotes">
        quote: {{ $quote->quote }}
    </div>
    <div class="email">
        email: {{ $quote->user->email }}
    </div>
    <div class="actions">
        <button type="button" class="btn btn-success button-share" data-bs-toggle="modal"
            data-bs-target="#modalListServices">
            Поделиться
        </button>
    </div>
</div>

@extends('layouts.app')

@section('content')

    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalCreteQuote">
        Add
    </button>

    <div class="list-quotes">
        @foreach ($quotes as $quote)
            @include('quotes.quote')
        @endforeach
    </div>

    @include('modals.createQuote')
    @include('modals.listServices')
    @include('modals.sendQuote')

    @push('custom-styles')
        <link href="{{ asset('css/quotes.css') }}" rel="stylesheet">
    @endpush

    @push('custom-scripts')
        <script src="{{ asset('js/quotes.js') }}" defer></script>
    @endpush

    @push('routes')
        let route_create_quote = "{{ route('createQuotes') }}";
        let get_regular_validation = "{{ route('getRegularValidation') }}";
    @endpush

@endsection

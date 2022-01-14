<?php

namespace App\Http\Controllers\Quotes;

use App\Http\Controllers\Controller;
use App\Http\Requests\Quotes\CreateQuotesRequest;
use App\Models\Quote;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CreateQuotesController extends Controller
{
    public function create(CreateQuotesRequest $request)
    {
        $source = $request->source;
        $quote = $request->quote;
        $user = Auth::user();
        $userId = $user->id;
        $quote = Quote::create([
            'user_id' => $userId,
            'source' => $source,
            'quote' => $quote
        ]);

        return redirect()->route('quotes');
    }
}

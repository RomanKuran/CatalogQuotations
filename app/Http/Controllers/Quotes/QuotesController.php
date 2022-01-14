<?php

namespace App\Http\Controllers\Quotes;

use App\Http\Controllers\Controller;
use App\Models\Quote;
use App\Models\Service;
use Illuminate\Http\Request;

class QuotesController extends Controller
{
    public function quotes(){
        $quotes = Quote::get();
        $services = Service::get(['service', 'placeholder', 'validation']);
        return view('quotes.listQuotes', compact('quotes', 'services'))->render();
    }
}

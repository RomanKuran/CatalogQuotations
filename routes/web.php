<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/', [App\Http\Controllers\Quotes\QuotesController::class, 'quotes'])->name('quotes');
Route::get('/create_quotes', [App\Http\Controllers\Quotes\CreateQuotesController::class, 'create'])->name('createQuotes');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


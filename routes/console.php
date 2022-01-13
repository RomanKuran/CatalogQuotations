<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

/*
|--------------------------------------------------------------------------
| Console Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of your Closure based console
| commands. Each Closure is bound to a command instance allowing a
| simple approach to interacting with each command's IO methods.
|
*/

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');


Artisan::command('user:create', function () {
    $email = $this->ask('Email?');
    $password = $this->secret('Password?');

    // Validation of user data
    $data = ['email' => $email, 'password' => $password];
    $resultAuthValidation = Validator::make($data, [
        'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
        'password' => ['required', 'string', 'min:8'],
    ]);
    if($resultAuthValidation->fails()){
        $this->info($resultAuthValidation->errors()->first());
        return 0;
    }
    // ----

    User::create([
        'email' => $email,
        'password' => Hash::make($password),
    ]);
    $this->info("Account $email created");
});
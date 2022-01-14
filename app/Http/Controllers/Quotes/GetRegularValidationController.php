<?php

namespace App\Http\Controllers\Quotes;

use App\Http\Controllers\Controller;
use App\Http\Requests\Quotes\GetRegularValidationRequest;
use App\Models\Service;
use Illuminate\Http\Request;

class GetRegularValidationController extends Controller
{
    public function get(GetRegularValidationRequest $request)
    {
        $service = $request->service;
        $validation = Service::where('service', $service)->first('validation');

        $validation = json_decode($validation->validation, true);
        $validationArray = [];
        foreach($validation as $key => $value){
            $validationArray[] = stripslashes($value);
        }

        $validation = ['validation' => $validationArray];
        $validation = json_encode($validation, JSON_UNESCAPED_UNICODE);

        return $validation;
    }
}

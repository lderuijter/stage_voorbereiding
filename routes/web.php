<?php

use Illuminate\Support\Facades\Route;

Route::get('{any}', function () {
    return view('App');
})->where('any', '.*');

Route::get('/create', function () {
    return view('AddProduct');
});

Route::get('/update', function () {
    return view('UpdateProduct');
});

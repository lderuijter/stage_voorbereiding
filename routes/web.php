<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('products');
});

Route::get('/create', function () {
    return view('AddProduct');
});

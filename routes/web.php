<?php

use Illuminate\Support\Facades\Route;

Route::get('{any}', function () {
    return view('app');
})->where('any', '.*');

Route::get('/products', function () {
    return view('products');
});

Route::get('/create', function () {
    return view('AddProduct');
});

Route::get('/update', function () {
    return view('UpdateProduct');
});

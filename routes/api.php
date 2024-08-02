<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductIndexController;
use App\Http\Controllers\ProductController;

Route::get('/products', ProductIndexController::class);
Route::resource('product', ProductController::class)->only(['store','update','destroy']);
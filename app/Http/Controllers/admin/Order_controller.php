<?php

namespace App\Http\Controllers\admin;
use Carbon\Carbon;
use App\Models\Order;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class Order_controller extends Controller
{
    // ll_orders
    public function all_orders(){
        $orders = Order::all();
        return Inertia::render("admin/orders/index",["orders"=>$orders]);
    }


    // daily_orders
    public function daily_orders(Request $request){
        $orders = Order::whereDate('created_at', Carbon::today())->get();
        return Inertia::render('admin/orders/dialy',['orders'=>$orders]);
    }



    public function get_last_order(){
        $order = Order::latest()->first();
        return response()->json($order);
    }
}

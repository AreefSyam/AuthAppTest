<?php

namespace App\Http\Controllers;

use App\Models\CarModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FuelCalculationController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index()
    {
        if (!Auth::check()) {
            // Handle the case where no user is authenticated
            return redirect()->route('login');
        }

        $userId = Auth::id(); // Safely getting the user ID after confirming the user is logged in
        $cars = CarModel::where('user_id', $userId)->get(); // Fetch cars for the logged-in user
        return Inertia::render('Calculation/CalculatePage', ['cars' => $cars]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

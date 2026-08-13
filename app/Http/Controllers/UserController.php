<?php

namespace App\Http\Controllers;

use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();

        return view('users.index', compact('users'));
        // return view('users.index', [
        //     'users' => User::all() // Asegúrate de que consulte la BD aquí
        // ]);
    }

    public function check_update(string $name, string $email)
    {
        // TASK: find a user by $name and update it with $email
        //   if not found, create a user with $name, $email and random password
        // $user = NULL; // updated or created user
        
        // TASK: find a user by $name and update it with $email
        $user = User::updateOrCreate(
            ['name' => $name], // Search criteria
            ['email' => $email, 'password' => bcrypt('random_password')] // Update or create data
        );
        return $user->name;
    }
}
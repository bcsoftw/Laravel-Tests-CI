<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePostRequest extends FormRequest
{
    // Autoriza que cualquier usuario pueda hacer la petición en este ejemplo
    public function authorize(): bool
    {
        return true;
    }

    // Reglas de validación que exige el test
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'body' => 'required|string',
            'photo' => 'nullable|image', // El test la envía, pero la marcamos opcional o requerida según desees
        ];
    }
}
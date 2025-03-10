<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CarModel extends Model
{
    use HasFactory;

    protected $table = 'cars';

    protected $fillable = [
        'name',
        'brand',
        'tank_size',
    ];

    // public function examination()
    // {
    //     return $this->belongsTo(ExamModel::class, 'exam_id');
    // }
}

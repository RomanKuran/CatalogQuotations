<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('services')->insert([
            'source' => 'e-mail',
            'placeholder' => 'e-mail',
            'validation' => '{"email":"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/"}',
        ]);

        DB::table('services')->insert([
            'source' => 'telegram',
            'placeholder' => 'telegram',
            'validation' => '{"phone":"\+?([0-9]{2})-?([0-9]{3})-?([0-9]{6,7})",nick:"/@[a-z0-9-]/"}',
        ]);
        
        DB::table('services')->insert([
            'source' => 'viber',
            'placeholder' => 'viber',
            'validation' => '{"phone":"\+?([0-9]{2})-?([0-9]{3})-?([0-9]{6,7})"}',
        ]);
        
    }
}

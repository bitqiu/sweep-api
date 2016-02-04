<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id')->comment('id');
            $table->string('username')->unique()->comment('用户名');
            $table->string('nickname')->unique()->comment('昵称');
            $table->string('email')->unique()->comment('邮箱');
            $table->string('phone_no')->comment('手机号');
            $table->integer('role_id')->default(1)->comment('角色id');
            $table->integer('master_id')->index()->comment('师傅id');
            $table->smallInteger('status')->default(10)->comment('默认状态');
            $table->string('password', 60);
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('users');
    }
}

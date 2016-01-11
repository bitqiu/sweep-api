<?php

namespace App\OAuth;

use App\Models\User;

class LoginTokenVerifier
{
    public function verify($user_name, $login_token)
    {
        $user = User::query()
            ->where(['user_name' => $user_name])
            ->first(['id', 'login_token']);

        if ($user->login_token === $login_token) {
            return $user->id;
        }

        return false;
    }
}

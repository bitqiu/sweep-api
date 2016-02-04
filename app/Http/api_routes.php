<?php

$router->get('/', function () {
    echo  'this v1 api';
});

/*
 * 申请 access_token 或者刷新 access_token.
 */
$router->post('oauth/access_token', function () {
    return Response::json(Authorizer::issueAccessToken());
});

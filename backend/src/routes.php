<?php

$uri = $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];

if ($uri === '/login' && $method === 'POST') {
    (new AuthController())->login();
}

if ($uri === '/usuarios' && $method === 'POST') {
    (new UsuarioController())->store();
}

if ($uri === '/planos' && $method === 'GET') {
    (new PlanoController())->index();
}

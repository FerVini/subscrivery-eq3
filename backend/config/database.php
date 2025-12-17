<?php

class Database {
    public static function connect() {
        return new PDO(
            "pgsql:host=localhost;port=5432;dbname=subscrivery",
            "postgres",
            "senha",
            [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
            ]
        );
    }
}

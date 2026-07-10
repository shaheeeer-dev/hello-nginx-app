package com.shaheer;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;

import java.io.OutputStream;
import java.net.InetSocketAddress;

public class Main {

    public static void main(String[] args) throws Exception {

        HttpServer server = HttpServer.create(new InetSocketAddress(8081), 0);

        server.createContext("/api/hello", (HttpExchange exchange) -> {

            String query = exchange.getRequestURI().getQuery();

            String name = "Guest";

            if (query != null && query.startsWith("name=")) {
                name = query.substring(5);
            }

            String response =
                    "{\"message\":\"Hello " + name + "!\"}";

            exchange.getResponseHeaders().add(
                    "Content-Type",
                    "application/json"
            );

            exchange.sendResponseHeaders(200, response.length());

            OutputStream os = exchange.getResponseBody();
            os.write(response.getBytes());
            os.close();

        });

        server.start();

        System.out.println("Server running on port 8081");
    }
}
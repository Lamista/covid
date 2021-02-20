package com.laurastasiule.app.service;

import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;

@Service
public class DataService {
    private static String DATA_URL = "https://opendata.ecdc.europa.eu/covid19/nationalcasedeath/json/";

    public void fetchData() {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(DATA_URL))
                .build();

//        client.send(request, )
    }
}

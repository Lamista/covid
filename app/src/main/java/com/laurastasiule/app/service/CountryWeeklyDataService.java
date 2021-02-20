package com.laurastasiule.app.service;

import com.laurastasiule.app.domain.CountryWeeklyData;
import com.laurastasiule.app.dto.CountryWeeklyDataDto;
import com.laurastasiule.app.repository.CountryWeeklyDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CountryWeeklyDataService {
    private final CountryWeeklyDataRepository repository;

    public CountryWeeklyDataService(CountryWeeklyDataRepository repository) {
        this.repository = repository;
    }

    public List<CountryWeeklyData> getAll() {
        return repository.findAll();
    }

    public CountryWeeklyData save (CountryWeeklyData data ) {
        return repository.save(data);
    }

    public List <CountryWeeklyData> save(List<CountryWeeklyData> allData) {
        List <CountryWeeklyData> list = new ArrayList<>();
        for (var data : allData) {
            save(data);
            list.add(data);
        }
        return list;
    }

//    public List<String> getAllCountries() {
//        return repository.findALlCountries();
//    }
}

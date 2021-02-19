package com.laurastasiule.app.service;

import com.laurastasiule.app.domain.CountryWeeklyInfo;
import com.laurastasiule.app.dto.CountryWeeklyInfoDto;
import com.laurastasiule.app.repository.CountryWeeklyInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CountryWeeklyInfoService {
    @Autowired
    private CountryWeeklyInfoRepository repository;


    public List<CountryWeeklyInfoDto> getAllWeeklyInfoByCountry(String country) {
        Optional<CountryWeeklyInfo> byId = repository.findById(country);
        return byId.stream()
                .map(e -> new CountryWeeklyInfoDto(
                        e.getCountry(),
                        e.getYear_week(),
                        e.getCases(),
                        e.getDeaths()))
                .collect(Collectors.toList());
    }

    public List<String> getAllCountries() {
        return repository.findALlCountries();
    }
}

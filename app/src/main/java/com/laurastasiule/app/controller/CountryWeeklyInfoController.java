package com.laurastasiule.app.controller;

import com.laurastasiule.app.dto.CountryWeeklyInfoDto;
import com.laurastasiule.app.service.CountryWeeklyInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Api(value = "country-info")
@RequestMapping("/country-info")
public class CountryWeeklyInfoController {
    @Autowired
    private CountryWeeklyInfoService service;

    @RequestMapping(method = RequestMethod.GET)
    @ApiOperation(value = "Get info by country", notes = "Returns all weekly info by country name")
    List<CountryWeeklyInfoDto> getAllInfoByCountry(@RequestBody String country) {
        return service.getAllWeeklyInfoByCountry(country);
    }

    @RequestMapping(method = RequestMethod.GET, path = "/countries")
    @ApiOperation(value = "Get info by country", notes = "Returns all weekly info by country name")
    List<String> getAllCountries() {
        return service.getAllCountries();
    }
}

package com.laurastasiule.app.repository;

import com.laurastasiule.app.domain.CountryWeeklyInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CountryWeeklyInfoRepository extends JpaRepository<CountryWeeklyInfo, String> {

    @Query("SELECT DISTINCT c.country FROM CountryWeeklyInfo c ORDER BY c.country")
    List<String> findALlCountries();
}

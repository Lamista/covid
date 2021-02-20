package com.laurastasiule.app.repository;

import com.laurastasiule.app.domain.CountryWeeklyData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface CountryWeeklyDataRepository extends JpaRepository<CountryWeeklyData, Long> {

//    @Query("SELECT DISTINCT c.country FROM CountryWeeklyData c ORDER BY c.country")
//    List<String> findALlCountries();
}

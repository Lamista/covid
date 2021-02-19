package com.laurastasiule.app.dto;

public class CountryWeeklyInfoDto {

    private String country;
    private String year_week;
    private int cases;
    private int deaths;

    public CountryWeeklyInfoDto() {

    }

    public CountryWeeklyInfoDto(String country, String year_week, int cases, int deaths) {
        this.country = country;
        this.year_week = year_week;
        this.cases = cases;
        this.deaths = deaths;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getYear_week() {
        return year_week;
    }

    public void setYear_week(String year_week) {
        this.year_week = year_week;
    }

    public int getCases() {
        return cases;
    }

    public void setCases(int cases) {
        this.cases = cases;
    }

    public int getDeaths() {
        return deaths;
    }

    public void setDeaths(int deaths) {
        this.deaths = deaths;
    }
}

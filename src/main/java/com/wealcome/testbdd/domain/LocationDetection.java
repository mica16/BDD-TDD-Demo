package com.wealcome.testbdd.domain;

public class LocationDetection {

    private static final String PARIS = "Paris";

    public static boolean isWithinParis(String point) {
        return point.contains(PARIS);
    }

}

package com.wealcome.testbdd.domain;

import java.util.Objects;

public final class Travel {

    private final String startPoint;
    private final String destinationPoint;

    public Travel(String startPoint, String destinationPoint) {
        this.startPoint = startPoint;
        this.destinationPoint = destinationPoint;
    }

    public ChargeStrategy createCharge() {
        if (isIntraMural())
            return new IntraMuralChargeStrategy();
        if (isEnteringParis())
            return new EnteringParisChargeStrategy();
        return new LeavingParisChargeStrategy();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Travel travel = (Travel) o;
        return Objects.equals(startPoint, travel.startPoint) &&
                Objects.equals(destinationPoint, travel.destinationPoint);
    }

    @Override
    public int hashCode() {
        return Objects.hash(startPoint, destinationPoint);
    }

    private boolean isIntraMural() {
        return LocationDetection.isWithinParis(startPoint) && LocationDetection.isWithinParis(destinationPoint);
    }

    private boolean isEnteringParis() {
        return !LocationDetection.isWithinParis(startPoint) && LocationDetection.isWithinParis(destinationPoint);
    }
}

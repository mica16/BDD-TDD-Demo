package com.wealcome.testbdd.domain;

import java.util.Objects;

public class Booking {


    private final Customer customer;
    private final VTC vtc;
    private final String startPoint;
    private final String destinationPoint;

    public Booking(Customer customer, VTC vtc, String startPoint, String destinationPoint) {
        this.customer = customer;
        this.vtc = vtc;
        this.startPoint = startPoint;
        this.destinationPoint = destinationPoint;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Booking booking = (Booking) o;
        return Objects.equals(customer, booking.customer) &&
                Objects.equals(vtc, booking.vtc) &&
                Objects.equals(startPoint, booking.startPoint) &&
                Objects.equals(destinationPoint, booking.destinationPoint);
    }

    @Override
    public int hashCode() {

        return Objects.hash(customer, vtc, startPoint, destinationPoint);
    }

    @Override
    public String toString() {
        return "Booking{" +
                "customer=" + customer +
                ", vtc=" + vtc +
                ", startPoint='" + startPoint + '\'' +
                ", destinationPoint='" + destinationPoint + '\'' +
                '}';
    }
}

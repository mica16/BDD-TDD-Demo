package com.wealcome.testbdd.domain;

import java.util.Objects;

public class Booking {


    private final Customer customer;
    private final VTC vtc;
    private final Travel travel;

    public Booking(Customer customer, VTC vtc, Travel travel) {
        this.customer = customer;
        this.vtc = vtc;
        this.travel = travel;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Booking booking = (Booking) o;
        return Objects.equals(customer, booking.customer) &&
                Objects.equals(vtc, booking.vtc) &&
                Objects.equals(travel, booking.travel);
    }

    @Override
    public int hashCode() {
        return Objects.hash(customer, vtc, travel);
    }

    @Override
    public String toString() {
        return "Booking{" +
                "customer=" + customer +
                ", vtc=" + vtc +
                ", travel='" + travel + '\'' +
                '}';
    }
}

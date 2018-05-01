package com.wealcome.testbdd.adapters;

import com.wealcome.testbdd.domain.Booking;
import com.wealcome.testbdd.domain.repositories.BookingRepository;

import java.util.LinkedHashSet;
import java.util.Set;

public class InMemoryBookingRepository implements BookingRepository {

    private Set<Booking> bookings = new LinkedHashSet<>();

    public Set<Booking> all() {
        return bookings;
    }

    public void add(Booking booking) {
        bookings.add(booking);
    }

}

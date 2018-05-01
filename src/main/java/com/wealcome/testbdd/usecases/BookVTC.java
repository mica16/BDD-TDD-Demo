package com.wealcome.testbdd.usecases;

import com.wealcome.testbdd.domain.Booking;
import com.wealcome.testbdd.domain.Customer;
import com.wealcome.testbdd.domain.CustomerAccount;
import com.wealcome.testbdd.domain.VTC;
import com.wealcome.testbdd.domain.repositories.BookingRepository;
import com.wealcome.testbdd.domain.repositories.CustomerAccountRepository;

public class BookVTC {

    private final CustomerAccountRepository customerAccountRepository;
    private final BookingRepository bookingRepository;

    public BookVTC(CustomerAccountRepository customerAccountRepository, BookingRepository bookingRepository) {
        this.customerAccountRepository = customerAccountRepository;
        this.bookingRepository = bookingRepository;
    }

    public void handle(VTC vtc, String startPoint, String destinationPoint) {
        Customer customer = new Customer("def", "Jean-Michel", "DUPONT");
        applyBooking(new Booking(customer, vtc, startPoint, destinationPoint));
        chargeCustomer(customer);
    }

    private void applyBooking(Booking booking) {
        bookingRepository.add(booking);
    }

    private void chargeCustomer(Customer customer) {
        customerAccountRepository.byId(customer.getId()).ifPresent(CustomerAccount::charge);
    }
}

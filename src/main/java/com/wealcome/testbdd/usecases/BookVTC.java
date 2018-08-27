package com.wealcome.testbdd.usecases;

import com.wealcome.testbdd.domain.*;
import com.wealcome.testbdd.domain.gateways.AuthenticationGateway;
import com.wealcome.testbdd.domain.repositories.BookingRepository;
import com.wealcome.testbdd.domain.repositories.CustomerAccountRepository;

public class BookVTC {

    private final CustomerAccountRepository customerAccountRepository;
    private final BookingRepository bookingRepository;
    private final AuthenticationGateway authenticationGateway;

    public BookVTC(CustomerAccountRepository customerAccountRepository,
                   BookingRepository bookingRepository,
                   AuthenticationGateway authenticationGateway) {
        this.customerAccountRepository = customerAccountRepository;
        this.bookingRepository = bookingRepository;
        this.authenticationGateway = authenticationGateway;
    }

    public void handle(VTC vtc, Travel travel) {
        authenticationGateway.currentCustomer().ifPresent(customer -> {
            applyBooking(new Booking(customer, vtc, travel));
            chargeCustomer(customer, travel);
        });
    }

    private void applyBooking(Booking booking) {
        bookingRepository.add(booking);
    }

    private void chargeCustomer(Customer customer, Travel travel) {
        customerAccountRepository.byId(customer.getId()).ifPresent(customerAccount ->
                customerAccount.charge(travel.createCharge())
        );
    }
}

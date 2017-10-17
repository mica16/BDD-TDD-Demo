package com.wealcome.testbdd.domain.gateways;

import com.wealcome.testbdd.domain.Customer;

import java.util.Optional;

public interface AuthenticationGateway {

    void authenticate(Customer c);

    Optional<Customer> currentCustomer();
}

package com.wealcome.testbdd.domain.repositories;

import com.wealcome.testbdd.domain.Customer;

import java.util.Set;

public interface CustomerRepository {

    void add(Customer customer);

    Set<Customer> all();
}

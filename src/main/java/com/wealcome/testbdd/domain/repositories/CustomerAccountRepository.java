package com.wealcome.testbdd.domain.repositories;

import com.wealcome.testbdd.domain.CustomerAccount;

import java.util.Optional;
import java.util.Set;

public interface CustomerAccountRepository {

    void add(CustomerAccount customerAccount);

    Optional<CustomerAccount> byId(String id);

    Set<CustomerAccount> all();
}

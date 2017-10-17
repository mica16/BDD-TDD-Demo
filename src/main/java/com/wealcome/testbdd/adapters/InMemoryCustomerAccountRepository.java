package com.wealcome.testbdd.adapters;

import com.wealcome.testbdd.domain.CustomerAccount;
import com.wealcome.testbdd.domain.repositories.CustomerAccountRepository;

import java.util.LinkedHashSet;
import java.util.Optional;
import java.util.Set;

public class InMemoryCustomerAccountRepository implements CustomerAccountRepository {

    private Set<CustomerAccount> customerAccounts = new LinkedHashSet<>();

    public void add(CustomerAccount customerAccount) {
        customerAccounts.add(customerAccount);
    }

    public Optional<CustomerAccount> byId(String id) {
        return customerAccounts.stream().filter(c -> c.getId().equals(id)).findFirst();
    }

    public Set<CustomerAccount> all() {
        return customerAccounts;
    }
}

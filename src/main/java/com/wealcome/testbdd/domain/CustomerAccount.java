package com.wealcome.testbdd.domain;

import java.math.BigDecimal;

public class CustomerAccount {

    private final String customerId;
    private BigDecimal balance;
    private BigDecimal creditNote;

    public CustomerAccount(String customerId, BigDecimal balance, BigDecimal creditNote) {
        this.customerId = customerId;
        this.balance = BigDecimal.valueOf(0);
        this.creditNote = BigDecimal.valueOf(0);
    }

    public String getId() {
        return customerId;
    }

    public void credit(BigDecimal balance, BigDecimal creditNote) {
        this.balance = balance;
        this.creditNote = creditNote;
    }
}

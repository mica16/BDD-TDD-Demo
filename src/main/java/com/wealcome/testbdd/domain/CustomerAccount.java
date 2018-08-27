package com.wealcome.testbdd.domain;

import java.math.BigDecimal;
import java.util.Objects;

public class CustomerAccount {

    private final String customerId;
    private BigDecimal balance;
    private BigDecimal creditNote;

    public CustomerAccount(String customerId, BigDecimal balance, BigDecimal creditNote) {
        this.customerId = customerId;
        this.balance = balance;
        this.creditNote = creditNote;
    }

    public String getId() {
        return customerId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CustomerAccount that = (CustomerAccount) o;
        return Objects.equals(customerId, that.customerId) &&
                Objects.equals(balance, that.balance) &&
                Objects.equals(creditNote, that.creditNote);
    }

    @Override
    public int hashCode() {

        return Objects.hash(customerId, balance, creditNote);
    }

    @Override
    public String toString() {
        return "CustomerAccount{" +
                "customerId='" + customerId + '\'' +
                ", balance=" + balance +
                ", creditNote=" + creditNote +
                '}';
    }

    public void charge(ChargeStrategy chargeStrategy) {
        Charge charge = chargeStrategy.charge(creditNote);
        balance = balance.subtract(charge.getDebit());
        creditNote = creditNote.subtract(charge.getConsumedCreditNote());
    }
}

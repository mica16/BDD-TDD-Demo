package com.wealcome.testbdd.domain;

import java.math.BigDecimal;

public class LeavingParisChargeStrategy implements ChargeStrategy {

    public Charge charge(BigDecimal creditNote) {
        BigDecimal price = BigDecimal.valueOf(50);
        BigDecimal consumedCreditNote = creditNote.min(price);
        return new Charge(price.subtract(consumedCreditNote), consumedCreditNote);
    }

}

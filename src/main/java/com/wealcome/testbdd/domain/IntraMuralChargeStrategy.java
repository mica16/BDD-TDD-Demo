package com.wealcome.testbdd.domain;

import java.math.BigDecimal;

public class IntraMuralChargeStrategy implements ChargeStrategy {

    public Charge charge(BigDecimal creditNote) {
        return new Charge(BigDecimal.valueOf(30));
    }
}

package com.wealcome.testbdd.domain;

import java.math.BigDecimal;

public interface ChargeStrategy {

    Charge charge(BigDecimal creditNote);

}

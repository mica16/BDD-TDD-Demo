package com.wealcome.testbdd.domain;

import java.math.BigDecimal;

final class Charge {

    private final BigDecimal debit;
    private final BigDecimal consumedCreditNote;

    Charge(BigDecimal debit, BigDecimal consumedCreditNote) {
        this.debit = debit;
        this.consumedCreditNote = consumedCreditNote;
    }

    Charge(BigDecimal debit) {
        this.debit = debit;
        this.consumedCreditNote = BigDecimal.valueOf(0);
    }

    BigDecimal getDebit() {
        return debit;
    }

    BigDecimal getConsumedCreditNote() {
        return consumedCreditNote;
    }
}

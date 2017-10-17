package com.wealcome.testbdd.domain.repositories;

import com.wealcome.testbdd.domain.VTC;

import java.util.Set;

public interface VTCRepository {
    void add(VTC vtc);

    Set<VTC> all();
}

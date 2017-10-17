package com.wealcome.testbdd.adapters;

import com.wealcome.testbdd.domain.VTC;
import com.wealcome.testbdd.domain.repositories.VTCRepository;

import java.util.LinkedHashSet;
import java.util.Set;

public class InMemoryVTCRepository implements VTCRepository {

    private Set<VTC> vtcs = new LinkedHashSet<>();

    public void add(VTC vtc) {
        vtcs.add(vtc);
    }

    public Set<VTC> all() {
        return vtcs;
    }
}

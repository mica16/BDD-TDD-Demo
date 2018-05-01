package com.wealcome.testbdd.domain;

import java.util.Objects;

public class VTC {

    private final String id;
    private String firstName;
    private final String lastName;

    public VTC(String id, String firstName, String lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        VTC vtc = (VTC) o;
        return Objects.equals(id, vtc.id) &&
                Objects.equals(firstName, vtc.firstName) &&
                Objects.equals(lastName, vtc.lastName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, lastName);
    }

    public String getFirstName() {
        return firstName;
    }

    @Override
    public String toString() {
        return "VTC{" +
                "id='" + id + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }
}

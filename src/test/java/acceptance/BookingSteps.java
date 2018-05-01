package acceptance;

import com.wealcome.testbdd.domain.Booking;
import com.wealcome.testbdd.domain.Customer;
import com.wealcome.testbdd.domain.VTC;
import com.wealcome.testbdd.domain.gateways.AuthenticationGateway;
import com.wealcome.testbdd.domain.repositories.BookingRepository;
import com.wealcome.testbdd.domain.repositories.CustomerAccountRepository;
import com.wealcome.testbdd.domain.repositories.VTCRepository;
import com.wealcome.testbdd.usecases.BookVTC;
import cucumber.api.PendingException;
import cucumber.api.java8.En;

import java.util.Set;

import static org.junit.Assert.assertEquals;

public class BookingSteps implements En {

    public BookingSteps(VTCRepository vtcRepository,
                        BookingRepository bookingRepository,
                        CustomerAccountRepository customerAccountRepository,
                        AuthenticationGateway authenticationGateway) {

        final BookVTC bookVTC = new BookVTC(customerAccountRepository, bookingRepository);
        BookingAttempt bookingAttempt = new BookingAttempt();

        When("^je tente de réserver le VTC \"([^\"]*)\" de \"([^\"]*)\" à \"([^\"]*)\"$",
                (String firstName, String startPoint, String destinationPoint) -> {
                    vtcRepository.all().stream().filter(vtc -> vtc.getFirstName().equals(firstName)).forEach(vtc -> {
                        bookVTC.handle(vtc, startPoint, destinationPoint);
                        bookingAttempt.setCustomer(authenticationGateway.currentCustomer().get());
                        bookingAttempt.setVTC(vtc);
                        bookingAttempt.setStartPoint(startPoint);
                        bookingAttempt.setDestinationPoint(destinationPoint);
                    });
                });

        Then("^la réservation est effective$", () -> {
            Set<Booking> bookings = bookingRepository.all();
            assertEquals(1, bookings.size());
            assertEquals(new Booking(bookingAttempt.customer, bookingAttempt.vtc,
                    bookingAttempt.startPoint, bookingAttempt.destinationPoint), bookings.iterator().next());
        });

        Then("^la réservation n'est pas effective$", () -> {
            throw new PendingException();
        });
        And("^et une alerte pour insuffisance de solde se lève$", () -> {
            throw new PendingException();
        });
        And("^et une alerte pour identification du client impossible se lève$", () -> {
            throw new PendingException();
        });
    }

    private static class BookingAttempt {

        private Customer customer;
        private VTC vtc;
        private String startPoint;
        private String destinationPoint;

        void setCustomer(Customer customer) {
            this.customer = customer;
        }

        void setVTC(VTC VTC) {
            this.vtc = VTC;
        }

        void setStartPoint(String startPoint) {
            this.startPoint = startPoint;
        }

        void setDestinationPoint(String destinationPoint) {
            this.destinationPoint = destinationPoint;
        }
    }
}

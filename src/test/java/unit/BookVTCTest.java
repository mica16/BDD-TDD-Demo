package unit;

import com.wealcome.testbdd.adapters.InMemoryAuthenticationGateway;
import com.wealcome.testbdd.adapters.InMemoryBookingRepository;
import com.wealcome.testbdd.adapters.InMemoryCustomerAccountRepository;
import com.wealcome.testbdd.domain.*;
import com.wealcome.testbdd.domain.gateways.AuthenticationGateway;
import com.wealcome.testbdd.domain.repositories.BookingRepository;
import com.wealcome.testbdd.domain.repositories.CustomerAccountRepository;
import com.wealcome.testbdd.usecases.BookVTC;
import de.bechte.junit.runners.context.HierarchicalContextRunner;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

import java.math.BigDecimal;

import static org.hamcrest.CoreMatchers.hasItem;
import static org.hamcrest.MatcherAssert.assertThat;

@RunWith(HierarchicalContextRunner.class)
public class BookVTCTest {

    private final BookingRepository bookingRepository = new InMemoryBookingRepository();
    private final CustomerAccountRepository customerAccountRepository = new InMemoryCustomerAccountRepository();
    private final AuthenticationGateway authenticationGateway = new InMemoryAuthenticationGateway();
    private final VTC marcVTC = new VTC("abc", "Marc", "DUPUIS");
    private final Customer jeanMichelCustomer = new Customer("def", "Jean-Michel", "DUPONT");
    private final Customer patrickCustomer = new Customer("ghi", "Patrick", "Thomas");
    private static final String ARCHEREAU_PARIS = "43 rue Archereau 75019 Paris";
    private static final String CLISSON_PARIS = "2 rue Clisson 75013 Paris";
    private static final String VICTOR_HUGO_AUBERVILLIERS = "111 avenue Victor Hugo 93300 Aubervilliers";

    @Test
    public void shouldManageToBookAVTC() {
        authenticationGateway.authenticate(jeanMichelCustomer);
        assertCanBookAVTC(marcVTC, new Travel(ARCHEREAU_PARIS, CLISSON_PARIS));
    }

    public class IntraMural {

        public class OneCustomer {

            @Test
            public void shouldChargeCustomerAccountUponBookingWithoutBenefitingOfCreditNote() {
                authenticationGateway.authenticate(jeanMichelCustomer);
                initCustomerAccount(jeanMichelCustomer, 35, 10);
                bookVTC(marcVTC, new Travel(ARCHEREAU_PARIS, CLISSON_PARIS));
                assertThatCustomerAccountIsChargedUponBooking(customerAccount(jeanMichelCustomer, 5, 10));
            }

        }

        public class AnotherCustomer {

            @Test
            public void shouldChargeCustomerAccountUponBookingWithoutBenefitingOfCreditNote() {
                authenticationGateway.authenticate(patrickCustomer);
                initCustomerAccount(patrickCustomer, 46, 10);
                bookVTC(marcVTC, new Travel(ARCHEREAU_PARIS, CLISSON_PARIS));
                assertThatCustomerAccountIsChargedUponBooking(customerAccount(patrickCustomer, 16, 10));
            }

        }

    }

    public class LeavingParis {

        public class WithoutCreditNote {

            @Test
            public void shouldChargeCustomerAccountUponBooking() {
                authenticationGateway.authenticate(patrickCustomer);
                initCustomerAccount(patrickCustomer, 50, 0);
                bookVTC(marcVTC, new Travel(ARCHEREAU_PARIS, VICTOR_HUGO_AUBERVILLIERS));
                assertThatCustomerAccountIsChargedUponBooking(customerAccount(patrickCustomer, 0, 0));
            }

        }

        public class WithCreditNote {

            @Before
            public void setUp() {
                authenticationGateway.authenticate(patrickCustomer);
            }

            @Test
            public void shouldChargeCustomerAccountUponBookingUsingFullCreditNote() {
                initCustomerAccount(patrickCustomer, 50, 10);
                bookVTC(marcVTC, new Travel(ARCHEREAU_PARIS, VICTOR_HUGO_AUBERVILLIERS));
                assertThatCustomerAccountIsChargedUponBooking(customerAccount(patrickCustomer, 10, 0));
            }

            @Test
            public void shouldChargeCustomerAccountUponBookingUsingAnExceedingCreditNote() {
                initCustomerAccount(patrickCustomer, 50, 51);
                bookVTC(marcVTC, new Travel(ARCHEREAU_PARIS, VICTOR_HUGO_AUBERVILLIERS));
                assertThatCustomerAccountIsChargedUponBooking(customerAccount(patrickCustomer, 50, 1));
            }

        }

    }

    public class EnteringParis {

        @Test
        public void shouldBeFreeWithoutAlteringCreditNote() {
            authenticationGateway.authenticate(patrickCustomer);
            initCustomerAccount(patrickCustomer, 50, 10);
            bookVTC(marcVTC, new Travel(VICTOR_HUGO_AUBERVILLIERS, ARCHEREAU_PARIS));
            assertThatCustomerAccountIsChargedUponBooking(customerAccount(patrickCustomer, 50, 10));
        }

    }

    private void initCustomerAccount(Customer customer, int balance, int creditNote) {
        CustomerAccount customerAccount = customerAccount(customer, balance, creditNote);
        customerAccountRepository.add(customerAccount);
    }

    private void assertCanBookAVTC(VTC vtc, Travel travel) {
        bookVTC(vtc, travel);
        assertVTCIsBooked(jeanMichelCustomer, vtc, travel);
    }

    private void bookVTC(VTC vtc, Travel travel) {
        new BookVTC(customerAccountRepository, bookingRepository, authenticationGateway).handle(vtc, travel);
    }

    private void assertVTCIsBooked(Customer customer, VTC vtc, Travel travel) {
        assertThat(bookingRepository.all(), hasItem(new Booking(customer, vtc, travel)));
    }

    private CustomerAccount customerAccount(Customer customer, int balance, int creditNote) {
        return new CustomerAccount(customer.getId(), BigDecimal.valueOf(balance), BigDecimal.valueOf(creditNote));
    }

    private void assertThatCustomerAccountIsChargedUponBooking(CustomerAccount expectedCustomerAccount) {
        assertThat(customerAccountRepository.all(), hasItem(expectedCustomerAccount));
    }

}

package unit;

import com.wealcome.testbdd.adapters.InMemoryBookingRepository;
import com.wealcome.testbdd.adapters.InMemoryCustomerAccountRepository;
import com.wealcome.testbdd.domain.Booking;
import com.wealcome.testbdd.domain.Customer;
import com.wealcome.testbdd.domain.CustomerAccount;
import com.wealcome.testbdd.domain.VTC;
import com.wealcome.testbdd.domain.repositories.BookingRepository;
import com.wealcome.testbdd.domain.repositories.CustomerAccountRepository;
import com.wealcome.testbdd.usecases.BookVTC;
import de.bechte.junit.runners.context.HierarchicalContextRunner;
import org.junit.Test;
import org.junit.runner.RunWith;

import java.math.BigDecimal;

import static org.hamcrest.CoreMatchers.hasItem;
import static org.hamcrest.MatcherAssert.assertThat;

@RunWith(HierarchicalContextRunner.class)
public class BookVTCTest {

  private final BookingRepository bookingRepository = new InMemoryBookingRepository();
  private final CustomerAccountRepository customerAccountRepository = new InMemoryCustomerAccountRepository();
  private final VTC marcVTC = new VTC("abc", "Marc", "DUPUIS");
  private final Customer jeanMichelCustomer = new Customer("def", "Jean-Michel", "DUPONT");
  private static final String ARCHEREAU_PARIS = "43 rue Archereau 75019 Paris";
  private static final String CLISSON_PARIS = "2 rue Clisson 75013 Paris";

  @Test
  public void shouldManageToBookAVTC() {
    assertCanBookAVTC(marcVTC, ARCHEREAU_PARIS, CLISSON_PARIS);
  }

  public class IntraMural {

    @Test
    public void shouldChargeCustomerAccountUponBooking() {
      CustomerAccount initialJeanMichelCustomerAccount = customerAccount(35, 10);
      customerAccountRepository.add(initialJeanMichelCustomerAccount);
      bookVTC(marcVTC, ARCHEREAU_PARIS, CLISSON_PARIS);
      assertThatCustomerAccountIsChargedUponBooking(customerAccount(5, 10));
    }

  }

  private void assertCanBookAVTC(VTC vtc, String startPoint, String endPoint) {
    bookVTC(vtc, startPoint, endPoint);
    assertVTCIsBooked(jeanMichelCustomer, vtc, startPoint, endPoint);
  }

  private void bookVTC(VTC vtc, String startPoint, String endPoint) {
    new BookVTC(customerAccountRepository, bookingRepository).handle(vtc, startPoint, endPoint);
  }

  private void assertVTCIsBooked(Customer customer, VTC vtc, String startPoint, String endPoint) {
    assertThat(bookingRepository.all(), hasItem(new Booking(customer, vtc, startPoint, endPoint)));
  }

  private CustomerAccount customerAccount(int balance, int creditNote) {
    return new CustomerAccount(jeanMichelCustomer.getId(), BigDecimal.valueOf(balance), BigDecimal.valueOf(creditNote));
  }

  private void assertThatCustomerAccountIsChargedUponBooking(CustomerAccount expectedCustomerAccount) {
    assertThat(customerAccountRepository.all(), hasItem(expectedCustomerAccount));
  }

}

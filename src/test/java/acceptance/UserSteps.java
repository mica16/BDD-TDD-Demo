package acceptance;

import com.wealcome.testbdd.domain.gateways.AuthenticationGateway;
import com.wealcome.testbdd.domain.Customer;
import com.wealcome.testbdd.domain.repositories.CustomerRepository;
import cucumber.api.PendingException;
import cucumber.api.java8.En;

import java.util.Optional;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class UserSteps implements En {

    public UserSteps(CustomerRepository customerRepository,
                     AuthenticationGateway authenticationGateway) {
        Given("^je suis authentifié en tant que \"([^\"]*)\"$", (String firstName) -> {
            Optional<Customer> optionalCustomer =
                    customerRepository.all().stream().filter(c -> c.getFirstName().equals(firstName)).findFirst();
            optionalCustomer.ifPresent(authenticationGateway::authenticate);
            assertTrue(authenticationGateway.currentCustomer().isPresent());
        });

        Given("^je ne suis pas authentifié$", () -> {
            // Write code here that turns the phrase above into concrete actions
            throw new PendingException();
        });
    }
}

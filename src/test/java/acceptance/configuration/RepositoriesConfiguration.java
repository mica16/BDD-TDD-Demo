package acceptance.configuration;

import com.wealcome.testbdd.adapters.InMemoryBookingRepository;
import com.wealcome.testbdd.adapters.InMemoryCustomerAccountRepository;
import com.wealcome.testbdd.adapters.InMemoryCustomerRepository;
import com.wealcome.testbdd.adapters.InMemoryVTCRepository;
import com.wealcome.testbdd.domain.repositories.BookingRepository;
import com.wealcome.testbdd.domain.repositories.CustomerAccountRepository;
import com.wealcome.testbdd.domain.repositories.CustomerRepository;
import com.wealcome.testbdd.domain.repositories.VTCRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

@Configuration
public class RepositoriesConfiguration {

    @Bean
    @Scope("cucumber-glue")
    public CustomerRepository customerRepository() {
        return new InMemoryCustomerRepository();
    }

    @Bean
    @Scope("cucumber-glue")
    public VTCRepository vtcRepository() {
        return new InMemoryVTCRepository();
    }

    @Bean
    @Scope("cucumber-glue")
    public CustomerAccountRepository customerAccountRepository() {
        return new InMemoryCustomerAccountRepository();
    }

    @Bean
    @Scope("cucumber-glue")
    public BookingRepository bookingRepository() {
        return new InMemoryBookingRepository();
    }


}

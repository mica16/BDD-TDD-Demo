package acceptance.configuration;

import com.wealcome.testbdd.adapters.InMemoryAuthenticationGateway;
import com.wealcome.testbdd.domain.gateways.AuthenticationGateway;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

@Configuration
public class GatewaysConfiguration {

    @Bean
    @Scope("cucumber-glue")
    public AuthenticationGateway authenticationGateway() {
        return new InMemoryAuthenticationGateway();
    }

}

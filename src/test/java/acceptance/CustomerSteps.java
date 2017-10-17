package acceptance;

import com.wealcome.testbdd.domain.Customer;
import com.wealcome.testbdd.domain.repositories.CustomerRepository;
import cucumber.api.DataTable;
import cucumber.api.java8.En;

import java.util.List;
import java.util.Map;

public class CustomerSteps implements En {

    public CustomerSteps(CustomerRepository customerRepository) {
        Given("^des clients existent:$", (DataTable dataTable) -> {
            List<Map<String, String>> dataMaps = dataTable.asMaps(String.class, String.class);
            dataMaps.forEach(dataMap -> {
                Customer customer = new Customer(dataMap.get("id"), dataMap.get("firstName"), dataMap.get("lastName"));
                customerRepository.add(customer);
            });
        });
    }
}

package acceptance;

import com.wealcome.testbdd.domain.VTC;
import com.wealcome.testbdd.domain.repositories.VTCRepository;
import cucumber.api.DataTable;
import cucumber.api.java8.En;

import java.util.List;
import java.util.Map;

public class VTCSteps implements En {

    public VTCSteps(VTCRepository vtcRepository) {
        Given("^des VTC existent:$", (DataTable dataTable) -> {
            List<Map<String, String>> dataMaps = dataTable.asMaps(String.class, String.class);
            dataMaps.forEach(dataMap -> {
                VTC vtc = new VTC(dataMap.get("id"), dataMap.get("firstName"), dataMap.get("lastName"));
                vtcRepository.add(vtc);
            });
        });
    }
}

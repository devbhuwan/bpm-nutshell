package camunda.bpm.controller;

import camunda.bpm.BPMServiceApplicationTest;
import org.assertj.core.api.Assertions;
import org.junit.Test;

/**
 * <p> </p>
 *
 * @author Bhuwan Prasad Upadhyay
 */
public class RESTBpmServiceTest extends BPMServiceApplicationTest {

    @Test
    public void GET_all_Then_Response_Contains_List_Of_String() {
        Assertions.assertThat(restTemplate.getForObject("/all", String[].class))
                .hasSize(1);
    }
}
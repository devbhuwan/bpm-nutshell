package camunda.bpm.service;

import camunda.bpm.BPMServiceApplicationTest;
import org.camunda.bpm.engine.runtime.ProcessInstance;
import org.camunda.bpm.engine.variable.Variables;
import org.junit.Test;

import static org.camunda.bpm.engine.test.assertions.bpmn.BpmnAwareAssertions.assertThat;
import static org.camunda.bpm.engine.test.assertions.bpmn.BpmnAwareTests.*;

/**
 * <p> </p>
 *
 * @author Bhuwan Prasad Upadhyay
 */
public class BPMServiceSubProcessApplicationTest extends BPMServiceApplicationTest {

    @Test
    public void givenEmbeddedSubProcess_whenExecuteTaskInProces_thenVariablesSeenByAllTask() {
        ProcessInstance processInstance = runtimeService()
                .startProcessInstanceByKey("EMBEDDED_SUB_PROCESS",
                        Variables.putValue("startVar", true));
        assertThat(processInstance).isWaitingAt("ATask");
        complete(task(processInstance), Variables.putValue("subProcessVar", "ok"));
        assertThat(processInstance).isWaitingAt("BTask");
    }

}

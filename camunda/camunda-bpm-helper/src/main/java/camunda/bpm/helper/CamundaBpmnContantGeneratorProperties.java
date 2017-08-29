package camunda.bpm.helper;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * <p> </p>
 *
 * @author Bhuwan Prasad Upadhyay
 */
@ConfigurationProperties(prefix = "camunda.bpm.generator")
@Getter
@Setter
public class CamundaBpmnContantGeneratorProperties {

    private boolean auto = Boolean.TRUE;
}

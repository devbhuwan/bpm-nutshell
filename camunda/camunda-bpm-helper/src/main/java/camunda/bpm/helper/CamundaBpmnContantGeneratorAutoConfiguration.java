package camunda.bpm.helper;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import javax.annotation.PostConstruct;

/**
 * <p> </p>
 *
 * @author Bhuwan Prasad Upadhyay
 */
@Configuration
@EnableConfigurationProperties(CamundaBpmnContantGeneratorProperties.class)
@Slf4j
public class CamundaBpmnContantGeneratorAutoConfiguration {

    @PostConstruct
    public void init() {
        log.info("Init Auto Configuration [{}]", CamundaBpmnContantGeneratorAutoConfiguration.class.getSimpleName());

    }
}

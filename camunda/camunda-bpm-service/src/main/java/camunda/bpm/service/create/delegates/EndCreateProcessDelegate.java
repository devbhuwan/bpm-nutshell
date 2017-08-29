package camunda.bpm.service.create.delegates;

import lombok.extern.slf4j.Slf4j;
import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;
import org.springframework.stereotype.Component;

/**
 * <p> </p>
 *
 * @author Bhuwan Prasad Upadhyay
 */
@Component
@Slf4j
public class EndCreateProcessDelegate implements JavaDelegate {

    @Override
    public void execute(DelegateExecution delegateExecution) throws Exception {
        log.info("Delegate [{}]", EndCreateProcessDelegate.class.getSimpleName());
    }
}

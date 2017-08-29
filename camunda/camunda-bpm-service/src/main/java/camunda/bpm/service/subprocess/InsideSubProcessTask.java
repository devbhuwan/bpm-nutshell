package camunda.bpm.service.subprocess;

import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;
import org.springframework.stereotype.Component;
import org.springframework.util.Assert;

/**
 * <p> </p>
 *
 * @author Bhuwan Prasad Upadhyay
 */
@Component
public class InsideSubProcessTask implements JavaDelegate {

    @Override
    public void execute(DelegateExecution delegateExecution) throws Exception {
        Assert.isTrue((Boolean) delegateExecution.getVariable("startVar"), "");
    }

}

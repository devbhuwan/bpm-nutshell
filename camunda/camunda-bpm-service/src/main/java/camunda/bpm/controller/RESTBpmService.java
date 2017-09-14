package camunda.bpm.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

/**
 * <p> </p>
 *
 * @author Bhuwan Prasad Upadhyay
 */
@RestController
public class RESTBpmService {

    @GetMapping("/all")
    public List<String> all() {
        return Collections.singletonList("Ok");
    }

}

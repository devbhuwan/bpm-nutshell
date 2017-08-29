package camunda.bpm.helper;

import camunda.bpm.App;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

/**
 * <p> </p>
 *
 * @author Bhuwan Prasad Upadhyay
 */
@SpringBootApplication
@ComponentScan(basePackageClasses = App.class)
public class ProcessApp {

    public static void main(String[] args) {
        SpringApplication.run(ProcessApp.class, args);
    }

}

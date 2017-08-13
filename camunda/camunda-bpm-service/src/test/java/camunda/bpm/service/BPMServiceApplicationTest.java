package camunda.bpm.service;

import org.camunda.bpm.engine.RepositoryService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertNotNull;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = BPMServiceApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class BPMServiceApplicationTest {

    @Autowired
    private RepositoryService repositoryService;

    @Test
    public void name() {
        assertNotNull(repositoryService);
    }

}
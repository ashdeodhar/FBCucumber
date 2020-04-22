package runner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "./src/main/java/Features/FBUserRegistration.feature",
		glue = {"stepDefinition"},
		dryRun = false,
		format = {"pretty", "html:test-output", "json:json-output/cucumber.json", "junit:junit-out/cucumber.xml"},
		monochrome = true,
		strict = true
		)


public class testRunner {

}

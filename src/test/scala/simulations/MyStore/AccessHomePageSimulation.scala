package MyStore

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef._

import scala.concurrent.duration._

class AccessHomePageSimulation extends Simulation {

val httpProtocol = http
.baseUrl("http://automationpractice.com/")
    val scn: ScenarioBuilder = scenario("Access Home Page")
    .exec(http("Access Home Page")
    .get("/index.php"))    
  
  setUp(scn.inject(rampUsers(1000) during (15 seconds)).protocols(httpProtocol))
    }
package test.scala.com.gatling.tests

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class APITest1 extends Simulation{

  //protocol
  val httpProtocol = http
    .baseUrl("https://reqres.in/api/users")

  //scenario
    val scn = scenario("API Test")
    .exec(
      http("01_Get_API")
      .get("/2")
        .check(
                status.is(200),
                jsonPath("$.data.first_name").is("Janet")
              )
    )
    .pause(1)

  //setup
  setUp(
    scn.inject(rampUsers(5).during(10)).protocols(httpProtocol)
      )

}

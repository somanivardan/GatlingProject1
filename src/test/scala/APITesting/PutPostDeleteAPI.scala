package test.scala.APITesting

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class PutPostDeleteAPI extends Simulation{

  //protocol
  val httpProtocol = http
    .baseUrl("https://reqres.in/api")


  //scenario
  val CreateUserScn = scenario("Create User")
    .exec(
      http("02_Post_API")
        .post("/users")
        .header("content-type","application/json")
        .body(RawFileBody("data/user.json"))
//        .body(StringBody(
//          """
//            |{
//            |    "name": "morpheus",
//            |    "job": "leader"
//            |}
//            |""".stripMargin))
        .check(
          status is 201,
          jsonPath("$.name") is "morpheus"
        )

    )
    .pause(1)

  //////PUT Request Scenario

    val UpdateUserScn = scenario("Update User")
    .exec(
      http("03_PUT_API")
        .put("/users/2")
        .header("content-type","application/json")
        .body(RawFileBody("data/user.json"))
        //        .body(StringBody(
        //          """
        //            |{
        //            |    "name": "morpheus",
        //            |    "job": "leader"
        //            |}
        //            |""".stripMargin))
        .check(
          status is 200,
          jsonPath("$.name") is "morpheus"
        )

    )
    .pause(1)

  /////////////////Delete Request Scenario

  val DeleteScn = scenario("Delete User")
    .exec(
      http("04_Delete_API")
        .delete("/users/2")
        .header("content-type","application/json")
        .check(status.is(204))
    )
    .pause(1)


  /////////////////


  //setup
  setUp(
    CreateUserScn.inject(rampUsers(10).during(5)),
    UpdateUserScn.inject(rampUsers(5).during(3)),
    DeleteScn.inject(rampUsers(5).during(5))
      ).protocols(httpProtocol)

}

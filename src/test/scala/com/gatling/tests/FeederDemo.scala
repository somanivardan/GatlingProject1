package com.gatling.tests

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class FeederDemo extends Simulation{

//protocol
val httpProtocol = http.baseUrl("http://computer-database.gatling.io")

//scenario
val feeder=csv("data/data1.csv").circular

val scn = scenario ("Feeder Demo")
  .feed(feeder)
  .exec { session =>
    println("Name:" + session("name").as[String])
    println("Job:" + session("job").as[String])
    session
  }
  .pause(1)

  .exec(
    http("GO to ${page}")
      .get("/#{page}")
  )


//  .repeat(2)
//  {
//    feed(feeder)
//    .exec { session =>
//     println("Name:" + session("name").as[String])
//     println("Job:" + session("job").as[String])
//     session
//           }
//  }


//setup
setUp(
  scn.inject((atOnceUsers(3))).protocols(httpProtocol)
)

}

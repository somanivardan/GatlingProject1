package com.gatling.tests

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class ComputerEdit extends Simulation {

	val httpProtocol = http
		.baseUrl("http://computer-database.gatling.io")
		.inferHtmlResources(BlackList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*detectportal\.firefox\.com.*"""), WhiteList())
		.acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en-GB,en-US;q=0.9,en;q=0.8")
		.upgradeInsecureRequestsHeader("1")
		.userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36")


	val search=exec(http("Home")
		.get("/computers"))
		.pause(4)

		.exec(http("Search")
			.get("/computers?f=Ace"))
		.pause(4)

		.exec(http("Select")
			.get("/computers/381"))
		.pause(4)

	val edit=exec(http("Edit")
		.post("/computers/381")
		.formParam("name", "ACE")
		.formParam("introduced", "2022-01-01")
		.formParam("discontinued", "2032-01-01")
		.formParam("company", "1"))
		.pause(4)

	//
	val scn = scenario("ComputerEdit").exec(search,edit)
	val users = scenario("Users").exec(search)
	val admin = scenario("Admin").exec(search,edit)


//	setUp(users.inject(atOnceUsers(1))).protocols(httpProtocol)
	setUp(
				users.inject(rampUsers(10).during(10)),
				admin.inject(rampUsers(4).during(10))
				).protocols(httpProtocol)

}
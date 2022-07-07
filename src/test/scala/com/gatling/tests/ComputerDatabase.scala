package com.gatling.tests

import scala.concurrent.duration._
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class ComputerDatabase extends Simulation {

	val httpProtocol = http
		.baseUrl("http://computer-database.gatling.io")
		.inferHtmlResources(BlackList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*detectportal\.firefox\.com.*"""), WhiteList())
		.acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en-GB,en-US;q=0.9,en;q=0.8")
		.upgradeInsecureRequestsHeader("1")
		.userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36")

	//val headers_0 = Map("Proxy-Connection" -> "keep-alive")

/*	val headers_2 = Map(
		"Cache-Control" -> "max-age=0",
		"Origin" -> "http://computer-database.gatling.io",
		"Proxy-Connection" -> "keep-alive")
*/


	val scn = scenario("ComputerDatabase")
		.exec(http("01_Computers_Database_Page")
			.get("/")
		//	.headers(headers_0)
				)

		.pause(1)

		.exec(http("02_New_Computers_Page")
			.get("/computers/new")
			//.headers(headers_0)
			)

		.pause(1)

		.exec(http("03_Create_New_Computer")
			.post("/computers")
			//.headers(headers_2)
			.formParam("name", "Deloitte")
			.formParam("introduced", "2022-01-01")
			.formParam("discontinued", "2032-01-01")
			.formParam("company", "1"))

		.pause(1)

		.exec(http("04_Filter_Computer")
			.get("/computers?f=Deloitte")
			//.headers(headers_0)
			)

	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}
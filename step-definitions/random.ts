import { Given, When, Then } from "@cucumber/cucumber";
import assert from "assert";
import { OurWorld } from "../types";
// Using a cucumber expression
Given("I view {string}", async function (this: OurWorld, url: string) {
  await this.page.goto(url);
});
// Using a regular expression
When("When I click click button", async function () {
  // Scroll to the link...
  await this.page.click("#btn");
});

When("I click click button", async function () {
  await this.page.click("#btn");
});

Then("I expect clicked to be shown", async function () {
  const heading1Text = (await this.page.textContent("#clicked")) as string;
  assert.strictEqual(heading1Text, "clicked");
});

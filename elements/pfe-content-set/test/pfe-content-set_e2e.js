const element = require("../package.json").pfelement.elementName;

describe(element, () => {
  before(() => {
    browser.url(`/elements/${element}/demo`);

    const accordion = $("#accordion");
    accordion.scrollIntoView();

    accordion.$(function() {
      this.querySelector("pfe-accordion").toggle(0);
    });
  });

  it("should take a screenshot", () => {
    browser.saveScreen(element);
  });

  it("should compare to the baseline", () => {
    expect(browser.checkScreen(element)).toBeLessThan(1.25);
  });
});
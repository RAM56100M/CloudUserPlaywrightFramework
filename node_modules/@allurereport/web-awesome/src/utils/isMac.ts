function testPlatform(re: RegExp) {
  return typeof window !== "undefined" && window.navigator != null
    ? re.test(window.navigator["userAgentData"]?.platform || window.navigator.platform)
    : false;
}

export const isMac = testPlatform(/^Mac/i);

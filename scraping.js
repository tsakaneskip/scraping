const wdio = require("webdriverio");

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "11",
    deviceName: "emulator-5554",
    appPackage: "com.bcy.fsapp",
    appActivity: "com.bcy.fsapp.activity.MainActivity",
    automationName: "UiAutomator2",
    noReset: true
  }
};

async function main () {
  const client = await wdio.remote(opts);

  await client.deleteSession();
}

main();

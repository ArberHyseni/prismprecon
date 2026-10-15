import { createApp } from "./app";
import { config, mailConfigured } from "./config";

// On cPanel, Passenger supplies PORT and proxies the domain to this process.
createApp().listen(config.port, () => {
  console.log(`Prism server listening on :${config.port} (mail ${mailConfigured ? "on" : "off"})`);
});

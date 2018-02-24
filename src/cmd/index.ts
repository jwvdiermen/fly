#!/usr/bin/env node

import { root } from '../cmd/root'
require("../cmd/apps");
require("../cmd/orgs");
require("../cmd/deploy");
require("../cmd/releases");
require("../cmd/secrets");
require("../cmd/test");
require("../cmd/server");
require("../cmd/hostnames");
require("../cmd/login");
require("../cmd/fetch");
require("../cmd/logs");

import { exec } from "commandpost";

exec(root, process.argv)
  .catch(err => {
    if (err instanceof Error) {
      console.error(err.stack);
    } else {
      console.error(err);
    }
    process.exit(1);
  });
#!/usr/bin/env node

import { argv } from "process";
import CmdExec from "./cmdExec";

new CmdExec(argv).exec();
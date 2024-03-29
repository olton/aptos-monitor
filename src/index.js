import pkg from "../package.json"
import path from "path"
import { fileURLToPath } from 'url'
import {run} from "./modules/server"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

globalThis.rootPath = __dirname
globalThis.version = pkg.version

run(path.resolve(__dirname, "config.json"))
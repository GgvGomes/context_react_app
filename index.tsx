import { AppRegistry } from "react-native/types";
import App from "./src/pages/App";
import {expo as app} from './app.json'

AppRegistry.registerComponent(app.name, () => App);
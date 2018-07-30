import { createStackNavigator } from "react-navigation";
import HomeContainer from "./HomeContainer.js";

export default createStackNavigator(
    {
        Home : {screen: HomeContainer}
    }
);
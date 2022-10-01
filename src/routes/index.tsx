import { NavigationContainer } from "@react-navigation/native";
import { UserProvider } from "../context/UserProvider";

import { AppRoutes } from "./app.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </NavigationContainer>
  );
}

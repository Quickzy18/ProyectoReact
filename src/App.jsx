import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {

  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer greeting="Welcome Welcome a mi tienda :3" />
    </ChakraProvider>
  );
};

export default App;
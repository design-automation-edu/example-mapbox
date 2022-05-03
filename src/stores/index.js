import React from "react";
// ----------------------------------------------------------------------------
// React Context
// ----------------------------------------------------------------------------
const storesContext = React.createContext({
  data: []
});
export const useStores = () => React.useContext(storesContext);

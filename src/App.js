import React, { Fragment } from "react";

import Header from "./components/header/header.jsx"
import SearchPage from "./components/search-page/search-page.jsx"


const App = () => {
  return (
    <Fragment>
      <Header />
      <SearchPage />
    </Fragment>
  )
}


export default App;
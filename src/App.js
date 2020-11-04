import React, { Fragment } from "react";

import Header from "./components/header/header.jsx"
import SearchPage from "./pages/search-page/search-page.jsx"


const App = () => {
  return (
    <Fragment>
      <Header />
      <SearchPage />
    </Fragment>
  )
}


export default App;
import React from "react";
import Header from "./components/Navbar/navbar/Header";
import PopupCard from "./components/Navbar/popupcard/popupcard";
import successImage from "./assets/images/done-rafiki-2.svg";
import failedImage from "./assets/images/404-error-page-not-found-with-people-connecting-a-plug-rafiki.svg";
import { ConnectionSuccess, ConnectionFailed, MigrationSuccess, MigrationFailed } from './components/Navbar/popupcard/popup';



const App = () => {

  return (
    <div>
      <Header/>
      <ConnectionSuccess/>
      <MigrationFailed/>
      {/* <MigrationSuccess/> */}
      {/* {/* <button onClick={() => successPopup}>successPopup</button> */}
      {/* <button onClick={() => migrationSuccessPopup}>migrationsuccessPopup</button> */} 
    </div>
  );
};


export default App;

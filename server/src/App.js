import React from "react";

/** import all components */

/** auth middleware */
import { AuthorizeUser, ProtectRoute } from "./middleware/auth";

/** root routes */

export default function App() {
  return (
    <main>
      <>
        <h1>Hello World</h1>
      </>
    </main>
  );
}

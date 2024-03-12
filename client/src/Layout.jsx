import React, { Children } from "react";

export default function Layout({ children }) {
  return (
    <div className="app" >
      <header className="app-header">
        <main className="container w-[560px]">
          {children}
        </main>
      </header>
    </div>
  );
}


// import { defineConfig } from "sanity";
// import {structureTool} from "sanity/structure";
// import schemas from "./app/sanity/schemas";

// const config = defineConfig({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
//   title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE as string,
//   dataset: "production",
//   apiVersion: "2023-06-18",
//   basePath: "/admin",
//   plugins: [structureTool()],
//   schema: { types: schemas },
// });

// export default config;

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { codeInput } from "@sanity/code-input";
import { table } from "@sanity/table";
import schemas from "./app/sanity/schemas";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE as string,
  dataset: "production",
  apiVersion: "2023-06-18",
  basePath: "/admin",
  plugins: [
    deskTool(), // Desk Tool Studio ke liye
    codeInput(), // Code Block Plugin
    table(), // Table Plugin
  ],
  schema: { types: schemas },
});

export default config;

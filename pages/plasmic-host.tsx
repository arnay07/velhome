import { PlasmicCanvasHost } from "@plasmicapp/loader-nextjs";
import * as React from "react";
import { PLASMIC } from "../plasmic-init";

// Configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

export default function PlasmicHost() {
  return PLASMIC && <PlasmicCanvasHost />;
}

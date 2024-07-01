import React from "react";
import Sidemenu from "@/components/sidemenu";
import Recommendation from "@/components/Recommendation";
import Vids from "@/components/feed"; // Adjust the import if necessary to point to the correct file

export default function Page() {
  return (
    <div className="flex">
      <div className="pt-20">
        <Sidemenu />
      </div>
      <div className="pt-20 flex-grow">
        <Recommendation />
        <Vids />
      </div>
    </div>
  );
}

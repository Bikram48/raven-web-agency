import React from "react";
import "./team.css";
import { john, timmy, dmitry } from "./imports.js";
import TeamMember from "./team-member/TeamMember";

export default function Team() {
  return (
    <div className="raven__team section__padding container">
      <div className="raven__team-title title__margin">
        <h3>Our Team</h3>
      </div>

      <div className="raven__team-contents">
        <TeamMember image={john} />
        <TeamMember type="text" />
        <TeamMember image={timmy} />
        <TeamMember image={dmitry} />
      </div>
    </div>
  );
}

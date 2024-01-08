import React from "react";
import TermsHeader from "./TermsHeader.js";
import TermsContent from "./TermsContent.js";
import TermsFooter from "./TermsFooter.js";
import "./css/TermsAndConditionsPage.css";

function TermsAndConditionsPage() {
  return (
    <div className="terms-page-container">
      <TermsHeader />
      <TermsContent />
      <TermsFooter />
    </div>
  );
}

export default TermsAndConditionsPage;

import React from 'react';
import InnerHeader from './InnerHeader';
import FormResume from './FormResume';
import PrintResume from './PrintResume';

function ResumePage() {
  return (
    <div className="container">
    <InnerHeader className="header" />
    <FormResume className="resume" />
    <PrintResume className="print" />
    </div>
  );
}

export default ResumePage;

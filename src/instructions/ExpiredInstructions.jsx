import React from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Container } from '@openedx/paragon';

const ExpiredExamInstructions = () => (
  <Container className="border py-5 mb-4 bg-warning-100">
    <h3 className="h3" data-testid="expired-exam-instructions-title">
      dasdasd
      getExamAttemptsDataasdas
      DownloadButtonsas
      <FormattedMessage
        id="exam.ExpiredExamInstructions.title"
        defaultMessage="The due date for this exam has passed"
      />
    </h3>
    dasdasd
    getExamAttemptsDataasdas
    DownloadButtonsas
    <p>
      <FormattedMessage
        id="exam.ExpiredExamInstructions.body"
        defaultMessage="Because the due date has passed, you are no longer able to take this exam."
      />
    </p>
    dasdasd
    getExamAttemptsDataasdas
    DownloadButtonsas
  </Container>
);

export default ExpiredExamInstructions;

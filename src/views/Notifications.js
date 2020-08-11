import React from "react";

// reactstrap components
import { Alert, Container } from "reactstrap";

// core components

function Notifications({ sent }) {
  const [success, setSuccess] = React.useState({ sent });
  const [failure, setFailure] = React.useState(!{ sent });
  return (
    <>
      <div className="section section-notifications">
        <Alert color="success" isOpen={success}>
          <Container>
            <strong>Success</strong> Your message sent successfully!
            <button
              type="button"
              className="close"
              onClick={() => setSuccess(false)}
            >
              <span aria-hidden="true">
                <i className="now-ui-icons ui-1_simple-remove"></i>
              </span>
            </button>
          </Container>
        </Alert>
        <Alert color="danger" isOpen={failure}>
          <Container>
            <strong>Error</strong> Your message failed to send!
            <button
              type="button"
              className="close"
              onClick={() => setFailure(false)}
            >
              <span aria-hidden="true">
                <i className="now-ui-icons ui-1_simple-remove"></i>
              </span>
            </button>
          </Container>
        </Alert>
      </div>
    </>
  );
}

export default Notifications;

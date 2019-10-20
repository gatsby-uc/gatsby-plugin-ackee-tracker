import ackeeTracker from 'ackee-tracker';

exports.onRouteUpdate = ({ location }) => {
  const domainId = window.GATSBY_ACKEE_DOMAIN_ID;
  const server = window.GATSBY_ACKEE_SERVER;
  const ignoreLocalhost = window.GATSBY_ACKEE_IGNORE_LOCALHOST;
  const detailed = window.GATSBY_ACKEE_DETAILED;

  const instance = ackeeTracker.create({
    server: server,
    domainId: domainId,
  });

  const attributes = ackeeTracker.attributes({
    ignoreLocalhost,
    detailed,
  });

  instance.record(attributes);
};

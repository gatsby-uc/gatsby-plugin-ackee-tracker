import * as ackeeTracker from 'ackee-tracker';

/**
 * Gatsby Plugin Ackee
 *
 * A Gatsby Plugin for usingP ackee tracker
 *
 * @export onRouteUpdate
 * @param {*} {
 *   location,
 *   prevLocation
 * }
 * @param {*} {
 *   domainId,
 *   server,
 *   ignoreLocalhost,
 *   detailed,
 * }
 */
export function onRouteUpdate(
  _,
  { domainId, server, ignoreLocalhost, detailed }
) {
  // Create Instance of the Ackee Tracker
  const instance = ackeeTracker.create(
    {
      server: server,
      domainId: domainId,
    },
    {
      ignoreLocalhost: ignoreLocalhost,
      detailed: detailed,
    }
  );
  // Create attributes
  const attributes = ackeeTracker.attributes();

  // record attributes
  instance.record(attributes);
}

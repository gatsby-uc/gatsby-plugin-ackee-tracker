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
 *   domain_id,
 *   server,
 *   ignore_localhost,
 *   detailed,
 * }
 */
export function onRouteUpdate(
  _,
  { domain_id, server, ignore_localhost, detailed }
) {
  // Create Instance of the Ackee Tracker
  const instance = ackeeTracker.create(
    {
      server: server,
      domainId: domain_id,
    },
    {
      ignoreLocalhost: ignore_localhost,
      detailed: detailed,
    }
  );
  // Create attributes
  const attributes = ackeeTracker.attributes();

  // record attributes
  instance.record(attributes);
}

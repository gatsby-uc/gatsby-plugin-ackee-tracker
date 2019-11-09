import * as ackeeTracker from 'ackee-tracker';

let trackerInstance;

/**
 * onRouteUpdate
 *
 * Creats a tracking instance and a new record when the route changes
 *
 * @export onRouteUpdate
 */
export function onRouteUpdate(
  _,
  { domainId, server, ignoreLocalhost, detailed }
) {
  // Check if an instance already exists
  if (trackerInstance == null) {
    trackerInstance = ackeeTracker.create(
      {
        server,
        domainId,
      },
      {
        ignoreLocalhost,
        detailed,
      }
    );
  };
  
  // Track page changes
  trackerInstance.record();
}

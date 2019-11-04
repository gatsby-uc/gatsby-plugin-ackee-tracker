import * as ackeeTracker from 'ackee-tracker';

let trackerInstance = false;

/**
 * onInitialClientRender
 *
 * Adds Ackee Tracker to website when it renders page
 *
 * @export onInitialClientRender
 * @param {*} _
 * @param {*} { domainId, server, ignoreLocalhost, detailed }
 */
export function onInitialClientRender(
  _,
  { domainId, server, ignoreLocalhost, detailed }
) {
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
  
  // Track initial page
  trackerInstance.record();
}

/**
 * onRouteUpdate
 *
 * Added function call to where an instrance of the tracker is and calls a update of that tracker
 *
 * @export onRouteUpdate
 */
export function onRouteUpdate() {
  // Track page changes
  trackerInstance.record();
}

import * as ackeeTracker from 'ackee-tracker';

let trackerInstance = false;

/**
 * onInitialClientRender
 *
 * Adds Ackee Tracker to website when it renders page
 *
 * @export onInitialClientRender
 * @param {*} { domainId, server, ignoreLocalhost, detailed }
 * @param boolean record instance
 */
const AckeeTraker = (
  { domainId, server, ignoreLocalhost, detailed },
  record
) => {
  // checks if domainID and Server is present and also if tracker is null then create tracking instance
  if (domainId && server && trackerInstance === false) {
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

    //Tracks initial Page
    trackerInstance.record();
  }
  // checks if record is true and that the tracker instance exists
  if (record && trackerInstance) {
    // records update on new pages
    trackerInstance.record();
  }
};

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
  AckeeTraker({ domainId, server, ignoreLocalhost, detailed }, false);
}

/**
 * onRouteUpdate
 *
 * Added function call to where an instrance of the tracker is and calls a update of that tracker
 *
 * @export onRouteUpdate
 */
export function onRouteUpdate() {
  // record attributes
  AckeeTraker(false, true);
}

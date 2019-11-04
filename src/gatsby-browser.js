import * as ackeeTracker from 'ackee-tracker';

let tracker = null;

/**
 * Ackee Tracker
 *
 * Creates istance of tracker if let is null. if record var is present then it will record the instance
 *
 * @param {*} trackerVars
 * @param {*} record
 */
const AckeeTraker = (trackerVars, record) => {
  if (trackerVars && tracker === null) {
    const { domainId, server, ignoreLocalhost, detailed } = trackerVars;

    ackeeTracker.create(
      {
        server: server,
        domainId: domainId,
      },
      {
        ignoreLocalhost: ignoreLocalhost,
        detailed: detailed,
      }
    );
  }
  if (record && tracker) {
    tracker.record();
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

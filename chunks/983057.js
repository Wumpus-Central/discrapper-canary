"use strict";
n.d(t, { A: () => i });
var r = n(73153);
function i(e) {
    let { channelId: t, applicationId: n, intent: i, inviterUserId: s, analyticsLocations: a, commandOrigin: o } = e;
    r.h.dispatch({
        type: "EMBEDDED_ACTIVITY_DEFERRED_OPEN",
        channelId: t,
        applicationId: n,
        intent: i,
        inviterUserId: s,
        analyticsLocations: a,
        commandOrigin: o,
    });
}

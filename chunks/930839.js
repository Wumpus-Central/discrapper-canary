"use strict";
n.d(t, { A: () => c });
var i = n(562708),
    r = n(167789),
    a = n(228366),
    s = n(404851),
    l = n(174459),
    o = n(280450),
    d = n(652215);
let c = (0, i.analyticsTrackingStoreMaker)({
    dispatcher: a.h,
    actionHandler: {
        CONNECTION_OPEN: (e) => i.AnalyticsActionHandlers.handleConnectionOpen(e),
        OVERLAY_INITIALIZE: (e) => i.AnalyticsActionHandlers.handleConnectionOpen(e),
        CURRENT_USER_UPDATE: (e) => i.AnalyticsActionHandlers.handleConnectionOpen(e),
        CONNECTION_CLOSED: () => i.AnalyticsActionHandlers.handleConnectionClosed(),
        FINGERPRINT: () => i.AnalyticsActionHandlers.handleFingerprint(),
        TRACK: (e) => i.AnalyticsActionHandlers.handleTrack(e),
        SET_ANALYTICS_TOKEN: (e) => i.AnalyticsActionHandlers.handleSetAnalyticsToken(e),
    },
    TRACKING_URL: d.Rsh.TRACK,
    waitFor: [o.default],
    getFingerprint: o.default.getFingerprint,
    getSessionId: () => (0, s.Ht)().then((e) => ({ sessionId: e?.uuid })),
    getLaunchSignature: () => l.launchSignature,
    scheduleWhenIdle: r.O,
});

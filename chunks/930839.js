"use strict";
var r = n(110259),
    i = n(167789),
    s = n(73153),
    a = n(861638),
    o = n(954571),
    l = n(961350),
    u = n(652215);
(0, r.analyticsTrackingStoreMaker)({
    dispatcher: s.h,
    actionHandler: {
        CONNECTION_OPEN: (e) => r.AnalyticsActionHandlers.handleConnectionOpen(e),
        OVERLAY_INITIALIZE: (e) => r.AnalyticsActionHandlers.handleConnectionOpen(e),
        CURRENT_USER_UPDATE: (e) => r.AnalyticsActionHandlers.handleConnectionOpen(e),
        CONNECTION_CLOSED: () => r.AnalyticsActionHandlers.handleConnectionClosed(),
        FINGERPRINT: () => r.AnalyticsActionHandlers.handleFingerprint(),
        TRACK: (e) => r.AnalyticsActionHandlers.handleTrack(e),
        SET_ANALYTICS_TOKEN: (e) => r.AnalyticsActionHandlers.handleSetAnalyticsToken(e),
    },
    TRACKING_URL: u.Rsh.TRACK,
    waitFor: [l.default],
    getFingerprint: l.default.getFingerprint,
    getSessionId: () => (0, a.Ht)().then((e) => ({ sessionId: e?.uuid })),
    getLaunchSignature: () => o.launchSignature,
    scheduleWhenIdle: i.O,
});

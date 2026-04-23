"use strict";
var i = n(110259),
    r = n(167789),
    s = n(228366),
    a = n(861638),
    o = n(954571),
    l = n(495544),
    d = n(652215);
(0, i.analyticsTrackingStoreMaker)({
    dispatcher: s.h,
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
    waitFor: [l.default],
    getFingerprint: l.default.getFingerprint,
    getSessionId: () => (0, a.Ht)().then((e) => ({ sessionId: e?.uuid })),
    getLaunchSignature: () => o.launchSignature,
    scheduleWhenIdle: r.O,
});

"use strict";
n.d(t, { F: () => a });
var i = n(17928),
    r = n(349435);
function a(e, t) {
    return (0, i.bG)([r.Ay], () => r.Ay.getChannelSafetyWarnings(e), [e])
        .filter((e) => e.type === t)
        .find((e) => null == e.dismiss_timestamp && (e?.expiry == null || Date.parse(e.expiry) > Date.now()));
}

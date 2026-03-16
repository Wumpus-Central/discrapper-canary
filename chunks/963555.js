"use strict";
n.d(t, { F: () => s });
var r = n(311907),
    i = n(349435);
function s(e, t) {
    return (0, r.bG)([i.Ay], () => i.Ay.getChannelSafetyWarnings(e), [e])
        .filter((e) => e.type === t)
        .find((e) => null == e.dismiss_timestamp && (e?.expiry == null || Date.parse(e.expiry) > Date.now()));
}

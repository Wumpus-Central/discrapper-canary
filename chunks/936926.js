"use strict";
n.d(t, { Eq: () => i });
let r = (0, n(945810).mj)({
    kind: "user",
    name: "2026-01-family-center-v3",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function i(e) {
    let { location: t } = e;
    return r.getConfig({ location: t }).enabled;
}

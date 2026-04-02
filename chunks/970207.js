"use strict";
n.d(t, { y: () => i });
let r = (0, n(945810).mj)({
    name: "2026-04-storefront-pricing",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function i(e) {
    let { location: t } = e;
    return r.getConfig({ location: t }).enabled;
}

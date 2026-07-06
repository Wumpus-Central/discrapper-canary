"use strict";
n.d(t, { J9: () => a, VV: () => o });
var i = n(945810);
let r = (0, i.mj)({
        name: "2026-04-badge-discovery",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    s = (0, i.mj)({
        name: "2026-05-badge-discovery-milestone-2",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function a(e) {
    let { location: t } = e;
    return r.useConfig({ location: t }).enabled;
}
function o(e) {
    let { location: t } = e;
    return s.useConfig({ location: t }).enabled;
}

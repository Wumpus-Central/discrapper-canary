"use strict";
n.d(t, { J9: () => s, VV: () => l });
var i = n(945810);
let r = (0, i.mj)({
        name: "2026-04-badge-discovery",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    a = (0, i.mj)({
        name: "2026-05-badge-discovery-milestone-2",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function s(e) {
    let { location: t } = e;
    return r.useConfig({ location: t }).enabled;
}
function l(e) {
    let { location: t } = e;
    return a.useConfig({ location: t }).enabled;
}

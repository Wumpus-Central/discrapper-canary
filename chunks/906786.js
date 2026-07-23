"use strict";
n.d(t, { f: () => s, i: () => l });
var i = n(945810),
    r = n(652215);
let a = (0, i.mj)({
    name: "2026-07-vibegrations-guild",
    kind: "guild",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function s(e) {
    let { guildId: t, location: n } = e;
    return a.useConfig({ guildId: t ?? r.dJq, location: n }).enabled;
}
function l(e) {
    let { guildId: t, location: n } = e;
    return null != t && a.getConfig({ guildId: t, location: n }).enabled;
}

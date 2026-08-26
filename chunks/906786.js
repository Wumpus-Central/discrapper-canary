"use strict";
n.d(t, { f: () => o, ix: () => d, oS: () => c });
var i = n(17928),
    r = n(945810),
    a = n(71393),
    s = n(652215);
let l = (0, r.mj)({
    name: "2026-07-vibegrations-guild",
    kind: "guild",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function o(e) {
    let { guildId: t, location: n } = e;
    return l.useConfig({ guildId: t ?? s.dJq, location: n }).enabled;
}
function d(e) {
    let { guildId: t, location: n } = e;
    return null != t && l.getConfig({ guildId: t, location: n }).enabled;
}
function c(e) {
    return (0, i.bG)(
        [a.A, r.Bt],
        () =>
            (function (e, t) {
                for (let n of e) if (d({ guildId: n.id, location: t })) return !0;
                return !1;
            })(Object.values(a.A.getGuilds()), e),
        [e],
    );
}

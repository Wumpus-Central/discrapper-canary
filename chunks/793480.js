n.d(t, { L0: () => d, OC: () => c, TW: () => _, m0: () => o, zN: () => u });
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
function c(e, t) {
    for (let n of e) if (d({ guildId: n.id, location: t })) return !0;
    return !1;
}
function u(e) {
    for (let t of Object.values(a.A.getGuilds()))
        if (l.getConfig({ guildId: t.id, location: e }, { autoTrackExposure: !1 }).enabled) return !0;
    return !1;
}
function _(e) {
    let { autoTrackExposure: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (0, i.bG)([a.A, r.Bt], () => (t ? c(Object.values(a.A.getGuilds()), e) : u(e)), [e, t]);
}

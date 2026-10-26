n.d(t, { OC: () => _, zN: () => E, L0: () => u, TW: () => A, m0: () => c });
var i = n(17928),
    r = n(945810),
    a = n(71393);
let s = (0, r.mj)({
    name: "2026-07-vibegrations-user",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var l = n(652215);
let o = (0, r.mj)({
    name: "2026-07-vibegrations-guild",
    kind: "guild",
    defaultConfig: { enabled: !1, requiresUserExperiment: !1 },
    variations: {
        0: { enabled: !1, requiresUserExperiment: !1 },
        1: { enabled: !0, requiresUserExperiment: !1 },
        2: { enabled: !0, requiresUserExperiment: !0 },
    },
});
function d(e, t) {
    let { enabled: n, requiresUserExperiment: i } = e,
        r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return (
        n &&
        (!i ||
            (function (e) {
                let { location: t } = e,
                    { autoTrackExposure: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return s.getConfig({ location: t }, { autoTrackExposure: n }).enabled;
            })({ location: t }, { autoTrackExposure: r }))
    );
}
function c(e) {
    let { guildId: t, location: n } = e,
        { enabled: a, requiresUserExperiment: s } = o.useConfig({ guildId: t ?? l.dJq, location: n });
    return (0, i.bG)([r.Bt], () => d({ enabled: a, requiresUserExperiment: s }, n), [a, s, n]);
}
function u(e) {
    let { guildId: t, location: n } = e;
    return null != t && d(o.getConfig({ guildId: t, location: n }), n);
}
function _(e, t) {
    for (let n of e) if (u({ guildId: n.id, location: t })) return !0;
    return !1;
}
function E(e) {
    for (let t of Object.values(a.A.getGuilds()))
        if (d(o.getConfig({ guildId: t.id, location: e }, { autoTrackExposure: !1 }), e, !1)) return !0;
    return !1;
}
function A(e) {
    let { autoTrackExposure: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (0, i.bG)([a.A, r.Bt], () => (t ? _(Object.values(a.A.getGuilds()), e) : E(e)), [e, t]);
}

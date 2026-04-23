"use strict";
n.d(t, { Qz: () => p, Vc: () => A, Nd: () => I, Fy: () => m, GP: () => f });
var i = n(310784),
    r = n.n(i),
    s = n(317097),
    a = n(17928),
    o = n(458217),
    l = n(71393),
    d = n(576705),
    _ = n(998304),
    u = n(472282);
let c = (0, n(945810).mj)({
    name: "2026-04-official-messages-rendering",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var E = n(381941),
    h = n(652215);
function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : E.cZ,
        a = (0, s.Hl)(e),
        l = r()(t),
        d = r()(a),
        u = r().mix(l, a, i, "rgb"),
        c = r().contrast(d, u) < r().contrast(d, l) ? u : l;
    return (0, _.lZ)({ foreground: d, background: c, ratio: o.Tr.Text, saturationFactor: n });
}
function f(e, t) {
    return (
        null != e &&
        e.features.has(h.GuildFeatures.VERIFIED) &&
        u.A.getCurrentConfig({ guildId: e.id, location: t }).enabled
    );
}
function g(e, t) {
    let n = (0, a.bG)([l.A], () => (null != e ? l.A.getGuild(e) : null), [e]),
        { enabled: i } = u.A.useExperiment({ guildId: e ?? void 0, location: t });
    return null != n && n.features.has(h.GuildFeatures.VERIFIED) && i;
}
function p(e, t, n) {
    return f(e, n) && d.A.can(h.xBc.MANAGE_OFFICIAL_MESSAGES, t);
}
function A(e, t, n) {
    let i = g(e, n),
        r = (0, a.bG)([d.A], () => d.A.can(h.xBc.MANAGE_OFFICIAL_MESSAGES, t), [t]);
    return i && r;
}
function I(e, t, n) {
    let i = g(e, n),
        r = c.useConfig({ location: n }).enabled,
        s = (0, a.bG)([l.A, d.A], () => {
            let n = l.A.getGuild(e);
            return d.A.can(h.xBc.MANAGE_OFFICIAL_MESSAGES, t) || d.A.can(h.xBc.MANAGE_GUILD, n);
        }, [t, e]);
    return i && (s || r);
}

t.d(n, { GZ: () => m, Se: () => p, Ig: () => b, Hv: () => I, F5: () => A });
var i = t(582128),
    l = t(70283),
    a = t(855986),
    o = t(554146),
    r = t(682618),
    s = t(982240),
    u = t(826673),
    c = t(287809),
    d = t(945810);
let f = (0, d.mj)({
        name: "2026-09-gifting-badge-coachmark-audience",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    g = (0, d.mj)({
        name: "2026-06-gifting-badge-desktop",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var C = t(998370);
function m(e, n, t) {
    let i = (0, s.rL)(n),
        l = (0, s.rL)(t);
    return Math.min(
        Math.max(null != t ? (l > 0 ? (e / l) * 100 : 100) : i > 0 ? (Math.min(i, e) / i) * 100 : 100, 0),
        100,
    );
}
function A(e) {
    let { enabled: n } = C.J.useConfig({ location: e }),
        { enabled: t } = g.useConfig({ location: `${e}${n ? "" : "-DISABLED"}` });
    return t && n;
}
function b(e) {
    return !!C.J.getConfig({ location: e }).enabled && g.getConfig({ location: e }).enabled;
}
function p(e) {
    return e?.complex_icon_static_url ?? e?.simple_icon_url;
}
function I(e) {
    let { platform: n, location: t, enabled: d = !0 } = e,
        { enabled: m } = C.J.useConfig({ location: t }),
        { enabled: A } = g.useConfig({ location: `${t}${"web" === n ? "" : "-DISABLED"}` }),
        b = "web" === n ? A && m : m,
        { enabled: p } = f.useConfig({ location: `${t}${b ? "" : "-DISABLED"}` }),
        I = (0, a.bG)([c.default], () => c.default.getCurrentUser()?.hasHadPremium() ?? !1),
        h = (0, u.HX)(o.M.NEW_GIFTING_BADGES_COACHMARK),
        T = (0, a.bG)([s.Ay], () => s.Ay.getBadgeById(l.$.GIFTING)),
        N = b && !h && d,
        k = N && !p && I,
        _ = N && p && null == T;
    return (i.useEffect(() => {
        _ ? (0, r.Ay)(l.$.GIFTING) : k && (0, r.o0)(l.$.GIFTING);
    }, [k, _]),
    p)
        ? N && null != T && !T.hidden && (I || T.owned)
            ? "noCount"
            : null
        : N && I && null != T
          ? "count"
          : null;
}
(t(339514), t(792996));

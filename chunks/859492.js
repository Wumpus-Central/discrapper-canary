n.d(t, { Se: () => E, Hv: () => I, Ig: () => A, F5: () => x, GZ: () => g, b9: () => C });
var l = n(582128),
    i = n(70283),
    s = n(17928),
    r = n(554146),
    a = n(682618),
    o = n(982240),
    u = n(826673),
    c = n(287809),
    d = n(945810);
let h = (0, d.mj)({
        name: "2026-09-gifting-badge-coachmark-audience",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    m = (0, d.mj)({
        name: "2026-09-gifting-badge-complex-art",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    f = (0, d.mj)({
        name: "2026-06-gifting-badge-desktop",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var p = n(998370);
function g(e, t, n) {
    let l = (0, o.rL)(t),
        i = (0, o.rL)(n);
    return Math.min(
        Math.max(null != n ? (i > 0 ? (e / i) * 100 : 100) : l > 0 ? (Math.min(l, e) / l) * 100 : 100, 0),
        100,
    );
}
function x(e) {
    let { enabled: t } = p.J.useConfig({ location: e }),
        { enabled: n } = f.useConfig({ location: `${e}${t ? "" : "-DISABLED"}` });
    return n && t;
}
function A(e) {
    return !!p.J.getConfig({ location: e }).enabled && f.getConfig({ location: e }).enabled;
}
function C(e) {
    return m.useConfig({ location: e }).enabled;
}
function E(e, t) {
    return t ? (e?.complex_icon_static_url ?? e?.simple_icon_url) : e?.simple_icon_url;
}
function I(e) {
    let { platform: t, location: n, enabled: d = !0 } = e,
        { enabled: m } = p.J.useConfig({ location: n }),
        { enabled: g } = f.useConfig({ location: `${n}${"web" === t ? "" : "-DISABLED"}` }),
        x = "web" === t ? g && m : m,
        { enabled: A } = h.useConfig({ location: `${n}${x ? "" : "-DISABLED"}` }),
        C = (0, s.bG)([c.default], () => c.default.getCurrentUser()?.hasHadPremium() ?? !1),
        E = (0, u.HX)(r.M.NEW_GIFTING_BADGES_COACHMARK),
        I = (0, s.bG)([o.Ay], () => o.Ay.getBadgeById(i.$.GIFTING)),
        y = x && !E && d,
        S = y && !A && C,
        v = y && A && null == I;
    return (l.useEffect(() => {
        v ? (0, a.Ay)(i.$.GIFTING) : S && (0, a.o0)(i.$.GIFTING);
    }, [S, v]),
    A)
        ? y && null != I && !I.hidden && (C || I.owned)
            ? "noCount"
            : null
        : y && C && null != I
          ? "count"
          : null;
}
(n(556427), n(375708));

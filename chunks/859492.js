a.d(n, { Se: () => _, Hv: () => h, Ig: () => p, F5: () => I, GZ: () => C, b9: () => G });
var i = a(582128),
    t = a(70283),
    l = a(17928),
    u = a(554146),
    d = a(682618),
    o = a(982240),
    r = a(826673),
    f = a(287809),
    g = a(945810);
let b = (0, g.mj)({
        name: "2026-09-gifting-badge-coachmark-audience",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    s = (0, g.mj)({
        name: "2026-09-gifting-badge-complex-art",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    c = (0, g.mj)({
        name: "2026-06-gifting-badge-desktop",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var m = a(998370);
function C(e, n, a) {
    let i = (0, o.rL)(n),
        t = (0, o.rL)(a);
    return Math.min(
        Math.max(null != a ? (t > 0 ? (e / t) * 100 : 100) : i > 0 ? (Math.min(i, e) / i) * 100 : 100, 0),
        100,
    );
}
function I(e) {
    let { enabled: n } = m.J.useConfig({ location: e }),
        { enabled: a } = c.useConfig({ location: `${e}${n ? "" : "-DISABLED"}` });
    return a && n;
}
function p(e) {
    return !!m.J.getConfig({ location: e }).enabled && c.getConfig({ location: e }).enabled;
}
function G(e) {
    return s.useConfig({ location: e }).enabled;
}
function _(e, n) {
    return n ? (e?.complex_icon_static_url ?? e?.simple_icon_url) : e?.simple_icon_url;
}
function h(e) {
    let { platform: n, location: a, enabled: g = !0 } = e,
        { enabled: s } = m.J.useConfig({ location: a }),
        { enabled: C } = c.useConfig({ location: `${a}${"web" === n ? "" : "-DISABLED"}` }),
        I = "web" === n ? C && s : s,
        { enabled: p } = b.useConfig({ location: `${a}${I ? "" : "-DISABLED"}` }),
        G = (0, l.bG)([f.default], () => f.default.getCurrentUser()?.hasHadPremium() ?? !1),
        _ = (0, r.HX)(u.M.NEW_GIFTING_BADGES_COACHMARK),
        h = (0, l.bG)([o.Ay], () => o.Ay.getBadgeById(t.$.GIFTING)),
        k = I && !_ && g,
        A = k && !p && G,
        $ = k && p && null == h;
    return (i.useEffect(() => {
        $ ? (0, d.Ay)(t.$.GIFTING) : A && (0, d.o0)(t.$.GIFTING);
    }, [A, $]),
    p)
        ? k && null != h && !h.hidden && (G || h.owned)
            ? "noCount"
            : null
        : k && G && null != h
          ? "count"
          : null;
}
(a(556427), a(375708));

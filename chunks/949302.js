n.d(t, { A: () => N, e: () => v }), n(321073);
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    o = n(554146),
    a = n(661531),
    c = n(403581),
    d = n(404374),
    u = n(932001),
    h = n(40185),
    m = n(552736),
    p = n(422936),
    x = n(234419),
    b = n(603488),
    f = n(105390),
    j = n(49999),
    S = n(788868),
    g = n(826799);
function v() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = (0, x.V)(),
        r = (0, p.O)(),
        l = (0, h.cg)(),
        a = null != (0, m.A)(),
        c = l || a,
        d = n?.trial_id === S.Dw,
        g = [];
    c && g.push(o.M.BOGO_2025_NITRO_TAB_BADGE);
    let [v, N] = (0, u.kn)(g, void 0, !0);
    return (
        s.useEffect(() => {
            !0 === t && v === o.M.BOGO_2025_NITRO_TAB_BADGE && N(j.i.AUTO_DISMISS);
        }, [N, t, v]),
        c
            ? (e = (0, i.jsx)(b.A, {}))
            : null != r
              ? (e = (0, i.jsx)(f.fY, { isTabSelected: t, userDiscount: r, includesAmountOff: !1 }))
              : null == n || d || (e = (0, i.jsx)(f.Ag, { isTabSelected: t, trialOffer: n })),
        e
    );
}
function N(e) {
    let { decoration: t, label: n, isSelected: s } = e,
        r = (0, h.cg)(),
        o =
            v(s) ??
            t ??
            (0, i.jsx)(c.t, { size: "sm", color: s ? a.A.unsafe_rawColors.WHITE.css : d.k0.PREMIUM_TIER_2 });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", { className: l()(g.gj, { [g.wH]: s && !r }), children: [n, o] }),
            (0, i.jsx)("div", { className: l()(g.Tp, { [g._I]: !r && s }) }),
        ],
    });
}

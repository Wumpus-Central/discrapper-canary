n.d(t, { A: () => _, e: () => A }), n(321073);
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    o = n(554146),
    a = n(827734),
    c = n(397927),
    d = n(404374),
    u = n(932001),
    h = n(40185),
    m = n(552736),
    p = n(422936),
    S = n(234419),
    E = n(603488),
    f = n(105390),
    g = n(49999),
    v = n(788868),
    x = n(112918);
function A() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = (0, S.V)(),
        r = (0, p.O)(),
        l = (0, h.cg)(),
        a = null != (0, m.A)(),
        c = l || a,
        d = n?.trial_id === v.Dw,
        x = [];
    c && x.push(o.M.BOGO_2025_NITRO_TAB_BADGE);
    let [A, _] = (0, u.kn)(x, void 0, !0);
    return (
        s.useEffect(() => {
            !0 === t && A === o.M.BOGO_2025_NITRO_TAB_BADGE && _(g.i.AUTO_DISMISS);
        }, [_, t, A]),
        c
            ? (e = (0, i.jsx)(E.A, {}))
            : null != r
              ? (e = (0, i.jsx)(f.fY, { isTabSelected: t, userDiscount: r, includesAmountOff: !1 }))
              : null == n || d || (e = (0, i.jsx)(f.Ag, { isTabSelected: t, trialOffer: n })),
        e
    );
}
function _(e) {
    let { decoration: t, label: n, isSelected: s } = e,
        r = (0, h.cg)(),
        o =
            A(s) ??
            t ??
            (0, i.jsx)(c.tvc, { size: "sm", color: s ? a.A.unsafe_rawColors.WHITE.css : d.k0.PREMIUM_TIER_2 });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", { className: l()(x.gj, { [x.wH]: s && !r }), children: [n, o] }),
            (0, i.jsx)("div", { className: l()(x.Tp, { [x._I]: !r && s }) }),
        ],
    });
}

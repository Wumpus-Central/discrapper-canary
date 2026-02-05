"use strict";
n.d(t, { A: () => v, e: () => I }), n(321073);
var s = n(627968),
    i = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(554146),
    o = n(827734),
    d = n(397927),
    h = n(404374),
    c = n(379848),
    u = n(40185),
    g = n(552736),
    p = n(422936),
    C = n(234419),
    f = n(603488),
    S = n(105390),
    A = n(49999),
    m = n(788868),
    E = n(738386);
function I() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = (0, C.V)(),
        r = (0, p.O)(),
        l = (0, u.cg)(),
        o = null != (0, g.A)(),
        d = l || o,
        h = n?.trial_id === m.Dw,
        E = [];
    d && E.push(a.M.BOGO_2025_NITRO_TAB_BADGE);
    let [I, v] = (0, c.kn)(E, void 0, !0);
    return (
        i.useEffect(() => {
            !0 === t && I === a.M.BOGO_2025_NITRO_TAB_BADGE && v(A.i.AUTO_DISMISS);
        }, [v, t, I]),
        d
            ? (e = (0, s.jsx)(f.A, {}))
            : null != r
              ? (e = (0, s.jsx)(S.fY, { isTabSelected: t, userDiscount: r, includesAmountOff: !1 }))
              : null == n || h || (e = (0, s.jsx)(S.Ag, { isTabSelected: t, trialOffer: n })),
        e
    );
}
function v(e) {
    let { decoration: t, label: n, isSelected: i } = e,
        r = (0, u.cg)(),
        a =
            I(i) ??
            t ??
            (0, s.jsx)(d.tvc, { size: "sm", color: i ? o.A.unsafe_rawColors.WHITE.css : h.k0.PREMIUM_TIER_2 });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", { className: l()(E.gj, { [E.wH]: i && !r }), children: [n, a] }),
            (0, s.jsx)("div", { className: l()(E.Tp, { [E._I]: !r && i }) }),
        ],
    });
}

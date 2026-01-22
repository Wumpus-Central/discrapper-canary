n.d(t, {
    A: () => A,
    e: () => O,
}),
    n(321073),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(554146),
    l = n(827734),
    c = n(397927),
    u = n(404374),
    d = n(379848),
    f = n(40185),
    p = n(552736),
    _ = n(422936),
    h = n(234419),
    m = n(603488),
    g = n(105390),
    E = n(49999),
    b = n(788868),
    y = n(738386);
function O() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = (0, h.V)(),
        a = (0, _.O)(),
        s = (0, f.cg)(),
        l = null != (0, p.A)(),
        c = s || l,
        u = (null == n ? void 0 : n.trial_id) === b.Dw,
        y = [];
    c && y.push(o.M.BOGO_2025_NITRO_TAB_BADGE);
    let [O, A] = (0, d.kn)(y, void 0, !0);
    return (
        i.useEffect(() => {
            !0 === t && O === o.M.BOGO_2025_NITRO_TAB_BADGE && A(E.i.AUTO_DISMISS);
        }, [A, t, O]),
        c
            ? (e = (0, r.jsx)(m.A, {}))
            : null != a
              ? (e = (0, r.jsx)(g.fY, {
                    isTabSelected: t,
                    userDiscount: a,
                    includesAmountOff: !1,
                }))
              : null == n ||
                u ||
                (e = (0, r.jsx)(g.Ag, {
                    isTabSelected: t,
                    trialOffer: n,
                })),
        e
    );
}
function A(e) {
    var t, n;
    let { decoration: i, label: a, isSelected: o } = e,
        d = (0, f.cg)(),
        p =
            null != (t = null != (n = O(o)) ? n : i)
                ? t
                : (0, r.jsx)(c.tvc, {
                      size: "sm",
                      color: o ? l.A.unsafe_rawColors.WHITE.css : u.k0.PREMIUM_TIER_2,
                  });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: s()(y.gj, { [y.wH]: o && !d }),
                children: [a, p],
            }),
            (0, r.jsx)("div", { className: s()(y.Tp, { [y._I]: !d && o }) }),
        ],
    });
}

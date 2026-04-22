n.d(t, { A: () => y, e: () => E }), n(321073);
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    o = n(311907),
    a = n(554146),
    c = n(827734),
    d = n(403581),
    u = n(404374),
    h = n(826673),
    m = n(932001),
    p = n(40185),
    x = n(552736),
    b = n(422936),
    S = n(234419),
    f = n(412260),
    g = n(852218),
    j = n(603488),
    v = n(282077),
    N = n(105390),
    A = n(49999),
    _ = n(788868),
    T = n(985018),
    C = n(53935);
function E() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = (0, S.V)(),
        r = (0, b.O)(),
        l = (0, p.cg)(),
        c = null != (0, x.A)(),
        d = l || c,
        u = n?.trial_id === _.Dw,
        C = [];
    d && C.push(a.M.BOGO_2025_NITRO_TAB_BADGE);
    let [E, y] = (0, m.kn)(C, void 0, !0),
        R = (0, o.bG)([f.A], () => {
            let e = f.A.getPromotionByTypeAndKey(g.pt.MARKETING_MOMENT, g.zw);
            return null == e || e.endDate < new Date() ? null : e;
        }),
        [I, O] = (0, m.Cc)(
            null != R ? a.M.PREMIUM_MARKETING_MOMENT_USER_SETTINGS_OFFER_BADGE : null,
            R?.id ?? "",
            void 0,
            !0,
        );
    return (
        s.useEffect(() => {
            !0 === t && (E === a.M.BOGO_2025_NITRO_TAB_BADGE && y(A.i.AUTO_DISMISS), null != I && O(A.i.AUTO_DISMISS));
        }, [y, O, t, E, I]),
        null != R
            ? (e = (0, i.jsx)(v.A, {
                  componentId: "nitro-settings-offer-badge",
                  badgeCopy: T.intl.string(T.t.OS9KPu),
                  acknowledgedBadgeCopy: T.intl.string(T.t.OS9KPu),
                  isDismissed: (0, h.u$)(a.M.PREMIUM_MARKETING_MOMENT_USER_SETTINGS_OFFER_BADGE, R.id).isDismissed,
              }))
            : d
              ? (e = (0, i.jsx)(j.A, {}))
              : null != r
                ? (e = (0, i.jsx)(N.fY, { isTabSelected: t, userDiscount: r, includesAmountOff: !1 }))
                : null == n || u || (e = (0, i.jsx)(N.Ag, { isTabSelected: t, trialOffer: n })),
        e
    );
}
function y(e) {
    let { decoration: t, label: n, isSelected: s } = e,
        r = (0, p.cg)(),
        o =
            E(s) ??
            t ??
            (0, i.jsx)(d.t, { size: "sm", color: s ? c.A.unsafe_rawColors.WHITE.css : u.k0.PREMIUM_TIER_2 });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", { className: l()(C.gj, { [C.wH]: s && !r }), children: [n, o] }),
            (0, i.jsx)("div", { className: l()(C.Tp, { [C._I]: !r && s }) }),
        ],
    });
}

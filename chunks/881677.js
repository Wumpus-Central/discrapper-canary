n.d(t, { B: () => A });
var l = n(627968),
    r = n(64700),
    i = n(417597),
    s = n(459793),
    a = n(427675),
    o = n(94420),
    u = n(590180),
    d = n(937008),
    c = n(156312),
    C = n(166532),
    p = n(49420),
    m = n(534479),
    E = n(652215);
function A(e) {
    let { handleStepChange: t } = e,
        n = (0, o.t4)((e) => e.selectedSkuId),
        { blockedPayments: A, paymentSources: h, hasFetchedPaymentSources: f, application: _ } = (0, c.P5)(),
        g = (0, a.gU)(),
        T = (0, a.Hu)(),
        { isGift: x } = (0, d.Pv)(),
        [S, I] = r.useState(!0),
        [O, y] = (0, i.yK)([u.A], () => [u.A.isFetchingCategories, u.A.error]);
    return (r.useEffect(() => {
        let e = null != _;
        T && f && e && I(O);
    }, [T, f, _, O]),
    r.useEffect(() => {
        if (S || A || null == n) return;
        let e = g[n];
        x &&
        (e?.productLine === E.EZt.COLLECTIBLES ||
            e?.productLine === E.EZt.APPLICATION ||
            e?.productLine === E.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(C.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(h).length
              ? t(C.pn.ADD_PAYMENT_STEPS)
              : t(C.pn.REVIEW);
    }, [S, A, t, h, x, g, n]),
    S)
        ? (0, l.jsx)(m.A, {})
        : A
          ? (0, l.jsx)(s.oO, {})
          : null != y
            ? (0, l.jsx)(p.A, {})
            : null;
}

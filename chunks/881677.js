"use strict";
n.d(t, { B: () => h });
var r = n(627968),
    i = n(64700),
    s = n(417597),
    a = n(459793),
    o = n(590180),
    l = n(937008),
    u = n(156312),
    c = n(166532),
    d = n(49420),
    _ = n(987616),
    f = n(534479),
    p = n(652215);
function h(e) {
    let { handleStepChange: t } = e,
        {
            blockedPayments: n,
            paymentSources: h,
            hasFetchedPaymentSources: m,
            application: E,
            selectedSkuId: g,
        } = (0, u.P5)(),
        A = (0, _.gU)(),
        I = (0, _.Hu)(),
        { isGift: T } = (0, l.Pv)(),
        [S, y] = i.useState(!0),
        [v, N] = (0, s.yK)([o.A], () => [o.A.isFetchingCategories, o.A.error]);
    return (i.useEffect(() => {
        let e = null != E;
        I && m && e && y(v);
    }, [I, m, E, v]),
    i.useEffect(() => {
        if (S || n || null == g) return;
        let e = A[g];
        T &&
        (e?.productLine === p.EZt.COLLECTIBLES ||
            e?.productLine === p.EZt.APPLICATION ||
            e?.productLine === p.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(c.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(h).length
              ? t(c.pn.ADD_PAYMENT_STEPS)
              : t(c.pn.REVIEW);
    }, [S, n, t, h, T, A, g]),
    S)
        ? (0, r.jsx)(f.A, {})
        : n
          ? (0, r.jsx)(a.oO, {})
          : null != N
            ? (0, r.jsx)(d.A, {})
            : null;
}

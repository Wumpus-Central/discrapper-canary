"use strict";
n.d(t, { B: () => p });
var r = n(627968),
    i = n(64700),
    s = n(417597),
    a = n(459793),
    o = n(590180),
    l = n(937008),
    u = n(156312),
    c = n(166532),
    d = n(49420),
    _ = n(534479),
    f = n(652215);
function p(e) {
    let { handleStepChange: t } = e,
        {
            blockedPayments: n,
            hasFetchedSkus: p,
            paymentSources: h,
            hasFetchedPaymentSources: m,
            application: E,
            skusById: g,
            selectedSkuId: A,
        } = (0, u.P5)(),
        { isGift: I } = (0, l.Pv)(),
        [T, S] = i.useState(!0),
        [y, v] = (0, s.yK)([o.A], () => [o.A.isFetchingCategories, o.A.error]);
    return (i.useEffect(() => {
        let e = null != E;
        p && m && e && S(y);
    }, [p, m, E, y]),
    i.useEffect(() => {
        if (T || n || null == A) return;
        let e = g[A];
        I &&
        (e?.productLine === f.EZt.COLLECTIBLES ||
            e?.productLine === f.EZt.APPLICATION ||
            e?.productLine === f.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(c.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(h).length
              ? t(c.pn.ADD_PAYMENT_STEPS)
              : t(c.pn.REVIEW);
    }, [T, n, t, h, I, g, A]),
    T)
        ? (0, r.jsx)(_.A, {})
        : n
          ? (0, r.jsx)(a.oO, {})
          : null != v
            ? (0, r.jsx)(d.A, {})
            : null;
}

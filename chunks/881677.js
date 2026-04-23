"use strict";
n.d(t, { B: () => E });
var r = n(627968),
    i = n(64700),
    s = n(417597),
    a = n(459793),
    o = n(427675),
    l = n(94420),
    u = n(590180),
    c = n(937008),
    d = n(156312),
    _ = n(166532),
    f = n(49420),
    p = n(534479),
    h = n(652215);
function E(e) {
    let { handleStepChange: t } = e,
        n = (0, l.t4)((e) => e.selectedSkuId),
        { blockedPayments: E, paymentSources: m, hasFetchedPaymentSources: g, application: A } = (0, d.P5)(),
        I = (0, o.gU)(),
        T = (0, o.Hu)(),
        { isGift: S } = (0, c.Pv)(),
        [y, N] = i.useState(!0),
        [v, C] = (0, s.yK)([u.A], () => [u.A.isFetchingCategories, u.A.error]);
    return (i.useEffect(() => {
        let e = null != A;
        T && g && e && N(v);
    }, [T, g, A, v]),
    i.useEffect(() => {
        if (y || E || null == n) return;
        let e = I[n];
        S &&
        (e?.productLine === h.EZt.COLLECTIBLES ||
            e?.productLine === h.EZt.APPLICATION ||
            e?.productLine === h.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(_.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(m).length
              ? t(_.pn.ADD_PAYMENT_STEPS)
              : t(_.pn.REVIEW);
    }, [y, E, t, m, S, I, n]),
    y)
        ? (0, r.jsx)(p.A, {})
        : E
          ? (0, r.jsx)(a.oO, {})
          : null != C
            ? (0, r.jsx)(f.A, {})
            : null;
}

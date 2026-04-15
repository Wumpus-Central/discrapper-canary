"use strict";
n.d(t, { B: () => m });
var r = n(627968),
    i = n(64700),
    s = n(417597),
    a = n(459793),
    o = n(590180),
    l = n(413748),
    u = n(937008),
    c = n(156312),
    d = n(166532),
    _ = n(49420),
    f = n(987616),
    p = n(534479),
    h = n(652215);
function m(e) {
    let { handleStepChange: t } = e,
        n = (0, l.t4)((e) => e.selectedSkuId),
        { blockedPayments: m, paymentSources: E, hasFetchedPaymentSources: g, application: A } = (0, c.P5)(),
        I = (0, f.gU)(),
        T = (0, f.Hu)(),
        { isGift: S } = (0, u.Pv)(),
        [y, v] = i.useState(!0),
        [N, C] = (0, s.yK)([o.A], () => [o.A.isFetchingCategories, o.A.error]);
    return (i.useEffect(() => {
        let e = null != A;
        T && g && e && v(N);
    }, [T, g, A, N]),
    i.useEffect(() => {
        if (y || m || null == n) return;
        let e = I[n];
        S &&
        (e?.productLine === h.EZt.COLLECTIBLES ||
            e?.productLine === h.EZt.APPLICATION ||
            e?.productLine === h.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(d.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(E).length
              ? t(d.pn.ADD_PAYMENT_STEPS)
              : t(d.pn.REVIEW);
    }, [y, m, t, E, S, I, n]),
    y)
        ? (0, r.jsx)(p.A, {})
        : m
          ? (0, r.jsx)(a.oO, {})
          : null != C
            ? (0, r.jsx)(_.A, {})
            : null;
}

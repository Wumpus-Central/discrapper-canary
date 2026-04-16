"use strict";
n.d(t, { v: () => C });
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(417597),
    l = n(73153),
    u = n(775602),
    c = n(427675),
    d = n(94420),
    _ = n(590180),
    f = n(306710),
    p = n(524246),
    h = n(14368),
    m = n(61750),
    E = n(937008),
    g = n(156312),
    A = n(972607),
    I = n(482132),
    T = n(921925),
    S = n(758836),
    y = n(788868),
    v = n(985018);
function N(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        s = (0, d.t4)((e) => e.selectedSkuId),
        {
            application: l,
            paymentError: u,
            purchaseError: f,
            purchasePreviewError: p,
            appliedUserDiscounts: h,
        } = (0, g.P5)(),
        E = (0, c.gU)(),
        A = (0, o.bG)([_.A], () => _.A.getProduct(s)),
        y = i.useRef(!1);
    a()(null != s, "Expected selectedSkuId"), a()(null != l, "Expected application");
    let N = E[s];
    a()(null != N, "Expected sku");
    let C = null != u || null != f || null != p,
        R =
            h.length > 0
                ? v.intl.formatToPlainString(v.t.VuV3Td, { discountOfferAmount: h[0].discount.amount })
                : void 0;
    return (i.useEffect(() => {
        null == A ||
            C ||
            y.current ||
            ((y.current = !0),
            (0, m.A)({
                product: A,
                overrideTitle: R,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: S.gs.FIAT,
            }));
    }, [A, n, t, C, R]),
    C)
        ? (0, r.jsx)(I.dZ, { children: (0, r.jsx)(T.A, {}) })
        : null;
}
function C(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: s,
            hasSentMessage: a,
            giftRecipient: c,
            giftMessageError: m,
            isSendingMessage: g,
            giftingOrigin: I,
        } = (0, E.Pv)(),
        T = (0, o.bG)([u.A], () => u.A.useReducedMotion),
        S = i.useRef(null),
        v = (0, d.t4)((e) => e.selectedSkuId),
        C = (0, o.bG)([_.A], () => _.A.getProduct(v)),
        { confettiColors: R } = (0, f.A)(C?.styles);
    return (
        i.useEffect(() => {
            t &&
                null != c &&
                null != v &&
                (I === y.vQ.USER_PROFILE_WISHLIST || I === y.vQ.DM_CHANNEL_WISHLIST) &&
                l.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: v, recipientId: c.id });
        }, [t, c, v, I]),
        t
            ? (0, r.jsxs)("div", {
                  ref: S,
                  children: [
                      (0, r.jsx)(A.A, {
                          giftCode: n,
                          onClose: e.handleClose,
                          selectedGiftStyle: s,
                          hasSentMessage: a,
                          giftRecipient: c,
                          giftMessageError: m,
                          isSendingMessage: g,
                      }),
                      !e.hideConfetti &&
                          !T &&
                          (0, r.jsx)(p.A, {
                              confettiTarget: S.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, h.rA)(C?.categorySkuId),
                              colors: R?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, r.jsx)(N, { ...e })
    );
}

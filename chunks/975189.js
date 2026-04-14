"use strict";
n.d(t, { v: () => C });
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(417597),
    l = n(73153),
    u = n(775602),
    c = n(590180),
    d = n(306710),
    _ = n(524246),
    f = n(14368),
    p = n(61750),
    h = n(413748),
    m = n(937008),
    E = n(156312),
    g = n(972607),
    A = n(482132),
    I = n(987616),
    T = n(921925),
    S = n(758836),
    y = n(788868),
    v = n(985018);
function N(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        s = (0, h.t)((e) => e.selectedSkuId),
        {
            application: l,
            paymentError: u,
            purchaseError: d,
            purchasePreviewError: _,
            appliedUserDiscounts: f,
        } = (0, E.P5)(),
        m = (0, I.gU)(),
        g = (0, o.bG)([c.A], () => c.A.getProduct(s)),
        y = i.useRef(!1);
    a()(null != s, "Expected selectedSkuId"), a()(null != l, "Expected application");
    let N = m[s];
    a()(null != N, "Expected sku");
    let C = null != u || null != d || null != _,
        R =
            f.length > 0
                ? v.intl.formatToPlainString(v.t.VuV3Td, { discountOfferAmount: f[0].discount.amount })
                : void 0;
    return (i.useEffect(() => {
        null == g ||
            C ||
            y.current ||
            ((y.current = !0),
            (0, p.A)({
                product: g,
                overrideTitle: R,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: S.gs.FIAT,
            }));
    }, [g, n, t, C, R]),
    C)
        ? (0, r.jsx)(A.dZ, { children: (0, r.jsx)(T.A, {}) })
        : null;
}
function C(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: s,
            hasSentMessage: a,
            giftRecipient: p,
            giftMessageError: E,
            isSendingMessage: A,
            giftingOrigin: I,
        } = (0, m.Pv)(),
        T = (0, o.bG)([u.A], () => u.A.useReducedMotion),
        S = i.useRef(null),
        v = (0, h.t)((e) => e.selectedSkuId),
        C = (0, o.bG)([c.A], () => c.A.getProduct(v)),
        { confettiColors: R } = (0, d.A)(C?.styles);
    return (
        i.useEffect(() => {
            t &&
                null != p &&
                null != v &&
                (I === y.vQ.USER_PROFILE_WISHLIST || I === y.vQ.DM_CHANNEL_WISHLIST) &&
                l.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: v, recipientId: p.id });
        }, [t, p, v, I]),
        t
            ? (0, r.jsxs)("div", {
                  ref: S,
                  children: [
                      (0, r.jsx)(g.A, {
                          giftCode: n,
                          onClose: e.handleClose,
                          selectedGiftStyle: s,
                          hasSentMessage: a,
                          giftRecipient: p,
                          giftMessageError: E,
                          isSendingMessage: A,
                      }),
                      !e.hideConfetti &&
                          !T &&
                          (0, r.jsx)(_.A, {
                              confettiTarget: S.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, f.rA)(C?.categorySkuId),
                              colors: R?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, r.jsx)(N, { ...e })
    );
}

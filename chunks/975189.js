"use strict";
n.d(t, { v: () => v });
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(417597),
    l = n(73153),
    u = n(775602),
    c = n(590180),
    d = n(306710),
    _ = n(524246),
    f = n(14368),
    p = n(61750),
    h = n(937008),
    m = n(156312),
    g = n(972607),
    E = n(482132),
    A = n(921925),
    I = n(758836),
    T = n(788868),
    y = n(985018);
function S(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        {
            skusById: a,
            selectedSkuId: l,
            application: u,
            paymentError: d,
            purchaseError: _,
            purchasePreviewError: f,
            appliedUserDiscounts: h,
        } = (0, m.P5)(),
        g = (0, o.bG)([c.A], () => c.A.getProduct(l)),
        T = i.useRef(!1);
    s()(null != l, "Expected selectedSkuId"), s()(null != u, "Expected application");
    let S = a[l];
    s()(null != S, "Expected sku");
    let v = null != d || null != _ || null != f,
        C =
            h.length > 0
                ? y.intl.formatToPlainString(y.t.VuV3Td, { discountOfferAmount: h[0].discount.amount })
                : void 0;
    return (i.useEffect(() => {
        null == g ||
            v ||
            T.current ||
            ((T.current = !0),
            (0, p.A)({
                product: g,
                overrideTitle: C,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: I.gs.FIAT,
            }));
    }, [g, n, t, v, C]),
    v)
        ? (0, r.jsx)(E.dZ, { children: (0, r.jsx)(A.A, {}) })
        : null;
}
function v(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: a,
            hasSentMessage: s,
            giftRecipient: p,
            giftMessageError: E,
            isSendingMessage: A,
            giftingOrigin: I,
        } = (0, h.Pv)(),
        y = (0, o.bG)([u.A], () => u.A.useReducedMotion),
        v = i.useRef(null),
        { selectedSkuId: C } = (0, m.P5)(),
        b = (0, o.bG)([c.A], () => c.A.getProduct(C)),
        { confettiColors: N } = (0, d.A)(b?.styles);
    return (
        i.useEffect(() => {
            t &&
                null != p &&
                null != C &&
                (I === T.vQ.USER_PROFILE_WISHLIST || I === T.vQ.DM_CHANNEL_WISHLIST) &&
                l.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: C, recipientId: p.id });
        }, [t, p, C, I]),
        t
            ? (0, r.jsxs)("div", {
                  ref: v,
                  children: [
                      (0, r.jsx)(g.A, {
                          giftCode: n,
                          onClose: e.handleClose,
                          selectedGiftStyle: a,
                          hasSentMessage: s,
                          giftRecipient: p,
                          giftMessageError: E,
                          isSendingMessage: A,
                      }),
                      !e.hideConfetti &&
                          !y &&
                          (0, r.jsx)(_.A, {
                              confettiTarget: v.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, f.rA)(b?.categorySkuId),
                              colors: N?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, r.jsx)(S, { ...e })
    );
}

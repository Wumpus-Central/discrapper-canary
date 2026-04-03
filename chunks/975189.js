"use strict";
n.d(t, { v: () => N });
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
    h = n(937008),
    m = n(156312),
    E = n(972607),
    g = n(482132),
    A = n(987616),
    I = n(921925),
    T = n(758836),
    S = n(788868),
    y = n(985018);
function v(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        {
            selectedSkuId: s,
            application: l,
            paymentError: u,
            purchaseError: d,
            purchasePreviewError: _,
            appliedUserDiscounts: f,
        } = (0, m.P5)(),
        h = (0, A.gU)(),
        E = (0, o.bG)([c.A], () => c.A.getProduct(s)),
        S = i.useRef(!1);
    a()(null != s, "Expected selectedSkuId"), a()(null != l, "Expected application");
    let v = h[s];
    a()(null != v, "Expected sku");
    let N = null != u || null != d || null != _,
        C =
            f.length > 0
                ? y.intl.formatToPlainString(y.t.VuV3Td, { discountOfferAmount: f[0].discount.amount })
                : void 0;
    return (i.useEffect(() => {
        null == E ||
            N ||
            S.current ||
            ((S.current = !0),
            (0, p.A)({
                product: E,
                overrideTitle: C,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: T.gs.FIAT,
            }));
    }, [E, n, t, N, C]),
    N)
        ? (0, r.jsx)(g.dZ, { children: (0, r.jsx)(I.A, {}) })
        : null;
}
function N(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: s,
            hasSentMessage: a,
            giftRecipient: p,
            giftMessageError: g,
            isSendingMessage: A,
            giftingOrigin: I,
        } = (0, h.Pv)(),
        T = (0, o.bG)([u.A], () => u.A.useReducedMotion),
        y = i.useRef(null),
        { selectedSkuId: N } = (0, m.P5)(),
        C = (0, o.bG)([c.A], () => c.A.getProduct(N)),
        { confettiColors: R } = (0, d.A)(C?.styles);
    return (
        i.useEffect(() => {
            t &&
                null != p &&
                null != N &&
                (I === S.vQ.USER_PROFILE_WISHLIST || I === S.vQ.DM_CHANNEL_WISHLIST) &&
                l.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: N, recipientId: p.id });
        }, [t, p, N, I]),
        t
            ? (0, r.jsxs)("div", {
                  ref: y,
                  children: [
                      (0, r.jsx)(E.A, {
                          giftCode: n,
                          onClose: e.handleClose,
                          selectedGiftStyle: s,
                          hasSentMessage: a,
                          giftRecipient: p,
                          giftMessageError: g,
                          isSendingMessage: A,
                      }),
                      !e.hideConfetti &&
                          !T &&
                          (0, r.jsx)(_.A, {
                              confettiTarget: y.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, f.rA)(C?.categorySkuId),
                              colors: R?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, r.jsx)(v, { ...e })
    );
}

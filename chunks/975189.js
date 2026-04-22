n.d(t, { v: () => y });
var l = n(627968),
    r = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(417597),
    o = n(73153),
    u = n(775602),
    d = n(427675),
    c = n(94420),
    C = n(590180),
    p = n(306710),
    m = n(524246),
    E = n(14368),
    A = n(61750),
    h = n(937008),
    f = n(156312),
    _ = n(972607),
    g = n(482132),
    T = n(921925),
    x = n(758836),
    S = n(788868),
    I = n(985018);
function O(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        i = (0, c.t4)((e) => e.selectedSkuId),
        {
            application: o,
            paymentError: u,
            purchaseError: p,
            purchasePreviewError: m,
            appliedUserDiscounts: E,
        } = (0, f.P5)(),
        h = (0, d.gU)(),
        _ = (0, a.bG)([C.A], () => C.A.getProduct(i)),
        S = r.useRef(!1);
    s()(null != i, "Expected selectedSkuId"), s()(null != o, "Expected application");
    let O = h[i];
    s()(null != O, "Expected sku");
    let y = null != u || null != p || null != m,
        N =
            E.length > 0
                ? I.intl.formatToPlainString(I.t.VuV3Td, { discountOfferAmount: E[0].discount.amount })
                : void 0;
    return (r.useEffect(() => {
        null == _ ||
            y ||
            S.current ||
            ((S.current = !0),
            (0, A.A)({
                product: _,
                overrideTitle: N,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: x.gs.FIAT,
            }));
    }, [_, n, t, y, N]),
    y)
        ? (0, l.jsx)(g.dZ, { children: (0, l.jsx)(T.A, {}) })
        : null;
}
function y(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: i,
            hasSentMessage: s,
            giftRecipient: d,
            giftMessageError: A,
            isSendingMessage: f,
            giftingOrigin: g,
        } = (0, h.Pv)(),
        T = (0, a.bG)([u.A], () => u.A.useReducedMotion),
        x = r.useRef(null),
        I = (0, c.t4)((e) => e.selectedSkuId),
        y = (0, a.bG)([C.A], () => C.A.getProduct(I)),
        { confettiColors: N } = (0, p.A)(y?.styles);
    return (
        r.useEffect(() => {
            t &&
                null != d &&
                null != I &&
                (g === S.vQ.USER_PROFILE_WISHLIST || g === S.vQ.DM_CHANNEL_WISHLIST) &&
                o.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: I, recipientId: d.id });
        }, [t, d, I, g]),
        t
            ? (0, l.jsxs)("div", {
                  ref: x,
                  children: [
                      (0, l.jsx)(_.A, {
                          giftCode: n,
                          onClose: e.handleClose,
                          selectedGiftStyle: i,
                          hasSentMessage: s,
                          giftRecipient: d,
                          giftMessageError: A,
                          isSendingMessage: f,
                      }),
                      !e.hideConfetti &&
                          !T &&
                          (0, l.jsx)(m.A, {
                              confettiTarget: x.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, E.rA)(y?.categorySkuId),
                              colors: N?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, l.jsx)(O, { ...e })
    );
}

n.d(t, {
    v: () => T,
});
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(417597),
    l = n(73153),
    c = n(775602),
    u = n(590180),
    d = n(306710),
    f = n(524246),
    p = n(14368),
    _ = n(61750),
    h = n(937008),
    m = n(156312),
    g = n(972607),
    E = n(482132),
    b = n(921925),
    y = n(758836),
    O = n(788868),
    A = n(985018);

function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}

function I(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        {
            skusById: a,
            selectedSkuId: l,
            application: c,
            paymentError: d,
            purchaseError: f,
            purchasePreviewError: p,
            appliedUserDiscounts: h,
        } = (0, m.P5)(),
        g = (0, o.bG)([u.A], () => u.A.getProduct(l)),
        O = i.useRef(!1);
    s()(null != l, "Expected selectedSkuId"), s()(null != c, "Expected application");
    let v = a[l];
    s()(null != v, "Expected sku");
    let S = null != d || null != f || null != p,
        I =
            h.length > 0
                ? A.intl.formatToPlainString(A.t.VuV3Td, {
                      discountOfferAmount: h[0].discount.amount,
                  })
                : void 0;
    return (i.useEffect(() => {
        null == g ||
            S ||
            O.current ||
            ((O.current = !0),
            (0, _.A)({
                product: g,
                overrideTitle: I,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: y.gs.FIAT,
            }));
    }, [g, n, t, S, I]),
    S)
        ? (0, r.jsx)(E.dZ, {
              children: (0, r.jsx)(b.A, {}),
          })
        : null;
}

function T(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: a,
            hasSentMessage: s,
            giftRecipient: _,
            giftMessageError: E,
            isSendingMessage: b,
            giftingOrigin: y,
        } = (0, h.Pv)(),
        A = (0, o.bG)([c.A], () => c.A.useReducedMotion),
        v = i.useRef(null),
        { selectedSkuId: T } = (0, m.P5)(),
        C = (0, o.bG)([u.A], () => u.A.getProduct(T)),
        { confettiColors: N } = (0, d.A)(null == C ? void 0 : C.styles);
    return (
        i.useEffect(() => {
            t &&
                null != _ &&
                null != T &&
                (y === O.vQ.USER_PROFILE_WISHLIST || y === O.vQ.DM_CHANNEL_WISHLIST) &&
                l.h.dispatch({
                    type: "WISHLIST_GIFT_SENT",
                    skuId: T,
                    recipientId: _.id,
                });
        }, [t, _, T, y]),
        t
            ? (0, r.jsxs)("div", {
                  ref: v,
                  children: [
                      (0, r.jsx)(g.A, {
                          giftCode: n,
                          onClose: e.handleClose,
                          selectedGiftStyle: a,
                          hasSentMessage: s,
                          giftRecipient: _,
                          giftMessageError: E,
                          isSendingMessage: b,
                      }),
                      !e.hideConfetti &&
                          !A &&
                          (0, r.jsx)(f.A, {
                              confettiTarget: v.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, p.rA)(null == C ? void 0 : C.categorySkuId),
                              colors: null == N ? void 0 : N.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, r.jsx)(I, S({}, e))
    );
}

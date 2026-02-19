"use strict";
n.d(t, { A: () => R }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(575593),
    a = n(158954),
    o = n(637141),
    l = n(854354),
    u = n(69882),
    c = n(270537),
    d = n(241989),
    _ = n(993408),
    f = n(14702),
    p = n(525723),
    h = n(287809),
    m = n(486020),
    E = n(927578),
    g = n(580630),
    A = n(112242),
    I = n(319820),
    T = n(985018),
    S = n(756366);
let y = (e) => e.name,
    v = (e, t) => {
        let n = h.default.getCurrentUser(),
            r = E.Ay.canUseCollectibles(n),
            i = (0, _.WD)(e, { isPremiumUser: r, discount: (0, _.fT)(e, r) }),
            s = !r || null != t;
        return null == i || i.showDefaultPriceOnly
            ? {}
            : {
                  PriceIcon: i.showNitroPrice ? a.tvc : void 0,
                  strikethroughPrice:
                      !s && i.finalPriceIsDifferent
                          ? (0, g.$g)(i.originalPrice.amount, i.originalPrice.currency)
                          : void 0,
              };
    },
    N = (e) => {
        let {
                sku: t,
                product: n,
                application: i,
                isSocialLayerGameItem: a,
                giftRecipient: o,
                discountOfferAmount: u,
            } = e,
            c = T.intl.string(S.default.iZe9Wy);
        a
            ? (c = T.intl.string(S.default.qwSlCO))
            : null != n &&
              (n.type === s.R.BUNDLE
                  ? (c = T.intl.string(S.default["jM8/71"]))
                  : n.type === s.R.AVATAR_DECORATION
                    ? (c = T.intl.string(S.default.r29Oel))
                    : n.type === s.R.PROFILE_EFFECT
                      ? (c = T.intl.string(S.default.eTYAvF))
                      : n.type === s.R.NAMEPLATE && (c = T.intl.string(S.default.of9bom)));
        let d = a
                ? { header: i.name, headerIconSrc: m.Ay.getApplicationIconURL({ id: i.id, icon: i.icon, size: 16 }) }
                : {},
            _ =
                null != n && n.type === s.R.BUNDLE
                    ? (0, r.jsx)(f.a, { product: n, fallbackLabel: null })
                    : (0, r.jsx)(I.r$, { sku: t }),
            p = {};
        return (
            null != n && (p = v(n, u)),
            { ...d, ...p, label: y(t), description: c, graphic: _, gift: null != o ? (0, l.xk)(o) : void 0 }
        );
    },
    C = (e) => {
        let { sku: t, skuPricePreview: n } = e,
            r = [];
        if (null != n) {
            let { discount: e, basePrice: i, showTaxes: s } = (0, I.yh)({ skuPricePreview: n });
            return (
                r.push({ id: "sku", label: y(t), amount: i }),
                null != e &&
                    r.push({ id: "discount", label: e.description, amount: e.amount > 0 ? -1 * e.amount : e.amount }),
                s && r.push({ id: "tax", label: T.intl.string(T.t["/I8zmP"]), amount: n.tax }),
                {
                    unifiedInvoiceSummaryProps: {
                        lineItems: r,
                        label: T.intl.string(S.default.eoXh7B),
                        currency: n.currency,
                    },
                    priceText: (0, g.$g)(i, n.currency),
                    discount: e,
                }
            );
        }
        return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
    },
    b = (e) => {
        let {
                application: t,
                sku: n,
                skuPricePreview: s,
                paymentSelectContent: a,
                legalContent: o,
                giftRecipient: l,
                checkoutUpperInlineNoticeProps: _,
            } = e,
            { product: f, isSocialLayerGameItem: h } = (0, I.AO)({ sku: n }),
            { unifiedInvoiceSummaryProps: m, priceText: E } = i.useMemo(
                () => C({ sku: n, skuPricePreview: s }),
                [n, s],
            ),
            A = i.useMemo(() => (null != m ? (0, r.jsx)(c.Vm, { ...m }) : null), [m]),
            y = (0, p.V_)(f),
            v = i.useMemo(
                () =>
                    N({
                        sku: n,
                        product: f,
                        application: t,
                        isSocialLayerGameItem: h,
                        giftRecipient: l,
                        discountOfferAmount: y,
                    }),
                [n, f, t, h, l, y],
            ),
            [b, R] = i.useMemo(
                () => [T.intl.string(S.default.Zxav97), null != s ? (0, g.$g)(s.amount, s.currency) : void 0],
                [s],
            );
        return (0, r.jsx)(u.rg, {
            shouldShowGlobalNotices: !0,
            purchaseItemContent: (0, r.jsx)(d.f7, { ...v, price: E }),
            invoiceSummaryContent: A,
            paymentSelectContent: a,
            legalContent: o,
            upperInlineNoticeProps: _,
            invoiceTotalDueLabel: b,
            invoiceTotalDueValue: R,
        });
    };
function R(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: s, handlePaymentSourceAdd: a } = e,
        {
            sku: l,
            application: c,
            skuPricePreview: d,
            paymentSourceDropdownProps: _,
            purchaseTermsAndLegalContent: f,
            isStepLoading: p,
            giftRecipient: h,
            warningAndErrorMessages: m,
        } = (0, A.X)({
            hasLegalTermsFlash: t,
            legalTermsNodeRef: n,
            onPaymentSourceChange: s,
            handlePaymentSourceAdd: a,
            shouldUseUnifiedCheckoutUI: !0,
        }),
        E = (0, r.jsx)(o.A, { ..._, shouldUseUnifiedCheckoutUI: !0 }),
        g = i.useMemo(() => {
            if (null == m.testModeWarning && null == m.devShelfError) return null;
            let e = [];
            return (
                null != m.testModeWarning && e.push({ type: "warning", message: m.testModeWarning }),
                null != m.devShelfError && e.push({ type: "critical", message: m.devShelfError }),
                e
            );
        }, [m.testModeWarning, m.devShelfError]);
    return p
        ? (0, r.jsx)(u.Ed, {})
        : (0, r.jsx)(b, {
              application: c,
              giftRecipient: h,
              sku: l,
              skuPricePreview: d,
              paymentSelectContent: E,
              legalContent: f,
              checkoutUpperInlineNoticeProps: g,
          });
}

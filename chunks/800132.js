"use strict";
n.d(t, { A: () => y }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(575593),
    s = n(637141),
    o = n(854354),
    l = n(69882),
    u = n(270537),
    c = n(241989),
    d = n(14702),
    _ = n(486020),
    f = n(580630),
    h = n(112242),
    p = n(319820),
    g = n(985018),
    E = n(756366);
let A = (e) => {
        let { sku: t, product: n, application: i, isSocialLayerGameItem: s, giftRecipient: l } = e,
            u = g.intl.string(E.default.iZe9Wy);
        s
            ? (u = g.intl.formatToPlainString(E.default.cWzDeR, { applicationName: i.name }))
            : null != n &&
              (n.type === a.R.BUNDLE
                  ? (u = g.intl.string(E.default["jM8/71"]))
                  : n.type === a.R.AVATAR_DECORATION
                    ? (u = g.intl.string(E.default.r29Oel))
                    : n.type === a.R.PROFILE_EFFECT
                      ? (u = g.intl.string(E.default.eTYAvF))
                      : n.type === a.R.NAMEPLATE && (u = g.intl.string(E.default.of9bom)));
        let c = s
                ? { header: i.name, headerIconSrc: _.Ay.getApplicationIconURL({ id: i.id, icon: i.icon, size: 16 }) }
                : {},
            f =
                null != n && n.type === a.R.BUNDLE
                    ? (0, r.jsx)(d.a, { product: n, fallbackLabel: null })
                    : (0, r.jsx)(p.r$, { sku: t });
        return { ...c, label: t.name, description: u, graphic: f, gift: null != l ? (0, o.xk)(l) : void 0 };
    },
    I = (e) => {
        let { skuPricePreview: t, sku: n } = e,
            r = [];
        if (null != t) {
            let { discount: e, basePrice: i, showTaxes: a } = (0, p.yh)({ skuPricePreview: t });
            return (
                r.push({ id: "sku", label: n.name, amount: i }),
                null != e &&
                    r.push({ id: "discount", label: e.description, amount: e.amount > 0 ? -1 * e.amount : e.amount }),
                a && r.push({ id: "tax", label: g.intl.string(g.t["/I8zmP"]), amount: t.tax }),
                {
                    unifiedInvoiceSummaryProps: {
                        lineItems: r,
                        label: g.intl.string(E.default.eoXh7B),
                        totalDueLabel: g.intl.string(E.default.Zxav97),
                        currency: t.currency,
                    },
                    priceText: (0, f.$g)(i, t.currency),
                }
            );
        }
        return { unifiedInvoiceSummaryProps: null, priceText: "" };
    },
    T = (e) => {
        let {
                application: t,
                sku: n,
                skuPricePreview: a,
                paymentSelectContent: s,
                legalContent: o,
                giftRecipient: d,
                checkoutUpperInlineNoticeProps: _,
            } = e,
            { product: f, isSocialLayerGameItem: h } = (0, p.AO)({ sku: n }),
            { unifiedInvoiceSummaryProps: g, priceText: E } = i.useMemo(
                () => I({ sku: n, skuPricePreview: a }),
                [n, a],
            ),
            T = i.useMemo(() => (null != g ? (0, r.jsx)(u.V, { ...g }) : null), [g]),
            y = i.useMemo(
                () => A({ sku: n, product: f, application: t, isSocialLayerGameItem: h, giftRecipient: d }),
                [n, f, t, h, d],
            );
        return (0, r.jsx)(l.rg, {
            shouldShowGlobalNotices: !0,
            purchaseItemContent: (0, r.jsx)(c.f7, { ...y, price: E }),
            invoiceSummaryContent: T,
            paymentSelectContent: s,
            legalContent: o,
            upperInlineNoticeProps: _,
        });
    };
function y(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: a, handlePaymentSourceAdd: o } = e,
        {
            sku: u,
            application: c,
            skuPricePreview: d,
            paymentSourceDropdownProps: _,
            purchaseTermsAndLegalContent: f,
            isStepLoading: p,
            giftRecipient: g,
            warningAndErrorMessages: E,
        } = (0, h.X)({
            hasLegalTermsFlash: t,
            legalTermsNodeRef: n,
            onPaymentSourceChange: a,
            handlePaymentSourceAdd: o,
            shouldUseUnifiedCheckoutUI: !0,
        }),
        A = (0, r.jsx)(s.A, { ..._, shouldUseUnifiedCheckoutUI: !0 }),
        I = i.useMemo(() => {
            if (null == E.testModeWarning && null == E.devShelfError) return null;
            let e = [];
            return (
                null != E.testModeWarning && e.push({ type: "warning", message: E.testModeWarning }),
                null != E.devShelfError && e.push({ type: "critical", message: E.devShelfError }),
                e
            );
        }, [E.testModeWarning, E.devShelfError]);
    return p
        ? (0, r.jsx)(l.Ed, {})
        : (0, r.jsx)(T, {
              application: c,
              giftRecipient: g,
              sku: u,
              skuPricePreview: d,
              paymentSelectContent: A,
              legalContent: f,
              checkoutUpperInlineNoticeProps: I,
          });
}

"use strict";
n.d(t, { Ay: () => R, dL: () => N, oO: () => C }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(575593),
    a = n(403581),
    o = n(262427),
    l = n(725836),
    u = n(69882),
    c = n(93159),
    d = n(270537),
    _ = n(241989),
    f = n(993408),
    p = n(287809),
    h = n(486020),
    E = n(927578),
    m = n(580630),
    g = n(156312),
    A = n(941667),
    I = n(319820),
    T = n(652215),
    S = n(985018),
    y = n(327105);
let N = (e) => e.name,
    v = {
        [s.R.BUNDLE]: () => S.intl.string(y.default["jM8/71"]),
        [s.R.AVATAR_DECORATION]: () => S.intl.string(y.default.r29Oel),
        [s.R.PROFILE_EFFECT]: () => S.intl.string(y.default.eTYAvF),
        [s.R.NAMEPLATE]: () => S.intl.string(y.default.of9bom),
        [s.R.PROFILE_FRAME]: () => S.intl.string(y.default.HzDn6w),
    },
    C = (e) => {
        let t = S.intl.string(y.default.iZe9Wy);
        if (null == e);
        else if (e.type in v) return (0, v[e.type])();
        return t;
    },
    O = (e) => {
        let {
                application: t,
                sku: n,
                skuPricePreview: s,
                paymentSelectContent: c,
                legalContent: g,
                isGift: v,
                giftRecipient: O,
                upperInlineNoticeProps: R,
                footerInlineNoticeProps: b,
            } = e,
            { product: D, isSocialLayerGameItem: L } = (0, I.AO)({ sku: n }),
            { unifiedInvoiceSummaryProps: w, priceText: M } = i.useMemo(
                () =>
                    ((e) => {
                        let { sku: t, skuPricePreview: n } = e,
                            r = [];
                        if (null != n) {
                            let { discount: e, basePrice: i, showTaxes: s } = (0, I.yh)({ skuPricePreview: n });
                            return (
                                r.push({ id: "sku", label: N(t), amount: i }),
                                null != e &&
                                    r.push({
                                        id: "discount",
                                        label: e.description,
                                        amount: e.amount > 0 ? -1 * e.amount : e.amount,
                                    }),
                                s && r.push({ id: "tax", label: S.intl.string(S.t["/I8zmP"]), amount: n.tax }),
                                {
                                    unifiedInvoiceSummaryProps: {
                                        lineItems: r,
                                        label: S.intl.string(y.default.eoXh7B),
                                        currency: n.currency,
                                    },
                                    priceText: (0, m.$g)(i, n.currency),
                                    discount: e,
                                }
                            );
                        }
                        return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
                    })({ sku: n, skuPricePreview: s }),
                [n, s],
            ),
            P = i.useMemo(() => (null != w ? (0, r.jsx)(d.Vm, { ...w }) : null), [w]),
            x = i.useMemo(
                () =>
                    ((e) => {
                        let t,
                            n,
                            i,
                            { sku: s, product: o, application: l, isSocialLayerGameItem: u, giftRecipient: c } = e,
                            d = S.intl.string(y.default.iZe9Wy);
                        u
                            ? (d = S.intl.string(y.default.qwSlCO))
                            : null != o
                              ? (d = C(o))
                              : s.productLine === T.EZt.GUILD_PRODUCT && (d = S.intl.string(y.default.hewwdA));
                        let m = u
                                ? {
                                      header: l.name,
                                      headerIconSrc: h.Ay.getApplicationIconURL({ id: l.id, icon: l.icon, size: 16 }),
                                  }
                                : {},
                            g = (0, r.jsx)(_.WH, { sku: s, product: o }),
                            A = {};
                        return (
                            null != o &&
                                ((t = p.default.getCurrentUser()),
                                (n = E.Ay.canUseCollectibles(t)),
                                (A =
                                    null == (i = (0, f.WD)(o, { isPremiumUser: n, discount: (0, f.fT)(o, n) })) ||
                                    i.showDefaultPriceOnly
                                        ? {}
                                        : {
                                              PriceIcon: i.showNitroPrice ? a.t : void 0,
                                              priceTooltip: i.showNitroPrice ? S.intl.string(y.default.YUNJJa) : void 0,
                                          })),
                            {
                                ...m,
                                ...A,
                                label: N(s),
                                description: d,
                                graphic: g,
                                target: null != c ? { type: "gift", user: c } : void 0,
                            }
                        );
                    })({ sku: n, product: D, application: t, isSocialLayerGameItem: L, giftRecipient: O }),
                [n, D, t, L, O],
            ),
            [k, U] = i.useMemo(
                () => [S.intl.string(y.default.Zxav97), null != s ? (0, m.$g)(s.amount, s.currency) : void 0],
                [s],
            ),
            G = i.useMemo(() => {
                let e = (0, A.P)(s, { isGift: v });
                return null != e ? (0, r.jsx)(o.J, { ...e }) : null;
            }, [s, v]),
            { setCheckoutHeaderConfigs: F, checkoutHeaderConfigs: V } = (0, l.ck)();
        return (
            i.useEffect(() => {
                null != G && null == V.headerBadgeText && F({ ...V, headerBadgeText: S.intl.string(y.default.Fjpyfj) });
            }, [G, F, V]),
            (0, r.jsx)(u.T_, {
                shouldShowGlobalNotices: !0,
                purchaseItemContent: (0, r.jsx)(_.f7, { ...x, price: M }),
                invoiceSummaryContent: P,
                paymentSelectContent: c,
                legalContent: g,
                promotionalNoticeContent: G,
                upperInlineNoticeProps: R,
                footerInlineNoticeProps: b,
                invoiceTotalDueLabel: k,
                invoiceTotalDueValue: U,
            })
        );
    };
function R(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: s } = e,
        {
            sku: a,
            application: o,
            skuPricePreview: l,
            isGift: d,
            paymentSourceDropdownProps: _,
            purchaseTermsAndLegalContent: f,
            isStepLoading: p,
            giftRecipient: h,
            warningAndErrorMessages: E,
            giftCardsEnabled: m,
            giftCardCheckboxProps: I,
            disabled: T,
        } = (0, A.X)({ hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: s }),
        { currencies: y, displayCurrency: N, setCurrency: v, priceOptions: C } = (0, g.P5)(),
        R = i.useMemo(
            () =>
                (0, r.jsx)(c.qX, {
                    label: S.intl.string(S.t["/AAR02"]),
                    selectedCurrency: C.currency ?? N,
                    currencies: y,
                    onChange: v,
                }),
            [C.currency, N, y, v],
        ),
        b = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.nL, {
                    label: S.intl.string(S.t["u+Cw58"]),
                    giftCardsEnabled: m,
                    giftCardCheckboxProps: I,
                    paymentSourceDropdownProps: { ..._, shouldUseUnifiedCheckoutUI: !0 },
                    disabled: T,
                }),
                R,
            ],
        }),
        D = i.useMemo(() => {
            let e = [];
            return (
                null != E.testModeWarning &&
                    e.push({ type: "warning", message: E.testModeWarning, key: "test-mode-warning-notice" }),
                null != E.devShelfError &&
                    e.push({ type: "critical", message: E.devShelfError, key: "dev-shelf-error-notice" }),
                e.length > 0 ? e : null
            );
        }, [E.testModeWarning, E.devShelfError]),
        L = i.useMemo(() => {
            let e = [];
            return (
                null != E.socialLayerGameItemDisclaimer &&
                    e.push({
                        type: "info",
                        message: E.socialLayerGameItemDisclaimer,
                        key: "social-layer-game-item-disclaimer-notice",
                    }),
                e.length > 0 ? e : null
            );
        }, [E.socialLayerGameItemDisclaimer]);
    return p
        ? (0, r.jsx)(u.Ed, {})
        : (0, r.jsx)(O, {
              application: o,
              giftRecipient: h,
              isGift: d,
              sku: a,
              skuPricePreview: l,
              paymentSelectContent: b,
              legalContent: f,
              upperInlineNoticeProps: D,
              footerInlineNoticeProps: L,
          });
}

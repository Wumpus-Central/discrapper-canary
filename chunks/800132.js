n.d(t, { Ay: () => v, dL: () => T, oO: () => g }), n(321073);
var l = n(627968),
    i = n(64700),
    a = n(575593),
    r = n(403581),
    s = n(262427),
    o = n(725836),
    u = n(69882),
    c = n(93159),
    d = n(270537),
    p = n(241989),
    m = n(993408),
    h = n(287809),
    A = n(486020),
    _ = n(927578),
    C = n(580630),
    E = n(156312),
    y = n(941667),
    f = n(319820),
    P = n(652215),
    S = n(985018),
    x = n(327105);
let T = (e) => e.name,
    N = {
        [a.R.BUNDLE]: () => S.intl.string(x.default["jM8/71"]),
        [a.R.AVATAR_DECORATION]: () => S.intl.string(x.default.r29Oel),
        [a.R.PROFILE_EFFECT]: () => S.intl.string(x.default.eTYAvF),
        [a.R.NAMEPLATE]: () => S.intl.string(x.default.of9bom),
        [a.R.PROFILE_FRAME]: () => S.intl.string(x.default.HzDn6w),
    },
    g = (e) => {
        let t = S.intl.string(x.default.iZe9Wy);
        if (null == e);
        else if (e.type in N) return (0, N[e.type])();
        return t;
    },
    I = (e) => {
        let {
                application: t,
                sku: n,
                skuPricePreview: a,
                paymentSelectContent: c,
                legalContent: E,
                isGift: N,
                giftRecipient: I,
                upperInlineNoticeProps: v,
                footerInlineNoticeProps: b,
            } = e,
            { product: R, isSocialLayerGameItem: M } = (0, f.AO)({ sku: n }),
            { unifiedInvoiceSummaryProps: j, priceText: L } = i.useMemo(
                () =>
                    ((e) => {
                        let { sku: t, skuPricePreview: n } = e,
                            l = [];
                        if (null != n) {
                            let { discount: e, basePrice: i, showTaxes: a } = (0, f.yh)({ skuPricePreview: n });
                            return (
                                l.push({ id: "sku", label: T(t), amount: i }),
                                null != e &&
                                    l.push({
                                        id: "discount",
                                        label: e.description,
                                        amount: e.amount > 0 ? -1 * e.amount : e.amount,
                                    }),
                                a && l.push({ id: "tax", label: S.intl.string(S.t["/I8zmP"]), amount: n.tax }),
                                {
                                    unifiedInvoiceSummaryProps: {
                                        lineItems: l,
                                        label: S.intl.string(x.default.eoXh7B),
                                        currency: n.currency,
                                    },
                                    priceText: (0, C.$g)(i, n.currency),
                                    discount: e,
                                }
                            );
                        }
                        return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
                    })({ sku: n, skuPricePreview: a }),
                [n, a],
            ),
            O = i.useMemo(() => (null != j ? (0, l.jsx)(d.Vm, { ...j }) : null), [j]),
            D = i.useMemo(
                () =>
                    ((e) => {
                        let t,
                            n,
                            i,
                            { sku: a, product: s, application: o, isSocialLayerGameItem: u, giftRecipient: c } = e,
                            d = S.intl.string(x.default.iZe9Wy);
                        u
                            ? (d = S.intl.string(x.default.qwSlCO))
                            : null != s
                              ? (d = g(s))
                              : a.productLine === P.EZt.GUILD_PRODUCT && (d = S.intl.string(x.default.hewwdA));
                        let C = u
                                ? {
                                      header: o.name,
                                      headerIconSrc: A.Ay.getApplicationIconURL({ id: o.id, icon: o.icon, size: 16 }),
                                  }
                                : {},
                            E = (0, l.jsx)(p.WH, { sku: a, product: s }),
                            y = {};
                        return (
                            null != s &&
                                ((t = h.default.getCurrentUser()),
                                (n = _.Ay.canUseCollectibles(t)),
                                (y =
                                    null == (i = (0, m.WD)(s, { isPremiumUser: n, discount: (0, m.fT)(s, n) })) ||
                                    i.showDefaultPriceOnly
                                        ? {}
                                        : {
                                              PriceIcon: i.showNitroPrice ? r.t : void 0,
                                              priceTooltip: i.showNitroPrice ? S.intl.string(x.default.YUNJJa) : void 0,
                                          })),
                            {
                                ...C,
                                ...y,
                                label: T(a),
                                description: d,
                                graphic: E,
                                target: null != c ? { type: "gift", user: c } : void 0,
                            }
                        );
                    })({ sku: n, product: R, application: t, isSocialLayerGameItem: M, giftRecipient: I }),
                [n, R, t, M, I],
            ),
            [U, w] = i.useMemo(
                () => [S.intl.string(x.default.Zxav97), null != a ? (0, C.$g)(a.amount, a.currency) : void 0],
                [a],
            ),
            k = i.useMemo(() => {
                let e = (0, y.P)(a, { isGift: N });
                return null != e ? (0, l.jsx)(s.J, { ...e }) : null;
            }, [a, N]),
            { setCheckoutHeaderConfigs: F, checkoutHeaderConfigs: G } = (0, o.ck)();
        return (
            i.useEffect(() => {
                null != k && null == G.headerBadgeText && F({ ...G, headerBadgeText: S.intl.string(x.default.Fjpyfj) });
            }, [k, F, G]),
            (0, l.jsx)(u.T_, {
                shouldShowGlobalNotices: !0,
                purchaseItemContent: (0, l.jsx)(p.f7, { ...D, price: L }),
                invoiceSummaryContent: O,
                paymentSelectContent: c,
                legalContent: E,
                promotionalNoticeContent: k,
                upperInlineNoticeProps: v,
                footerInlineNoticeProps: b,
                invoiceTotalDueLabel: U,
                invoiceTotalDueValue: w,
            })
        );
    };
function v(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: a } = e,
        {
            sku: r,
            application: s,
            skuPricePreview: o,
            isGift: d,
            paymentSourceDropdownProps: p,
            purchaseTermsAndLegalContent: m,
            isStepLoading: h,
            giftRecipient: A,
            warningAndErrorMessages: _,
            giftCardsEnabled: C,
            giftCardCheckboxProps: f,
            disabled: P,
        } = (0, y.X)({ hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: a }),
        { currencies: x, displayCurrency: T, setCurrency: N, priceOptions: g } = (0, E.P5)(),
        v = i.useMemo(
            () =>
                (0, l.jsx)(c.qX, {
                    label: S.intl.string(S.t["/AAR02"]),
                    selectedCurrency: g.currency ?? T,
                    currencies: x,
                    onChange: N,
                }),
            [g.currency, T, x, N],
        ),
        b = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(c.nL, {
                    label: S.intl.string(S.t["u+Cw58"]),
                    giftCardsEnabled: C,
                    giftCardCheckboxProps: f,
                    paymentSourceDropdownProps: { ...p, shouldUseUnifiedCheckoutUI: !0 },
                    disabled: P,
                }),
                v,
            ],
        }),
        R = i.useMemo(() => {
            let e = [];
            return (
                null != _.testModeWarning &&
                    e.push({ type: "warning", message: _.testModeWarning, key: "test-mode-warning-notice" }),
                null != _.devShelfError &&
                    e.push({ type: "critical", message: _.devShelfError, key: "dev-shelf-error-notice" }),
                e.length > 0 ? e : null
            );
        }, [_.testModeWarning, _.devShelfError]),
        M = i.useMemo(() => {
            let e = [];
            return (
                null != _.socialLayerGameItemDisclaimer &&
                    e.push({
                        type: "info",
                        message: _.socialLayerGameItemDisclaimer,
                        key: "social-layer-game-item-disclaimer-notice",
                    }),
                e.length > 0 ? e : null
            );
        }, [_.socialLayerGameItemDisclaimer]);
    return h
        ? (0, l.jsx)(u.Ed, {})
        : (0, l.jsx)(I, {
              application: s,
              giftRecipient: A,
              isGift: d,
              sku: r,
              skuPricePreview: o,
              paymentSelectContent: b,
              legalContent: m,
              upperInlineNoticeProps: R,
              footerInlineNoticeProps: M,
          });
}

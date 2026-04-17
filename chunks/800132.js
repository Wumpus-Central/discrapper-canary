"use strict";
n.d(t, { Ay: () => L, dL: () => v, oO: () => R }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(575593),
    a = n(158954),
    o = n(262427),
    l = n(725836),
    u = n(69882),
    c = n(93159),
    d = n(270537),
    _ = n(241989),
    f = n(993408),
    p = n(287809),
    h = n(486020),
    m = n(927578),
    E = n(580630),
    g = n(156312),
    A = n(941667),
    I = n(319820),
    T = n(652215),
    S = n(985018),
    y = n(327105);
let v = (e) => e.name,
    N = (e) => {
        let t = p.default.getCurrentUser(),
            n = m.Ay.canUseCollectibles(t),
            r = (0, f.WD)(e, { isPremiumUser: n, discount: (0, f.fT)(e, n) });
        return null == r || r.showDefaultPriceOnly
            ? {}
            : {
                  PriceIcon: r.showNitroPrice ? a.tvc : void 0,
                  priceTooltip: r.showNitroPrice ? S.intl.string(y.default.YUNJJa) : void 0,
              };
    },
    C = {
        [s.R.BUNDLE]: () => S.intl.string(y.default["jM8/71"]),
        [s.R.AVATAR_DECORATION]: () => S.intl.string(y.default.r29Oel),
        [s.R.PROFILE_EFFECT]: () => S.intl.string(y.default.eTYAvF),
        [s.R.NAMEPLATE]: () => S.intl.string(y.default.of9bom),
        [s.R.PROFILE_FRAME]: () => S.intl.string(y.default.HzDn6w),
    },
    R = (e) => {
        let t = S.intl.string(y.default.iZe9Wy);
        if (null == e);
        else if (e.type in C) return (0, C[e.type])();
        return t;
    },
    O = (e) => {
        let { sku: t, product: n, application: i, isSocialLayerGameItem: s, giftRecipient: a } = e,
            o = S.intl.string(y.default.iZe9Wy);
        s
            ? (o = S.intl.string(y.default.qwSlCO))
            : null != n
              ? (o = R(n))
              : t.productLine === T.EZt.GUILD_PRODUCT && (o = S.intl.string(y.default.hewwdA));
        let l = s
                ? { header: i.name, headerIconSrc: h.Ay.getApplicationIconURL({ id: i.id, icon: i.icon, size: 16 }) }
                : {},
            u = (0, r.jsx)(_.WH, { sku: t, product: n }),
            c = {};
        return (
            null != n && (c = N(n)),
            {
                ...l,
                ...c,
                label: v(t),
                description: o,
                graphic: u,
                target: null != a ? { type: "gift", user: a } : void 0,
            }
        );
    },
    b = (e) => {
        let { sku: t, skuPricePreview: n } = e,
            r = [];
        if (null != n) {
            let { discount: e, basePrice: i, showTaxes: s } = (0, I.yh)({ skuPricePreview: n });
            return (
                r.push({ id: "sku", label: v(t), amount: i }),
                null != e &&
                    r.push({ id: "discount", label: e.description, amount: e.amount > 0 ? -1 * e.amount : e.amount }),
                s && r.push({ id: "tax", label: S.intl.string(S.t["/I8zmP"]), amount: n.tax }),
                {
                    unifiedInvoiceSummaryProps: {
                        lineItems: r,
                        label: S.intl.string(y.default.eoXh7B),
                        currency: n.currency,
                    },
                    priceText: (0, E.$g)(i, n.currency),
                    discount: e,
                }
            );
        }
        return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
    },
    D = (e) => {
        let {
                application: t,
                sku: n,
                skuPricePreview: s,
                paymentSelectContent: a,
                legalContent: c,
                isGift: f,
                giftRecipient: p,
                upperInlineNoticeProps: h,
                footerInlineNoticeProps: m,
            } = e,
            { product: g, isSocialLayerGameItem: T } = (0, I.AO)({ sku: n }),
            { unifiedInvoiceSummaryProps: v, priceText: N } = i.useMemo(
                () => b({ sku: n, skuPricePreview: s }),
                [n, s],
            ),
            C = i.useMemo(() => (null != v ? (0, r.jsx)(d.Vm, { ...v }) : null), [v]),
            R = i.useMemo(
                () => O({ sku: n, product: g, application: t, isSocialLayerGameItem: T, giftRecipient: p }),
                [n, g, t, T, p],
            ),
            [D, L] = i.useMemo(
                () => [S.intl.string(y.default.Zxav97), null != s ? (0, E.$g)(s.amount, s.currency) : void 0],
                [s],
            ),
            w = i.useMemo(() => {
                let e = (0, A.P)(s, { isGift: f });
                return null != e ? (0, r.jsx)(o.J, { ...e }) : null;
            }, [s, f]),
            { setCheckoutHeaderConfigs: M, checkoutHeaderConfigs: P } = (0, l.ck)();
        return (
            i.useEffect(() => {
                null != w && null == P.headerBadgeText && M({ ...P, headerBadgeText: S.intl.string(y.default.Fjpyfj) });
            }, [w, M, P]),
            (0, r.jsx)(u.rg, {
                shouldShowGlobalNotices: !0,
                purchaseItemContent: (0, r.jsx)(_.f7, { ...R, price: N }),
                invoiceSummaryContent: C,
                paymentSelectContent: a,
                legalContent: c,
                promotionalNoticeContent: w,
                upperInlineNoticeProps: h,
                footerInlineNoticeProps: m,
                invoiceTotalDueLabel: D,
                invoiceTotalDueValue: L,
            })
        );
    };
function L(e) {
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
            warningAndErrorMessages: m,
            giftCardsEnabled: E,
            giftCardCheckboxProps: I,
            disabled: T,
        } = (0, A.X)({ hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: s }),
        { currencies: y, displayCurrency: v, setCurrency: N, priceOptions: C } = (0, g.P5)(),
        R = i.useMemo(
            () =>
                (0, r.jsx)(c.qX, {
                    label: S.intl.string(S.t["/AAR02"]),
                    selectedCurrency: C.currency ?? v,
                    currencies: y,
                    onChange: N,
                }),
            [C.currency, v, y, N],
        ),
        O = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.nL, {
                    label: S.intl.string(S.t["u+Cw58"]),
                    giftCardsEnabled: E,
                    giftCardCheckboxProps: I,
                    paymentSourceDropdownProps: { ..._, shouldUseUnifiedCheckoutUI: !0 },
                    disabled: T,
                }),
                R,
            ],
        }),
        b = i.useMemo(() => {
            let e = [];
            return (
                null != m.testModeWarning &&
                    e.push({ type: "warning", message: m.testModeWarning, key: "test-mode-warning-notice" }),
                null != m.devShelfError &&
                    e.push({ type: "critical", message: m.devShelfError, key: "dev-shelf-error-notice" }),
                e.length > 0 ? e : null
            );
        }, [m.testModeWarning, m.devShelfError]),
        L = i.useMemo(() => {
            let e = [];
            return (
                null != m.socialLayerGameItemDisclaimer &&
                    e.push({
                        type: "info",
                        message: m.socialLayerGameItemDisclaimer,
                        key: "social-layer-game-item-disclaimer-notice",
                    }),
                e.length > 0 ? e : null
            );
        }, [m.socialLayerGameItemDisclaimer]);
    return p
        ? (0, r.jsx)(u.Ed, {})
        : (0, r.jsx)(D, {
              application: o,
              giftRecipient: h,
              isGift: d,
              sku: a,
              skuPricePreview: l,
              paymentSelectContent: O,
              legalContent: f,
              upperInlineNoticeProps: b,
              footerInlineNoticeProps: L,
          });
}

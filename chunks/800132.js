"use strict";
n.d(t, { Ay: () => M, ZM: () => R, dL: () => C, oO: () => D }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(575593),
    a = n(158954),
    o = n(637141),
    l = n(262427),
    u = n(854354),
    c = n(725836),
    d = n(69882),
    _ = n(270537),
    f = n(241989),
    p = n(993408),
    h = n(14702),
    m = n(525723),
    E = n(287809),
    g = n(486020),
    A = n(927578),
    I = n(580630),
    T = n(112242),
    S = n(319820),
    y = n(985018),
    v = n(756366),
    N = n(78262);
let C = (e) => e.name,
    b = (e, t) => {
        let n = E.default.getCurrentUser(),
            r = A.Ay.canUseCollectibles(n),
            i = (0, p.WD)(e, { isPremiumUser: r, discount: (0, p.fT)(e, r) }),
            s = !r || null != t;
        if (null != i && !i.showDefaultPriceOnly) {
            let e = i.originalPrice.amount,
                t = i.finalPrice.amount;
            return {
                PriceIcon: i.showNitroPrice ? a.tvc : void 0,
                priceSubTextHasStrikethrough: !0,
                priceTooltip: y.intl.formatToPlainString(v.default.YUNJJa, {
                    savingsText: (0, I.$g)(e - t, i.originalPrice.currency),
                }),
                priceSubText: !s && i.finalPriceIsDifferent ? (0, I.$g)(e, i.originalPrice.currency) : void 0,
            };
        }
        return {};
    },
    R = (e) => {
        let { sku: t, product: n } = e;
        return null != n && n.type === s.R.BUNDLE
            ? (0, r.jsx)(h.a, { product: n, fallbackLabel: null })
            : (0, r.jsx)(S.r$, { sku: t, slayerProductPreviewClassName: N.a });
    },
    O = {
        [s.R.BUNDLE]: () => y.intl.string(v.default["jM8/71"]),
        [s.R.AVATAR_DECORATION]: () => y.intl.string(v.default.r29Oel),
        [s.R.PROFILE_EFFECT]: () => y.intl.string(v.default.eTYAvF),
        [s.R.NAMEPLATE]: () => y.intl.string(v.default.of9bom),
    },
    D = (e) => {
        let t = y.intl.string(v.default.iZe9Wy);
        if (null == e);
        else if (e.type in O) return (0, O[e.type])();
        return t;
    },
    L = (e) => {
        let {
                sku: t,
                product: n,
                application: r,
                isSocialLayerGameItem: i,
                giftRecipient: s,
                discountOfferAmount: a,
            } = e,
            o = y.intl.string(v.default.iZe9Wy);
        i ? (o = y.intl.string(v.default.qwSlCO)) : null != n && (o = D(n));
        let l = i
                ? { header: r.name, headerIconSrc: g.Ay.getApplicationIconURL({ id: r.id, icon: r.icon, size: 16 }) }
                : {},
            c = R({ sku: t, product: n }),
            d = {};
        return (
            null != n && (d = b(n, a)),
            { ...l, ...d, label: C(t), description: o, graphic: c, gift: null != s ? (0, u.xk)(s) : void 0 }
        );
    },
    w = (e) => {
        let { sku: t, skuPricePreview: n } = e,
            r = [];
        if (null != n) {
            let { discount: e, basePrice: i, showTaxes: s } = (0, S.yh)({ skuPricePreview: n });
            return (
                r.push({ id: "sku", label: C(t), amount: i }),
                null != e &&
                    r.push({ id: "discount", label: e.description, amount: e.amount > 0 ? -1 * e.amount : e.amount }),
                s && r.push({ id: "tax", label: y.intl.string(y.t["/I8zmP"]), amount: n.tax }),
                {
                    unifiedInvoiceSummaryProps: {
                        lineItems: r,
                        label: y.intl.string(v.default.eoXh7B),
                        currency: n.currency,
                    },
                    priceText: (0, I.$g)(i, n.currency),
                    discount: e,
                }
            );
        }
        return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
    },
    x = (e) => {
        let {
                application: t,
                sku: n,
                skuPricePreview: s,
                paymentSelectContent: a,
                legalContent: o,
                isGift: u,
                giftRecipient: p,
                checkoutUpperInlineNoticeProps: h,
            } = e,
            { product: E, isSocialLayerGameItem: g } = (0, S.AO)({ sku: n }),
            { unifiedInvoiceSummaryProps: A, priceText: N } = i.useMemo(
                () => w({ sku: n, skuPricePreview: s }),
                [n, s],
            ),
            C = i.useMemo(() => (null != A ? (0, r.jsx)(_.Vm, { ...A }) : null), [A]),
            b = (0, m.V_)(E),
            R = i.useMemo(
                () =>
                    L({
                        sku: n,
                        product: E,
                        application: t,
                        isSocialLayerGameItem: g,
                        giftRecipient: p,
                        discountOfferAmount: b,
                    }),
                [n, E, t, g, p, b],
            ),
            [O, D] = i.useMemo(
                () => [y.intl.string(v.default.Zxav97), null != s ? (0, I.$g)(s.amount, s.currency) : void 0],
                [s],
            ),
            x = i.useMemo(() => {
                let e = (0, T.PN)(s, { isGift: u });
                return null != e ? (0, r.jsx)(l.J, { ...e }) : null;
            }, [s, u]),
            { setCheckoutHeaderConfigs: M, checkoutHeaderConfigs: P } = (0, c.ck)();
        return (
            i.useEffect(() => {
                null != x && null == P.headerBadgeText && M({ ...P, headerBadgeText: y.intl.string(v.default.Fjpyfj) });
            }, [x, M, P]),
            (0, r.jsx)(d.rg, {
                shouldShowGlobalNotices: !0,
                purchaseItemContent: (0, r.jsx)(f.f7, { ...R, price: N }),
                invoiceSummaryContent: C,
                paymentSelectContent: a,
                legalContent: o,
                promotionalNoticeContent: x,
                upperInlineNoticeProps: h,
                invoiceTotalDueLabel: O,
                invoiceTotalDueValue: D,
            })
        );
    };
function M(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: s, handlePaymentSourceAdd: a } = e,
        {
            sku: l,
            application: u,
            skuPricePreview: c,
            isGift: _,
            paymentSourceDropdownProps: f,
            purchaseTermsAndLegalContent: p,
            isStepLoading: h,
            giftRecipient: m,
            warningAndErrorMessages: E,
        } = (0, T.X)({
            hasLegalTermsFlash: t,
            legalTermsNodeRef: n,
            onPaymentSourceChange: s,
            handlePaymentSourceAdd: a,
            shouldUseUnifiedCheckoutUI: !0,
        }),
        g = (0, r.jsx)(o.A, { ...f, shouldUseUnifiedCheckoutUI: !0 }),
        A = i.useMemo(() => {
            if (null == E.testModeWarning && null == E.devShelfError) return null;
            let e = [];
            return (
                null != E.testModeWarning && e.push({ type: "warning", message: E.testModeWarning }),
                null != E.devShelfError && e.push({ type: "critical", message: E.devShelfError }),
                e
            );
        }, [E.testModeWarning, E.devShelfError]);
    return h
        ? (0, r.jsx)(d.Ed, {})
        : (0, r.jsx)(x, {
              application: u,
              giftRecipient: m,
              isGift: _,
              sku: l,
              skuPricePreview: c,
              paymentSelectContent: g,
              legalContent: p,
              checkoutUpperInlineNoticeProps: A,
          });
}

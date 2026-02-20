"use strict";
n.d(t, { A: () => D }), n(321073);
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
    v = n(756366);
let N = (e) => e.name,
    C = (e, t) => {
        let n = E.default.getCurrentUser(),
            r = A.Ay.canUseCollectibles(n),
            i = (0, p.WD)(e, { isPremiumUser: r, discount: (0, p.fT)(e, r) }),
            s = !r || null != t;
        return null == i || i.showDefaultPriceOnly
            ? {}
            : {
                  PriceIcon: i.showNitroPrice ? a.tvc : void 0,
                  priceSubTextHasStrikethrough: !0,
                  priceSubText:
                      !s && i.finalPriceIsDifferent
                          ? (0, I.$g)(i.originalPrice.amount, i.originalPrice.currency)
                          : void 0,
              };
    },
    b = (e) => {
        let {
                sku: t,
                product: n,
                application: i,
                isSocialLayerGameItem: a,
                giftRecipient: o,
                discountOfferAmount: l,
            } = e,
            c = y.intl.string(v.default.iZe9Wy);
        a
            ? (c = y.intl.string(v.default.qwSlCO))
            : null != n &&
              (n.type === s.R.BUNDLE
                  ? (c = y.intl.string(v.default["jM8/71"]))
                  : n.type === s.R.AVATAR_DECORATION
                    ? (c = y.intl.string(v.default.r29Oel))
                    : n.type === s.R.PROFILE_EFFECT
                      ? (c = y.intl.string(v.default.eTYAvF))
                      : n.type === s.R.NAMEPLATE && (c = y.intl.string(v.default.of9bom)));
        let d = a
                ? { header: i.name, headerIconSrc: g.Ay.getApplicationIconURL({ id: i.id, icon: i.icon, size: 16 }) }
                : {},
            _ =
                null != n && n.type === s.R.BUNDLE
                    ? (0, r.jsx)(h.a, { product: n, fallbackLabel: null })
                    : (0, r.jsx)(S.r$, { sku: t }),
            f = {};
        return (
            null != n && (f = C(n, l)),
            { ...d, ...f, label: N(t), description: c, graphic: _, gift: null != o ? (0, u.xk)(o) : void 0 }
        );
    },
    R = (e) => {
        let { sku: t, skuPricePreview: n } = e,
            r = [];
        if (null != n) {
            let { discount: e, basePrice: i, showTaxes: s } = (0, S.yh)({ skuPricePreview: n });
            return (
                r.push({ id: "sku", label: N(t), amount: i }),
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
    O = (e) => {
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
                () => R({ sku: n, skuPricePreview: s }),
                [n, s],
            ),
            C = i.useMemo(() => (null != A ? (0, r.jsx)(_.Vm, { ...A }) : null), [A]),
            O = (0, m.V_)(E),
            D = i.useMemo(
                () =>
                    b({
                        sku: n,
                        product: E,
                        application: t,
                        isSocialLayerGameItem: g,
                        giftRecipient: p,
                        discountOfferAmount: O,
                    }),
                [n, E, t, g, p, O],
            ),
            [L, w] = i.useMemo(
                () => [y.intl.string(v.default.Zxav97), null != s ? (0, I.$g)(s.amount, s.currency) : void 0],
                [s],
            ),
            x = i.useMemo(() => {
                let e = (0, T.PN)(null != s ? { ...s, orbs_reward: 200 } : null, { isGift: u });
                return null != e ? (0, r.jsx)(l.J, { ...e }) : null;
            }, [s, u]),
            { setCheckoutHeaderConfigs: M, checkoutHeaderConfigs: P } = (0, c.ck)();
        return (
            i.useEffect(() => {
                null != x && null == P.headerBadgeText && M({ ...P, headerBadgeText: y.intl.string(v.default.Fjpyfj) });
            }, [x, M, P]),
            (0, r.jsx)(d.rg, {
                shouldShowGlobalNotices: !0,
                purchaseItemContent: (0, r.jsx)(f.f7, { ...D, price: N }),
                invoiceSummaryContent: C,
                paymentSelectContent: a,
                legalContent: o,
                promotionalNoticeContent: x,
                upperInlineNoticeProps: h,
                invoiceTotalDueLabel: L,
                invoiceTotalDueValue: w,
            })
        );
    };
function D(e) {
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
        : (0, r.jsx)(O, {
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

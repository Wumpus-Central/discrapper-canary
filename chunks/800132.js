"use strict";
n.d(t, { Ay: () => M, ZM: () => R, dL: () => N, oO: () => b }), n(321073);
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
    m = n(287809),
    E = n(486020),
    g = n(927578),
    A = n(580630),
    I = n(112242),
    T = n(319820),
    S = n(985018),
    y = n(756366),
    v = n(78262);
let N = (e) => e.name,
    C = (e) => {
        let t = m.default.getCurrentUser(),
            n = g.Ay.canUseCollectibles(t),
            r = (0, p.WD)(e, { isPremiumUser: n, discount: (0, p.fT)(e, n) });
        return null == r || r.showDefaultPriceOnly
            ? {}
            : {
                  PriceIcon: r.showNitroPrice ? a.tvc : void 0,
                  priceTooltip: r.showNitroPrice ? S.intl.string(y.default.YUNJJa) : void 0,
              };
    },
    R = (e) => {
        let { sku: t, product: n } = e;
        return null != n && n.type === s.R.BUNDLE
            ? (0, r.jsx)(h.a, { product: n, fallbackLabel: null })
            : (0, r.jsx)(T.r$, { sku: t, slayerProductPreviewClassName: v.a });
    },
    O = {
        [s.R.BUNDLE]: () => S.intl.string(y.default["jM8/71"]),
        [s.R.AVATAR_DECORATION]: () => S.intl.string(y.default.r29Oel),
        [s.R.PROFILE_EFFECT]: () => S.intl.string(y.default.eTYAvF),
        [s.R.NAMEPLATE]: () => S.intl.string(y.default.of9bom),
    },
    b = (e) => {
        let t = S.intl.string(y.default.iZe9Wy);
        if (null == e);
        else if (e.type in O) return (0, O[e.type])();
        return t;
    },
    D = (e) => {
        let { sku: t, product: n, application: r, isSocialLayerGameItem: i, giftRecipient: s } = e,
            a = S.intl.string(y.default.iZe9Wy);
        i ? (a = S.intl.string(y.default.qwSlCO)) : null != n && (a = b(n));
        let o = i
                ? { header: r.name, headerIconSrc: E.Ay.getApplicationIconURL({ id: r.id, icon: r.icon, size: 16 }) }
                : {},
            l = R({ sku: t, product: n }),
            c = {};
        return (
            null != n && (c = C(n)),
            { ...o, ...c, label: N(t), description: a, graphic: l, gift: null != s ? (0, u.xk)(s) : void 0 }
        );
    },
    L = (e) => {
        let { sku: t, skuPricePreview: n } = e,
            r = [];
        if (null != n) {
            let { discount: e, basePrice: i, showTaxes: s } = (0, T.yh)({ skuPricePreview: n });
            return (
                r.push({ id: "sku", label: N(t), amount: i }),
                null != e &&
                    r.push({ id: "discount", label: e.description, amount: e.amount > 0 ? -1 * e.amount : e.amount }),
                s && r.push({ id: "tax", label: S.intl.string(S.t["/I8zmP"]), amount: n.tax }),
                {
                    unifiedInvoiceSummaryProps: {
                        lineItems: r,
                        label: S.intl.string(y.default.eoXh7B),
                        currency: n.currency,
                    },
                    priceText: (0, A.$g)(i, n.currency),
                    discount: e,
                }
            );
        }
        return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
    },
    w = (e) => {
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
            { product: m, isSocialLayerGameItem: E } = (0, T.AO)({ sku: n }),
            { unifiedInvoiceSummaryProps: g, priceText: v } = i.useMemo(
                () => L({ sku: n, skuPricePreview: s }),
                [n, s],
            ),
            N = i.useMemo(() => (null != g ? (0, r.jsx)(_.Vm, { ...g }) : null), [g]),
            C = i.useMemo(
                () => D({ sku: n, product: m, application: t, isSocialLayerGameItem: E, giftRecipient: p }),
                [n, m, t, E, p],
            ),
            [R, O] = i.useMemo(
                () => [S.intl.string(y.default.Zxav97), null != s ? (0, A.$g)(s.amount, s.currency) : void 0],
                [s],
            ),
            b = i.useMemo(() => {
                let e = (0, I.PN)(s, { isGift: u });
                return null != e ? (0, r.jsx)(l.J, { ...e }) : null;
            }, [s, u]),
            { setCheckoutHeaderConfigs: w, checkoutHeaderConfigs: M } = (0, c.ck)();
        return (
            i.useEffect(() => {
                null != b && null == M.headerBadgeText && w({ ...M, headerBadgeText: S.intl.string(y.default.Fjpyfj) });
            }, [b, w, M]),
            (0, r.jsx)(d.rg, {
                shouldShowGlobalNotices: !0,
                purchaseItemContent: (0, r.jsx)(f.f7, { ...C, price: v }),
                invoiceSummaryContent: N,
                paymentSelectContent: a,
                legalContent: o,
                promotionalNoticeContent: b,
                upperInlineNoticeProps: h,
                invoiceTotalDueLabel: R,
                invoiceTotalDueValue: O,
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
        } = (0, I.X)({
            hasLegalTermsFlash: t,
            legalTermsNodeRef: n,
            onPaymentSourceChange: s,
            handlePaymentSourceAdd: a,
            shouldUseUnifiedCheckoutUI: !0,
        }),
        g = (0, r.jsx)(o.A, { ...f, shouldUseUnifiedCheckoutUI: !0 }),
        A = i.useMemo(() => {
            let e = [];
            return (
                null != E.testModeWarning && e.push({ type: "warning", message: E.testModeWarning }),
                null != E.devShelfError && e.push({ type: "critical", message: E.devShelfError }),
                null != E.socialLayerGameItemDisclaimer &&
                    e.push({ type: "warning", message: E.socialLayerGameItemDisclaimer }),
                e.length > 0 ? e : null
            );
        }, [E.testModeWarning, E.devShelfError, E.socialLayerGameItemDisclaimer]);
    return h
        ? (0, r.jsx)(d.Ed, {})
        : (0, r.jsx)(w, {
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

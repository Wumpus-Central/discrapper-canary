"use strict";
n.d(t, { Ay: () => M, ZM: () => R, dL: () => N, oO: () => b }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(575593),
    a = n(158954),
    o = n(637141),
    l = n(262427),
    u = n(725836),
    c = n(69882),
    d = n(270537),
    _ = n(241989),
    f = n(993408),
    p = n(14702),
    h = n(287809),
    m = n(486020),
    E = n(927578),
    g = n(580630),
    A = n(112242),
    I = n(319820),
    T = n(652215),
    S = n(985018),
    y = n(756366),
    v = n(78262);
let N = (e) => e.name,
    C = (e) => {
        let t = h.default.getCurrentUser(),
            n = E.Ay.canUseCollectibles(t),
            r = (0, f.WD)(e, { isPremiumUser: n, discount: (0, f.fT)(e, n) });
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
            ? (0, r.jsx)(p.a, { product: n, fallbackLabel: null })
            : (0, r.jsx)(I.r$, { sku: t, slayerProductPreviewClassName: v.a });
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
        i
            ? (a = S.intl.string(y.default.qwSlCO))
            : null != n
              ? (a = b(n))
              : t.productLine === T.EZt.GUILD_PRODUCT && (a = S.intl.string(y.default.hewwdA));
        let o = i
                ? { header: r.name, headerIconSrc: m.Ay.getApplicationIconURL({ id: r.id, icon: r.icon, size: 16 }) }
                : {},
            l = R({ sku: t, product: n }),
            u = {};
        return (
            null != n && (u = C(n)),
            {
                ...o,
                ...u,
                label: N(t),
                description: a,
                graphic: l,
                target: null != s ? { type: "gift", user: s } : void 0,
            }
        );
    },
    L = (e) => {
        let { sku: t, skuPricePreview: n } = e,
            r = [];
        if (null != n) {
            let { discount: e, basePrice: i, showTaxes: s } = (0, I.yh)({ skuPricePreview: n });
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
                    priceText: (0, g.$g)(i, n.currency),
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
                isGift: f,
                giftRecipient: p,
                upperInlineNoticeProps: h,
                footerInlineNoticeProps: m,
            } = e,
            { product: E, isSocialLayerGameItem: T } = (0, I.AO)({ sku: n }),
            { unifiedInvoiceSummaryProps: v, priceText: N } = i.useMemo(
                () => L({ sku: n, skuPricePreview: s }),
                [n, s],
            ),
            C = i.useMemo(() => (null != v ? (0, r.jsx)(d.Vm, { ...v }) : null), [v]),
            R = i.useMemo(
                () => D({ sku: n, product: E, application: t, isSocialLayerGameItem: T, giftRecipient: p }),
                [n, E, t, T, p],
            ),
            [O, b] = i.useMemo(
                () => [S.intl.string(y.default.Zxav97), null != s ? (0, g.$g)(s.amount, s.currency) : void 0],
                [s],
            ),
            w = i.useMemo(() => {
                let e = (0, A.PN)(s, { isGift: f });
                return null != e ? (0, r.jsx)(l.J, { ...e }) : null;
            }, [s, f]),
            { setCheckoutHeaderConfigs: M, checkoutHeaderConfigs: x } = (0, u.ck)();
        return (
            i.useEffect(() => {
                null != w && null == x.headerBadgeText && M({ ...x, headerBadgeText: S.intl.string(y.default.Fjpyfj) });
            }, [w, M, x]),
            (0, r.jsx)(c.rg, {
                shouldShowGlobalNotices: !0,
                purchaseItemContent: (0, r.jsx)(_.f7, { ...R, price: N }),
                invoiceSummaryContent: C,
                paymentSelectContent: a,
                legalContent: o,
                promotionalNoticeContent: w,
                upperInlineNoticeProps: h,
                footerInlineNoticeProps: m,
                invoiceTotalDueLabel: O,
                invoiceTotalDueValue: b,
            })
        );
    };
function M(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, onPaymentSourceChange: s, handlePaymentSourceAdd: a } = e,
        {
            sku: l,
            application: u,
            skuPricePreview: d,
            isGift: _,
            paymentSourceDropdownProps: f,
            purchaseTermsAndLegalContent: p,
            isStepLoading: h,
            giftRecipient: m,
            warningAndErrorMessages: E,
        } = (0, A.X)({
            hasLegalTermsFlash: t,
            legalTermsNodeRef: n,
            onPaymentSourceChange: s,
            handlePaymentSourceAdd: a,
            shouldUseUnifiedCheckoutUI: !0,
        }),
        g = (0, r.jsx)(o.A, { ...f, shouldUseUnifiedCheckoutUI: !0 }),
        I = i.useMemo(() => {
            let e = [];
            return (
                null != E.testModeWarning &&
                    e.push({ type: "warning", message: E.testModeWarning, key: "test-mode-warning-notice" }),
                null != E.devShelfError &&
                    e.push({ type: "critical", message: E.devShelfError, key: "dev-shelf-error-notice" }),
                e.length > 0 ? e : null
            );
        }, [E.testModeWarning, E.devShelfError]),
        T = i.useMemo(() => {
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
    return h
        ? (0, r.jsx)(c.Ed, {})
        : (0, r.jsx)(w, {
              application: u,
              giftRecipient: m,
              isGift: _,
              sku: l,
              skuPricePreview: d,
              paymentSelectContent: g,
              legalContent: p,
              upperInlineNoticeProps: I,
              footerInlineNoticeProps: T,
          });
}

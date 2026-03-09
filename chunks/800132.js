"use strict";
n.d(t, { Ay: () => w, ZM: () => C, dL: () => v, oO: () => O }), n(321073);
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
    T = n(985018),
    S = n(756366),
    y = n(78262);
let v = (e) => e.name,
    N = (e) => {
        let t = h.default.getCurrentUser(),
            n = E.Ay.canUseCollectibles(t),
            r = (0, f.WD)(e, { isPremiumUser: n, discount: (0, f.fT)(e, n) });
        return null == r || r.showDefaultPriceOnly
            ? {}
            : {
                  PriceIcon: r.showNitroPrice ? a.tvc : void 0,
                  priceTooltip: r.showNitroPrice ? T.intl.string(S.default.YUNJJa) : void 0,
              };
    },
    C = (e) => {
        let { sku: t, product: n } = e;
        return null != n && n.type === s.R.BUNDLE
            ? (0, r.jsx)(p.a, { product: n, fallbackLabel: null })
            : (0, r.jsx)(I.r$, { sku: t, slayerProductPreviewClassName: y.a });
    },
    R = {
        [s.R.BUNDLE]: () => T.intl.string(S.default["jM8/71"]),
        [s.R.AVATAR_DECORATION]: () => T.intl.string(S.default.r29Oel),
        [s.R.PROFILE_EFFECT]: () => T.intl.string(S.default.eTYAvF),
        [s.R.NAMEPLATE]: () => T.intl.string(S.default.of9bom),
    },
    O = (e) => {
        let t = T.intl.string(S.default.iZe9Wy);
        if (null == e);
        else if (e.type in R) return (0, R[e.type])();
        return t;
    },
    b = (e) => {
        let { sku: t, product: n, application: r, isSocialLayerGameItem: i, giftRecipient: s } = e,
            a = T.intl.string(S.default.iZe9Wy);
        i ? (a = T.intl.string(S.default.qwSlCO)) : null != n && (a = O(n));
        let o = i
                ? { header: r.name, headerIconSrc: m.Ay.getApplicationIconURL({ id: r.id, icon: r.icon, size: 16 }) }
                : {},
            l = C({ sku: t, product: n }),
            u = {};
        return (
            null != n && (u = N(n)),
            {
                ...o,
                ...u,
                label: v(t),
                description: a,
                graphic: l,
                target: null != s ? { type: "gift", user: s } : void 0,
            }
        );
    },
    D = (e) => {
        let { sku: t, skuPricePreview: n } = e,
            r = [];
        if (null != n) {
            let { discount: e, basePrice: i, showTaxes: s } = (0, I.yh)({ skuPricePreview: n });
            return (
                r.push({ id: "sku", label: v(t), amount: i }),
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
    L = (e) => {
        let {
                application: t,
                sku: n,
                skuPricePreview: s,
                paymentSelectContent: a,
                legalContent: o,
                isGift: f,
                giftRecipient: p,
                checkoutUpperInlineNoticeProps: h,
            } = e,
            { product: m, isSocialLayerGameItem: E } = (0, I.AO)({ sku: n }),
            { unifiedInvoiceSummaryProps: y, priceText: v } = i.useMemo(
                () => D({ sku: n, skuPricePreview: s }),
                [n, s],
            ),
            N = i.useMemo(() => (null != y ? (0, r.jsx)(d.Vm, { ...y }) : null), [y]),
            C = i.useMemo(
                () => b({ sku: n, product: m, application: t, isSocialLayerGameItem: E, giftRecipient: p }),
                [n, m, t, E, p],
            ),
            [R, O] = i.useMemo(
                () => [T.intl.string(S.default.Zxav97), null != s ? (0, g.$g)(s.amount, s.currency) : void 0],
                [s],
            ),
            L = i.useMemo(() => {
                let e = (0, A.PN)(s, { isGift: f });
                return null != e ? (0, r.jsx)(l.J, { ...e }) : null;
            }, [s, f]),
            { setCheckoutHeaderConfigs: w, checkoutHeaderConfigs: M } = (0, u.ck)();
        return (
            i.useEffect(() => {
                null != L && null == M.headerBadgeText && w({ ...M, headerBadgeText: T.intl.string(S.default.Fjpyfj) });
            }, [L, w, M]),
            (0, r.jsx)(c.rg, {
                shouldShowGlobalNotices: !0,
                purchaseItemContent: (0, r.jsx)(_.f7, { ...C, price: v }),
                invoiceSummaryContent: N,
                paymentSelectContent: a,
                legalContent: o,
                promotionalNoticeContent: L,
                upperInlineNoticeProps: h,
                invoiceTotalDueLabel: R,
                invoiceTotalDueValue: O,
            })
        );
    };
function w(e) {
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
                null != E.socialLayerGameItemDisclaimer &&
                    e.push({
                        type: "warning",
                        message: E.socialLayerGameItemDisclaimer,
                        key: "social-layer-game-item-disclaimer-notice",
                    }),
                e.length > 0 ? e : null
            );
        }, [E.testModeWarning, E.devShelfError, E.socialLayerGameItemDisclaimer]);
    return h
        ? (0, r.jsx)(c.Ed, {})
        : (0, r.jsx)(L, {
              application: u,
              giftRecipient: m,
              isGift: _,
              sku: l,
              skuPricePreview: d,
              paymentSelectContent: g,
              legalContent: p,
              checkoutUpperInlineNoticeProps: I,
          });
}

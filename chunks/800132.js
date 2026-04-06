"use strict";
n.d(t, { Ay: () => D, dL: () => y, oO: () => C }), n(321073);
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
    g = n(112242),
    A = n(319820),
    I = n(652215),
    T = n(985018),
    S = n(756366);
let y = (e) => e.name,
    v = (e) => {
        let t = p.default.getCurrentUser(),
            n = m.Ay.canUseCollectibles(t),
            r = (0, f.WD)(e, { isPremiumUser: n, discount: (0, f.fT)(e, n) });
        return null == r || r.showDefaultPriceOnly
            ? {}
            : {
                  PriceIcon: r.showNitroPrice ? a.tvc : void 0,
                  priceTooltip: r.showNitroPrice ? T.intl.string(S.default.YUNJJa) : void 0,
              };
    },
    N = {
        [s.R.BUNDLE]: () => T.intl.string(S.default["jM8/71"]),
        [s.R.AVATAR_DECORATION]: () => T.intl.string(S.default.r29Oel),
        [s.R.PROFILE_EFFECT]: () => T.intl.string(S.default.eTYAvF),
        [s.R.NAMEPLATE]: () => T.intl.string(S.default.of9bom),
    },
    C = (e) => {
        let t = T.intl.string(S.default.iZe9Wy);
        if (null == e);
        else if (e.type in N) return (0, N[e.type])();
        return t;
    },
    R = (e) => {
        let { sku: t, product: n, application: i, isSocialLayerGameItem: s, giftRecipient: a } = e,
            o = T.intl.string(S.default.iZe9Wy);
        s
            ? (o = T.intl.string(S.default.qwSlCO))
            : null != n
              ? (o = C(n))
              : t.productLine === I.EZt.GUILD_PRODUCT && (o = T.intl.string(S.default.hewwdA));
        let l = s
                ? { header: i.name, headerIconSrc: h.Ay.getApplicationIconURL({ id: i.id, icon: i.icon, size: 16 }) }
                : {},
            u = (0, r.jsx)(_.WH, { sku: t, product: n }),
            c = {};
        return (
            null != n && (c = v(n)),
            {
                ...l,
                ...c,
                label: y(t),
                description: o,
                graphic: u,
                target: null != a ? { type: "gift", user: a } : void 0,
            }
        );
    },
    O = (e) => {
        let { sku: t, skuPricePreview: n } = e,
            r = [];
        if (null != n) {
            let { discount: e, basePrice: i, showTaxes: s } = (0, A.yh)({ skuPricePreview: n });
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
                    priceText: (0, E.$g)(i, n.currency),
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
                legalContent: c,
                isGift: f,
                giftRecipient: p,
                upperInlineNoticeProps: h,
                footerInlineNoticeProps: m,
            } = e,
            { product: I, isSocialLayerGameItem: y } = (0, A.AO)({ sku: n }),
            { unifiedInvoiceSummaryProps: v, priceText: N } = i.useMemo(
                () => O({ sku: n, skuPricePreview: s }),
                [n, s],
            ),
            C = i.useMemo(() => (null != v ? (0, r.jsx)(d.Vm, { ...v }) : null), [v]),
            b = i.useMemo(
                () => R({ sku: n, product: I, application: t, isSocialLayerGameItem: y, giftRecipient: p }),
                [n, I, t, y, p],
            ),
            [D, L] = i.useMemo(
                () => [T.intl.string(S.default.Zxav97), null != s ? (0, E.$g)(s.amount, s.currency) : void 0],
                [s],
            ),
            w = i.useMemo(() => {
                let e = (0, g.PN)(s, { isGift: f });
                return null != e ? (0, r.jsx)(o.J, { ...e }) : null;
            }, [s, f]),
            { setCheckoutHeaderConfigs: M, checkoutHeaderConfigs: x } = (0, l.ck)();
        return (
            i.useEffect(() => {
                null != w && null == x.headerBadgeText && M({ ...x, headerBadgeText: T.intl.string(S.default.Fjpyfj) });
            }, [w, M, x]),
            (0, r.jsx)(u.rg, {
                shouldShowGlobalNotices: !0,
                purchaseItemContent: (0, r.jsx)(_.f7, { ...b, price: N }),
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
function D(e) {
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
            giftCardCheckboxProps: A,
            disabled: I,
        } = (0, g.X)({
            hasLegalTermsFlash: t,
            legalTermsNodeRef: n,
            handlePaymentSourceAdd: s,
            shouldUseUnifiedCheckoutUI: !0,
        }),
        S = (0, r.jsx)(c.nL, {
            label: T.intl.string(T.t["u+Cw58"]),
            giftCardsEnabled: E,
            giftCardCheckboxProps: A,
            paymentSourceDropdownProps: { ..._, shouldUseUnifiedCheckoutUI: !0 },
            disabled: I,
        }),
        y = i.useMemo(() => {
            let e = [];
            return (
                null != m.testModeWarning &&
                    e.push({ type: "warning", message: m.testModeWarning, key: "test-mode-warning-notice" }),
                null != m.devShelfError &&
                    e.push({ type: "critical", message: m.devShelfError, key: "dev-shelf-error-notice" }),
                e.length > 0 ? e : null
            );
        }, [m.testModeWarning, m.devShelfError]),
        v = i.useMemo(() => {
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
        : (0, r.jsx)(b, {
              application: o,
              giftRecipient: h,
              isGift: d,
              sku: a,
              skuPricePreview: l,
              paymentSelectContent: S,
              legalContent: f,
              upperInlineNoticeProps: y,
              footerInlineNoticeProps: v,
          });
}

n.d(t, { dL: () => J, Ay: () => et, oO: () => Q }), n(321073);
var l = n(627968),
    a = n(64700),
    i = n(575593),
    s = n(403581),
    r = n(262427),
    o = n(61572),
    u = n(725836),
    c = n(69882),
    d = n(93159),
    p = n(848584),
    m = n(241989),
    h = n(993408),
    A = n(287809),
    C = n(486020),
    E = n(927578),
    y = n(580630),
    P = n(156312),
    S = n(284009),
    _ = n.n(S),
    T = n(997101),
    f = n(318254),
    N = n(821891),
    x = n(953689),
    I = n(10716),
    g = n(46225),
    v = n(20015),
    M = n(364995),
    b = n(666646),
    R = n(427675),
    j = n(94420),
    L = n(977445),
    O = n(778307),
    D = n(218075),
    w = n(987723),
    U = n(570221),
    k = n(615405),
    Y = n(79387),
    G = n(45938),
    F = n(937008),
    B = n(566980),
    W = n(367921),
    H = n(908419),
    V = n(652215);
function K(e) {
    let { paymentSourceType: t } = e,
        { isGift: n } = (0, F.Pv)(),
        { immediateDelivery: a } = (0, H.U)(),
        i = (0, W.Ro)({
            purchaseType: V.VVm.ONE_TIME,
            plan: null,
            premiumSubscription: null,
            isGift: n,
            planGroup: [],
            isPrepaidPaymentSource: !1,
        });
    return (0, l.jsx)(d._P, {
        variant: n ? { type: d.I0.GiftShop, purchaseButtonText: i } : { type: d.I0.Shop, purchaseButtonText: i },
        paymentSourceType: t,
        immediateDelivery: a,
    });
}
var Z = n(985018),
    q = n(666995),
    z = n(319820),
    $ = n(327105);
n(594387);
let J = (e) => e.name,
    X = {
        [i.R.BUNDLE]: () => Z.intl.string($.default["jM8/71"]),
        [i.R.AVATAR_DECORATION]: () => Z.intl.string($.default.r29Oel),
        [i.R.PROFILE_EFFECT]: () => Z.intl.string($.default.eTYAvF),
        [i.R.NAMEPLATE]: () => Z.intl.string($.default.of9bom),
        [i.R.PROFILE_FRAME]: () => Z.intl.string($.default.HzDn6w),
    },
    Q = (e) => {
        let t = Z.intl.string($.default.iZe9Wy);
        if (null == e);
        else if (e.type in X) return (0, X[e.type])();
        return t;
    },
    ee = (e) => {
        let {
                application: t,
                sku: n,
                skuPricePreview: i,
                paymentSelectContent: o,
                legalContent: d,
                isGift: P,
                giftRecipient: S,
                upperInlineNoticeProps: _,
                footerInlineNoticeProps: T,
            } = e,
            { product: N, isSocialLayerGameItem: x } = (0, z.AO)({ sku: n }),
            { unifiedInvoiceSummaryProps: I, priceText: g } = a.useMemo(
                () =>
                    ((e) => {
                        let { sku: t, skuPricePreview: n } = e,
                            l = [];
                        if (null != n) {
                            let { discount: e, basePrice: a, showTaxes: i } = (0, z.yh)({ skuPricePreview: n });
                            return (
                                l.push({ id: "sku", label: J(t), amount: a }),
                                null != e &&
                                    l.push({
                                        id: "discount",
                                        label: e.description,
                                        amount: e.amount > 0 ? -1 * e.amount : e.amount,
                                    }),
                                i && l.push({ id: "tax", label: Z.intl.string(Z.t["/I8zmP"]), amount: n.tax }),
                                {
                                    unifiedInvoiceSummaryProps: {
                                        lineItems: l,
                                        label: Z.intl.string($.default.eoXh7B),
                                        currency: n.currency,
                                    },
                                    priceText: (0, y.$g)(a, n.currency),
                                    discount: e,
                                }
                            );
                        }
                        return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
                    })({ sku: n, skuPricePreview: i }),
                [n, i],
            ),
            v = a.useMemo(() => (null != I ? (0, l.jsx)(p.Vm, { ...I }) : null), [I]),
            M = a.useMemo(
                () =>
                    ((e) => {
                        let { sku: t, product: n, application: a, isSocialLayerGameItem: i, giftRecipient: r } = e,
                            o = Z.intl.string($.default.iZe9Wy);
                        i
                            ? (o = Z.intl.string($.default.qwSlCO))
                            : null != n
                              ? (o = Q(n))
                              : t.productLine === V.EZt.GUILD_PRODUCT && (o = Z.intl.string($.default.hewwdA));
                        let u = i
                                ? {
                                      header: a.name,
                                      headerIconSrc: C.Ay.getApplicationIconURL({ id: a.id, icon: a.icon, size: 16 }),
                                  }
                                : {},
                            c = (0, l.jsx)(m.WH, { sku: t, product: n }),
                            d = {};
                        return (
                            null != n &&
                                (d = ((e) => {
                                    let t = A.default.getCurrentUser(),
                                        n = E.Ay.canUseShopDiscounts(t),
                                        l = (0, h.xM)(t),
                                        a = (0, h.WD)(e, { hasShopDiscount: n, discount: (0, h.fT)(e, n) });
                                    if (null != a && !a.showDefaultPriceOnly && a.showDiscountPrice) {
                                        if (l === h.D0.NITRO)
                                            return { PriceIcon: s.t, priceTooltip: Z.intl.string($.default.YUNJJa) };
                                        h.D0.THIRDPARTY;
                                    }
                                    return {};
                                })(n)),
                            {
                                ...u,
                                ...d,
                                label: J(t),
                                description: o,
                                graphic: c,
                                target: null != r ? { type: "gift", user: r } : void 0,
                            }
                        );
                    })({ sku: n, product: N, application: t, isSocialLayerGameItem: x, giftRecipient: S }),
                [n, N, t, x, S],
            ),
            [b, R] = a.useMemo(
                () => [Z.intl.string($.default.Zxav97), null != i ? (0, y.$g)(i.amount, i.currency) : void 0],
                [i],
            ),
            j = a.useMemo(() => {
                let e = ((e, t) => {
                    let { isGift: n } = t;
                    if (null == e) return null;
                    let l = e.orbs_reward;
                    if (null != l && l > 0) {
                        let e = n ? Z.t["ZV+aS9"] : Z.t["0StwHe"];
                        return { Icon: f.C, text: Z.intl.format(e, { orbCount: l }) };
                    }
                })(i, { isGift: P });
                return null != e ? (0, l.jsx)(r.J, { ...e }) : null;
            }, [i, P]),
            { setCheckoutHeaderConfigs: L, checkoutHeaderConfigs: O } = (0, u.ck)();
        return (
            a.useEffect(() => {
                null != j && null == O.headerBadgeText && L({ ...O, headerBadgeText: Z.intl.string($.default.Fjpyfj) });
            }, [j, L, O]),
            (0, l.jsx)(c.T, {
                shouldShowGlobalNotices: !0,
                purchaseItemContent: (0, l.jsx)(m.f7, { ...M, price: g }),
                invoiceSummaryContent: v,
                paymentSelectContent: o,
                legalContent: d,
                promotionalNoticeContent: j,
                upperInlineNoticeProps: _,
                footerInlineNoticeProps: T,
                invoiceTotalDueLabel: b,
                invoiceTotalDueValue: R,
            })
        );
    };
function et(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: i } = e,
        {
            sku: s,
            application: r,
            skuPricePreview: u,
            isGift: p,
            eligiblePaymentGateways: m,
            purchaseTermsAndLegalContent: h,
            isStepLoading: A,
            giftRecipient: C,
            warningAndErrorMessages: E,
            disabled: y,
        } = ((e) => {
            let { hasLegalTermsFlash: t, legalTermsNodeRef: n } = e,
                {
                    selectedSkuId: i,
                    setHasAcceptedTerms: s,
                    purchaseState: r,
                } = (0, j.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    setHasAcceptedTerms: e.setHasAcceptedTerms,
                    purchaseState: e.purchaseState,
                })),
                {
                    application: o,
                    paymentSourceId: u,
                    isEmbeddedIAP: c,
                    purchaseType: d,
                    purchasePreviewError: p,
                    devShelfFetchState: m,
                    hasPaymentSources: h,
                } = (0, P.P5)(),
                { checkoutPaymentSources: A, hasInvoiceOrderContextLoaded: C } = (0, M.t6)(),
                E = (0, R.gU)(),
                y = (0, R.RR)(),
                { isGift: S, giftRecipient: f } = (0, F.Pv)(),
                W = S && (0, G.Ik)(f),
                { fetched: H, hasAlreadyLinked: z } = (0, g.RD)(o);
            _()(null != i, "Expected selectedSkuId");
            let $ = E[i],
                J = $?.eligiblePaymentGateways,
                X = y[i],
                Q = u ?? Y.B,
                ee = A.length > 0,
                et = null != X ? (X[Q] ?? (ee ? X[Y.B] : null)) : null,
                en = a.useMemo(() => (null == et ? null : U.A.createFromOTPPreview(et)), [et]);
            (0, b.F0)(en, p ?? null),
                _()(null != $, "SKU must exist and be fetched."),
                _()(null != o, "Application must exist.");
            let el = (0, L.u)(o.id),
                ea = T.M.EEA_COUNTRIES.has(k.A.ipCountryCodeWithFallback),
                ei = r === B.h.PURCHASING || r === B.h.COMPLETED,
                es = A.find((e) => e.id === u) ?? null,
                er = null != es ? es.type : null,
                eo = null != J && J.length > 0 && (u === Y.B || null === er) && h ? D.fU.SELECT_PAYMENT_METHOD : void 0,
                eu = $.productLine === V.EZt.SOCIAL_LAYER_GAME_ITEM,
                ec = W && !eu,
                ed = a.useMemo(
                    () => ({
                        testModeWarning: el ? Z.intl.string(Z.t.OvMyMd) : null,
                        devShelfError:
                            (0, v.n)(o, V.gfo.EMBEDDED) && m === I.$.ERROR ? Z.intl.string(Z.t.tAmECt) : null,
                        socialLayerGameItemDisclaimer:
                            eu && H && !z && !S ? (0, w.k3)(o, { location: "OneTimePurchaseReviewState" }) : null,
                    }),
                    [el, o, m, eu, H, z, S],
                ),
                ep = a.useMemo(
                    () =>
                        $.productLine === V.EZt.COLLECTIBLES
                            ? (0, l.jsx)(K, { paymentSourceType: er })
                            : (0, l.jsx)(O.A, {
                                  isActive: t,
                                  ref: n,
                                  children: (0, l.jsx)(x.A, {
                                      onChange: s,
                                      forceShow: !0,
                                      showWithdrawalWaiver: ea,
                                      disabled: ei,
                                      subscriptionPlan: null,
                                      finePrintClassname: q.i,
                                      purchaseType: d,
                                      isGift: S,
                                      finePrint: (0, l.jsx)(N.A, {
                                          paymentSourceType: er,
                                          isEmbeddedIAP: c,
                                          purchaseType: d,
                                          productLine: $.productLine,
                                          isGift: S,
                                          applicationName: o.name,
                                          applicationId: o.id,
                                          hasAlreadyLinked: !H || z,
                                      }),
                                  }),
                              }),
                    [t, n, s, ea, ei, d, S, er, c, $.productLine, o.name, o.id, H, z],
                );
            return {
                sku: $,
                application: o,
                giftRecipient: f,
                isGift: S,
                skuPricePreview: et,
                isEmbeddedIAP: c,
                shouldShowPurchaseReviewImage: ec,
                paymentRestrictionBannerType: eo,
                devShelfFetchState: m,
                isStepLoading: !C && null == p,
                purchasePreviewError: p,
                warningAndErrorMessages: ed,
                purchaseTermsAndLegalContent: ep,
                eligiblePaymentGateways: J,
                disabled: ei,
            };
        })({ hasLegalTermsFlash: t, legalTermsNodeRef: n }),
        { currencies: S, displayCurrency: f, setCurrency: W, priceOptions: H } = (0, P.P5)(),
        z = a.useMemo(
            () =>
                (0, l.jsx)(d.qX, {
                    label: Z.intl.string(Z.t["/AAR02"]),
                    selectedCurrency: H.currency ?? f,
                    currencies: S,
                    onChange: W,
                }),
            [H.currency, f, S, W],
        ),
        $ = a.useMemo(() => ({ paymentGatewayRestrictions: m, shouldUseUnifiedCheckoutUI: !0 }), [m]),
        J = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(o.N, {
                    label: Z.intl.string(Z.t["u+Cw58"]),
                    location: "OneTimeUnifiedCheckoutPurchaseReview",
                    onPaymentSourceAdd: i,
                    additionalPaymentSourceDropdownProps: $,
                    disabled: y,
                }),
                z,
            ],
        }),
        X = a.useMemo(() => {
            let e = [];
            return (
                null != E.testModeWarning &&
                    e.push({ type: "warning", message: E.testModeWarning, key: "test-mode-warning-notice" }),
                null != E.devShelfError &&
                    e.push({ type: "critical", message: E.devShelfError, key: "dev-shelf-error-notice" }),
                e.length > 0 ? e : null
            );
        }, [E.testModeWarning, E.devShelfError]),
        Q = a.useMemo(() => {
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
    return A
        ? (0, l.jsx)(c.E, {})
        : (0, l.jsx)(ee, {
              application: r,
              giftRecipient: C,
              isGift: p,
              sku: s,
              skuPricePreview: u,
              paymentSelectContent: J,
              legalContent: h,
              upperInlineNoticeProps: X,
              footerInlineNoticeProps: Q,
          });
}

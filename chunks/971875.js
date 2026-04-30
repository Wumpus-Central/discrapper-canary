n.d(t, { dL: () => J, Ay: () => et, oO: () => Q }), n(321073);
var l = n(627968),
    i = n(64700),
    a = n(575593),
    r = n(403581),
    s = n(262427),
    o = n(61572),
    u = n(725836),
    c = n(164928),
    d = n(474367),
    p = n(848584),
    m = n(241989),
    h = n(993408),
    C = n(287809),
    A = n(486020),
    E = n(927578),
    y = n(580630),
    P = n(902958),
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
    j = n(666646),
    b = n(427675),
    R = n(94420),
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
        { immediateDelivery: i } = (0, H.U)(),
        a = (0, W.Ro)({
            purchaseType: V.VVm.ONE_TIME,
            plan: null,
            premiumSubscription: null,
            isGift: n,
            planGroup: [],
            isPrepaidPaymentSource: !1,
        });
    return (0, l.jsx)(d._P, {
        variant: n ? { type: d.I0.GiftShop, purchaseButtonText: a } : { type: d.I0.Shop, purchaseButtonText: a },
        paymentSourceType: t,
        immediateDelivery: i,
    });
}
var Z = n(375708),
    q = n(666995),
    z = n(319820),
    $ = n(327105);
n(594387);
let J = (e) => e.name,
    X = {
        [a.R.BUNDLE]: () => Z.intl.string($.default["jM8/71"]),
        [a.R.AVATAR_DECORATION]: () => Z.intl.string($.default.r29Oel),
        [a.R.PROFILE_EFFECT]: () => Z.intl.string($.default.eTYAvF),
        [a.R.NAMEPLATE]: () => Z.intl.string($.default.of9bom),
        [a.R.PROFILE_FRAME]: () => Z.intl.string($.default.HzDn6w),
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
                skuPricePreview: a,
                paymentSelectContent: o,
                legalContent: d,
                isGift: P,
                giftRecipient: S,
                upperInlineNoticeProps: _,
                footerInlineNoticeProps: T,
            } = e,
            { product: N, isSocialLayerGameItem: x } = (0, z.AO)({ sku: n }),
            { unifiedInvoiceSummaryProps: I, priceText: g } = i.useMemo(
                () =>
                    ((e) => {
                        let { sku: t, skuPricePreview: n } = e,
                            l = [];
                        if (null != n) {
                            let { discount: e, basePrice: i, showTaxes: a } = (0, z.yh)({ skuPricePreview: n });
                            return (
                                l.push({ id: "sku", label: J(t), amount: i }),
                                null != e &&
                                    l.push({
                                        id: "discount",
                                        label: e.description,
                                        amount: e.amount > 0 ? -1 * e.amount : e.amount,
                                    }),
                                a && l.push({ id: "tax", label: Z.intl.string(Z.t["/I8zmP"]), amount: n.tax }),
                                {
                                    unifiedInvoiceSummaryProps: {
                                        lineItems: l,
                                        label: Z.intl.string($.default.eoXh7B),
                                        currency: n.currency,
                                    },
                                    priceText: (0, y.$g)(i, n.currency),
                                    discount: e,
                                }
                            );
                        }
                        return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
                    })({ sku: n, skuPricePreview: a }),
                [n, a],
            ),
            v = i.useMemo(() => (null != I ? (0, l.jsx)(p.Vm, { ...I }) : null), [I]),
            M = i.useMemo(
                () =>
                    ((e) => {
                        let { sku: t, product: n, application: i, isSocialLayerGameItem: a, giftRecipient: s } = e,
                            o = Z.intl.string($.default.iZe9Wy);
                        a
                            ? (o = Z.intl.string($.default.qwSlCO))
                            : null != n
                              ? (o = Q(n))
                              : t.productLine === V.EZt.GUILD_PRODUCT && (o = Z.intl.string($.default.hewwdA));
                        let u = a
                                ? {
                                      header: i.name,
                                      headerIconSrc: A.Ay.getApplicationIconURL({ id: i.id, icon: i.icon, size: 16 }),
                                  }
                                : {},
                            c = (0, l.jsx)(m.WH, { sku: t, product: n }),
                            d = {};
                        return (
                            null != n &&
                                (d = ((e) => {
                                    let t = C.default.getCurrentUser(),
                                        n = E.Ay.canUseShopDiscounts(t),
                                        l = (0, h.xM)(t),
                                        i = (0, h.WD)(e, { hasShopDiscount: n, discount: (0, h.fT)(e, n) });
                                    if (null != i && !i.showDefaultPriceOnly && i.showDiscountPrice) {
                                        if (l === h.D0.NITRO)
                                            return { PriceIcon: r.t, priceTooltip: Z.intl.string($.default.YUNJJa) };
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
                                target: null != s ? { type: "gift", user: s } : void 0,
                            }
                        );
                    })({ sku: n, product: N, application: t, isSocialLayerGameItem: x, giftRecipient: S }),
                [n, N, t, x, S],
            ),
            [j, b] = i.useMemo(
                () => [Z.intl.string($.default.Zxav97), null != a ? (0, y.$g)(a.amount, a.currency) : void 0],
                [a],
            ),
            R = i.useMemo(() => {
                let e = ((e, t) => {
                    let { isGift: n } = t;
                    if (null == e) return null;
                    let l = e.orbs_reward;
                    if (null != l && l > 0) {
                        let e = n ? Z.t["ZV+aS9"] : Z.t["0StwHe"];
                        return { Icon: f.C, text: Z.intl.format(e, { orbCount: l }) };
                    }
                })(a, { isGift: P });
                return null != e ? (0, l.jsx)(s.J, { ...e }) : null;
            }, [a, P]),
            { setCheckoutHeaderConfigs: L, checkoutHeaderConfigs: O } = (0, u.ck)();
        return (
            i.useEffect(() => {
                null != R && null == O.headerBadgeText && L({ ...O, headerBadgeText: Z.intl.string($.default.Fjpyfj) });
            }, [R, L, O]),
            (0, l.jsx)(c.T, {
                shouldShowGlobalNotices: !0,
                purchaseItemContent: (0, l.jsx)(m.f7, { ...M, price: g }),
                invoiceSummaryContent: v,
                paymentSelectContent: o,
                legalContent: d,
                promotionalNoticeContent: R,
                upperInlineNoticeProps: _,
                footerInlineNoticeProps: T,
                invoiceTotalDueLabel: j,
                invoiceTotalDueValue: b,
            })
        );
    };
function et(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: a } = e,
        {
            sku: r,
            application: s,
            skuPricePreview: u,
            isGift: p,
            eligiblePaymentGateways: m,
            purchaseTermsAndLegalContent: h,
            isStepLoading: C,
            giftRecipient: A,
            warningAndErrorMessages: E,
            disabled: y,
        } = ((e) => {
            let { hasLegalTermsFlash: t, legalTermsNodeRef: n } = e,
                {
                    selectedSkuId: a,
                    setHasAcceptedTerms: r,
                    purchaseState: s,
                } = (0, R.t4)((e) => ({
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
                { checkoutPaymentSources: C, hasInvoiceOrderContextLoaded: A } = (0, M.t6)(),
                E = (0, b.gU)(),
                y = (0, b.RR)(),
                { isGift: S, giftRecipient: f } = (0, F.Pv)(),
                W = S && (0, G.Ik)(f),
                { fetched: H, hasAlreadyLinked: z } = (0, g.RD)(o);
            _()(null != a, "Expected selectedSkuId");
            let $ = E[a],
                J = $?.eligiblePaymentGateways,
                X = y[a],
                Q = u ?? Y.B,
                ee = C.length > 0,
                et = null != X ? (X[Q] ?? (ee ? X[Y.B] : null)) : null,
                en = i.useMemo(() => (null == et ? null : U.A.createFromOTPPreview(et)), [et]);
            (0, j.F0)(en, p ?? null),
                _()(null != $, "SKU must exist and be fetched."),
                _()(null != o, "Application must exist.");
            let el = (0, L.u)(o.id),
                ei = T.M.EEA_COUNTRIES.has(k.A.ipCountryCodeWithFallback),
                ea = s === B.h.PURCHASING || s === B.h.COMPLETED,
                er = C.find((e) => e.id === u) ?? null,
                es = null != er ? er.type : null,
                eo = null != J && J.length > 0 && (u === Y.B || null === es) && h ? D.fU.SELECT_PAYMENT_METHOD : void 0,
                eu = $.productLine === V.EZt.SOCIAL_LAYER_GAME_ITEM,
                ec = W && !eu,
                ed = i.useMemo(
                    () => ({
                        testModeWarning: el ? Z.intl.string(Z.t.OvMyMd) : null,
                        devShelfError:
                            (0, v.n)(o, V.gfo.EMBEDDED) && m === I.$.ERROR ? Z.intl.string(Z.t.tAmECt) : null,
                        socialLayerGameItemDisclaimer:
                            eu && H && !z && !S ? (0, w.k3)(o, { location: "OneTimePurchaseReviewState" }) : null,
                    }),
                    [el, o, m, eu, H, z, S],
                ),
                ep = i.useMemo(
                    () =>
                        $.productLine === V.EZt.COLLECTIBLES
                            ? (0, l.jsx)(K, { paymentSourceType: es })
                            : (0, l.jsx)(O.A, {
                                  isActive: t,
                                  ref: n,
                                  children: (0, l.jsx)(x.A, {
                                      onChange: r,
                                      forceShow: !0,
                                      showWithdrawalWaiver: ei,
                                      disabled: ea,
                                      subscriptionPlan: null,
                                      finePrintClassname: q.i,
                                      purchaseType: d,
                                      isGift: S,
                                      finePrint: (0, l.jsx)(N.A, {
                                          paymentSourceType: es,
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
                    [t, n, r, ei, ea, d, S, es, c, $.productLine, o.name, o.id, H, z],
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
                isStepLoading: !A && null == p,
                purchasePreviewError: p,
                warningAndErrorMessages: ed,
                purchaseTermsAndLegalContent: ep,
                eligiblePaymentGateways: J,
                disabled: ea,
            };
        })({ hasLegalTermsFlash: t, legalTermsNodeRef: n }),
        { currencies: S, displayCurrency: f, setCurrency: W, priceOptions: H } = (0, P.P5)(),
        z = i.useMemo(
            () =>
                (0, l.jsx)(d.qX, {
                    label: Z.intl.string(Z.t["/AAR02"]),
                    selectedCurrency: H.currency ?? f,
                    currencies: S,
                    onChange: W,
                }),
            [H.currency, f, S, W],
        ),
        $ = i.useMemo(() => ({ paymentGatewayRestrictions: m, shouldUseUnifiedCheckoutUI: !0 }), [m]),
        J = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(o.N, {
                    label: Z.intl.string(Z.t["u+Cw58"]),
                    location: "OneTimeUnifiedCheckoutPurchaseReview",
                    onPaymentSourceAdd: a,
                    additionalPaymentSourceDropdownProps: $,
                    disabled: y,
                }),
                z,
            ],
        }),
        X = i.useMemo(() => {
            let e = [];
            return (
                null != E.testModeWarning &&
                    e.push({ type: "warning", message: E.testModeWarning, key: "test-mode-warning-notice" }),
                null != E.devShelfError &&
                    e.push({ type: "critical", message: E.devShelfError, key: "dev-shelf-error-notice" }),
                e.length > 0 ? e : null
            );
        }, [E.testModeWarning, E.devShelfError]),
        Q = i.useMemo(() => {
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
    return C
        ? (0, l.jsx)(c.E, {})
        : (0, l.jsx)(ee, {
              application: s,
              giftRecipient: A,
              isGift: p,
              sku: r,
              skuPricePreview: u,
              paymentSelectContent: J,
              legalContent: h,
              upperInlineNoticeProps: X,
              footerInlineNoticeProps: Q,
          });
}

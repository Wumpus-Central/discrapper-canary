n.d(t, { dL: () => z, Ay: () => X, oO: () => J }), n(321073);
var l = n(627968),
    a = n(64700),
    i = n(575593),
    r = n(403581),
    s = n(262427),
    o = n(61572),
    u = n(725836),
    c = n(69882),
    d = n(93159),
    p = n(848584),
    m = n(241989),
    h = n(993408),
    A = n(287809),
    C = n(486020),
    _ = n(927578),
    y = n(580630),
    E = n(156312),
    P = n(284009),
    f = n.n(P),
    S = n(997101),
    T = n(318254),
    x = n(821891),
    N = n(953689),
    g = n(10716),
    I = n(46225),
    v = n(20015),
    b = n(666646),
    M = n(427675),
    j = n(94420),
    R = n(977445),
    L = n(778307),
    O = n(218075),
    D = n(570221),
    w = n(615405),
    U = n(79387),
    k = n(45938),
    Y = n(937008),
    F = n(566980),
    G = n(367921),
    B = n(908419),
    W = n(652215);
function H(e) {
    let { paymentSourceType: t } = e,
        { isGift: n } = (0, Y.Pv)(),
        { immediateDelivery: a } = (0, B.U)(),
        i = (0, G.Ro)({
            purchaseType: W.VVm.ONE_TIME,
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
var V = n(985018),
    K = n(666995),
    Z = n(319820),
    q = n(327105);
n(594387);
let z = (e) => e.name,
    $ = {
        [i.R.BUNDLE]: () => V.intl.string(q.default["jM8/71"]),
        [i.R.AVATAR_DECORATION]: () => V.intl.string(q.default.r29Oel),
        [i.R.PROFILE_EFFECT]: () => V.intl.string(q.default.eTYAvF),
        [i.R.NAMEPLATE]: () => V.intl.string(q.default.of9bom),
        [i.R.PROFILE_FRAME]: () => V.intl.string(q.default.HzDn6w),
    },
    J = (e) => {
        let t = V.intl.string(q.default.iZe9Wy);
        if (null == e);
        else if (e.type in $) return (0, $[e.type])();
        return t;
    },
    Q = (e) => {
        let {
                application: t,
                sku: n,
                skuPricePreview: i,
                paymentSelectContent: o,
                legalContent: d,
                isGift: E,
                giftRecipient: P,
                upperInlineNoticeProps: f,
                footerInlineNoticeProps: S,
            } = e,
            { product: x, isSocialLayerGameItem: N } = (0, Z.AO)({ sku: n }),
            { unifiedInvoiceSummaryProps: g, priceText: I } = a.useMemo(
                () =>
                    ((e) => {
                        let { sku: t, skuPricePreview: n } = e,
                            l = [];
                        if (null != n) {
                            let { discount: e, basePrice: a, showTaxes: i } = (0, Z.yh)({ skuPricePreview: n });
                            return (
                                l.push({ id: "sku", label: z(t), amount: a }),
                                null != e &&
                                    l.push({
                                        id: "discount",
                                        label: e.description,
                                        amount: e.amount > 0 ? -1 * e.amount : e.amount,
                                    }),
                                i && l.push({ id: "tax", label: V.intl.string(V.t["/I8zmP"]), amount: n.tax }),
                                {
                                    unifiedInvoiceSummaryProps: {
                                        lineItems: l,
                                        label: V.intl.string(q.default.eoXh7B),
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
            v = a.useMemo(() => (null != g ? (0, l.jsx)(p.Vm, { ...g }) : null), [g]),
            b = a.useMemo(
                () =>
                    ((e) => {
                        let { sku: t, product: n, application: a, isSocialLayerGameItem: i, giftRecipient: s } = e,
                            o = V.intl.string(q.default.iZe9Wy);
                        i
                            ? (o = V.intl.string(q.default.qwSlCO))
                            : null != n
                              ? (o = J(n))
                              : t.productLine === W.EZt.GUILD_PRODUCT && (o = V.intl.string(q.default.hewwdA));
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
                                        n = _.Ay.canUseShopDiscounts(t),
                                        l = (0, h.xM)(t),
                                        a = (0, h.WD)(e, { hasShopDiscount: n, discount: (0, h.fT)(e, n) });
                                    if (null != a && !a.showDefaultPriceOnly && a.showDiscountPrice) {
                                        if (l === h.D0.NITRO)
                                            return { PriceIcon: r.t, priceTooltip: V.intl.string(q.default.YUNJJa) };
                                        h.D0.THIRDPARTY;
                                    }
                                    return {};
                                })(n)),
                            {
                                ...u,
                                ...d,
                                label: z(t),
                                description: o,
                                graphic: c,
                                target: null != s ? { type: "gift", user: s } : void 0,
                            }
                        );
                    })({ sku: n, product: x, application: t, isSocialLayerGameItem: N, giftRecipient: P }),
                [n, x, t, N, P],
            ),
            [M, j] = a.useMemo(
                () => [V.intl.string(q.default.Zxav97), null != i ? (0, y.$g)(i.amount, i.currency) : void 0],
                [i],
            ),
            R = a.useMemo(() => {
                let e = ((e, t) => {
                    let { isGift: n } = t;
                    if (null == e) return null;
                    let l = e.orbs_reward;
                    if (null != l && l > 0) {
                        let e = n ? V.t["ZV+aS9"] : V.t["0StwHe"];
                        return { Icon: T.C, text: V.intl.format(e, { orbCount: l }) };
                    }
                })(i, { isGift: E });
                return null != e ? (0, l.jsx)(s.J, { ...e }) : null;
            }, [i, E]),
            { setCheckoutHeaderConfigs: L, checkoutHeaderConfigs: O } = (0, u.ck)();
        return (
            a.useEffect(() => {
                null != R && null == O.headerBadgeText && L({ ...O, headerBadgeText: V.intl.string(q.default.Fjpyfj) });
            }, [R, L, O]),
            (0, l.jsx)(c.T_, {
                shouldShowGlobalNotices: !0,
                purchaseItemContent: (0, l.jsx)(m.f7, { ...b, price: I }),
                invoiceSummaryContent: v,
                paymentSelectContent: o,
                legalContent: d,
                promotionalNoticeContent: R,
                upperInlineNoticeProps: f,
                footerInlineNoticeProps: S,
                invoiceTotalDueLabel: M,
                invoiceTotalDueValue: j,
            })
        );
    };
function X(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: i } = e,
        {
            sku: r,
            application: s,
            skuPricePreview: u,
            isGift: p,
            hasCheckoutContextLoaded: m,
            checkoutPaymentSources: h,
            eligiblePaymentGateways: A,
            purchaseTermsAndLegalContent: C,
            isStepLoading: _,
            giftRecipient: y,
            warningAndErrorMessages: P,
            disabled: T,
        } = ((e) => {
            let { hasLegalTermsFlash: t, legalTermsNodeRef: n } = e,
                { selectedSkuId: i, setHasAcceptedTerms: r } = (0, j.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    setHasAcceptedTerms: e.setHasAcceptedTerms,
                })),
                {
                    application: s,
                    purchaseState: o,
                    paymentSourceId: u,
                    isEmbeddedIAP: c,
                    purchaseType: d,
                    purchasePreviewError: p,
                    devShelfFetchState: m,
                    hasPaymentSources: h,
                    checkoutPaymentSources: A,
                    hasCheckoutContextLoaded: C,
                } = (0, E.P5)(),
                _ = (0, M.gU)(),
                y = (0, M.RR)(),
                { isGift: P, giftRecipient: T } = (0, Y.Pv)(),
                G = P && (0, k.Ik)(T),
                { fetched: B, hasAlreadyLinked: Z } = (0, I.RD)(s);
            f()(null != i, "Expected selectedSkuId");
            let q = _[i],
                z = q?.eligiblePaymentGateways,
                $ = y[i],
                J = u ?? U.B,
                Q = A.length > 0,
                X = null != $ ? ($[J] ?? (Q ? $[U.B] : null)) : null,
                ee = a.useMemo(() => (null == X ? null : D.A.createFromOTPPreview(X)), [X]);
            (0, b.F0)(ee, p ?? null),
                f()(null != q, "SKU must exist and be fetched."),
                f()(null != s, "Application must exist.");
            let et = (0, R.u)(s.id),
                en = S.M.EEA_COUNTRIES.has(w.A.ipCountryCodeWithFallback),
                el = o === F.h.PURCHASING || o === F.h.COMPLETED,
                ea = A.find((e) => e.id === u) ?? null,
                ei = null != ea ? ea.type : null,
                er = null != z && z.length > 0 && (u === U.B || null === ei) && h ? O.fU.SELECT_PAYMENT_METHOD : void 0,
                es = q.productLine === W.EZt.SOCIAL_LAYER_GAME_ITEM,
                eo = G && !es,
                eu = a.useMemo(
                    () => ({
                        testModeWarning: et ? V.intl.string(V.t.OvMyMd) : null,
                        devShelfError:
                            (0, v.n)(s, W.gfo.EMBEDDED) && m === g.$.ERROR ? V.intl.string(V.t.tAmECt) : null,
                        socialLayerGameItemDisclaimer: es && B && !Z && !P ? V.intl.string(V.t["3pLGHL"]) : null,
                    }),
                    [et, s, m, es, B, Z, P],
                ),
                ec = a.useMemo(
                    () =>
                        q.productLine === W.EZt.COLLECTIBLES
                            ? (0, l.jsx)(H, { paymentSourceType: ei })
                            : (0, l.jsx)(L.A, {
                                  isActive: t,
                                  ref: n,
                                  children: (0, l.jsx)(N.A, {
                                      onChange: r,
                                      forceShow: !0,
                                      showWithdrawalWaiver: en,
                                      disabled: el,
                                      subscriptionPlan: null,
                                      finePrintClassname: K.i,
                                      purchaseType: d,
                                      isGift: P,
                                      finePrint: (0, l.jsx)(x.A, {
                                          paymentSourceType: ei,
                                          isEmbeddedIAP: c,
                                          purchaseType: d,
                                          productLine: q.productLine,
                                          isGift: P,
                                          applicationName: s.name,
                                          hasAlreadyLinked: !B || Z,
                                      }),
                                  }),
                              }),
                    [t, n, r, en, el, d, P, ei, c, q.productLine, s.name, B, Z],
                );
            return {
                sku: q,
                application: s,
                giftRecipient: T,
                isGift: P,
                skuPricePreview: X,
                isEmbeddedIAP: c,
                shouldShowPurchaseReviewImage: eo,
                paymentRestrictionBannerType: er,
                hasCheckoutContextLoaded: C,
                devShelfFetchState: m,
                isStepLoading: !C && null == p,
                purchasePreviewError: p,
                warningAndErrorMessages: eu,
                purchaseTermsAndLegalContent: ec,
                eligiblePaymentGateways: z,
                checkoutPaymentSources: A,
                disabled: el,
            };
        })({ hasLegalTermsFlash: t, legalTermsNodeRef: n }),
        { currencies: G, displayCurrency: B, setCurrency: Z, priceOptions: q } = (0, E.P5)(),
        z = a.useMemo(
            () =>
                (0, l.jsx)(d.qX, {
                    label: V.intl.string(V.t["/AAR02"]),
                    selectedCurrency: q.currency ?? B,
                    currencies: G,
                    onChange: Z,
                }),
            [q.currency, B, G, Z],
        ),
        $ = a.useMemo(() => ({ paymentGatewayRestrictions: A, shouldUseUnifiedCheckoutUI: !0 }), [A]),
        J = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(o.N, {
                    label: V.intl.string(V.t["u+Cw58"]),
                    location: "OneTimeUnifiedCheckoutPurchaseReview",
                    onPaymentSourceAdd: i,
                    checkoutPaymentSources: h,
                    isReady: m,
                    additionalPaymentSourceDropdownProps: $,
                    disabled: T,
                }),
                z,
            ],
        }),
        X = a.useMemo(() => {
            let e = [];
            return (
                null != P.testModeWarning &&
                    e.push({ type: "warning", message: P.testModeWarning, key: "test-mode-warning-notice" }),
                null != P.devShelfError &&
                    e.push({ type: "critical", message: P.devShelfError, key: "dev-shelf-error-notice" }),
                e.length > 0 ? e : null
            );
        }, [P.testModeWarning, P.devShelfError]),
        ee = a.useMemo(() => {
            let e = [];
            return (
                null != P.socialLayerGameItemDisclaimer &&
                    e.push({
                        type: "info",
                        message: P.socialLayerGameItemDisclaimer,
                        key: "social-layer-game-item-disclaimer-notice",
                    }),
                e.length > 0 ? e : null
            );
        }, [P.socialLayerGameItemDisclaimer]);
    return _
        ? (0, l.jsx)(c.Ed, {})
        : (0, l.jsx)(Q, {
              application: s,
              giftRecipient: y,
              isGift: p,
              sku: r,
              skuPricePreview: u,
              paymentSelectContent: J,
              legalContent: C,
              upperInlineNoticeProps: X,
              footerInlineNoticeProps: ee,
          });
}

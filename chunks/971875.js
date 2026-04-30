n.d(t, { dL: () => $, Ay: () => ee, oO: () => X }), n(321073);
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
    C = n(287809),
    A = n(486020),
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
    j = n(427675),
    R = n(94420),
    L = n(977445),
    O = n(778307),
    D = n(218075),
    w = n(570221),
    U = n(615405),
    k = n(79387),
    Y = n(45938),
    G = n(937008),
    F = n(566980),
    B = n(367921),
    W = n(908419),
    H = n(652215);
function V(e) {
    let { paymentSourceType: t } = e,
        { isGift: n } = (0, G.Pv)(),
        { immediateDelivery: a } = (0, W.U)(),
        i = (0, B.Ro)({
            purchaseType: H.VVm.ONE_TIME,
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
var K = n(985018),
    Z = n(666995),
    q = n(319820),
    z = n(327105);
n(594387);
let $ = (e) => e.name,
    J = {
        [i.R.BUNDLE]: () => K.intl.string(z.default["jM8/71"]),
        [i.R.AVATAR_DECORATION]: () => K.intl.string(z.default.r29Oel),
        [i.R.PROFILE_EFFECT]: () => K.intl.string(z.default.eTYAvF),
        [i.R.NAMEPLATE]: () => K.intl.string(z.default.of9bom),
        [i.R.PROFILE_FRAME]: () => K.intl.string(z.default.HzDn6w),
    },
    X = (e) => {
        let t = K.intl.string(z.default.iZe9Wy);
        if (null == e);
        else if (e.type in J) return (0, J[e.type])();
        return t;
    },
    Q = (e) => {
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
            { product: N, isSocialLayerGameItem: x } = (0, q.AO)({ sku: n }),
            { unifiedInvoiceSummaryProps: I, priceText: g } = a.useMemo(
                () =>
                    ((e) => {
                        let { sku: t, skuPricePreview: n } = e,
                            l = [];
                        if (null != n) {
                            let { discount: e, basePrice: a, showTaxes: i } = (0, q.yh)({ skuPricePreview: n });
                            return (
                                l.push({ id: "sku", label: $(t), amount: a }),
                                null != e &&
                                    l.push({
                                        id: "discount",
                                        label: e.description,
                                        amount: e.amount > 0 ? -1 * e.amount : e.amount,
                                    }),
                                i && l.push({ id: "tax", label: K.intl.string(K.t["/I8zmP"]), amount: n.tax }),
                                {
                                    unifiedInvoiceSummaryProps: {
                                        lineItems: l,
                                        label: K.intl.string(z.default.eoXh7B),
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
                        let { sku: t, product: n, application: a, isSocialLayerGameItem: i, giftRecipient: s } = e,
                            o = K.intl.string(z.default.iZe9Wy);
                        i
                            ? (o = K.intl.string(z.default.qwSlCO))
                            : null != n
                              ? (o = X(n))
                              : t.productLine === H.EZt.GUILD_PRODUCT && (o = K.intl.string(z.default.hewwdA));
                        let u = i
                                ? {
                                      header: a.name,
                                      headerIconSrc: A.Ay.getApplicationIconURL({ id: a.id, icon: a.icon, size: 16 }),
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
                                        a = (0, h.WD)(e, { hasShopDiscount: n, discount: (0, h.fT)(e, n) });
                                    if (null != a && !a.showDefaultPriceOnly && a.showDiscountPrice) {
                                        if (l === h.D0.NITRO)
                                            return { PriceIcon: r.t, priceTooltip: K.intl.string(z.default.YUNJJa) };
                                        h.D0.THIRDPARTY;
                                    }
                                    return {};
                                })(n)),
                            {
                                ...u,
                                ...d,
                                label: $(t),
                                description: o,
                                graphic: c,
                                target: null != s ? { type: "gift", user: s } : void 0,
                            }
                        );
                    })({ sku: n, product: N, application: t, isSocialLayerGameItem: x, giftRecipient: S }),
                [n, N, t, x, S],
            ),
            [b, j] = a.useMemo(
                () => [K.intl.string(z.default.Zxav97), null != i ? (0, y.$g)(i.amount, i.currency) : void 0],
                [i],
            ),
            R = a.useMemo(() => {
                let e = ((e, t) => {
                    let { isGift: n } = t;
                    if (null == e) return null;
                    let l = e.orbs_reward;
                    if (null != l && l > 0) {
                        let e = n ? K.t["ZV+aS9"] : K.t["0StwHe"];
                        return { Icon: f.C, text: K.intl.format(e, { orbCount: l }) };
                    }
                })(i, { isGift: P });
                return null != e ? (0, l.jsx)(s.J, { ...e }) : null;
            }, [i, P]),
            { setCheckoutHeaderConfigs: L, checkoutHeaderConfigs: O } = (0, u.ck)();
        return (
            a.useEffect(() => {
                null != R && null == O.headerBadgeText && L({ ...O, headerBadgeText: K.intl.string(z.default.Fjpyfj) });
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
                invoiceTotalDueLabel: b,
                invoiceTotalDueValue: j,
            })
        );
    };
function ee(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: i } = e,
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
                { selectedSkuId: i, setHasAcceptedTerms: r } = (0, R.t4)((e) => ({
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
                } = (0, P.P5)(),
                { checkoutPaymentSources: C, hasInvoiceOrderContextLoaded: A } = (0, M.t6)(),
                E = (0, j.gU)(),
                y = (0, j.RR)(),
                { isGift: S, giftRecipient: f } = (0, G.Pv)(),
                B = S && (0, Y.Ik)(f),
                { fetched: W, hasAlreadyLinked: q } = (0, g.RD)(s);
            _()(null != i, "Expected selectedSkuId");
            let z = E[i],
                $ = z?.eligiblePaymentGateways,
                J = y[i],
                X = u ?? k.B,
                Q = C.length > 0,
                ee = null != J ? (J[X] ?? (Q ? J[k.B] : null)) : null,
                et = a.useMemo(() => (null == ee ? null : w.A.createFromOTPPreview(ee)), [ee]);
            (0, b.F0)(et, p ?? null),
                _()(null != z, "SKU must exist and be fetched."),
                _()(null != s, "Application must exist.");
            let en = (0, L.u)(s.id),
                el = T.M.EEA_COUNTRIES.has(U.A.ipCountryCodeWithFallback),
                ea = o === F.h.PURCHASING || o === F.h.COMPLETED,
                ei = C.find((e) => e.id === u) ?? null,
                er = null != ei ? ei.type : null,
                es = null != $ && $.length > 0 && (u === k.B || null === er) && h ? D.fU.SELECT_PAYMENT_METHOD : void 0,
                eo = z.productLine === H.EZt.SOCIAL_LAYER_GAME_ITEM,
                eu = B && !eo,
                ec = a.useMemo(
                    () => ({
                        testModeWarning: en ? K.intl.string(K.t.OvMyMd) : null,
                        devShelfError:
                            (0, v.n)(s, H.gfo.EMBEDDED) && m === I.$.ERROR ? K.intl.string(K.t.tAmECt) : null,
                        socialLayerGameItemDisclaimer: eo && W && !q && !S ? K.intl.string(K.t["3pLGHL"]) : null,
                    }),
                    [en, s, m, eo, W, q, S],
                ),
                ed = a.useMemo(
                    () =>
                        z.productLine === H.EZt.COLLECTIBLES
                            ? (0, l.jsx)(V, { paymentSourceType: er })
                            : (0, l.jsx)(O.A, {
                                  isActive: t,
                                  ref: n,
                                  children: (0, l.jsx)(x.A, {
                                      onChange: r,
                                      forceShow: !0,
                                      showWithdrawalWaiver: el,
                                      disabled: ea,
                                      subscriptionPlan: null,
                                      finePrintClassname: Z.i,
                                      purchaseType: d,
                                      isGift: S,
                                      finePrint: (0, l.jsx)(N.A, {
                                          paymentSourceType: er,
                                          isEmbeddedIAP: c,
                                          purchaseType: d,
                                          productLine: z.productLine,
                                          isGift: S,
                                          applicationName: s.name,
                                          hasAlreadyLinked: !W || q,
                                      }),
                                  }),
                              }),
                    [t, n, r, el, ea, d, S, er, c, z.productLine, s.name, W, q],
                );
            return {
                sku: z,
                application: s,
                giftRecipient: f,
                isGift: S,
                skuPricePreview: ee,
                isEmbeddedIAP: c,
                shouldShowPurchaseReviewImage: eu,
                paymentRestrictionBannerType: es,
                devShelfFetchState: m,
                isStepLoading: !A && null == p,
                purchasePreviewError: p,
                warningAndErrorMessages: ec,
                purchaseTermsAndLegalContent: ed,
                eligiblePaymentGateways: $,
                disabled: ea,
            };
        })({ hasLegalTermsFlash: t, legalTermsNodeRef: n }),
        { currencies: S, displayCurrency: f, setCurrency: B, priceOptions: W } = (0, P.P5)(),
        q = a.useMemo(
            () =>
                (0, l.jsx)(d.qX, {
                    label: K.intl.string(K.t["/AAR02"]),
                    selectedCurrency: W.currency ?? f,
                    currencies: S,
                    onChange: B,
                }),
            [W.currency, f, S, B],
        ),
        z = a.useMemo(() => ({ paymentGatewayRestrictions: m, shouldUseUnifiedCheckoutUI: !0 }), [m]),
        $ = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(o.N, {
                    label: K.intl.string(K.t["u+Cw58"]),
                    location: "OneTimeUnifiedCheckoutPurchaseReview",
                    onPaymentSourceAdd: i,
                    additionalPaymentSourceDropdownProps: z,
                    disabled: y,
                }),
                q,
            ],
        }),
        J = a.useMemo(() => {
            let e = [];
            return (
                null != E.testModeWarning &&
                    e.push({ type: "warning", message: E.testModeWarning, key: "test-mode-warning-notice" }),
                null != E.devShelfError &&
                    e.push({ type: "critical", message: E.devShelfError, key: "dev-shelf-error-notice" }),
                e.length > 0 ? e : null
            );
        }, [E.testModeWarning, E.devShelfError]),
        X = a.useMemo(() => {
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
        : (0, l.jsx)(Q, {
              application: s,
              giftRecipient: A,
              isGift: p,
              sku: r,
              skuPricePreview: u,
              paymentSelectContent: $,
              legalContent: h,
              upperInlineNoticeProps: J,
              footerInlineNoticeProps: X,
          });
}

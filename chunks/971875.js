"use strict";
n.d(t, { dL: () => X, Ay: () => ee, oO: () => Q }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(575593),
    a = n(403581),
    o = n(262427),
    l = n(725836),
    d = n(69882),
    _ = n(232467),
    u = n(848584),
    c = n(241989),
    E = n(993408),
    h = n(287809),
    m = n(486020),
    f = n(927578),
    g = n(580630),
    p = n(156312),
    A = n(284009),
    I = n.n(A),
    T = n(997101),
    S = n(702841),
    N = n(318254),
    C = n(821891),
    R = n(953689),
    O = n(10716),
    y = n(46225),
    v = n(20015),
    D = n(918022),
    L = n(427675),
    b = n(94420),
    w = n(977445),
    P = n(778307),
    k = n(218075),
    M = n(570221),
    U = n(351906),
    x = n(615405),
    G = n(79387),
    V = n(45938),
    F = n(937008),
    B = n(566980),
    H = n(367921),
    j = n(908419),
    W = n(652215);
function Y(e) {
    let { paymentSourceType: t } = e,
        { isGift: n } = (0, F.Pv)(),
        { immediateDelivery: r } = (0, j.U)(),
        s = (0, H.Ro)({
            purchaseType: W.VVm.ONE_TIME,
            plan: null,
            premiumSubscription: null,
            isGift: n,
            planGroup: [],
            isPrepaidPaymentSource: !1,
        });
    return (0, i.jsx)(_._P, {
        variant: n ? { type: _.I0.GiftShop, purchaseButtonText: s } : { type: _.I0.Shop, purchaseButtonText: s },
        paymentSourceType: t,
        immediateDelivery: r,
    });
}
var K = n(985018),
    z = n(666995),
    $ = n(319820),
    q = n(327105);
let X = (e) => e.name,
    Z = {
        [s.R.BUNDLE]: () => K.intl.string(q.default["jM8/71"]),
        [s.R.AVATAR_DECORATION]: () => K.intl.string(q.default.r29Oel),
        [s.R.PROFILE_EFFECT]: () => K.intl.string(q.default.eTYAvF),
        [s.R.NAMEPLATE]: () => K.intl.string(q.default.of9bom),
        [s.R.PROFILE_FRAME]: () => K.intl.string(q.default.HzDn6w),
    },
    Q = (e) => {
        let t = K.intl.string(q.default.iZe9Wy);
        if (null == e);
        else if (e.type in Z) return (0, Z[e.type])();
        return t;
    },
    J = (e) => {
        let {
                application: t,
                sku: n,
                skuPricePreview: s,
                paymentSelectContent: _,
                legalContent: p,
                isGift: A,
                giftRecipient: I,
                upperInlineNoticeProps: T,
                footerInlineNoticeProps: S,
            } = e,
            { product: C, isSocialLayerGameItem: R } = (0, $.AO)({ sku: n }),
            { unifiedInvoiceSummaryProps: O, priceText: y } = r.useMemo(
                () =>
                    ((e) => {
                        let { sku: t, skuPricePreview: n } = e,
                            i = [];
                        if (null != n) {
                            let { discount: e, basePrice: r, showTaxes: s } = (0, $.yh)({ skuPricePreview: n });
                            return (
                                i.push({ id: "sku", label: X(t), amount: r }),
                                null != e &&
                                    i.push({
                                        id: "discount",
                                        label: e.description,
                                        amount: e.amount > 0 ? -1 * e.amount : e.amount,
                                    }),
                                s && i.push({ id: "tax", label: K.intl.string(K.t["/I8zmP"]), amount: n.tax }),
                                {
                                    unifiedInvoiceSummaryProps: {
                                        lineItems: i,
                                        label: K.intl.string(q.default.eoXh7B),
                                        currency: n.currency,
                                    },
                                    priceText: (0, g.$g)(r, n.currency),
                                    discount: e,
                                }
                            );
                        }
                        return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
                    })({ sku: n, skuPricePreview: s }),
                [n, s],
            ),
            v = r.useMemo(() => (null != O ? (0, i.jsx)(u.Vm, { ...O }) : null), [O]),
            D = r.useMemo(
                () =>
                    ((e) => {
                        let t,
                            n,
                            r,
                            { sku: s, product: o, application: l, isSocialLayerGameItem: d, giftRecipient: _ } = e,
                            u = K.intl.string(q.default.iZe9Wy);
                        d
                            ? (u = K.intl.string(q.default.qwSlCO))
                            : null != o
                              ? (u = Q(o))
                              : s.productLine === W.EZt.GUILD_PRODUCT && (u = K.intl.string(q.default.hewwdA));
                        let g = d
                                ? {
                                      header: l.name,
                                      headerIconSrc: m.Ay.getApplicationIconURL({ id: l.id, icon: l.icon, size: 16 }),
                                  }
                                : {},
                            p = (0, i.jsx)(c.WH, { sku: s, product: o }),
                            A = {};
                        return (
                            null != o &&
                                ((t = h.default.getCurrentUser()),
                                (n = f.Ay.canUseCollectibles(t)),
                                (A =
                                    null == (r = (0, E.WD)(o, { isPremiumUser: n, discount: (0, E.fT)(o, n) })) ||
                                    r.showDefaultPriceOnly
                                        ? {}
                                        : {
                                              PriceIcon: r.showNitroPrice ? a.t : void 0,
                                              priceTooltip: r.showNitroPrice ? K.intl.string(q.default.YUNJJa) : void 0,
                                          })),
                            {
                                ...g,
                                ...A,
                                label: X(s),
                                description: u,
                                graphic: p,
                                target: null != _ ? { type: "gift", user: _ } : void 0,
                            }
                        );
                    })({ sku: n, product: C, application: t, isSocialLayerGameItem: R, giftRecipient: I }),
                [n, C, t, R, I],
            ),
            [L, b] = r.useMemo(
                () => [K.intl.string(q.default.Zxav97), null != s ? (0, g.$g)(s.amount, s.currency) : void 0],
                [s],
            ),
            w = r.useMemo(() => {
                let e = ((e, t) => {
                    let { isGift: n } = t;
                    if (null == e) return null;
                    let i = e.orbs_reward;
                    if (null != i && i > 0) {
                        let e = n ? K.t["ZV+aS9"] : K.t["0StwHe"];
                        return { Icon: N.C, text: K.intl.format(e, { orbCount: i }) };
                    }
                })(s, { isGift: A });
                return null != e ? (0, i.jsx)(o.J, { ...e }) : null;
            }, [s, A]),
            { setCheckoutHeaderConfigs: P, checkoutHeaderConfigs: k } = (0, l.ck)();
        return (
            r.useEffect(() => {
                null != w && null == k.headerBadgeText && P({ ...k, headerBadgeText: K.intl.string(q.default.Fjpyfj) });
            }, [w, P, k]),
            (0, i.jsx)(d.T_, {
                shouldShowGlobalNotices: !0,
                purchaseItemContent: (0, i.jsx)(c.f7, { ...D, price: y }),
                invoiceSummaryContent: v,
                paymentSelectContent: _,
                legalContent: p,
                promotionalNoticeContent: w,
                upperInlineNoticeProps: T,
                footerInlineNoticeProps: S,
                invoiceTotalDueLabel: L,
                invoiceTotalDueValue: b,
            })
        );
    };
function ee(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: s } = e,
        {
            sku: a,
            application: o,
            skuPricePreview: l,
            isGift: u,
            paymentSourceDropdownProps: c,
            purchaseTermsAndLegalContent: E,
            isStepLoading: h,
            giftRecipient: m,
            warningAndErrorMessages: f,
            giftCardsEnabled: g,
            giftCardCheckboxProps: A,
            disabled: N,
        } = ((e) => {
            let { hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: s } = e,
                a = (0, b.t4)((e) => e.selectedSkuId),
                {
                    application: o,
                    purchaseState: l,
                    paymentSourceId: d,
                    setPaymentSourceId: _,
                    setHasAcceptedTerms: u,
                    isEmbeddedIAP: c,
                    purchaseType: E,
                    purchasePreviewError: h,
                    devShelfFetchState: m,
                    hasPaymentSources: f,
                    checkoutPaymentSources: g,
                    hasCheckoutContextLoaded: A,
                } = (0, p.P5)(),
                N = (0, L.gU)(),
                H = (0, L.RR)(),
                { isGift: j, giftRecipient: $ } = (0, F.Pv)(),
                q = j && (0, V.Ik)($),
                { fetched: X, hasAlreadyLinked: Z } = (0, y.RD)(o);
            I()(null != a, "Expected selectedSkuId");
            let Q = N[a],
                J = Q?.eligiblePaymentGateways,
                ee = H[a],
                et = d ?? G.B,
                en = g.length > 0,
                ei = null != ee ? (ee[et] ?? (en ? ee[G.B] : null)) : null,
                er = r.useMemo(() => (null == ei ? null : M.A.createFromOTPPreview(ei)), [ei]);
            (0, b.F0)(er);
            let {
                dropdownPaymentSources: es,
                giftCardWallet: ea,
                giftCardsEnabled: eo,
                dropdownPaymentSourceId: el,
                handleDropdownPaymentSourceChange: ed,
                giftCardCheckboxProps: e_,
            } = (0, D.Y)({
                checkoutPaymentSources: g,
                paymentSourceId: d,
                setPaymentSourceId: _,
                location: "OneTimePurchaseReview",
                isReady: A,
                itemAmount: ei?.amount,
            });
            I()(null != Q, "SKU must exist and be fetched."), I()(null != o, "Application must exist.");
            let eu = (0, w.u)(o.id),
                ec = (0, S.bG)([U.A], () => U.A.enabled),
                eE = T.M.EEA_COUNTRIES.has(x.A.ipCountryCodeWithFallback),
                eh = l === B.h.PURCHASING || l === B.h.COMPLETED,
                em = g.find((e) => e.id === d) ?? null,
                ef = null != em ? em.type : null,
                eg = null != J && J.length > 0 && (d === G.B || null === ef) && f ? k.fU.SELECT_PAYMENT_METHOD : void 0,
                ep = Q.productLine === W.EZt.SOCIAL_LAYER_GAME_ITEM,
                eA = q && !ep,
                eI = r.useMemo(
                    () => ({
                        testModeWarning: eu ? K.intl.string(K.t.OvMyMd) : null,
                        devShelfError:
                            (0, v.n)(o, W.gfo.EMBEDDED) && m === O.$.ERROR ? K.intl.string(K.t.tAmECt) : null,
                        socialLayerGameItemDisclaimer: ep && X && !Z && !j ? K.intl.string(K.t["3pLGHL"]) : null,
                    }),
                    [eu, o, m, ep, X, Z, j],
                ),
                eT = r.useMemo(
                    () => ({
                        paymentSources: es,
                        selectedPaymentSourceId: el,
                        onChange: ed,
                        onPaymentSourceAdd: s,
                        hidePersonalInformation: ec,
                        paymentGatewayRestrictions: J,
                        defaultPaymentSourceId: es.find((e) => e.isDefault)?.id,
                    }),
                    [es, el, ed, s, ec, J],
                ),
                eS = r.useMemo(
                    () =>
                        Q.productLine === W.EZt.COLLECTIBLES
                            ? (0, i.jsx)(Y, { paymentSourceType: ef })
                            : (0, i.jsx)(P.A, {
                                  isActive: t,
                                  ref: n,
                                  children: (0, i.jsx)(R.A, {
                                      onChange: u,
                                      forceShow: !0,
                                      showWithdrawalWaiver: eE,
                                      disabled: eh,
                                      subscriptionPlan: null,
                                      finePrintClassname: z.i,
                                      purchaseType: E,
                                      isGift: j,
                                      finePrint: (0, i.jsx)(C.A, {
                                          paymentSourceType: ef,
                                          isEmbeddedIAP: c,
                                          purchaseType: E,
                                          productLine: Q.productLine,
                                          isGift: j,
                                          applicationName: o.name,
                                          hasAlreadyLinked: !X || Z,
                                      }),
                                  }),
                              }),
                    [t, n, u, eE, eh, E, j, ef, c, Q.productLine, o.name, X, Z],
                );
            return {
                sku: Q,
                application: o,
                giftRecipient: $,
                isGift: j,
                skuPricePreview: ei,
                isEmbeddedIAP: c,
                shouldShowPurchaseReviewImage: eA,
                paymentRestrictionBannerType: eg,
                hasCheckoutContextLoaded: A,
                devShelfFetchState: m,
                isStepLoading: !A && null == h,
                purchasePreviewError: h,
                warningAndErrorMessages: eI,
                paymentSourceDropdownProps: eT,
                purchaseTermsAndLegalContent: eS,
                giftCardWallet: ea,
                giftCardsEnabled: eo,
                giftCardCheckboxProps: e_,
                disabled: eh,
            };
        })({ hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: s }),
        { currencies: H, displayCurrency: j, setCurrency: $, priceOptions: q } = (0, p.P5)(),
        X = r.useMemo(
            () =>
                (0, i.jsx)(_.qX, {
                    label: K.intl.string(K.t["/AAR02"]),
                    selectedCurrency: q.currency ?? j,
                    currencies: H,
                    onChange: $,
                }),
            [q.currency, j, H, $],
        ),
        Z = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(_.nL, {
                    label: K.intl.string(K.t["u+Cw58"]),
                    giftCardsEnabled: g,
                    giftCardCheckboxProps: A,
                    paymentSourceDropdownProps: { ...c, shouldUseUnifiedCheckoutUI: !0 },
                    disabled: N,
                }),
                X,
            ],
        }),
        Q = r.useMemo(() => {
            let e = [];
            return (
                null != f.testModeWarning &&
                    e.push({ type: "warning", message: f.testModeWarning, key: "test-mode-warning-notice" }),
                null != f.devShelfError &&
                    e.push({ type: "critical", message: f.devShelfError, key: "dev-shelf-error-notice" }),
                e.length > 0 ? e : null
            );
        }, [f.testModeWarning, f.devShelfError]),
        ee = r.useMemo(() => {
            let e = [];
            return (
                null != f.socialLayerGameItemDisclaimer &&
                    e.push({
                        type: "info",
                        message: f.socialLayerGameItemDisclaimer,
                        key: "social-layer-game-item-disclaimer-notice",
                    }),
                e.length > 0 ? e : null
            );
        }, [f.socialLayerGameItemDisclaimer]);
    return h
        ? (0, i.jsx)(d.Ed, {})
        : (0, i.jsx)(J, {
              application: o,
              giftRecipient: m,
              isGift: u,
              sku: a,
              skuPricePreview: l,
              paymentSelectContent: Z,
              legalContent: E,
              upperInlineNoticeProps: Q,
              footerInlineNoticeProps: ee,
          });
}

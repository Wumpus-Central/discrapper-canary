n.d(t, { dL: () => $, Ay: () => ee, oO: () => J }), n(321073);
var l = n(627968),
    a = n(64700),
    i = n(575593),
    r = n(403581),
    s = n(262427),
    o = n(725836),
    u = n(69882),
    c = n(93159),
    d = n(848584),
    p = n(241989),
    m = n(993408),
    h = n(287809),
    A = n(486020),
    C = n(927578),
    _ = n(580630),
    E = n(156312),
    y = n(284009),
    f = n.n(y),
    P = n(997101),
    S = n(702841),
    T = n(318254),
    x = n(821891),
    N = n(953689),
    g = n(10716),
    I = n(46225),
    v = n(20015),
    b = n(606267),
    M = n(427675),
    L = n(94420),
    R = n(977445),
    j = n(778307),
    O = n(218075),
    D = n(570221),
    w = n(351906),
    U = n(615405),
    k = n(79387),
    Y = n(45938),
    F = n(937008),
    G = n(566980),
    B = n(367921),
    W = n(908419),
    H = n(652215);
function V(e) {
    let { paymentSourceType: t } = e,
        { isGift: n } = (0, F.Pv)(),
        { immediateDelivery: a } = (0, W.U)(),
        i = (0, B.Ro)({
            purchaseType: H.VVm.ONE_TIME,
            plan: null,
            premiumSubscription: null,
            isGift: n,
            planGroup: [],
            isPrepaidPaymentSource: !1,
        });
    return (0, l.jsx)(c._P, {
        variant: n ? { type: c.I0.GiftShop, purchaseButtonText: i } : { type: c.I0.Shop, purchaseButtonText: i },
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
    X = {
        [i.R.BUNDLE]: () => K.intl.string(z.default["jM8/71"]),
        [i.R.AVATAR_DECORATION]: () => K.intl.string(z.default.r29Oel),
        [i.R.PROFILE_EFFECT]: () => K.intl.string(z.default.eTYAvF),
        [i.R.NAMEPLATE]: () => K.intl.string(z.default.of9bom),
        [i.R.PROFILE_FRAME]: () => K.intl.string(z.default.HzDn6w),
    },
    J = (e) => {
        let t = K.intl.string(z.default.iZe9Wy);
        if (null == e);
        else if (e.type in X) return (0, X[e.type])();
        return t;
    },
    Q = (e) => {
        let {
                application: t,
                sku: n,
                skuPricePreview: i,
                paymentSelectContent: c,
                legalContent: E,
                isGift: y,
                giftRecipient: f,
                upperInlineNoticeProps: P,
                footerInlineNoticeProps: S,
            } = e,
            { product: x, isSocialLayerGameItem: N } = (0, q.AO)({ sku: n }),
            { unifiedInvoiceSummaryProps: g, priceText: I } = a.useMemo(
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
                                    priceText: (0, _.$g)(a, n.currency),
                                    discount: e,
                                }
                            );
                        }
                        return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
                    })({ sku: n, skuPricePreview: i }),
                [n, i],
            ),
            v = a.useMemo(() => (null != g ? (0, l.jsx)(d.Vm, { ...g }) : null), [g]),
            b = a.useMemo(
                () =>
                    ((e) => {
                        let { sku: t, product: n, application: a, isSocialLayerGameItem: i, giftRecipient: s } = e,
                            o = K.intl.string(z.default.iZe9Wy);
                        i
                            ? (o = K.intl.string(z.default.qwSlCO))
                            : null != n
                              ? (o = J(n))
                              : t.productLine === H.EZt.GUILD_PRODUCT && (o = K.intl.string(z.default.hewwdA));
                        let u = i
                                ? {
                                      header: a.name,
                                      headerIconSrc: A.Ay.getApplicationIconURL({ id: a.id, icon: a.icon, size: 16 }),
                                  }
                                : {},
                            c = (0, l.jsx)(p.WH, { sku: t, product: n }),
                            d = {};
                        return (
                            null != n &&
                                (d = ((e) => {
                                    let t = h.default.getCurrentUser(),
                                        n = C.Ay.canUseShopDiscounts(t),
                                        l = (0, m.xM)(t),
                                        a = (0, m.WD)(e, { hasShopDiscount: n, discount: (0, m.fT)(e, n) });
                                    if (null != a && !a.showDefaultPriceOnly && a.showDiscountPrice) {
                                        if (l === m.D0.NITRO)
                                            return { PriceIcon: r.t, priceTooltip: K.intl.string(z.default.YUNJJa) };
                                        m.D0.THIRDPARTY;
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
                    })({ sku: n, product: x, application: t, isSocialLayerGameItem: N, giftRecipient: f }),
                [n, x, t, N, f],
            ),
            [M, L] = a.useMemo(
                () => [K.intl.string(z.default.Zxav97), null != i ? (0, _.$g)(i.amount, i.currency) : void 0],
                [i],
            ),
            R = a.useMemo(() => {
                let e = ((e, t) => {
                    let { isGift: n } = t;
                    if (null == e) return null;
                    let l = e.orbs_reward;
                    if (null != l && l > 0) {
                        let e = n ? K.t["ZV+aS9"] : K.t["0StwHe"];
                        return { Icon: T.C, text: K.intl.format(e, { orbCount: l }) };
                    }
                })(i, { isGift: y });
                return null != e ? (0, l.jsx)(s.J, { ...e }) : null;
            }, [i, y]),
            { setCheckoutHeaderConfigs: j, checkoutHeaderConfigs: O } = (0, o.ck)();
        return (
            a.useEffect(() => {
                null != R && null == O.headerBadgeText && j({ ...O, headerBadgeText: K.intl.string(z.default.Fjpyfj) });
            }, [R, j, O]),
            (0, l.jsx)(u.T_, {
                shouldShowGlobalNotices: !0,
                purchaseItemContent: (0, l.jsx)(p.f7, { ...b, price: I }),
                invoiceSummaryContent: v,
                paymentSelectContent: c,
                legalContent: E,
                promotionalNoticeContent: R,
                upperInlineNoticeProps: P,
                footerInlineNoticeProps: S,
                invoiceTotalDueLabel: M,
                invoiceTotalDueValue: L,
            })
        );
    };
function ee(e) {
    let { hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: i } = e,
        {
            sku: r,
            application: s,
            skuPricePreview: o,
            isGift: d,
            paymentSourceDropdownProps: p,
            purchaseTermsAndLegalContent: m,
            isStepLoading: h,
            giftRecipient: A,
            warningAndErrorMessages: C,
            giftCardsEnabled: _,
            giftCardCheckboxProps: y,
            walletCoversSubtotal: T,
            disabled: B,
        } = ((e) => {
            let { hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: i } = e,
                r = (0, L.t4)((e) => e.selectedSkuId),
                {
                    application: s,
                    purchaseState: o,
                    paymentSourceId: u,
                    setPaymentSourceId: c,
                    setHasAcceptedTerms: d,
                    isEmbeddedIAP: p,
                    purchaseType: m,
                    purchasePreviewError: h,
                    devShelfFetchState: A,
                    hasPaymentSources: C,
                    checkoutPaymentSources: _,
                    hasCheckoutContextLoaded: y,
                } = (0, E.P5)(),
                T = (0, M.gU)(),
                B = (0, M.RR)(),
                { isGift: W, giftRecipient: q } = (0, F.Pv)(),
                z = W && (0, Y.Ik)(q),
                { fetched: $, hasAlreadyLinked: X } = (0, I.RD)(s);
            f()(null != r, "Expected selectedSkuId");
            let J = T[r],
                Q = J?.eligiblePaymentGateways,
                ee = B[r],
                et = u ?? k.B,
                en = _.length > 0,
                el = null != ee ? (ee[et] ?? (en ? ee[k.B] : null)) : null,
                ea = a.useMemo(() => (null == el ? null : D.A.createFromOTPPreview(el)), [el]);
            (0, L.F0)(ea);
            let {
                dropdownPaymentSources: ei,
                giftCardWallet: er,
                giftCardsEnabled: es,
                dropdownPaymentSourceId: eo,
                handleDropdownPaymentSourceChange: eu,
                giftCardCheckboxProps: ec,
                walletCoversSubtotal: ed,
            } = (0, b.Y0)({
                checkoutPaymentSources: _,
                paymentSourceId: u,
                setPaymentSourceId: c,
                location: "OneTimePurchaseReview",
                isReady: y,
            });
            f()(null != J, "SKU must exist and be fetched."), f()(null != s, "Application must exist.");
            let ep = (0, R.u)(s.id),
                em = (0, S.bG)([w.A], () => w.A.enabled),
                eh = P.M.EEA_COUNTRIES.has(U.A.ipCountryCodeWithFallback),
                eA = o === G.h.PURCHASING || o === G.h.COMPLETED,
                eC = _.find((e) => e.id === u) ?? null,
                e_ = null != eC ? eC.type : null,
                eE = null != Q && Q.length > 0 && (u === k.B || null === e_) && C ? O.fU.SELECT_PAYMENT_METHOD : void 0,
                ey = J.productLine === H.EZt.SOCIAL_LAYER_GAME_ITEM,
                ef = z && !ey,
                eP = a.useMemo(
                    () => ({
                        testModeWarning: ep ? K.intl.string(K.t.OvMyMd) : null,
                        devShelfError:
                            (0, v.n)(s, H.gfo.EMBEDDED) && A === g.$.ERROR ? K.intl.string(K.t.tAmECt) : null,
                        socialLayerGameItemDisclaimer: ey && $ && !X && !W ? K.intl.string(K.t["3pLGHL"]) : null,
                    }),
                    [ep, s, A, ey, $, X, W],
                ),
                eS = a.useMemo(
                    () => ({
                        paymentSources: ei,
                        selectedPaymentSourceId: eo,
                        onChange: eu,
                        onPaymentSourceAdd: i,
                        hidePersonalInformation: em,
                        paymentGatewayRestrictions: Q,
                        defaultPaymentSourceId: ei.find((e) => e.isDefault)?.id,
                    }),
                    [ei, eo, eu, i, em, Q],
                ),
                eT = a.useMemo(
                    () =>
                        J.productLine === H.EZt.COLLECTIBLES
                            ? (0, l.jsx)(V, { paymentSourceType: e_ })
                            : (0, l.jsx)(j.A, {
                                  isActive: t,
                                  ref: n,
                                  children: (0, l.jsx)(N.A, {
                                      onChange: d,
                                      forceShow: !0,
                                      showWithdrawalWaiver: eh,
                                      disabled: eA,
                                      subscriptionPlan: null,
                                      finePrintClassname: Z.i,
                                      purchaseType: m,
                                      isGift: W,
                                      finePrint: (0, l.jsx)(x.A, {
                                          paymentSourceType: e_,
                                          isEmbeddedIAP: p,
                                          purchaseType: m,
                                          productLine: J.productLine,
                                          isGift: W,
                                          applicationName: s.name,
                                          hasAlreadyLinked: !$ || X,
                                      }),
                                  }),
                              }),
                    [t, n, d, eh, eA, m, W, e_, p, J.productLine, s.name, $, X],
                );
            return {
                sku: J,
                application: s,
                giftRecipient: q,
                isGift: W,
                skuPricePreview: el,
                isEmbeddedIAP: p,
                shouldShowPurchaseReviewImage: ef,
                paymentRestrictionBannerType: eE,
                hasCheckoutContextLoaded: y,
                devShelfFetchState: A,
                isStepLoading: !y && null == h,
                purchasePreviewError: h,
                warningAndErrorMessages: eP,
                paymentSourceDropdownProps: eS,
                purchaseTermsAndLegalContent: eT,
                giftCardWallet: er,
                giftCardsEnabled: es,
                giftCardCheckboxProps: ec,
                walletCoversSubtotal: ed,
                disabled: eA,
            };
        })({ hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: i }),
        { currencies: W, displayCurrency: q, setCurrency: z, priceOptions: $ } = (0, E.P5)(),
        X = a.useMemo(
            () =>
                (0, l.jsx)(c.qX, {
                    label: K.intl.string(K.t["/AAR02"]),
                    selectedCurrency: $.currency ?? q,
                    currencies: W,
                    onChange: z,
                }),
            [$.currency, q, W, z],
        ),
        J = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(c.nL, {
                    label: K.intl.string(K.t["u+Cw58"]),
                    giftCardsEnabled: _,
                    giftCardCheckboxProps: y,
                    paymentSourceDropdownProps: { ...p, shouldUseUnifiedCheckoutUI: !0 },
                    showCheckboxAboveDropdown: T,
                    disabled: B,
                }),
                X,
            ],
        }),
        ee = a.useMemo(() => {
            let e = [];
            return (
                null != C.testModeWarning &&
                    e.push({ type: "warning", message: C.testModeWarning, key: "test-mode-warning-notice" }),
                null != C.devShelfError &&
                    e.push({ type: "critical", message: C.devShelfError, key: "dev-shelf-error-notice" }),
                e.length > 0 ? e : null
            );
        }, [C.testModeWarning, C.devShelfError]),
        et = a.useMemo(() => {
            let e = [];
            return (
                null != C.socialLayerGameItemDisclaimer &&
                    e.push({
                        type: "info",
                        message: C.socialLayerGameItemDisclaimer,
                        key: "social-layer-game-item-disclaimer-notice",
                    }),
                e.length > 0 ? e : null
            );
        }, [C.socialLayerGameItemDisclaimer]);
    return h
        ? (0, l.jsx)(u.Ed, {})
        : (0, l.jsx)(Q, {
              application: s,
              giftRecipient: A,
              isGift: d,
              sku: r,
              skuPricePreview: o,
              paymentSelectContent: J,
              legalContent: m,
              upperInlineNoticeProps: ee,
              footerInlineNoticeProps: et,
          });
}

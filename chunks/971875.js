n.d(t, { dL: () => X, Ay: () => et, oO: () => Q }), n(321073);
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
    P = n.n(y),
    f = n(997101),
    S = n(702841),
    T = n(318254),
    x = n(821891),
    N = n(953689),
    g = n(10716),
    I = n(46225),
    v = n(20015),
    b = n(606267),
    M = n(666646),
    L = n(427675),
    R = n(94420),
    j = n(977445),
    O = n(778307),
    D = n(218075),
    w = n(570221),
    U = n(351906),
    k = n(615405),
    Y = n(79387),
    F = n(45938),
    G = n(937008),
    B = n(566980),
    W = n(367921),
    H = n(908419),
    V = n(652215);
function K(e) {
    let { paymentSourceType: t } = e,
        { isGift: n } = (0, G.Pv)(),
        { immediateDelivery: a } = (0, H.U)(),
        i = (0, W.Ro)({
            purchaseType: V.VVm.ONE_TIME,
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
var Z = n(985018),
    q = n(666995),
    z = n(319820),
    $ = n(327105);
n(594387);
let X = (e) => e.name,
    J = {
        [i.R.BUNDLE]: () => Z.intl.string($.default["jM8/71"]),
        [i.R.AVATAR_DECORATION]: () => Z.intl.string($.default.r29Oel),
        [i.R.PROFILE_EFFECT]: () => Z.intl.string($.default.eTYAvF),
        [i.R.NAMEPLATE]: () => Z.intl.string($.default.of9bom),
        [i.R.PROFILE_FRAME]: () => Z.intl.string($.default.HzDn6w),
    },
    Q = (e) => {
        let t = Z.intl.string($.default.iZe9Wy);
        if (null == e);
        else if (e.type in J) return (0, J[e.type])();
        return t;
    },
    ee = (e) => {
        let {
                application: t,
                sku: n,
                skuPricePreview: i,
                paymentSelectContent: c,
                legalContent: E,
                isGift: y,
                giftRecipient: P,
                upperInlineNoticeProps: f,
                footerInlineNoticeProps: S,
            } = e,
            { product: x, isSocialLayerGameItem: N } = (0, z.AO)({ sku: n }),
            { unifiedInvoiceSummaryProps: g, priceText: I } = a.useMemo(
                () =>
                    ((e) => {
                        let { sku: t, skuPricePreview: n } = e,
                            l = [];
                        if (null != n) {
                            let { discount: e, basePrice: a, showTaxes: i } = (0, z.yh)({ skuPricePreview: n });
                            return (
                                l.push({ id: "sku", label: X(t), amount: a }),
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
                            o = Z.intl.string($.default.iZe9Wy);
                        i
                            ? (o = Z.intl.string($.default.qwSlCO))
                            : null != n
                              ? (o = Q(n))
                              : t.productLine === V.EZt.GUILD_PRODUCT && (o = Z.intl.string($.default.hewwdA));
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
                                            return { PriceIcon: r.t, priceTooltip: Z.intl.string($.default.YUNJJa) };
                                        m.D0.THIRDPARTY;
                                    }
                                    return {};
                                })(n)),
                            {
                                ...u,
                                ...d,
                                label: X(t),
                                description: o,
                                graphic: c,
                                target: null != s ? { type: "gift", user: s } : void 0,
                            }
                        );
                    })({ sku: n, product: x, application: t, isSocialLayerGameItem: N, giftRecipient: P }),
                [n, x, t, N, P],
            ),
            [M, L] = a.useMemo(
                () => [Z.intl.string($.default.Zxav97), null != i ? (0, _.$g)(i.amount, i.currency) : void 0],
                [i],
            ),
            R = a.useMemo(() => {
                let e = ((e, t) => {
                    let { isGift: n } = t;
                    if (null == e) return null;
                    let l = e.orbs_reward;
                    if (null != l && l > 0) {
                        let e = n ? Z.t["ZV+aS9"] : Z.t["0StwHe"];
                        return { Icon: T.C, text: Z.intl.format(e, { orbCount: l }) };
                    }
                })(i, { isGift: y });
                return null != e ? (0, l.jsx)(s.J, { ...e }) : null;
            }, [i, y]),
            { setCheckoutHeaderConfigs: j, checkoutHeaderConfigs: O } = (0, o.ck)();
        return (
            a.useEffect(() => {
                null != R && null == O.headerBadgeText && j({ ...O, headerBadgeText: Z.intl.string($.default.Fjpyfj) });
            }, [R, j, O]),
            (0, l.jsx)(u.T_, {
                shouldShowGlobalNotices: !0,
                purchaseItemContent: (0, l.jsx)(p.f7, { ...b, price: I }),
                invoiceSummaryContent: v,
                paymentSelectContent: c,
                legalContent: E,
                promotionalNoticeContent: R,
                upperInlineNoticeProps: f,
                footerInlineNoticeProps: S,
                invoiceTotalDueLabel: M,
                invoiceTotalDueValue: L,
            })
        );
    };
function et(e) {
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
            disabled: W,
        } = ((e) => {
            let { hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: i } = e,
                r = (0, R.t4)((e) => e.selectedSkuId),
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
                T = (0, L.gU)(),
                W = (0, L.RR)(),
                { isGift: H, giftRecipient: z } = (0, G.Pv)(),
                $ = H && (0, F.Ik)(z),
                { fetched: X, hasAlreadyLinked: J } = (0, I.RD)(s);
            P()(null != r, "Expected selectedSkuId");
            let Q = T[r],
                ee = Q?.eligiblePaymentGateways,
                et = W[r],
                en = u ?? Y.B,
                el = _.length > 0,
                ea = null != et ? (et[en] ?? (el ? et[Y.B] : null)) : null,
                ei = a.useMemo(() => (null == ea ? null : w.A.createFromOTPPreview(ea)), [ea]);
            (0, M.F0)(ei, h ?? null);
            let {
                dropdownPaymentSources: er,
                giftCardWallet: es,
                giftCardsEnabled: eo,
                dropdownPaymentSourceId: eu,
                handleDropdownPaymentSourceChange: ec,
                giftCardCheckboxProps: ed,
                walletCoversSubtotal: ep,
            } = (0, b.Y0)({
                checkoutPaymentSources: _,
                paymentSourceId: u,
                setPaymentSourceId: c,
                location: "OneTimePurchaseReview",
                isReady: y,
            });
            P()(null != Q, "SKU must exist and be fetched."), P()(null != s, "Application must exist.");
            let em = (0, j.u)(s.id),
                eh = (0, S.bG)([U.A], () => U.A.enabled),
                eA = f.M.EEA_COUNTRIES.has(k.A.ipCountryCodeWithFallback),
                eC = o === B.h.PURCHASING || o === B.h.COMPLETED,
                e_ = _.find((e) => e.id === u) ?? null,
                eE = null != e_ ? e_.type : null,
                ey =
                    null != ee && ee.length > 0 && (u === Y.B || null === eE) && C
                        ? D.fU.SELECT_PAYMENT_METHOD
                        : void 0,
                eP = Q.productLine === V.EZt.SOCIAL_LAYER_GAME_ITEM,
                ef = $ && !eP,
                eS = a.useMemo(
                    () => ({
                        testModeWarning: em ? Z.intl.string(Z.t.OvMyMd) : null,
                        devShelfError:
                            (0, v.n)(s, V.gfo.EMBEDDED) && A === g.$.ERROR ? Z.intl.string(Z.t.tAmECt) : null,
                        socialLayerGameItemDisclaimer: eP && X && !J && !H ? Z.intl.string(Z.t["3pLGHL"]) : null,
                    }),
                    [em, s, A, eP, X, J, H],
                ),
                eT = a.useMemo(
                    () => ({
                        paymentSources: er,
                        selectedPaymentSourceId: eu,
                        onChange: ec,
                        onPaymentSourceAdd: i,
                        hidePersonalInformation: eh,
                        paymentGatewayRestrictions: ee,
                        defaultPaymentSourceId: er.find((e) => e.isDefault)?.id,
                    }),
                    [er, eu, ec, i, eh, ee],
                ),
                ex = a.useMemo(
                    () =>
                        Q.productLine === V.EZt.COLLECTIBLES
                            ? (0, l.jsx)(K, { paymentSourceType: eE })
                            : (0, l.jsx)(O.A, {
                                  isActive: t,
                                  ref: n,
                                  children: (0, l.jsx)(N.A, {
                                      onChange: d,
                                      forceShow: !0,
                                      showWithdrawalWaiver: eA,
                                      disabled: eC,
                                      subscriptionPlan: null,
                                      finePrintClassname: q.i,
                                      purchaseType: m,
                                      isGift: H,
                                      finePrint: (0, l.jsx)(x.A, {
                                          paymentSourceType: eE,
                                          isEmbeddedIAP: p,
                                          purchaseType: m,
                                          productLine: Q.productLine,
                                          isGift: H,
                                          applicationName: s.name,
                                          hasAlreadyLinked: !X || J,
                                      }),
                                  }),
                              }),
                    [t, n, d, eA, eC, m, H, eE, p, Q.productLine, s.name, X, J],
                );
            return {
                sku: Q,
                application: s,
                giftRecipient: z,
                isGift: H,
                skuPricePreview: ea,
                isEmbeddedIAP: p,
                shouldShowPurchaseReviewImage: ef,
                paymentRestrictionBannerType: ey,
                hasCheckoutContextLoaded: y,
                devShelfFetchState: A,
                isStepLoading: !y && null == h,
                purchasePreviewError: h,
                warningAndErrorMessages: eS,
                paymentSourceDropdownProps: eT,
                purchaseTermsAndLegalContent: ex,
                giftCardWallet: es,
                giftCardsEnabled: eo,
                giftCardCheckboxProps: ed,
                walletCoversSubtotal: ep,
                disabled: eC,
            };
        })({ hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: i }),
        { currencies: H, displayCurrency: z, setCurrency: $, priceOptions: X } = (0, E.P5)(),
        J = a.useMemo(
            () =>
                (0, l.jsx)(c.qX, {
                    label: Z.intl.string(Z.t["/AAR02"]),
                    selectedCurrency: X.currency ?? z,
                    currencies: H,
                    onChange: $,
                }),
            [X.currency, z, H, $],
        ),
        Q = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(c.nL, {
                    label: Z.intl.string(Z.t["u+Cw58"]),
                    giftCardsEnabled: _,
                    giftCardCheckboxProps: y,
                    paymentSourceDropdownProps: { ...p, shouldUseUnifiedCheckoutUI: !0 },
                    showCheckboxAboveDropdown: T,
                    disabled: W,
                }),
                J,
            ],
        }),
        et = a.useMemo(() => {
            let e = [];
            return (
                null != C.testModeWarning &&
                    e.push({ type: "warning", message: C.testModeWarning, key: "test-mode-warning-notice" }),
                null != C.devShelfError &&
                    e.push({ type: "critical", message: C.devShelfError, key: "dev-shelf-error-notice" }),
                e.length > 0 ? e : null
            );
        }, [C.testModeWarning, C.devShelfError]),
        en = a.useMemo(() => {
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
        : (0, l.jsx)(ee, {
              application: s,
              giftRecipient: A,
              isGift: d,
              sku: r,
              skuPricePreview: o,
              paymentSelectContent: Q,
              legalContent: m,
              upperInlineNoticeProps: et,
              footerInlineNoticeProps: en,
          });
}

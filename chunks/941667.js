n.d(t, { P: () => O, X: () => L });
var l = n(627968),
    i = n(64700),
    a = n(284009),
    r = n.n(a),
    s = n(997101),
    o = n(417597),
    u = n(318254),
    c = n(821891),
    d = n(953689),
    p = n(10716),
    m = n(362490),
    h = n(20015),
    A = n(918022),
    _ = n(427675),
    C = n(94420),
    E = n(977445),
    y = n(778307),
    f = n(218075),
    P = n(570221),
    S = n(351906),
    x = n(615405),
    T = n(79387),
    N = n(45938),
    g = n(937008),
    I = n(156312),
    v = n(566980),
    b = n(907927),
    R = n(652215),
    M = n(985018),
    j = n(666995);
let L = (e) => {
        let { hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: a } = e,
            u = (0, C.t4)((e) => e.selectedSkuId),
            {
                application: L,
                purchaseState: O,
                paymentSourceId: D,
                setPaymentSourceId: U,
                setHasAcceptedTerms: w,
                isEmbeddedIAP: k,
                purchaseType: F,
                purchasePreviewError: G,
                devShelfFetchState: B,
                hasPaymentSources: Y,
                checkoutPaymentSources: W,
                hasCheckoutContextLoaded: V,
            } = (0, I.P5)(),
            H = (0, _.gU)(),
            K = (0, _.RR)(),
            { isGift: Z, giftRecipient: q } = (0, g.Pv)(),
            z = Z && (0, N.Ik)(q),
            { fetched: $, hasAlreadyLinked: X } = (0, m.RD)(L);
        r()(null != u, "Expected selectedSkuId");
        let J = H[u],
            Q = J?.eligiblePaymentGateways,
            ee = K[u],
            et = D ?? T.B,
            en = W.length > 0,
            el = null != ee ? (ee[et] ?? (en ? ee[T.B] : null)) : null,
            ei = i.useMemo(() => (null == el ? null : P.A.createFromOTPPreview(el)), [el]);
        (0, C.F0)(ei);
        let {
            dropdownPaymentSources: ea,
            giftCardWallet: er,
            giftCardsEnabled: es,
            dropdownPaymentSourceId: eo,
            handleDropdownPaymentSourceChange: eu,
            giftCardCheckboxProps: ec,
        } = (0, A.Y)({
            checkoutPaymentSources: W,
            paymentSourceId: D,
            setPaymentSourceId: U,
            location: "OneTimePurchaseReview",
            isReady: V,
            itemAmount: el?.amount,
        });
        r()(null != J, "SKU must exist and be fetched."), r()(null != L, "Application must exist.");
        let ed = (0, E.u)(L.id),
            ep = (0, o.bG)([S.A], () => S.A.enabled),
            em = s.M.EEA_COUNTRIES.has(x.A.ipCountryCodeWithFallback),
            eh = O === v.h.PURCHASING || O === v.h.COMPLETED,
            eA = W.find((e) => e.id === D) ?? null,
            e_ = null != eA ? eA.type : null,
            eC = null != Q && Q.length > 0 && (D === T.B || null === e_) && Y ? f.fU.SELECT_PAYMENT_METHOD : void 0,
            eE = J.productLine === R.EZt.SOCIAL_LAYER_GAME_ITEM,
            ey = z && !eE,
            ef = i.useMemo(
                () => ({
                    testModeWarning: ed ? M.intl.string(M.t.OvMyMd) : null,
                    devShelfError: (0, h.n)(L, R.gfo.EMBEDDED) && B === p.$.ERROR ? M.intl.string(M.t.tAmECt) : null,
                    socialLayerGameItemDisclaimer: eE && $ && !X && !Z ? M.intl.string(M.t["3pLGHL"]) : null,
                }),
                [ed, L, B, eE, $, X, Z],
            ),
            eP = i.useMemo(
                () => ({
                    paymentSources: ea,
                    selectedPaymentSourceId: eo,
                    onChange: eu,
                    onPaymentSourceAdd: a,
                    hidePersonalInformation: ep,
                    paymentGatewayRestrictions: Q,
                    defaultPaymentSourceId: ea.find((e) => e.isDefault)?.id,
                }),
                [ea, eo, eu, a, ep, Q],
            ),
            eS = i.useMemo(
                () =>
                    J.productLine === R.EZt.COLLECTIBLES
                        ? (0, l.jsx)(b.f, { paymentSourceType: e_ })
                        : (0, l.jsx)(y.A, {
                              isActive: t,
                              ref: n,
                              children: (0, l.jsx)(d.A, {
                                  onChange: w,
                                  forceShow: !0,
                                  showWithdrawalWaiver: em,
                                  disabled: eh,
                                  subscriptionPlan: null,
                                  finePrintClassname: j.i,
                                  purchaseType: F,
                                  isGift: Z,
                                  finePrint: (0, l.jsx)(c.A, {
                                      paymentSourceType: e_,
                                      isEmbeddedIAP: k,
                                      purchaseType: F,
                                      productLine: J.productLine,
                                      isGift: Z,
                                      applicationName: L.name,
                                      hasAlreadyLinked: !$ || X,
                                  }),
                              }),
                          }),
                [t, n, w, em, eh, F, Z, e_, k, J.productLine, L.name, $, X],
            );
        return {
            sku: J,
            application: L,
            giftRecipient: q,
            isGift: Z,
            skuPricePreview: el,
            isEmbeddedIAP: k,
            shouldShowPurchaseReviewImage: ey,
            paymentRestrictionBannerType: eC,
            hasCheckoutContextLoaded: V,
            devShelfFetchState: B,
            isStepLoading: !V && null == G,
            purchasePreviewError: G,
            warningAndErrorMessages: ef,
            paymentSourceDropdownProps: eP,
            purchaseTermsAndLegalContent: eS,
            giftCardWallet: er,
            giftCardsEnabled: es,
            giftCardCheckboxProps: ec,
            disabled: eh,
        };
    },
    O = (e, t) => {
        let { isGift: n } = t;
        if (null == e) return null;
        let l = e.orbs_reward;
        if (null != l && l > 0) {
            let e = n ? M.t["ZV+aS9"] : M.t["0StwHe"];
            return { Icon: u.C, text: M.intl.format(e, { orbCount: l }) };
        }
    };

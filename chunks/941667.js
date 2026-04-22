"use strict";
n.d(t, { P: () => P, X: () => M });
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(997101),
    l = n(417597),
    u = n(397927),
    c = n(821891),
    d = n(953689),
    _ = n(10716),
    f = n(362490),
    p = n(20015),
    h = n(918022),
    m = n(427675),
    E = n(94420),
    g = n(977445),
    A = n(778307),
    I = n(218075),
    T = n(570221),
    S = n(351906),
    y = n(615405),
    v = n(79387),
    N = n(45938),
    C = n(937008),
    R = n(156312),
    O = n(566980),
    b = n(907927),
    D = n(652215),
    L = n(985018),
    w = n(666995);
let M = (e) => {
        let { hasLegalTermsFlash: t, legalTermsNodeRef: n, handlePaymentSourceAdd: s } = e,
            u = (0, E.t4)((e) => e.selectedSkuId),
            {
                application: M,
                purchaseState: P,
                paymentSourceId: x,
                setPaymentSourceId: k,
                setHasAcceptedTerms: U,
                isEmbeddedIAP: G,
                purchaseType: F,
                purchasePreviewError: V,
                devShelfFetchState: B,
                hasPaymentSources: H,
                checkoutPaymentSources: j,
                hasCheckoutContextLoaded: Y,
            } = (0, R.P5)(),
            W = (0, m.gU)(),
            K = (0, m.RR)(),
            { isGift: $, giftRecipient: z } = (0, C.Pv)(),
            q = $ && (0, N.Ik)(z),
            { fetched: Z, hasAlreadyLinked: X } = (0, f.RD)(M);
        a()(null != u, "Expected selectedSkuId");
        let Q = W[u],
            J = Q?.eligiblePaymentGateways,
            ee = K[u],
            et = x ?? v.B,
            en = j.length > 0,
            er = null != ee ? (ee[et] ?? (en ? ee[v.B] : null)) : null,
            ei = i.useMemo(() => (null == er ? null : T.A.createFromOTPPreview(er)), [er]);
        (0, E.F0)(ei);
        let {
            dropdownPaymentSources: es,
            giftCardWallet: ea,
            giftCardsEnabled: eo,
            dropdownPaymentSourceId: el,
            handleDropdownPaymentSourceChange: eu,
            giftCardCheckboxProps: ec,
        } = (0, h.Y)({
            checkoutPaymentSources: j,
            paymentSourceId: x,
            setPaymentSourceId: k,
            location: "OneTimePurchaseReview",
            isReady: Y,
            itemAmount: er?.amount,
        });
        a()(null != Q, "SKU must exist and be fetched."), a()(null != M, "Application must exist.");
        let ed = (0, g.u)(M.id),
            e_ = (0, l.bG)([S.A], () => S.A.enabled),
            ef = o.M.EEA_COUNTRIES.has(y.A.ipCountryCodeWithFallback),
            ep = P === O.h.PURCHASING || P === O.h.COMPLETED,
            eh = j.find((e) => e.id === x) ?? null,
            em = null != eh ? eh.type : null,
            eE = null != J && J.length > 0 && (x === v.B || null === em) && H ? I.fU.SELECT_PAYMENT_METHOD : void 0,
            eg = Q.productLine === D.EZt.SOCIAL_LAYER_GAME_ITEM,
            eA = q && !eg,
            eI = i.useMemo(
                () => ({
                    testModeWarning: ed ? L.intl.string(L.t.OvMyMd) : null,
                    devShelfError: (0, p.n)(M, D.gfo.EMBEDDED) && B === _.$.ERROR ? L.intl.string(L.t.tAmECt) : null,
                    socialLayerGameItemDisclaimer: eg && Z && !X && !$ ? L.intl.string(L.t["3pLGHL"]) : null,
                }),
                [ed, M, B, eg, Z, X, $],
            ),
            eT = i.useMemo(
                () => ({
                    paymentSources: es,
                    selectedPaymentSourceId: el,
                    onChange: eu,
                    onPaymentSourceAdd: s,
                    hidePersonalInformation: e_,
                    paymentGatewayRestrictions: J,
                    defaultPaymentSourceId: es.find((e) => e.isDefault)?.id,
                }),
                [es, el, eu, s, e_, J],
            ),
            eS = i.useMemo(
                () =>
                    Q.productLine === D.EZt.COLLECTIBLES
                        ? (0, r.jsx)(b.f, { paymentSourceType: em })
                        : (0, r.jsx)(A.A, {
                              isActive: t,
                              ref: n,
                              children: (0, r.jsx)(d.A, {
                                  onChange: U,
                                  forceShow: !0,
                                  showWithdrawalWaiver: ef,
                                  disabled: ep,
                                  subscriptionPlan: null,
                                  finePrintClassname: w.i,
                                  purchaseType: F,
                                  isGift: $,
                                  finePrint: (0, r.jsx)(c.A, {
                                      paymentSourceType: em,
                                      isEmbeddedIAP: G,
                                      purchaseType: F,
                                      productLine: Q.productLine,
                                      isGift: $,
                                      applicationName: M.name,
                                      hasAlreadyLinked: !Z || X,
                                  }),
                              }),
                          }),
                [t, n, U, ef, ep, F, $, em, G, Q.productLine, M.name, Z, X],
            );
        return {
            sku: Q,
            application: M,
            giftRecipient: z,
            isGift: $,
            skuPricePreview: er,
            isEmbeddedIAP: G,
            shouldShowPurchaseReviewImage: eA,
            paymentRestrictionBannerType: eE,
            hasCheckoutContextLoaded: Y,
            devShelfFetchState: B,
            isStepLoading: !Y && null == V,
            purchasePreviewError: V,
            warningAndErrorMessages: eI,
            paymentSourceDropdownProps: eT,
            purchaseTermsAndLegalContent: eS,
            giftCardWallet: ea,
            giftCardsEnabled: eo,
            giftCardCheckboxProps: ec,
            disabled: ep,
        };
    },
    P = (e, t) => {
        let { isGift: n } = t;
        if (null == e) return null;
        let r = e.orbs_reward;
        if (null != r && r > 0) {
            let e = n ? L.t["ZV+aS9"] : L.t["0StwHe"];
            return { Icon: u.Cp8, text: L.intl.format(e, { orbCount: r }) };
        }
    };

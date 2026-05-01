"use strict";
n.d(t, { P5: () => eo, Qv: () => ea, PaymentContextProvider: () => eu });
var i = n(627968),
    r = n(64700),
    s = n(342393),
    a = n(989349),
    o = n.n(a),
    l = n(835245),
    u = n(17928),
    c = n(444927),
    d = n(10716),
    _ = n(795816),
    f = n(933958),
    h = n(688810),
    p = n(627363),
    E = n(20015),
    m = n(86379),
    g = n(531260),
    A = n(885180),
    I = n(626584),
    T = n(174459),
    S = n(38405),
    N = n(652215);
let y = new I.A("CheckoutErrorBoundary.tsx");
class C extends r.PureComponent {
    state = { error: null, info: null };
    componentDidCatch(e, t) {
        let {
                loadId: n,
                selectedSkuId: i,
                selectedPlanId: r,
                isGift: s,
                purchaseType: a,
                locationStack: o,
                additionalAnalyticsData: l,
            } = this.props,
            u = this.props.shouldRethrowError,
            c = { loadId: n, selectedSkuId: i, selectedPlanId: r, isGift: s, purchaseType: a, locationStack: o },
            d = {
                tags: {
                    app_context: "billing",
                    checkout_error: "true",
                    billing_context: "checkout",
                    ...(u ? { crashed: "true" } : {}),
                },
                extra: { ...c, ...(l ?? {}), ...(t ?? {}) },
            };
        S.A.captureException(e, d), y.error("Checkout error occurred:", { error: e, additionalErrorContext: c });
        let _ = "string" == typeof e ? e : e.message;
        if (
            (T.default.track(N.HAw.PAYMENT_FLOW_ERROR, {
                load_id: n,
                crashed: u,
                error_message: _,
                location_stack: o ?? [],
                ...l,
            }),
            this.setState({ error: e, info: t }),
            null != this.props.onUnhandledError && this.props.onUnhandledError(e, t, d),
            this.props.shouldRethrowError)
        )
            throw e;
    }
    render() {
        return null != this.state.error
            ? null != this.props.renderCustomErrorComponent
                ? this.props.renderCustomErrorComponent(this.state.error, this.state.info)
                : null
            : this.props.children;
    }
}
var v = n(94420),
    O = n(181447),
    R = n(881489),
    b = n(573359),
    D = n(422936),
    L = n(234419),
    w = n(885386),
    M = n(293700),
    P = n(67480),
    x = n(328968),
    U = n(786300),
    k = n(927578),
    G = n(795791),
    F = n(211287),
    V = n(158317),
    B = n(123633),
    H = n(624210);
let j = (0, n(945810).mj)({
    name: "2026-03-orders-dual-write",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var Y = n(818348),
    W = n(853398),
    K = n(753390),
    z = n(166403),
    $ = n(369827),
    q = n(251913),
    Z = n(825755),
    X = n(153084),
    Q = n(166532),
    J = n(566980),
    ee = n(997101),
    et = n(615405),
    en = n(252293),
    ei = n(615310),
    er = n(87952),
    es = n(788868);
let [ea, eo, el] = (0, U.A)();
function eu(e) {
    let { stepConfigs: t, breadcrumbs: n, ...r } = e;
    return (0, i.jsx)(ei.mz, {
        stepConfigs: t,
        breadcrumbs: n,
        children: (0, i.jsx)(O.P, { children: (0, i.jsx)(ec, { ...r }) }),
    });
}
function ec(e) {
    var t;
    let n,
        a,
        I,
        T,
        y,
        O,
        U,
        eo,
        el,
        eu,
        ec,
        ed,
        e_,
        {
            loadId: ef,
            discoverySessionId: eh,
            activeSubscription: ep,
            unifiedCheckoutFlow: eE,
            shouldCrashOnUnhandledError: em = !0,
            onUnhandledError: eg,
            skuIDs: eA,
            isGift: eI = !1,
            children: eT,
            defaultPlanId: eS,
            purchaseType: eN = N.VVm.SUBSCRIPTION,
            applicationId: ey,
            referralCode: eC,
            paymentGateway: ev,
            excludeSubscriptionPlansBySKU: eO = !1,
            excludeSKUPurchasePreviews: eR = !1,
            wasTier2PremiumBeforePurchase: eb = !1,
            referralTrialOfferId: eD,
        } = e,
        eL = (0, er.A)(),
        ew = (0, m.Hp)(),
        eM =
            ((n = (0, u.bG)([z.A], () => z.A.hasFetchedSubscriptions())),
            r.useEffect(() => {
                n || (0, K.hP)();
            }, [n]),
            n),
        eP = eA[0],
        ex = (0, u.bG)([P.A], () => P.A.get(eP), [eP]),
        eU = ex?.eligiblePaymentGateways,
        {
            paymentSources: ek,
            hasPaymentSources: eG,
            paymentSourceId: eF,
            setPaymentSourceId: eV,
            hasFetchedPaymentSources: eB,
        } = (0, $.A)({ isGift: eI, activeSubscription: ep, eligiblePaymentGateways: eU }),
        eH = r.useRef(eG),
        ej = (0, v.t4)((e) => {
            let { checkoutInvoicePreview: t } = e;
            return t;
        }),
        {
            hasFetchedSubscriptionPlans: eY,
            priceOptions: eW,
            setCurrency: eK,
            currencyLoading: ez,
            currencies: e$,
            displayCurrency: eq,
        } = (0, W.A)({
            activeSubscription: ep,
            skuIDs: eA,
            paymentSourceId: eF,
            isGift: eI,
            excludeSubscriptionPlansBySKU: eO,
            checkoutInvoicePreview: ej,
        }),
        eZ = (function () {
            let [e, t] = r.useState(!1),
                [n, i] = r.useState(!1),
                s = (0, u.bG)([et.A], () => ee.M.EEA_COUNTRIES.has(et.A.ipCountryCodeWithFallback));
            return {
                hasViewedPurchaseTerms: e,
                setHasViewedPurchaseTerms: t,
                showWithdrawalWaiver: s,
                hasAcceptedWithdrawalWaiver: !s || n,
                setHasAcceptedWithdrawalWaiver: i,
            };
        })();
    !(function (e) {
        let { purchaseState: t, setPurchaseState: n } = (0, v.t4)((e) => ({
            purchaseState: e.purchaseState,
            setPurchaseState: e.setPurchaseState,
        }));
        r.useEffect(() => {
            null != e && e !== Q.pn.REVIEW && t !== J.h.WAITING && t !== J.h.COMPLETED && n(J.h.WAITING);
        }, [e, t, n]);
    })((0, ei.bB)());
    let { paymentError: eX, paymentAuthenticationState: eQ } = (function () {
            let e = (0, u.bG)([Z.A], () => Z.A.error),
                [t, n] = (0, u.yK)([X.A], () => [X.A.error, X.A.isAwaitingAuthentication]);
            return {
                paymentError: null != t ? t : e,
                paymentAuthenticationState: n ? q.oc.PENDING : null != t ? q.oc.ERROR : q.oc.NONE,
            };
        })(),
        {
            purchaseError: eJ,
            purchaseErrorBlockRef: e0,
            setPurchaseError: e1,
        } = (function () {
            let [e, t] = r.useState(null),
                n = r.useRef(null);
            return (
                r.useEffect(() => {
                    null != e && null != n.current && n.current.scrollIntoView({ behavior: "smooth" });
                }, [e]),
                { purchaseError: e, setPurchaseError: t, purchaseErrorBlockRef: n }
            );
        })(),
        e2 = (0, c.A)(() => {
            let e = ef ?? (0, l.A)();
            return (
                S.A.addBreadcrumb({ message: `Checkout session ID: ${e}` }),
                { loadId: e, discoverySessionId: eh, startTime: Date.now() }
            );
        }),
        e3 = (0, v.t4)((e) => e.selectedSkuId),
        e6 = (0, v.t4)((e) => e.selectedPlanId),
        [e4, e5] = (0, u.yK)([M.A], () => [M.A.purchaseTokenAuthState, M.A.purchaseTokenHash]),
        [e7, e8] = r.useState(null),
        [e9, te] = r.useState(null),
        [tt, tn] = r.useState(null),
        [ti, tr] = r.useState(null),
        [ts, ta] = r.useState(null),
        [to, tl] = r.useState(void 0),
        [tu, tc] = r.useState([]),
        td = r.useMemo(() => null == e6 || (0, k.ys)(e6), [e6]),
        t_ = r.useRef(null != ep ? ep.planId : null);
    r.useEffect(() => {
        null == t_.current && null != ep && (t_.current = ep.planId);
    }, [ep]);
    let { endsAt: tf } = (0, g.A)({ forceFetch: !1, excludeReverseTrial: !0 }),
        th = r.useRef(tf.isSame(o()(0)) ? null : tf);
    r.useEffect(() => {
        null != th.current || tf.isSame(o()(0)) || (th.current = tf);
    }, [tf]);
    let tp = r.useMemo(() => ({ paymentSourceId: eF, paymentGateway: ev, loadId: ef }), [eF, ev, ef]);
    (a = (0, u.bG)([B.A], () => B.A.currentOrder)),
        (I = (0, u.bG)([B.A], () => B.A.currentOrderId)),
        (T = (0, u.bG)([B.A], () => B.A.isCreatingOrder)),
        (y = j.useConfig({ location: "payment_modal" }).enabled),
        (O = F.A.useConfig({ location: "payment_modal" }).enabled),
        (eo = (U = tp.paymentGateway === Y.kM.VIRTUAL_CURRENCY) ? O : y),
        (el = (0, r.useRef)(null)),
        (eu = (0, r.useRef)("")),
        (ec = (0, r.useRef)(!1)),
        (ed = (0, r.useRef)(!1)),
        (e_ = (0, r.useRef)(null)),
        (0, r.useEffect)(() => {
            if (!y || null == I || null == tp.paymentSourceId) return;
            let e = tp.paymentSourceId;
            async function t() {
                var t;
                let n = a ?? (await (0, V.r)(I)),
                    i = n?.billing_facet;
                if (i?.payment_source_id === tp.paymentSourceId) {
                    (el.current = I), (eu.current = e);
                    return;
                }
                (t = n),
                    t?.billing_facet?.payment_gateway !== Y.kM.VIRTUAL_CURRENCY &&
                        (await (0, H.iY)({ orderId: I, updates: tp }), (el.current = I), (eu.current = e));
            }
            (el.current !== I || eu.current !== e) && t();
        }, [I, a, tp.paymentSourceId, y]),
        (0, r.useEffect)(() => {
            let e = e_.current;
            (e_.current = I),
                null == I && null != e
                    ? ((ed.current = !0), (el.current = null), (eu.current = ""), (ec.current = !1))
                    : null != I && (ed.current = !1);
        }, [I]),
        (0, r.useEffect)(() => {
            if (null != I) {
                (ec.current = !1), (ed.current = !1);
                return;
            }
            !ed.current &&
                (!eo ||
                    T ||
                    ec.current ||
                    null == eP ||
                    (null == tp.paymentSourceId && null == tp.paymentGateway) ||
                    ((ec.current = !0),
                    (0, H.fS)({
                        skuId: eP,
                        paymentSourceId: U ? void 0 : (tp.paymentSourceId ?? void 0),
                        paymentGateway: tp.paymentGateway,
                        loadId: tp.loadId,
                    })));
        }, [I, T, eP, tp, eo, U]);
    let tE = r.useMemo(() => eA.filter((e) => !es.oz.includes(e)), [JSON.stringify(eA)]),
        { previewErrorsById: tm } = (0, en.A)({
            applicationId: ey ?? es.tv,
            skuIDs: tE,
            currentPaymentSourceId: eF,
            isGift: eI,
            excludeSKUPurchasePreviews: eR,
            loadId: e2.loadId,
            currency: eW.loaded ? eW.currency : void 0,
        }),
        tg = null != e3 ? tm[e3] : null,
        [tA, tI] = r.useState(tg),
        { data: tT } = (0, p.YY)(ey),
        tS = w.Q_.useSetting(),
        tN = (0, u.bG)([d.A], () => d.A.getFetchState());
    r.useEffect(() => {
        null != tT && (0, E.n)(tT, N.gfo.EMBEDDED) && tS && null == tN && (0, _.SE)();
    }, [tT, tS, tN]);
    let ty = null != tT && (0, E.n)(tT, N.gfo.EMBEDDED) && (0, E.n)(tT, N.gfo.EMBEDDED_IAP),
        tC = (0, u.bG)([f.Ay], () =>
            Array.from(f.Ay.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === ey;
            }),
        ),
        tv = tC?.compositeInstanceId,
        tO = (0, u.bG)([x.A], () => (null != e3 ? x.A.getForSKU(e3) : null), [e3]),
        tR = (0, R.ds)() && !eI,
        { isDisplayingWowMomentConfirmation: tb } = (0, u.cf)([b.A], () => ({
            isDisplayingWowMomentConfirmation: b.A.isDisplayingWowMomentConfirmation,
        })),
        { enabled: tD } = ((t = { location: "PaymentContext" }), { enabled: A.A.getConfig(t).enabled }),
        tL = (0, G.$w)(),
        tw = r.useMemo(() => null != e6 && e6 === es.gD.PREMIUM_GROUP_MONTH, [e6]),
        tM = (0, L.V)(eD ?? void 0),
        tP = !tw && !eI && null != tM && null != e3 && es.TP[tM.trial_id].skus.includes(e3),
        tx = (0, D.O)(),
        tU = tx?.discount?.plan_ids.some((e) => es.hd[e].skuId === e3),
        tk = !!(!tw && !eI && null != tx && null != e3 && tU),
        tG = null != eF && null != ek[eF] ? ek[eF]?.type : null,
        tF = r.useMemo(
            () => ({ payment_source_id: eF, payment_gateway: ev, payment_source_type: tG, checkout_flow: eE }),
            [eF, ev, tG, eE],
        ),
        tV = (0, h.Db)();
    return (0, i.jsx)(ea.Provider, {
        value: {
            stripe: eL,
            unifiedCheckoutFlow: eE,
            paymentElementsEnabled: tD,
            contextMetadata: e2,
            blockedPayments: ew,
            activeSubscription: ep,
            hasFetchedSubscriptions: eM,
            hasFetchedSubscriptionPlans: eY,
            updatedSubscription: ti,
            setUpdatedSubscription: tr,
            subscriptionMetadataRequest: ts,
            setSubscriptionMetadataRequest: ta,
            hasFetchedPaymentSources: eB,
            paymentSources: ek,
            hasPaymentSources: eG,
            paymentSourceId: eF,
            setPaymentSourceId: eV,
            priceOptions: eW,
            setCurrency: eK,
            currencyLoading: ez,
            currencies: e$,
            displayCurrency: eq,
            ...eZ,
            paymentAuthenticationState: eQ,
            paymentError: eX,
            purchaseError: eJ,
            setPurchaseError: e1,
            purchasePreviewError: tA,
            setPurchasePreviewError: tI,
            purchaseErrorBlockRef: e0,
            purchaseTokenAuthState: e4,
            purchaseTokenHash: e5,
            bodyNode: e7,
            setBodyNode: e8,
            footerNode: e9,
            setFooterNode: te,
            modalOverlayNode: tt,
            setModalOverlayNode: tn,
            selectedStoreListing: tO,
            readySlideId: to,
            setReadySlideId: tl,
            defaultPlanId: eS,
            isPremium: td,
            isGift: eI,
            startingFractionalPremiumEndsAtRef: th,
            startedPaymentFlowWithPaymentSourcesRef: eH,
            startingPremiumSubscriptionPlanIdRef: t_,
            defaultFetchableSkuIds: tE,
            application: tT,
            purchaseType: eN,
            isEmbeddedIAP: ty,
            activitySessionId: tv,
            devShelfFetchState: tN,
            appliedUserDiscounts: tu,
            setAppliedUserDiscounts: tc,
            referralCode: eC,
            inReverseTrial: tR,
            enablePremiumBrandRefresh: td,
            isDisplayingWowMomentConfirmation: tb,
            wasTier2PremiumBeforePurchase: eb,
            customCheckoutFlow: tL,
            isPremiumGroupPurchase: tw,
            isEligibleForTrial: tP,
            isEligibleForDiscount: tk,
            userTrialOffer: tM,
            referralTrialOfferId: eD,
            discountOffer: tx,
        },
        children: (0, i.jsx)(s.Elements, {
            options: N.XL8,
            stripe: eL,
            children: (0, i.jsx)(C, {
                shouldRethrowError: em,
                locationStack: tV,
                onUnhandledError: eg,
                loadId: e2.loadId,
                selectedSkuId: e3 ?? null,
                selectedPlanId: e6 ?? null,
                isGift: eI,
                purchaseType: eN,
                additionalAnalyticsData: tF,
                children: eT,
            }),
        }),
    });
}

"use strict";
n.d(t, { P5: () => ea, Qv: () => es, PaymentContextProvider: () => el });
var i = n(627968),
    r = n(64700),
    s = n(342393),
    a = n(989349),
    o = n.n(a),
    l = n(17928),
    u = n(10716),
    c = n(795816),
    d = n(933958),
    _ = n(688810),
    f = n(627363),
    h = n(20015),
    p = n(86379),
    E = n(531260),
    m = n(885180),
    g = n(120700),
    A = n(626584),
    I = n(174459),
    T = n(38405),
    S = n(652215);
let N = new A.A("CheckoutErrorBoundary.tsx");
class y extends r.PureComponent {
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
        T.A.captureException(e, d), N.error("Checkout error occurred:", { error: e, additionalErrorContext: c });
        let _ = "string" == typeof e ? e : e.message;
        if (
            (I.default.track(S.HAw.PAYMENT_FLOW_ERROR, {
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
var C = n(426398),
    v = n(566980),
    O = n(830382),
    R = n(543767),
    b = n(570221),
    D = n(666646),
    L = n(94420);
let w = () => {
    var e;
    let t,
        n,
        i,
        s,
        {
            selectedSkuId: a,
            purchaseState: o,
            paymentSourceId: l,
        } = (0, L.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            paymentSourceId: e.paymentSourceId,
        })),
        { setPurchasePreviewError: u, applicationId: c, isGift: d, priceOptions: _ } = ea(),
        f = o === v.h.PURCHASING || o === v.h.COMPLETED,
        [h, p] =
            ((e = r.useMemo(
                () => ({
                    applicationId: c,
                    skuId: a,
                    paymentSourceId: l,
                    isGift: d,
                    currency: _.loaded ? _.currency : void 0,
                    preventFetch: f,
                }),
                [c, a, l, d, _, f],
            )),
            (t = (0, r.useRef)(e)),
            (n = (0, r.useRef)(!1)),
            (0, r.useEffect)(() => {
                t.current = e;
            }),
            (i = JSON.stringify(e)),
            (s = (0, r.useCallback)(async () => {
                let e = t.current;
                if (null == e.skuId) return null;
                let i = {
                        applicationId: e.applicationId,
                        skuId: e.skuId,
                        paymentSourceId: e.paymentSourceId,
                        isGift: e.isGift,
                        currency: e.currency,
                    },
                    r = n.current ? i : { ...i, paymentSourceId: null };
                n.current = !0;
                let s = await (0, O.NY)(r);
                return null != s ? b.A.createFromOTPPreview(s) : null;
            }, [i])),
            (0, R.$n)(e, s, void 0));
    return (
        (0, D.F0)(h, p),
        r.useEffect(() => {
            u(p);
        }, [p, u]),
        null
    );
};
var M = n(113214),
    P = n(881489),
    x = n(573359),
    U = n(422936),
    k = n(234419),
    G = n(885386),
    F = n(71319),
    V = n(328968),
    B = n(786300),
    H = n(428262),
    j = n(795791),
    Y = n(853398),
    W = n(120992),
    K = n(753390),
    z = n(166403),
    $ = n(251913),
    q = n(825755),
    Z = n(153084),
    X = n(997101),
    Q = n(615405),
    J = n(615310),
    ee = n(87952),
    et = n(624210),
    en = n(573582),
    ei = n(818348),
    er = n(788868);
let [es, ea, eo] = (0, B.A)();
function el(e) {
    let { stepConfigs: t, breadcrumbs: n, loadId: s, discoverySessionId: a, ...o } = e,
        l = r.useMemo(
            () => ({
                skuIds: o.skuIDs,
                isGift: o.isGift ?? !1,
                referralTrialOfferId: o.referralTrialOfferId ?? null,
                activeSubscription: o.activeSubscription ?? null,
            }),
            [JSON.stringify(o.skuIDs), o.isGift, o.referralTrialOfferId, o.activeSubscription],
        );
    return (0, i.jsx)(J.mz, {
        stepConfigs: t,
        breadcrumbs: n,
        children: (0, i.jsx)(M.P, {
            loadId: s,
            discoverySessionId: a,
            checkoutInitParameters: l,
            children: (0, i.jsx)(eu, { ...o }),
        }),
    });
}
function eu(e) {
    var t;
    let n,
        {
            activeSubscription: a,
            unifiedCheckoutFlow: A,
            shouldCrashOnUnhandledError: I = !0,
            onUnhandledError: T,
            skuIDs: N,
            isGift: v = !1,
            children: O,
            defaultPlanId: R,
            purchaseType: b = S.VVm.SUBSCRIPTION,
            applicationId: D,
            referralCode: M,
            paymentGateway: B,
            excludeSubscriptionPlansBySKU: J = !1,
            wasTier2PremiumBeforePurchase: ea = !1,
            referralTrialOfferId: eo,
        } = e,
        el = (0, ee.A)(),
        eu = (0, p.Hp)(),
        ec =
            ((n = (0, l.bG)([z.A], () => z.A.hasFetchedSubscriptions())),
            r.useEffect(() => {
                n || (0, K.hP)();
            }, [n]),
            n),
        { paymentSources: ed, hasPaymentSources: e_ } = (0, C.jm)(),
        ef = r.useRef(e_),
        {
            contextMetadata: eh,
            checkoutInvoicePreview: ep,
            selectedSkuId: eE,
            selectedPlanId: em,
            paymentSourceId: eg,
        } = (0, L.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            selectedSkuId: e.selectedSkuId,
            selectedPlanId: e.selectedPlanId,
            paymentSourceId: e.paymentSourceId,
        })),
        {
            hasFetchedSubscriptionPlans: eA,
            priceOptions: eI,
            setCurrency: eT,
            currencyLoading: eS,
            currencies: eN,
            displayCurrency: ey,
        } = (0, Y.A)({
            activeSubscription: a,
            skuIDs: N,
            paymentSourceId: eg,
            isGift: v,
            excludeSubscriptionPlansBySKU: J,
            checkoutInvoicePreview: ep,
        }),
        eC = (function () {
            let [e, t] = r.useState(!1),
                [n, i] = r.useState(!1),
                s = (0, l.bG)([Q.A], () => X.M.EEA_COUNTRIES.has(Q.A.ipCountryCodeWithFallback));
            return {
                hasViewedPurchaseTerms: e,
                setHasViewedPurchaseTerms: t,
                showWithdrawalWaiver: s,
                hasAcceptedWithdrawalWaiver: !s || n,
                setHasAcceptedWithdrawalWaiver: i,
            };
        })(),
        { paymentError: ev, paymentAuthenticationState: eO } = (function () {
            let e = (0, l.bG)([q.A], () => q.A.error),
                [t, n] = (0, l.yK)([Z.A], () => [Z.A.error, Z.A.isAwaitingAuthentication]);
            return {
                paymentError: null != t ? t : e,
                paymentAuthenticationState: n ? $.oc.PENDING : null != t ? $.oc.ERROR : $.oc.NONE,
            };
        })(),
        { purchaseErrorBlockRef: eR } = (function () {
            let e = r.useRef(null),
                { purchaseError: t, setPurchaseError: n } = (0, L.t4)((e) => ({
                    purchaseError: e.purchaseError,
                    setPurchaseError: e.setPurchaseError,
                }));
            return (
                r.useEffect(() => {
                    null != t && null != e.current && e.current.scrollIntoView({ behavior: "smooth" });
                }, [t]),
                { purchaseError: t, setPurchaseError: n, purchaseErrorBlockRef: e }
            );
        })(),
        [eb, eD] = (0, l.yK)([F.A], () => [F.A.purchaseTokenAuthState, F.A.purchaseTokenHash]),
        [eL, ew] = r.useState(null),
        [eM, eP] = r.useState(null),
        [ex, eU] = r.useState(null),
        [ek, eG] = r.useState(null),
        eF = r.useMemo(() => null == em || (0, H.ys)(em), [em]),
        eV = r.useRef(null != a ? a.planId : null);
    r.useEffect(() => {
        null == eV.current && null != a && (eV.current = a.planId);
    }, [a]);
    let { endsAt: eB } = (0, E.A)({ forceFetch: !1, excludeReverseTrial: !0 }),
        eH = r.useRef(eB.isSame(o()(0)) ? null : eB);
    r.useEffect(() => {
        null != eH.current || eB.isSame(o()(0)) || (eH.current = eB);
    }, [eB]),
        (function (e) {
            let t = en.A.useConfig({ location: "payment_modal" }).enabled,
                { order: n, setOrder: i } = (0, L.t4)((e) => ({ order: e.order, setOrder: e.setOrder }));
            (0, r.useEffect)(() => {
                if (!t || null == e.paymentSourceId) return;
                let r = e.paymentSourceId;
                async function s() {
                    if (null == n || n?.billing_facet?.payment_gateway === ei.kM.VIRTUAL_CURRENCY) return;
                    let t = await (0, et.iY)({ orderId: n.id, updates: e });
                    null != t && i(t);
                }
                n?.billing_facet?.payment_source_id !== r && s();
            }, [n, i, e.paymentSourceId, t]);
        })(r.useMemo(() => ({ paymentSourceId: eg, paymentGateway: B, loadId: eh.loadId }), [eg, B, eh.loadId]));
    let ej = r.useMemo(() => N.filter((e) => !er.oz.includes(e)), [JSON.stringify(N)]),
        eY = D ?? er.tv;
    (0, W.A)({ applicationId: eY, skuIDs: ej });
    let [eW, eK] = r.useState(null),
        { data: ez } = (0, f.YY)(D),
        e$ = G.Q_.useSetting(),
        eq = (0, l.bG)([u.A], () => u.A.getFetchState());
    r.useEffect(() => {
        null != ez && (0, h.n)(ez, S.gfo.EMBEDDED) && e$ && null == eq && (0, c.SE)();
    }, [ez, e$, eq]);
    let eZ = null != ez && (0, h.n)(ez, S.gfo.EMBEDDED) && (0, h.n)(ez, S.gfo.EMBEDDED_IAP),
        eX = (0, l.bG)([d.Ay], () =>
            Array.from(d.Ay.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === D;
            }),
        ),
        eQ = eX?.compositeInstanceId,
        eJ = (0, l.bG)([V.A], () => (null != eE ? V.A.getForSKU(eE) : null), [eE]),
        e0 = (0, P.ds)() && !v,
        { isDisplayingWowMomentConfirmation: e1 } = (0, l.cf)([x.A], () => ({
            isDisplayingWowMomentConfirmation: x.A.isDisplayingWowMomentConfirmation,
        })),
        { enabled: e2 } = ((t = { location: "PaymentContext" }), { enabled: m.A.getConfig(t).enabled }),
        e3 = (0, j.$w)(),
        e6 = r.useMemo(() => null != em && em === er.gD.PREMIUM_GROUP_MONTH, [em]),
        e4 = (0, k.V)(eo ?? void 0),
        e5 = !e6 && !v && null != e4 && null != eE && er.TP[e4.trial_id].skus.includes(eE),
        e7 = (0, U.O)(),
        e8 = e7?.discount?.planIds.some((e) => er.hd[e].skuId === eE),
        e9 = !!(!e6 && !v && null != e7 && null != eE && e8),
        te = null != eg && null != ed[eg] ? ed[eg]?.type : null,
        tt = r.useMemo(
            () => ({ payment_source_id: eg, payment_gateway: B, payment_source_type: te, checkout_flow: A }),
            [eg, B, te, A],
        ),
        tn = (0, _.Db)(),
        ti = r.useMemo(() => (b === S.VVm.ONE_TIME && A !== g.C.ORB_CHECKOUT ? (0, i.jsx)(w, {}) : null), [b, A]);
    return (0, i.jsx)(es.Provider, {
        value: {
            stripe: el,
            unifiedCheckoutFlow: A,
            paymentElementsEnabled: e2,
            blockedPayments: eu,
            activeSubscription: a,
            hasFetchedSubscriptions: ec,
            hasFetchedSubscriptionPlans: eA,
            subscriptionMetadataRequest: ek,
            setSubscriptionMetadataRequest: eG,
            priceOptions: eI,
            setCurrency: eT,
            currencyLoading: eS,
            currencies: eN,
            displayCurrency: ey,
            ...eC,
            paymentAuthenticationState: eO,
            paymentError: ev,
            purchasePreviewError: eW,
            setPurchasePreviewError: eK,
            purchaseErrorBlockRef: eR,
            purchaseTokenAuthState: eb,
            purchaseTokenHash: eD,
            bodyNode: eL,
            setBodyNode: ew,
            footerNode: eM,
            setFooterNode: eP,
            modalOverlayNode: ex,
            setModalOverlayNode: eU,
            selectedStoreListing: eJ,
            defaultPlanId: R,
            isPremium: eF,
            isGift: v,
            startingFractionalPremiumEndsAtRef: eH,
            startedPaymentFlowWithPaymentSourcesRef: ef,
            startingPremiumSubscriptionPlanIdRef: eV,
            defaultFetchableSkuIds: ej,
            application: ez,
            applicationId: eY,
            purchaseType: b,
            isEmbeddedIAP: eZ,
            activitySessionId: eQ,
            devShelfFetchState: eq,
            referralCode: M,
            inReverseTrial: e0,
            isDisplayingWowMomentConfirmation: e1,
            wasTier2PremiumBeforePurchase: ea,
            customCheckoutFlow: e3,
            isPremiumGroupPurchase: e6,
            isEligibleForTrial: e5,
            isEligibleForDiscount: e9,
            userTrialOffer: e4,
            referralTrialOfferId: eo,
            discountOffer: e7,
        },
        children: (0, i.jsx)(s.Elements, {
            options: S.XL8,
            stripe: el,
            children: (0, i.jsxs)(y, {
                shouldRethrowError: I,
                locationStack: tn,
                onUnhandledError: T,
                loadId: eh.loadId,
                selectedSkuId: eE ?? null,
                selectedPlanId: em ?? null,
                isGift: v,
                purchaseType: b,
                additionalAnalyticsData: tt,
                children: [b === S.VVm.ONE_TIME && ti, O],
            }),
        }),
    });
}

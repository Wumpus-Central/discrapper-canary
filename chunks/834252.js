"use strict";
n.d(t, { P5: () => eo, Qv: () => ea, PaymentContextProvider: () => eu });
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
var C = n(566980),
    v = n(830382),
    O = n(543767),
    R = n(570221),
    b = n(666646),
    D = n(94420);
let L = () => {
    var e;
    let t,
        n,
        i,
        s,
        { selectedSkuId: a, purchaseState: o } = (0, D.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
        })),
        { setPurchasePreviewError: l, applicationId: u, paymentSourceId: c, isGift: d, priceOptions: _ } = eo(),
        f = o === C.h.PURCHASING || o === C.h.COMPLETED,
        [h, p] =
            ((e = r.useMemo(
                () => ({
                    applicationId: u,
                    skuId: a,
                    paymentSourceId: c,
                    isGift: d,
                    currency: _.loaded ? _.currency : void 0,
                    preventFetch: f,
                }),
                [u, a, c, d, _, f],
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
                let s = await (0, v.NY)(r);
                return null != s ? R.A.createFromOTPPreview(s) : null;
            }, [i])),
            (0, O.$n)(e, s, void 0));
    return (
        (0, b.F0)(h, p),
        r.useEffect(() => {
            l(p);
        }, [p, l]),
        null
    );
};
var w = n(460495),
    M = n(881489),
    P = n(573359),
    x = n(422936),
    U = n(234419),
    k = n(885386),
    G = n(71319),
    F = n(67480),
    V = n(328968),
    B = n(786300),
    H = n(428262),
    j = n(795791),
    Y = n(853398),
    W = n(120992),
    K = n(753390),
    z = n(166403),
    $ = n(369827),
    q = n(251913),
    Z = n(825755),
    X = n(153084),
    Q = n(997101),
    J = n(615405),
    ee = n(615310),
    et = n(87952),
    en = n(624210),
    ei = n(573582),
    er = n(818348),
    es = n(788868);
let [ea, eo, el] = (0, B.A)();
function eu(e) {
    let { stepConfigs: t, breadcrumbs: n, loadId: r, discoverySessionId: s, ...a } = e;
    return (0, i.jsx)(ee.mz, {
        stepConfigs: t,
        breadcrumbs: n,
        children: (0, i.jsx)(w.P, { loadId: r, discoverySessionId: s, children: (0, i.jsx)(ec, { ...a }) }),
    });
}
function ec(e) {
    var t;
    let n,
        {
            activeSubscription: a,
            unifiedCheckoutFlow: A,
            shouldCrashOnUnhandledError: I = !0,
            onUnhandledError: T,
            skuIDs: N,
            isGift: C = !1,
            children: v,
            defaultPlanId: O,
            purchaseType: R = S.VVm.SUBSCRIPTION,
            applicationId: b,
            referralCode: w,
            paymentGateway: B,
            excludeSubscriptionPlansBySKU: ee = !1,
            wasTier2PremiumBeforePurchase: eo = !1,
            referralTrialOfferId: el,
        } = e,
        eu = (0, et.A)(),
        ec = (0, p.Hp)(),
        ed =
            ((n = (0, l.bG)([z.A], () => z.A.hasFetchedSubscriptions())),
            r.useEffect(() => {
                n || (0, K.hP)();
            }, [n]),
            n),
        e_ = N[0],
        ef = (0, l.bG)([F.A], () => F.A.get(e_), [e_]),
        eh = ef?.eligiblePaymentGateways,
        {
            paymentSources: ep,
            hasPaymentSources: eE,
            paymentSourceId: em,
            setPaymentSourceId: eg,
            hasFetchedPaymentSources: eA,
        } = (0, $.A)({ isGift: C, activeSubscription: a, eligiblePaymentGateways: eh }),
        eI = r.useRef(eE),
        {
            contextMetadata: eT,
            checkoutInvoicePreview: eS,
            selectedSkuId: eN,
            selectedPlanId: ey,
        } = (0, D.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            selectedSkuId: e.selectedSkuId,
            selectedPlanId: e.selectedPlanId,
        })),
        {
            hasFetchedSubscriptionPlans: eC,
            priceOptions: ev,
            setCurrency: eO,
            currencyLoading: eR,
            currencies: eb,
            displayCurrency: eD,
        } = (0, Y.A)({
            activeSubscription: a,
            skuIDs: N,
            paymentSourceId: em,
            isGift: C,
            excludeSubscriptionPlansBySKU: ee,
            checkoutInvoicePreview: eS,
        }),
        eL = (function () {
            let [e, t] = r.useState(!1),
                [n, i] = r.useState(!1),
                s = (0, l.bG)([J.A], () => Q.M.EEA_COUNTRIES.has(J.A.ipCountryCodeWithFallback));
            return {
                hasViewedPurchaseTerms: e,
                setHasViewedPurchaseTerms: t,
                showWithdrawalWaiver: s,
                hasAcceptedWithdrawalWaiver: !s || n,
                setHasAcceptedWithdrawalWaiver: i,
            };
        })(),
        { paymentError: ew, paymentAuthenticationState: eM } = (function () {
            let e = (0, l.bG)([Z.A], () => Z.A.error),
                [t, n] = (0, l.yK)([X.A], () => [X.A.error, X.A.isAwaitingAuthentication]);
            return {
                paymentError: null != t ? t : e,
                paymentAuthenticationState: n ? q.oc.PENDING : null != t ? q.oc.ERROR : q.oc.NONE,
            };
        })(),
        { purchaseErrorBlockRef: eP } = (function () {
            let e = r.useRef(null),
                { purchaseError: t, setPurchaseError: n } = (0, D.t4)((e) => ({
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
        [ex, eU] = (0, l.yK)([G.A], () => [G.A.purchaseTokenAuthState, G.A.purchaseTokenHash]),
        [ek, eG] = r.useState(null),
        [eF, eV] = r.useState(null),
        [eB, eH] = r.useState(null),
        [ej, eY] = r.useState(null),
        eW = r.useMemo(() => null == ey || (0, H.ys)(ey), [ey]),
        eK = r.useRef(null != a ? a.planId : null);
    r.useEffect(() => {
        null == eK.current && null != a && (eK.current = a.planId);
    }, [a]);
    let { endsAt: ez } = (0, E.A)({ forceFetch: !1, excludeReverseTrial: !0 }),
        e$ = r.useRef(ez.isSame(o()(0)) ? null : ez);
    r.useEffect(() => {
        null != e$.current || ez.isSame(o()(0)) || (e$.current = ez);
    }, [ez]),
        (function (e) {
            let t = ei.A.useConfig({ location: "payment_modal" }).enabled,
                { order: n, setOrder: i } = (0, D.t4)((e) => ({ order: e.order, setOrder: e.setOrder }));
            (0, r.useEffect)(() => {
                if (!t || null == e.paymentSourceId) return;
                let r = e.paymentSourceId;
                async function s() {
                    if (null == n || n?.billing_facet?.payment_gateway === er.kM.VIRTUAL_CURRENCY) return;
                    let t = await (0, en.iY)({ orderId: n.id, updates: e });
                    null != t && i(t);
                }
                n?.billing_facet?.payment_source_id !== r && s();
            }, [n, i, e.paymentSourceId, t]);
        })(r.useMemo(() => ({ paymentSourceId: em, paymentGateway: B, loadId: eT.loadId }), [em, B, eT.loadId]));
    let eq = r.useMemo(() => N.filter((e) => !es.oz.includes(e)), [JSON.stringify(N)]),
        eZ = b ?? es.tv;
    (0, W.A)({ applicationId: eZ, skuIDs: eq });
    let [eX, eQ] = r.useState(null),
        { data: eJ } = (0, f.YY)(b),
        e0 = k.Q_.useSetting(),
        e1 = (0, l.bG)([u.A], () => u.A.getFetchState());
    r.useEffect(() => {
        null != eJ && (0, h.n)(eJ, S.gfo.EMBEDDED) && e0 && null == e1 && (0, c.SE)();
    }, [eJ, e0, e1]);
    let e2 = null != eJ && (0, h.n)(eJ, S.gfo.EMBEDDED) && (0, h.n)(eJ, S.gfo.EMBEDDED_IAP),
        e3 = (0, l.bG)([d.Ay], () =>
            Array.from(d.Ay.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === b;
            }),
        ),
        e6 = e3?.compositeInstanceId,
        e4 = (0, l.bG)([V.A], () => (null != eN ? V.A.getForSKU(eN) : null), [eN]),
        e5 = (0, M.ds)() && !C,
        { isDisplayingWowMomentConfirmation: e7 } = (0, l.cf)([P.A], () => ({
            isDisplayingWowMomentConfirmation: P.A.isDisplayingWowMomentConfirmation,
        })),
        { enabled: e8 } = ((t = { location: "PaymentContext" }), { enabled: m.A.getConfig(t).enabled }),
        e9 = (0, j.$w)(),
        te = r.useMemo(() => null != ey && ey === es.gD.PREMIUM_GROUP_MONTH, [ey]),
        tt = (0, U.V)(el ?? void 0),
        tn = !te && !C && null != tt && null != eN && es.TP[tt.trial_id].skus.includes(eN),
        ti = (0, x.O)(),
        tr = ti?.discount?.planIds.some((e) => es.hd[e].skuId === eN),
        ts = !!(!te && !C && null != ti && null != eN && tr),
        ta = null != em && null != ep[em] ? ep[em]?.type : null,
        to = r.useMemo(
            () => ({ payment_source_id: em, payment_gateway: B, payment_source_type: ta, checkout_flow: A }),
            [em, B, ta, A],
        ),
        tl = (0, _.Db)(),
        tu = r.useMemo(() => (R === S.VVm.ONE_TIME && A !== g.C.ORB_CHECKOUT ? (0, i.jsx)(L, {}) : null), [R, A]);
    return (0, i.jsx)(ea.Provider, {
        value: {
            stripe: eu,
            unifiedCheckoutFlow: A,
            paymentElementsEnabled: e8,
            blockedPayments: ec,
            activeSubscription: a,
            hasFetchedSubscriptions: ed,
            hasFetchedSubscriptionPlans: eC,
            subscriptionMetadataRequest: ej,
            setSubscriptionMetadataRequest: eY,
            hasFetchedPaymentSources: eA,
            paymentSources: ep,
            hasPaymentSources: eE,
            paymentSourceId: em,
            setPaymentSourceId: eg,
            priceOptions: ev,
            setCurrency: eO,
            currencyLoading: eR,
            currencies: eb,
            displayCurrency: eD,
            ...eL,
            paymentAuthenticationState: eM,
            paymentError: ew,
            purchasePreviewError: eX,
            setPurchasePreviewError: eQ,
            purchaseErrorBlockRef: eP,
            purchaseTokenAuthState: ex,
            purchaseTokenHash: eU,
            bodyNode: ek,
            setBodyNode: eG,
            footerNode: eF,
            setFooterNode: eV,
            modalOverlayNode: eB,
            setModalOverlayNode: eH,
            selectedStoreListing: e4,
            defaultPlanId: O,
            isPremium: eW,
            isGift: C,
            startingFractionalPremiumEndsAtRef: e$,
            startedPaymentFlowWithPaymentSourcesRef: eI,
            startingPremiumSubscriptionPlanIdRef: eK,
            defaultFetchableSkuIds: eq,
            application: eJ,
            applicationId: eZ,
            purchaseType: R,
            isEmbeddedIAP: e2,
            activitySessionId: e6,
            devShelfFetchState: e1,
            referralCode: w,
            inReverseTrial: e5,
            isDisplayingWowMomentConfirmation: e7,
            wasTier2PremiumBeforePurchase: eo,
            customCheckoutFlow: e9,
            isPremiumGroupPurchase: te,
            isEligibleForTrial: tn,
            isEligibleForDiscount: ts,
            userTrialOffer: tt,
            referralTrialOfferId: el,
            discountOffer: ti,
        },
        children: (0, i.jsx)(s.Elements, {
            options: S.XL8,
            stripe: eu,
            children: (0, i.jsxs)(y, {
                shouldRethrowError: I,
                locationStack: tl,
                onUnhandledError: T,
                loadId: eT.loadId,
                selectedSkuId: eN ?? null,
                selectedPlanId: ey ?? null,
                isGift: C,
                purchaseType: R,
                additionalAnalyticsData: to,
                children: [R === S.VVm.ONE_TIME && tu, v],
            }),
        }),
    });
}

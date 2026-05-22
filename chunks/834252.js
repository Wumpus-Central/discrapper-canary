"use strict";
n.d(t, { P5: () => es, Qv: () => er, PaymentContextProvider: () => eo });
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
    L = n(671744);
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
            priceOptions: u,
        } = (0, L.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            paymentSourceId: e.paymentSourceId,
            priceOptions: e.checkoutPriceOptions,
        })),
        { setPurchasePreviewError: c, applicationId: d, isGift: _ } = es(),
        f = o === v.h.PURCHASING || o === v.h.COMPLETED,
        [h, p] =
            ((e = r.useMemo(
                () => ({
                    applicationId: d,
                    skuId: a,
                    paymentSourceId: l,
                    isGift: _,
                    currency: u.loaded ? u.currency : void 0,
                    preventFetch: f,
                }),
                [d, a, l, _, u, f],
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
            c(p);
        }, [p, c]),
        null
    );
};
var M = n(434325),
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
    Y = n(120992),
    W = n(753390),
    K = n(166403),
    z = n(251913),
    $ = n(825755),
    q = n(153084),
    Z = n(997101),
    X = n(615405),
    Q = n(615310),
    J = n(87952),
    ee = n(624210),
    et = n(573582),
    en = n(818348),
    ei = n(788868);
let [er, es, ea] = (0, B.A)();
function eo(e) {
    let { stepConfigs: t, breadcrumbs: n, loadId: s, discoverySessionId: a, ...o } = e,
        l = JSON.stringify(o.skuIDs),
        u = r.useMemo(
            () => ({
                skuIds: o.skuIDs,
                isGift: o.isGift ?? !1,
                referralTrialOfferId: o.referralTrialOfferId ?? null,
                activeSubscription: o.activeSubscription ?? null,
                excludeSubscriptionPlansBySKU: o.excludeSubscriptionPlansBySKU ?? !1,
            }),
            [l, o.isGift, o.referralTrialOfferId, o.activeSubscription, o.excludeSubscriptionPlansBySKU],
        );
    return (0, i.jsx)(Q.mz, {
        stepConfigs: t,
        breadcrumbs: n,
        children: (0, i.jsx)(M.P, {
            loadId: s,
            discoverySessionId: a,
            checkoutInitParameters: u,
            children: (0, i.jsx)(el, { ...o }),
        }),
    });
}
function el(e) {
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
            wasTier2PremiumBeforePurchase: Q = !1,
            referralTrialOfferId: es,
        } = e,
        ea = (0, J.A)(),
        eo = (0, p.Hp)(),
        el =
            ((n = (0, l.bG)([K.A], () => K.A.hasFetchedSubscriptions())),
            r.useEffect(() => {
                n || (0, W.hP)();
            }, [n]),
            n),
        { paymentSources: eu, hasPaymentSources: ec } = (0, C.jm)(),
        ed = r.useRef(ec),
        {
            contextMetadata: e_,
            selectedSkuId: ef,
            selectedPlanId: eh,
            paymentSourceId: ep,
        } = (0, L.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            selectedSkuId: e.selectedSkuId,
            selectedPlanId: e.selectedPlanId,
            paymentSourceId: e.paymentSourceId,
        })),
        eE = (function () {
            let [e, t] = r.useState(!1),
                [n, i] = r.useState(!1),
                s = (0, l.bG)([X.A], () => Z.M.EEA_COUNTRIES.has(X.A.ipCountryCodeWithFallback));
            return {
                hasViewedPurchaseTerms: e,
                setHasViewedPurchaseTerms: t,
                showWithdrawalWaiver: s,
                hasAcceptedWithdrawalWaiver: !s || n,
                setHasAcceptedWithdrawalWaiver: i,
            };
        })(),
        { paymentError: em, paymentAuthenticationState: eg } = (function () {
            let e = (0, l.bG)([$.A], () => $.A.error),
                [t, n] = (0, l.yK)([q.A], () => [q.A.error, q.A.isAwaitingAuthentication]);
            return {
                paymentError: null != t ? t : e,
                paymentAuthenticationState: n ? z.oc.PENDING : null != t ? z.oc.ERROR : z.oc.NONE,
            };
        })(),
        { purchaseErrorBlockRef: eA } = (function () {
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
        [eI, eT] = (0, l.yK)([F.A], () => [F.A.purchaseTokenAuthState, F.A.purchaseTokenHash]),
        [eS, eN] = r.useState(null),
        [ey, eC] = r.useState(null),
        [ev, eO] = r.useState(null),
        [eR, eb] = r.useState(null),
        eD = r.useMemo(() => null == eh || (0, H.ys)(eh), [eh]),
        eL = r.useRef(null != a ? a.planId : null);
    r.useEffect(() => {
        null == eL.current && null != a && (eL.current = a.planId);
    }, [a]);
    let { endsAt: ew } = (0, E.A)({ forceFetch: !1, excludeReverseTrial: !0 }),
        eM = r.useRef(ew.isSame(o()(0)) ? null : ew);
    r.useEffect(() => {
        null != eM.current || ew.isSame(o()(0)) || (eM.current = ew);
    }, [ew]),
        (function (e) {
            let t = et.A.useConfig({ location: "payment_modal" }).enabled,
                { order: n, setOrder: i } = (0, L.t4)((e) => ({ order: e.order, setOrder: e.setOrder }));
            (0, r.useEffect)(() => {
                if (!t || null == e.paymentSourceId) return;
                let r = e.paymentSourceId;
                async function s() {
                    if (null == n || n?.billing_facet?.payment_gateway === en.kM.VIRTUAL_CURRENCY) return;
                    let t = await (0, ee.iY)({ orderId: n.id, updates: e });
                    null != t && i(t);
                }
                n?.billing_facet?.payment_source_id !== r && s();
            }, [n, i, e.paymentSourceId, t]);
        })(r.useMemo(() => ({ paymentSourceId: ep, paymentGateway: B, loadId: e_.loadId }), [ep, B, e_.loadId]));
    let eP = r.useMemo(() => N.filter((e) => !ei.oz.includes(e)), [JSON.stringify(N)]),
        ex = D ?? ei.tv;
    (0, Y.A)({ applicationId: ex, skuIDs: eP });
    let [eU, ek] = r.useState(null),
        { data: eG } = (0, f.YY)(D),
        eF = G.Q_.useSetting(),
        eV = (0, l.bG)([u.A], () => u.A.getFetchState());
    r.useEffect(() => {
        null != eG && (0, h.n)(eG, S.gfo.EMBEDDED) && eF && null == eV && (0, c.SE)();
    }, [eG, eF, eV]);
    let eB = null != eG && (0, h.n)(eG, S.gfo.EMBEDDED) && (0, h.n)(eG, S.gfo.EMBEDDED_IAP),
        eH = (0, l.bG)([d.Ay], () =>
            Array.from(d.Ay.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === D;
            }),
        ),
        ej = eH?.compositeInstanceId,
        eY = (0, l.bG)([V.A], () => (null != ef ? V.A.getForSKU(ef) : null), [ef]),
        eW = (0, P.ds)() && !v,
        { isDisplayingWowMomentConfirmation: eK } = (0, l.cf)([x.A], () => ({
            isDisplayingWowMomentConfirmation: x.A.isDisplayingWowMomentConfirmation,
        })),
        { enabled: ez } = ((t = { location: "PaymentContext" }), { enabled: m.A.getConfig(t).enabled }),
        e$ = (0, j.$w)(),
        eq = r.useMemo(() => null != eh && eh === ei.gD.PREMIUM_GROUP_MONTH, [eh]),
        eZ = (0, k.V)(es ?? void 0),
        eX = !eq && !v && null != eZ && null != ef && ei.TP[eZ.trial_id].skus.includes(ef),
        eQ = (0, U.O)(),
        eJ = eQ?.discount?.planIds.some((e) => ei.hd[e].skuId === ef),
        e0 = !!(!eq && !v && null != eQ && null != ef && eJ),
        e1 = null != ep && null != eu[ep] ? eu[ep]?.type : null,
        e2 = r.useMemo(
            () => ({ payment_source_id: ep, payment_gateway: B, payment_source_type: e1, checkout_flow: A }),
            [ep, B, e1, A],
        ),
        e3 = (0, _.Db)(),
        e6 = r.useMemo(() => (b === S.VVm.ONE_TIME && A !== g.C.ORB_CHECKOUT ? (0, i.jsx)(w, {}) : null), [b, A]);
    return (0, i.jsx)(er.Provider, {
        value: {
            stripe: ea,
            unifiedCheckoutFlow: A,
            paymentElementsEnabled: ez,
            blockedPayments: eo,
            activeSubscription: a,
            hasFetchedSubscriptions: el,
            subscriptionMetadataRequest: eR,
            setSubscriptionMetadataRequest: eb,
            ...eE,
            paymentAuthenticationState: eg,
            paymentError: em,
            purchasePreviewError: eU,
            setPurchasePreviewError: ek,
            purchaseErrorBlockRef: eA,
            purchaseTokenAuthState: eI,
            purchaseTokenHash: eT,
            bodyNode: eS,
            setBodyNode: eN,
            footerNode: ey,
            setFooterNode: eC,
            modalOverlayNode: ev,
            setModalOverlayNode: eO,
            selectedStoreListing: eY,
            defaultPlanId: R,
            isPremium: eD,
            isGift: v,
            startingFractionalPremiumEndsAtRef: eM,
            startedPaymentFlowWithPaymentSourcesRef: ed,
            startingPremiumSubscriptionPlanIdRef: eL,
            defaultFetchableSkuIds: eP,
            application: eG,
            applicationId: ex,
            purchaseType: b,
            isEmbeddedIAP: eB,
            activitySessionId: ej,
            devShelfFetchState: eV,
            referralCode: M,
            inReverseTrial: eW,
            isDisplayingWowMomentConfirmation: eK,
            wasTier2PremiumBeforePurchase: Q,
            customCheckoutFlow: e$,
            isPremiumGroupPurchase: eq,
            isEligibleForTrial: eX,
            isEligibleForDiscount: e0,
            userTrialOffer: eZ,
            referralTrialOfferId: es,
            discountOffer: eQ,
        },
        children: (0, i.jsx)(s.Elements, {
            options: S.XL8,
            stripe: ea,
            children: (0, i.jsxs)(y, {
                shouldRethrowError: I,
                locationStack: e3,
                onUnhandledError: T,
                loadId: e_.loadId,
                selectedSkuId: ef ?? null,
                selectedPlanId: eh ?? null,
                isGift: v,
                purchaseType: b,
                additionalAnalyticsData: e2,
                children: [b === S.VVm.ONE_TIME && e6, O],
            }),
        }),
    });
}

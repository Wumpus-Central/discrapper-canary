"use strict";
n.d(t, { P5: () => et, Qv: () => ee, PaymentContextProvider: () => ei });
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
    h = n(627363),
    f = n(20015),
    p = n(86379),
    E = n(531260),
    m = n(885180),
    g = n(120700),
    A = n(626584),
    I = n(174459),
    T = n(38405),
    S = n(652215);
let y = new A.A("CheckoutErrorBoundary.tsx");
class N extends r.PureComponent {
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
        T.A.captureException(e, d), y.error("Checkout error occurred:", { error: e, additionalErrorContext: c });
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
var v = n(426398),
    C = n(566980),
    R = n(830382),
    O = n(543767),
    b = n(570221),
    D = n(666646),
    L = n(722847);
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
        { setPurchasePreviewError: c, applicationId: d, isGift: _ } = et(),
        h = o === C.h.PURCHASING || o === C.h.COMPLETED,
        [f, p] =
            ((e = r.useMemo(
                () => ({
                    applicationId: d,
                    skuId: a,
                    paymentSourceId: l,
                    isGift: _,
                    currency: u.loaded ? u.currency : void 0,
                    preventFetch: h,
                }),
                [d, a, l, _, u, h],
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
                let s = await (0, R.NY)(r);
                return null != s ? b.A.createFromOTPPreview(s) : null;
            }, [i])),
            (0, O.$n)(e, s, void 0));
    return (
        (0, D.F0)(f, p),
        r.useEffect(() => {
            c(p);
        }, [p, c]),
        null
    );
};
var M = n(799606),
    P = n(573359),
    x = n(885386),
    k = n(71319),
    U = n(328968),
    G = n(786300),
    F = n(795791),
    V = n(120992),
    B = n(753390),
    H = n(166403),
    j = n(251913),
    Y = n(825755),
    W = n(153084),
    K = n(997101),
    $ = n(615405),
    z = n(615310),
    q = n(87952),
    X = n(624210),
    Z = n(573582),
    Q = n(818348),
    J = n(788868);
let [ee, et, en] = (0, G.A)();
function ei(e) {
    let {
            stepConfigs: t,
            breadcrumbs: n,
            loadId: s,
            discoverySessionId: a,
            purchaseType: o = S.VVm.SUBSCRIPTION,
            ...l
        } = e,
        u = JSON.stringify(l.skuIDs),
        c = r.useMemo(
            () => ({
                skuIds: l.skuIDs,
                isGift: l.isGift ?? !1,
                referralTrialOfferId: l.referralTrialOfferId ?? null,
                activeSubscription: l.activeSubscription ?? null,
                excludeSubscriptionPlansBySKU: l.excludeSubscriptionPlansBySKU ?? !1,
                purchaseType: o,
            }),
            [u, l.isGift, l.referralTrialOfferId, l.activeSubscription, l.excludeSubscriptionPlansBySKU, o],
        );
    return (0, i.jsx)(z.mz, {
        stepConfigs: t,
        breadcrumbs: n,
        children: (0, i.jsx)(M.P, {
            loadId: s,
            discoverySessionId: a,
            checkoutInitParameters: c,
            children: (0, i.jsx)(er, { ...l, purchaseType: o }),
        }),
    });
}
function er(e) {
    var t;
    let n,
        {
            activeSubscription: a,
            unifiedCheckoutFlow: A,
            shouldCrashOnUnhandledError: I = !0,
            onUnhandledError: T,
            skuIDs: y,
            isGift: C = !1,
            children: R,
            defaultPlanId: O,
            purchaseType: b = S.VVm.SUBSCRIPTION,
            applicationId: D,
            referralCode: M,
            paymentGateway: G,
            wasTier2PremiumBeforePurchase: z = !1,
        } = e,
        et = (0, q.A)(),
        en = (0, p.Hp)(),
        ei =
            ((n = (0, l.bG)([H.A], () => H.A.hasFetchedSubscriptions())),
            r.useEffect(() => {
                n || (0, B.hP)();
            }, [n]),
            n),
        { paymentSources: er, hasPaymentSources: es } = (0, v.jm)(),
        ea = r.useRef(es),
        {
            contextMetadata: eo,
            selectedSkuId: el,
            selectedPlanId: eu,
            paymentSourceId: ec,
        } = (0, L.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            selectedSkuId: e.selectedSkuId,
            selectedPlanId: e.selectedPlanId,
            paymentSourceId: e.paymentSourceId,
        })),
        ed = (function () {
            let [e, t] = r.useState(!1),
                [n, i] = r.useState(!1),
                s = (0, l.bG)([$.A], () => K.M.EEA_COUNTRIES.has($.A.ipCountryCodeWithFallback));
            return {
                hasViewedPurchaseTerms: e,
                setHasViewedPurchaseTerms: t,
                showWithdrawalWaiver: s,
                hasAcceptedWithdrawalWaiver: !s || n,
                setHasAcceptedWithdrawalWaiver: i,
            };
        })(),
        { paymentError: e_, paymentAuthenticationState: eh } = (function () {
            let e = (0, l.bG)([Y.A], () => Y.A.error),
                [t, n] = (0, l.yK)([W.A], () => [W.A.error, W.A.isAwaitingAuthentication]);
            return {
                paymentError: null != t ? t : e,
                paymentAuthenticationState: n ? j.oc.PENDING : null != t ? j.oc.ERROR : j.oc.NONE,
            };
        })(),
        { purchaseErrorBlockRef: ef } = (function () {
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
        [ep, eE] = (0, l.yK)([k.A], () => [k.A.purchaseTokenAuthState, k.A.purchaseTokenHash]),
        [em, eg] = r.useState(null),
        [eA, eI] = r.useState(null),
        [eT, eS] = r.useState(null),
        [ey, eN] = r.useState(null),
        ev = r.useRef(null != a ? a.planId : null);
    r.useEffect(() => {
        null == ev.current && null != a && (ev.current = a.planId);
    }, [a]);
    let { endsAt: eC } = (0, E.A)({ forceFetch: !1, excludeReverseTrial: !0 }),
        eR = r.useRef(eC.isSame(o()(0)) ? null : eC);
    r.useEffect(() => {
        null != eR.current || eC.isSame(o()(0)) || (eR.current = eC);
    }, [eC]),
        (function (e) {
            let t = Z.A.useConfig({ location: "payment_modal" }).enabled,
                { order: n, setOrder: i } = (0, L.t4)((e) => ({ order: e.order, setOrder: e.setOrder }));
            (0, r.useEffect)(() => {
                if (!t || null == e.paymentSourceId) return;
                let r = e.paymentSourceId;
                async function s() {
                    if (null == n || n?.billing_facet?.payment_gateway === Q.kM.VIRTUAL_CURRENCY) return;
                    let t = await (0, X.iY)({ orderId: n.id, updates: e });
                    null != t && i(t);
                }
                n?.billing_facet?.payment_source_id !== r && s();
            }, [n, i, e.paymentSourceId, t]);
        })(r.useMemo(() => ({ paymentSourceId: ec, paymentGateway: G, loadId: eo.loadId }), [ec, G, eo.loadId]));
    let eO = r.useMemo(() => y.filter((e) => !J.oz.includes(e)), [JSON.stringify(y)]),
        eb = D ?? J.tv;
    (0, V.A)({ applicationId: eb, skuIDs: eO });
    let [eD, eL] = r.useState(null),
        { data: ew } = (0, h.YY)(D),
        eM = x.Q_.useSetting(),
        eP = (0, l.bG)([u.A], () => u.A.getFetchState());
    r.useEffect(() => {
        null != ew && (0, f.n)(ew, S.gfo.EMBEDDED) && eM && null == eP && (0, c.SE)();
    }, [ew, eM, eP]);
    let ex = null != ew && (0, f.n)(ew, S.gfo.EMBEDDED) && (0, f.n)(ew, S.gfo.EMBEDDED_IAP),
        ek = (0, l.bG)([d.Ay], () =>
            Array.from(d.Ay.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === D;
            }),
        ),
        eU = ek?.compositeInstanceId,
        eG = (0, l.bG)([U.A], () => (null != el ? U.A.getForSKU(el) : null), [el]),
        { isDisplayingWowMomentConfirmation: eF } = (0, l.cf)([P.A], () => ({
            isDisplayingWowMomentConfirmation: P.A.isDisplayingWowMomentConfirmation,
        })),
        { enabled: eV } = ((t = { location: "PaymentContext" }), { enabled: m.A.getConfig(t).enabled }),
        eB = (0, F.$w)(),
        eH = null != ec && null != er[ec] ? er[ec]?.type : null,
        ej = r.useMemo(
            () => ({ payment_source_id: ec, payment_gateway: G, payment_source_type: eH, checkout_flow: A }),
            [ec, G, eH, A],
        ),
        eY = (0, _.Db)(),
        eW = r.useMemo(() => (b === S.VVm.ONE_TIME && A !== g.C.ORB_CHECKOUT ? (0, i.jsx)(w, {}) : null), [b, A]);
    return (0, i.jsx)(ee.Provider, {
        value: {
            stripe: et,
            unifiedCheckoutFlow: A,
            paymentElementsEnabled: eV,
            blockedPayments: en,
            activeSubscription: a,
            hasFetchedSubscriptions: ei,
            subscriptionMetadataRequest: ey,
            setSubscriptionMetadataRequest: eN,
            ...ed,
            paymentAuthenticationState: eh,
            paymentError: e_,
            purchasePreviewError: eD,
            setPurchasePreviewError: eL,
            purchaseErrorBlockRef: ef,
            purchaseTokenAuthState: ep,
            purchaseTokenHash: eE,
            bodyNode: em,
            setBodyNode: eg,
            footerNode: eA,
            setFooterNode: eI,
            modalOverlayNode: eT,
            setModalOverlayNode: eS,
            selectedStoreListing: eG,
            defaultPlanId: O,
            isGift: C,
            startingFractionalPremiumEndsAtRef: eR,
            startedPaymentFlowWithPaymentSourcesRef: ea,
            startingPremiumSubscriptionPlanIdRef: ev,
            defaultFetchableSkuIds: eO,
            application: ew,
            applicationId: eb,
            purchaseType: b,
            isEmbeddedIAP: ex,
            activitySessionId: eU,
            devShelfFetchState: eP,
            referralCode: M,
            isDisplayingWowMomentConfirmation: eF,
            wasTier2PremiumBeforePurchase: z,
            customCheckoutFlow: eB,
        },
        children: (0, i.jsx)(s.Elements, {
            options: S.XL8,
            stripe: et,
            children: (0, i.jsxs)(N, {
                shouldRethrowError: I,
                locationStack: eY,
                onUnhandledError: T,
                loadId: eo.loadId,
                selectedSkuId: el ?? null,
                selectedPlanId: eu ?? null,
                isGift: C,
                purchaseType: b,
                additionalAnalyticsData: ej,
                children: [b === S.VVm.ONE_TIME && eW, R],
            }),
        }),
    });
}

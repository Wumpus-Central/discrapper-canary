n.d(t, { A: () => T });
var i = n(477900);
n(582128);
var r = n(192308),
    a = n(73153),
    s = n(272355),
    l = n(793574),
    o = n(778705),
    d = n(404885),
    c = n(287809),
    u = n(19191),
    _ = n(448645),
    E = n(620632),
    A = n(669815),
    f = n(295405),
    h = n(652215),
    I = n(869968),
    p = n(739053);
class m extends s.A {
    _premiumPaymentModalCloseResolve = null;
    _premiumPaymentModalCloseReject = null;
    _initialize() {
        __OVERLAY__
            ? a.h.subscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen)
            : (a.h.subscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose),
              a.h.subscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell),
              a.h.subscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer),
              a.h.subscribe("POST_CONNECTION_OPEN", this._maybeFetchCheckoutRecovery),
              a.h.subscribe("POST_CONNECTION_OPEN", this._fetchUserAffinities),
              a.h.subscribe("BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", this._handlePaymentSourceChange),
              a.h.subscribe("BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS", this._handlePaymentSourceChange),
              a.h.subscribe("BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS", this._handlePaymentSourceChange));
    }
    _terminate() {
        __OVERLAY__
            ? a.h.unsubscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen)
            : (a.h.unsubscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose),
              a.h.unsubscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell),
              a.h.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer),
              a.h.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchCheckoutRecovery),
              a.h.unsubscribe("POST_CONNECTION_OPEN", this._fetchUserAffinities),
              a.h.unsubscribe("BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", this._handlePaymentSourceChange),
              a.h.unsubscribe("BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS", this._handlePaymentSourceChange),
              a.h.unsubscribe("BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS", this._handlePaymentSourceChange));
    }
    handleMessageLengthUpsell(e) {
        let { channel: t, content: a } = e;
        (0, r.mM)(async () => {
            let { default: e } = await Promise.all([n.e(235257), n.e(276725)]).then(n.bind(n, 798612));
            return (n) => (0, i.jsx)(e, { channel: t, content: a, ...n });
        });
    }
    _maybeFetchPremiumOffer = async () => {
        let e = c.default.getCurrentUser();
        if (null != e && e.verified) {
            let t = (u.A.canFractionalPremiumUserUseOffer() || !(0, _.TW)(e)) && !u.A.isFetchingOffer();
            await (0, p._D)("PremiumManager", t);
        }
        a.h.dispatch({ type: "PREMIUM_MARKETING_DATA_READY" });
    };
    _handlePaymentSourceChange = () => {
        !(0, _.TW)(c.default.getCurrentUser()) &&
            Object.keys(u.A.getState().userDiscountOffers).length > 0 &&
            (0, p._D)("UserOfferStore", !0);
    };
    _maybeFetchCheckoutRecovery = async () => {
        let e = c.default.getCurrentUser();
        null != e &&
            e.verified &&
            !(0, _.TW)(e) &&
            I.A.shouldFetchCheckoutRecovery() &&
            (await (async function () {
                try {
                    a.h.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH" });
                    let { body: e } = await E.Bo.get({ url: h.Rsh.CHECKOUT_RECOVERY, rejectWithError: !0 }),
                        t = e?.is_eligible === !0;
                    (t && !f.A.hasFetchedPaymentSources && (await (0, A.$o)()),
                        a.h.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS", isTargeted: t }));
                } catch (e) {
                    a.h.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE" });
                }
            })());
    };
    _fetchUserAffinities = () => {
        (0, d.u)();
    };
    _handlePremiumPaymentModalOpen = (e) => {
        (0, o.A)({
            ...e,
            analyticsLocations: [l.A.OVERLAY],
            onClose: (e) => {
                a.h.dispatch({ type: "PREMIUM_PAYMENT_MODAL_CLOSE", didSucceed: e });
            },
        });
    };
    _handlePremiumPaymentModalClose = (e) => {
        let { didSucceed: t } = e;
        (t && null != this._premiumPaymentModalCloseResolve
            ? this._premiumPaymentModalCloseResolve()
            : null != this._premiumPaymentModalCloseReject && this._premiumPaymentModalCloseReject(),
            (this._premiumPaymentModalCloseResolve = null),
            (this._premiumPaymentModalCloseReject = null));
    };
    openPremiumPaymentModalInApp(e) {
        if (__OVERLAY__) throw Error("Should not use this function from the overlay, use ModalAPI.openModal instead");
        return new Promise((t, n) => {
            (0, o.A)({
                ...e,
                onClose: (e) => {
                    e ? t() : n();
                },
            });
        });
    }
    openPremiumPaymentModalInOverlay(e) {
        if (__OVERLAY__) throw Error("Should not use this function from the overlay, use ModalAPI.openModal instead");
        let { initialPlanId: t, subscriptionTier: n, followupSKUInfo: i, analyticsObject: r } = e ?? {};
        return new Promise((e, s) => {
            ((this._premiumPaymentModalCloseResolve = e),
                (this._premiumPaymentModalCloseReject = s),
                a.h.dispatch({
                    type: "PREMIUM_PAYMENT_MODAL_OPEN",
                    initialPlanId: t,
                    subscriptionTier: n,
                    followupSKUInfo: i,
                    analyticsObject: r,
                }));
        });
    }
}
let T = new m();

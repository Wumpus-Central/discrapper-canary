n.d(t, { Z: () => w }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(159691),
    c = n(481060),
    u = n(355467),
    d = n(269128),
    f = n(720452),
    _ = n(502109),
    p = n(710845),
    h = n(219929),
    m = n(985754),
    g = n(351402),
    E = n(358085),
    b = n(981631),
    y = n(388032),
    O = n(213605),
    v = n(149715);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = new p.Z("ChoosePaymentSourceType"),
    N = {
        [b.HeQ.CARD]: h.ZP.Types.UNKNOWN,
        [b.HeQ.PAYPAL]: h.ZP.Types.PAYPAL,
        [b.HeQ.SOFORT]: h.ZP.Types.SOFORT,
        [b.HeQ.GIROPAY]: h.ZP.Types.GIROPAY,
        [b.HeQ.PRZELEWY24]: h.ZP.Types.PRZELEWY24,
        [b.HeQ.PAYSAFE_CARD]: h.ZP.Types.PAYSAFECARD,
        [b.HeQ.GCASH]: h.ZP.Types.GCASH,
        [b.HeQ.GRABPAY_MY]: h.ZP.Types.GRABPAY,
        [b.HeQ.MOMO_WALLET]: h.ZP.Types.MOMO_WALLET,
        [b.HeQ.VENMO]: h.ZP.Types.VENMO,
        [b.HeQ.KAKAOPAY]: h.ZP.Types.KAKAOPAY,
        [b.HeQ.GOPAY_WALLET]: h.ZP.Types.GOPAY_WALLET,
        [b.HeQ.BANCONTACT]: h.ZP.Types.BANCONTACT,
        [b.HeQ.EPS]: h.ZP.Types.EPS,
        [b.HeQ.IDEAL]: h.ZP.Types.IDEAL,
        [b.HeQ.CASH_APP]: h.ZP.Types.CASH_APP,
    },
    R = 1000,
    P = "40c266_1";
class D extends i.PureComponent {
    componentDidMount() {
        var e;
        (0, u.GE)(),
            (null != (e = this.props.paymentRequestWallets) ? e : []).length > 0 &&
                setTimeout(() => {
                    this.considerPaymentRequestWalletsLoaded();
                }, R);
    }
    considerPaymentRequestWalletsLoaded() {
        var e;
        let t = null != (e = this.props.paymentRequestWallets) ? e : [];
        if (0 === t.length || !this.arePaymentRequestWalletsLoading()) return;
        C.warn(
            "Payment request wallets failed to load in time: "
                .concat(t.join(", "), ". Max time allowed: ")
                .concat(R, " ms"),
        );
        let n = t.reduce((e, t) => A(T({}, e), { ["".concat(t, "Loaded")]: !0 }), {});
        this.setState(n);
    }
    arePaymentRequestWalletsLoading() {
        var e;
        if ((0, E.isDesktop)()) return !1;
        let t = null != (e = this.props.paymentRequestWallets) ? e : [];
        if (0 === t.length) return !1;
        for (let e of t) if (!this.state["".concat(e, "Loaded")]) return !0;
        return !1;
    }
    toggleAllPayments() {
        let { showAllPaymentMethods: e } = this.state;
        this.setState({ showAllPaymentMethods: !e });
    }
    createPaymentButtons(e) {
        return e.map((e) => {
            var t;
            let n = N[e],
                i = m.W[e](),
                a =
                    null == this.props.paymentSourceTypeRestrictions ||
                    (null == (t = this.props.paymentSourceTypeRestrictions) ? void 0 : t.includes(e));
            return (0, r.jsx)(
                l.zxk,
                {
                    onClick: () => this.props.onChooseType(e),
                    disabled: !a,
                    fullWidth: !0,
                    text: i,
                    icon: () =>
                        (0, r.jsx)(h.ZP, {
                            className: O.buttonIcon,
                            type: n,
                        }),
                },
                e,
            );
        });
    }
    render() {
        var e;
        let { showAllPaymentMethods: t } = this.state,
            {
                onChooseType: n,
                className: i,
                onStripePaymentMethodReceived: a,
                ipCountryCode: s,
                ipCountryCodeHasError: l,
                paymentRequestPaymentContext: u,
                isEligibleForTrial: p = !1,
            } = this.props,
            h = null != (e = this.props.paymentRequestWallets) ? e : [],
            m = {
                iconClassName: O.buttonIcon,
                paymentLabel: y.intl.string(y.t.ZURqX0),
                onStripePaymentMethodReceived: a,
                onChooseType: n,
                paymentRequestPaymentContext: u,
            },
            g = h.map((e, t) => {
                let n = () => this.setState({ ["".concat(e, "Loaded")]: !0 }),
                    i = {
                        onValidPaymentRequest: n,
                        onPaymentRequestFailure: n,
                    },
                    a = "".concat(e, "-").concat(t);
                return "applePay" === e ? (0, r.jsx)(_.Ch, T({}, m, i), a) : (0, r.jsx)(_.Tr, T({}, m, i), a);
            }),
            E = [],
            b = [],
            I = void 0 === s || this.arePaymentRequestWalletsLoading();
        if (l)
            E.push(
                ...this.createPaymentButtons(
                    (0, f.Q)({
                        ipCountryCode: "ALL",
                        location: P,
                    }).countryPaymentMethods,
                ),
            );
        else {
            let { countryPaymentMethods: e, remainingPaymentMethods: t } = (0, f.Q)({
                ipCountryCode: s,
                location: P,
            });
            E.push(...this.createPaymentButtons(e)), b.push(...this.createPaymentButtons(t));
        }
        let S = (0, r.jsxs)("div", {
            children: [
                (0, r.jsxs)("div", {
                    className: o()(v.wrap, v.horizontal, O.container),
                    children: [E, g],
                }),
                (0, r.jsx)("div", {
                    className: b.length > 0 ? v.flex : O.hidden,
                    children: (0, r.jsxs)(c.P3F, {
                        onClick: () => this.toggleAllPayments(),
                        className: o()(v.flex, O.allPaymentsToggleButton),
                        children: [y.intl.string(y.t["4uiQmz"]), (0, r.jsx)(d.Z, { open: t })],
                    }),
                }),
                t &&
                    (0, r.jsx)("div", {
                        className: o()(v.wrap, v.horizontal, O.allPaymentsSection, O.container, { [v.flex]: t }),
                        children: b,
                    }),
            ],
        });
        return (
            I &&
                !l &&
                (S = (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)("div", {
                            className: O.hidden,
                            children: g,
                        }),
                        (0, r.jsx)(c.$jN, { type: c.$jN.Type.SPINNING_CIRCLE }),
                    ],
                })),
            (0, r.jsxs)("div", {
                children: [
                    p && (0, r.jsx)("hr", { className: O.SeparatorUpper }),
                    (0, r.jsx)("div", {
                        className: i,
                        children: (0, r.jsx)(c.gNt, {
                            label: p ? y.intl.string(y.t.tywMsW) : y.intl.string(y.t["8lqkf8"]),
                            children: S,
                        }),
                    }),
                    p && (0, r.jsx)("hr", { className: O.SeparatorLower }),
                ],
            })
        );
    }
    constructor(e) {
        super(e),
            (this.state = {
                showAllPaymentMethods: !1,
                applePayLoaded: !1,
                googlePayLoaded: !1,
            });
    }
}
let w = s.ZP.connectStores([g.Z], () => ({
    ipCountryCode: g.Z.ipCountryCode,
    ipCountryCodeHasError: g.Z.ipCountryCodeHasError,
}))(D);

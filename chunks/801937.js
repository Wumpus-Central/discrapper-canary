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
    p = n(502109),
    _ = n(710845),
    m = n(219929),
    h = n(985754),
    g = n(351402),
    E = n(358085),
    b = n(981631),
    y = n(388032),
    O = n(213605),
    v = n(149715);
function S(e, t, n) {
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
function I(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let A = new _.Z("ChoosePaymentSourceType"),
    N = {
        [b.HeQ.CARD]: m.ZP.Types.UNKNOWN,
        [b.HeQ.PAYPAL]: m.ZP.Types.PAYPAL,
        [b.HeQ.SOFORT]: m.ZP.Types.SOFORT,
        [b.HeQ.GIROPAY]: m.ZP.Types.GIROPAY,
        [b.HeQ.PRZELEWY24]: m.ZP.Types.PRZELEWY24,
        [b.HeQ.PAYSAFE_CARD]: m.ZP.Types.PAYSAFECARD,
        [b.HeQ.GCASH]: m.ZP.Types.GCASH,
        [b.HeQ.GRABPAY_MY]: m.ZP.Types.GRABPAY,
        [b.HeQ.MOMO_WALLET]: m.ZP.Types.MOMO_WALLET,
        [b.HeQ.VENMO]: m.ZP.Types.VENMO,
        [b.HeQ.KAKAOPAY]: m.ZP.Types.KAKAOPAY,
        [b.HeQ.GOPAY_WALLET]: m.ZP.Types.GOPAY_WALLET,
        [b.HeQ.BANCONTACT]: m.ZP.Types.BANCONTACT,
        [b.HeQ.EPS]: m.ZP.Types.EPS,
        [b.HeQ.IDEAL]: m.ZP.Types.IDEAL,
        [b.HeQ.CASH_APP]: m.ZP.Types.CASH_APP,
    },
    P = 1000,
    R = "40c266_1";
class D extends i.PureComponent {
    componentDidMount() {
        var e;
        (0, u.GE)(),
            (null != (e = this.props.paymentRequestWallets) ? e : []).length > 0 &&
                setTimeout(() => {
                    this.considerPaymentRequestWalletsLoaded();
                }, P);
    }
    considerPaymentRequestWalletsLoaded() {
        var e;
        let t = null != (e = this.props.paymentRequestWallets) ? e : [];
        if (0 === t.length || !this.arePaymentRequestWalletsLoading()) return;
        A.warn(
            "Payment request wallets failed to load in time: "
                .concat(t.join(", "), ". Max time allowed: ")
                .concat(P, " ms"),
        );
        let n = t.reduce((e, t) => C(I({}, e), { ["".concat(t, "Loaded")]: !0 }), {});
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
                i = h.W[e](),
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
                        (0, r.jsx)(m.ZP, {
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
                isEligibleForTrial: _ = !1,
            } = this.props,
            m = null != (e = this.props.paymentRequestWallets) ? e : [],
            h = {
                iconClassName: O.buttonIcon,
                paymentLabel: y.intl.string(y.t.ZURqX0),
                onStripePaymentMethodReceived: a,
                onChooseType: n,
                paymentRequestPaymentContext: u,
            },
            g = m.map((e, t) => {
                let n = () => this.setState({ ["".concat(e, "Loaded")]: !0 }),
                    i = {
                        onValidPaymentRequest: n,
                        onPaymentRequestFailure: n,
                    },
                    a = "".concat(e, "-").concat(t);
                return "applePay" === e ? (0, r.jsx)(p.Ch, I({}, h, i), a) : (0, r.jsx)(p.Tr, I({}, h, i), a);
            }),
            E = [],
            b = [],
            S = void 0 === s || this.arePaymentRequestWalletsLoading();
        if (l)
            E.push(
                ...this.createPaymentButtons(
                    (0, f.Q)({
                        ipCountryCode: "ALL",
                        location: R,
                    }).countryPaymentMethods,
                ),
            );
        else {
            let { countryPaymentMethods: e, remainingPaymentMethods: t } = (0, f.Q)({
                ipCountryCode: s,
                location: R,
            });
            E.push(...this.createPaymentButtons(e)), b.push(...this.createPaymentButtons(t));
        }
        let T = (0, r.jsxs)("div", {
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
            S &&
                !l &&
                (T = (0, r.jsxs)("div", {
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
                    _ && (0, r.jsx)("hr", { className: O.SeparatorUpper }),
                    (0, r.jsx)("div", {
                        className: i,
                        children: (0, r.jsx)(c.gNt, {
                            label: _ ? y.intl.string(y.t.tywMsW) : y.intl.string(y.t["8lqkf8"]),
                            children: T,
                        }),
                    }),
                    _ && (0, r.jsx)("hr", { className: O.SeparatorLower }),
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

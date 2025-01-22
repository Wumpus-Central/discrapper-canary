var i = r(47120);
var a = r(653041);
var o = r(724458);
var s = r(200651),
    l = r(192379),
    u = r(120356),
    c = r.n(u),
    d = r(442837),
    f = r(481060),
    p = r(355467),
    h = r(269128),
    _ = r(987032),
    m = r(502109),
    g = r(710845),
    E = r(219929),
    v = r(985754),
    y = r(351402),
    b = r(358085),
    I = r(981631),
    T = r(388032),
    S = r(742415),
    A = r(652849);
let C = new g.Z('ChoosePaymentSourceType'),
    N = {
        [I.HeQ.CARD]: E.ZP.Types.UNKNOWN,
        [I.HeQ.PAYPAL]: E.ZP.Types.PAYPAL,
        [I.HeQ.SOFORT]: E.ZP.Types.SOFORT,
        [I.HeQ.GIROPAY]: E.ZP.Types.GIROPAY,
        [I.HeQ.PRZELEWY24]: E.ZP.Types.PRZELEWY24,
        [I.HeQ.PAYSAFE_CARD]: E.ZP.Types.PAYSAFECARD,
        [I.HeQ.GCASH]: E.ZP.Types.GCASH,
        [I.HeQ.GRABPAY_MY]: E.ZP.Types.GRABPAY,
        [I.HeQ.MOMO_WALLET]: E.ZP.Types.MOMO_WALLET,
        [I.HeQ.VENMO]: E.ZP.Types.VENMO,
        [I.HeQ.KAKAOPAY]: E.ZP.Types.KAKAOPAY,
        [I.HeQ.GOPAY_WALLET]: E.ZP.Types.GOPAY_WALLET,
        [I.HeQ.BANCONTACT]: E.ZP.Types.BANCONTACT,
        [I.HeQ.EPS]: E.ZP.Types.EPS,
        [I.HeQ.IDEAL]: E.ZP.Types.IDEAL,
        [I.HeQ.CASH_APP]: E.ZP.Types.CASH_APP
    },
    R = [I.HeQ.CARD, I.HeQ.PAYPAL],
    O = new Set(['DE', 'BG', 'CZ', 'DK', 'HU', 'RO', 'SE', 'CH', 'SI', 'IE', 'LV', 'MT', 'FR', 'SK', 'FI', 'GR', 'PT', 'LU', 'LT', 'CY', 'NO', 'NL', 'ES', 'BE', 'AT', 'IT']),
    D = new Map([
        [I.HeQ.SOFORT, new Set([])],
        [I.HeQ.PRZELEWY24, new Set(['ALL', 'PL'])],
        [I.HeQ.GIROPAY, new Set(['ALL', 'DE'])],
        [I.HeQ.PAYSAFE_CARD, new Set(['ALL', ...O])],
        [I.HeQ.GCASH, new Set(['ALL', 'PH'])],
        [I.HeQ.GRABPAY_MY, new Set(['ALL', 'MY'])],
        [I.HeQ.MOMO_WALLET, new Set(['ALL', 'VN'])],
        [I.HeQ.VENMO, new Set(['ALL', 'US'])],
        [I.HeQ.KAKAOPAY, new Set(['ALL', 'KR'])],
        [I.HeQ.GOPAY_WALLET, new Set(['ALL', 'ID'])],
        [I.HeQ.BANCONTACT, new Set(['ALL', 'BE'])],
        [I.HeQ.EPS, new Set(['ALL', 'AT'])],
        [I.HeQ.IDEAL, new Set(['ALL', 'NL'])],
        [I.HeQ.CASH_APP, new Set(['ALL', 'US'])]
    ]),
    x = new Map([[I.HeQ.PAYSAFE_CARD, new Set(['DE'])]]),
    L = '40c266_1',
    w = 1000;
function P(e) {
    let { enabledPaymentTypes: n, forceCountryCode: r, validCountryCodes: i } = _.ZP.getCurrentConfig({ location: L }, { autoTrackExposure: !1 }),
        a = null != e ? e : 'ALL';
    i.length > 0 && null != r && null != e && (a = i.includes(e) ? e : r);
    let o = new Set(),
        s = [];
    return (
        D.forEach((e, r) => {
            n.includes(r) && (e.has(a) ? o.add(r) : s.push(r));
        }),
        x.forEach((e, n) => {
            e.has(a) && o.add(n);
        }),
        {
            countryPaymentMethods: [...R, ...Array.from(o)],
            remainingPaymentMethods: s
        }
    );
}
class M extends l.PureComponent {
    componentDidMount() {
        var e;
        (0, p.GE)(),
            (null !== (e = this.props.paymentRequestWallets) && void 0 !== e ? e : []).length > 0 &&
                setTimeout(() => {
                    this.considerPaymentRequestWalletsLoaded();
                }, w);
    }
    considerPaymentRequestWalletsLoaded() {
        var e;
        let n = null !== (e = this.props.paymentRequestWallets) && void 0 !== e ? e : [];
        if (0 === n.length || !this.arePaymentRequestWalletsLoading()) return;
        C.warn('Payment request wallets failed to load in time: '.concat(n.join(', '), '. Max time allowed: ').concat(w, ' ms'));
        let r = n.reduce(
            (e, n) => ({
                ...e,
                [''.concat(n, 'Loaded')]: !0
            }),
            {}
        );
        this.setState(r);
    }
    arePaymentRequestWalletsLoading() {
        var e;
        if ((0, b.isDesktop)()) return !1;
        let n = null !== (e = this.props.paymentRequestWallets) && void 0 !== e ? e : [];
        if (0 === n.length) return !1;
        for (let e of n) if (!this.state[''.concat(e, 'Loaded')]) return !0;
        return !1;
    }
    toggleAllPayments() {
        let { showAllPaymentMethods: e } = this.state;
        this.setState({ showAllPaymentMethods: !e });
    }
    createPaymentButtons(e) {
        return e.map((e) => {
            var n;
            let r = N[e],
                i = v.Wo[e](),
                a = null === (n = this.props.localizedPromo) || void 0 === n ? void 0 : n.paymentSourceTypes.includes(e);
            return (0, s.jsx)(
                f.Button,
                {
                    onClick: () => this.props.onChooseType(e),
                    className: S.button,
                    children: (0, s.jsxs)('div', {
                        className: c()(A.flex, A.alignCenter),
                        children: [
                            (0, s.jsx)(E.ZP, {
                                className: S.buttonIcon,
                                type: r
                            }),
                            i,
                            a &&
                                (0, s.jsx)(f.TextBadge, {
                                    text: T.intl.string(T.t.y2b7CA),
                                    className: S.newPaymentBadge,
                                    disableColor: !0
                                })
                        ]
                    })
                },
                e
            );
        });
    }
    render() {
        var e;
        let { showAllPaymentMethods: n } = this.state,
            { onChooseType: r, className: i, onStripePaymentMethodReceived: a, ipCountryCode: o, ipCountryCodeHasError: l, isEligibleForTrial: u = !1 } = this.props,
            d = null !== (e = this.props.paymentRequestWallets) && void 0 !== e ? e : [],
            p = {
                className: S.button,
                iconClassName: S.buttonIcon,
                paymentLabel: T.intl.string(T.t.ZURqX1),
                onStripePaymentMethodReceived: a,
                onChooseType: r
            },
            _ = d.map((e, n) => {
                let r = () => this.setState({ [''.concat(e, 'Loaded')]: !0 }),
                    i = {
                        onValidPaymentRequest: r,
                        onPaymentRequestFailure: r
                    },
                    a = ''.concat(e, '-').concat(n);
                return 'applePay' === e
                    ? (0, s.jsx)(
                          m.Ch,
                          {
                              ...p,
                              ...i
                          },
                          a
                      )
                    : (0, s.jsx)(
                          m.Tr,
                          {
                              ...p,
                              ...i
                          },
                          a
                      );
            }),
            g = [],
            E = [],
            v = void 0 === o || this.arePaymentRequestWalletsLoading();
        if (l) g.push(...this.createPaymentButtons(P('ALL').countryPaymentMethods));
        else {
            let { countryPaymentMethods: e, remainingPaymentMethods: n } = P(o);
            g.push(...this.createPaymentButtons(e)), E.push(...this.createPaymentButtons(n));
        }
        let y = (0, s.jsxs)('div', {
            children: [
                (0, s.jsxs)('div', {
                    className: c()(A.wrap, A.horizontal),
                    children: [g, _]
                }),
                (0, s.jsx)('div', {
                    className: E.length > 0 ? A.flex : S.hidden,
                    children: (0, s.jsxs)(f.Clickable, {
                        onClick: () => this.toggleAllPayments(),
                        className: c()(A.flex, S.allPaymentsToggleButton),
                        children: [T.intl.string(T.t['4uiQm5']), (0, s.jsx)(h.Z, { open: n })]
                    })
                }),
                (0, s.jsx)('div', {
                    className: c()(A.wrap, A.horizontal, S.allPaymentsSection, {
                        [S.hidden]: !n,
                        [A.flex]: n
                    }),
                    children: E
                })
            ]
        });
        return (
            v &&
                !l &&
                (y = (0, s.jsxs)('div', {
                    children: [
                        (0, s.jsx)('div', {
                            className: S.hidden,
                            children: _
                        }),
                        (0, s.jsx)(f.Spinner, { type: f.Spinner.Type.SPINNING_CIRCLE })
                    ]
                })),
            (0, s.jsxs)('div', {
                children: [
                    u && (0, s.jsx)('hr', { className: S.SeparatorUpper }),
                    (0, s.jsx)(f.FormSection, {
                        title: u ? T.intl.string(T.t.tywMsb) : T.intl.string(T.t['8lqkf3']),
                        className: i,
                        children: y
                    }),
                    u && (0, s.jsx)('hr', { className: S.SeparatorLower })
                ]
            })
        );
    }
    constructor(e) {
        super(e),
            (this.state = {
                showAllPaymentMethods: !1,
                applePayLoaded: !1,
                googlePayLoaded: !1
            });
    }
}
n.ZP = d.ZP.connectStores([y.Z], () => ({
    ipCountryCode: y.Z.ipCountryCode,
    ipCountryCodeHasError: y.Z.ipCountryCodeHasError,
    localizedPromo: y.Z.localizedPricingPromo
}))(M);

n.d(t, { ZP: () => L }), n(47120), n(653041), n(724458);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(355467),
    c = n(269128),
    d = n(987032),
    f = n(502109),
    _ = n(710845),
    p = n(219929),
    h = n(985754),
    m = n(351402),
    g = n(358085),
    E = n(981631),
    v = n(388032),
    y = n(742415),
    I = n(652849);
let T = new _.Z('ChoosePaymentSourceType'),
    b = {
        [E.HeQ.CARD]: p.ZP.Types.UNKNOWN,
        [E.HeQ.PAYPAL]: p.ZP.Types.PAYPAL,
        [E.HeQ.SOFORT]: p.ZP.Types.SOFORT,
        [E.HeQ.GIROPAY]: p.ZP.Types.GIROPAY,
        [E.HeQ.PRZELEWY24]: p.ZP.Types.PRZELEWY24,
        [E.HeQ.PAYSAFE_CARD]: p.ZP.Types.PAYSAFECARD,
        [E.HeQ.GCASH]: p.ZP.Types.GCASH,
        [E.HeQ.GRABPAY_MY]: p.ZP.Types.GRABPAY,
        [E.HeQ.MOMO_WALLET]: p.ZP.Types.MOMO_WALLET,
        [E.HeQ.VENMO]: p.ZP.Types.VENMO,
        [E.HeQ.KAKAOPAY]: p.ZP.Types.KAKAOPAY,
        [E.HeQ.GOPAY_WALLET]: p.ZP.Types.GOPAY_WALLET,
        [E.HeQ.BANCONTACT]: p.ZP.Types.BANCONTACT,
        [E.HeQ.EPS]: p.ZP.Types.EPS,
        [E.HeQ.IDEAL]: p.ZP.Types.IDEAL,
        [E.HeQ.CASH_APP]: p.ZP.Types.CASH_APP
    },
    S = [E.HeQ.CARD, E.HeQ.PAYPAL],
    A = new Set(['DE', 'BG', 'CZ', 'DK', 'HU', 'RO', 'SE', 'CH', 'SI', 'IE', 'LV', 'MT', 'FR', 'SK', 'FI', 'GR', 'PT', 'LU', 'LT', 'CY', 'NO', 'NL', 'ES', 'BE', 'AT', 'IT']),
    N = new Map([
        [E.HeQ.SOFORT, new Set([])],
        [E.HeQ.PRZELEWY24, new Set(['ALL', 'PL'])],
        [E.HeQ.GIROPAY, new Set(['ALL', 'DE'])],
        [E.HeQ.PAYSAFE_CARD, new Set(['ALL', ...A])],
        [E.HeQ.GCASH, new Set(['ALL', 'PH'])],
        [E.HeQ.GRABPAY_MY, new Set(['ALL', 'MY'])],
        [E.HeQ.MOMO_WALLET, new Set(['ALL', 'VN'])],
        [E.HeQ.VENMO, new Set(['ALL', 'US'])],
        [E.HeQ.KAKAOPAY, new Set(['ALL', 'KR'])],
        [E.HeQ.GOPAY_WALLET, new Set(['ALL', 'ID'])],
        [E.HeQ.BANCONTACT, new Set(['ALL', 'BE'])],
        [E.HeQ.EPS, new Set(['ALL', 'AT'])],
        [E.HeQ.IDEAL, new Set(['ALL', 'NL'])],
        [E.HeQ.CASH_APP, new Set(['ALL', 'US'])]
    ]),
    C = new Map([[E.HeQ.PAYSAFE_CARD, new Set(['DE'])]]),
    R = '40c266_1',
    O = 1000;
function D(e) {
    let { enabledPaymentTypes: t, forceCountryCode: n, validCountryCodes: i } = d.ZP.getCurrentConfig({ location: R }, { autoTrackExposure: !1 }),
        r = null != e ? e : 'ALL';
    i.length > 0 && null != n && null != e && (r = i.includes(e) ? e : n);
    let a = new Set(),
        s = [];
    return (
        N.forEach((e, n) => {
            t.includes(n) && (e.has(r) ? a.add(n) : s.push(n));
        }),
        C.forEach((e, t) => {
            e.has(r) && a.add(t);
        }),
        {
            countryPaymentMethods: [...S, ...Array.from(a)],
            remainingPaymentMethods: s
        }
    );
}
class x extends r.PureComponent {
    componentDidMount() {
        var e;
        (0, u.GE)(),
            (null !== (e = this.props.paymentRequestWallets) && void 0 !== e ? e : []).length > 0 &&
                setTimeout(() => {
                    this.considerPaymentRequestWalletsLoaded();
                }, O);
    }
    considerPaymentRequestWalletsLoaded() {
        var e;
        let t = null !== (e = this.props.paymentRequestWallets) && void 0 !== e ? e : [];
        if (0 === t.length || !this.arePaymentRequestWalletsLoading()) return;
        T.warn('Payment request wallets failed to load in time: '.concat(t.join(', '), '. Max time allowed: ').concat(O, ' ms'));
        let n = t.reduce(
            (e, t) => ({
                ...e,
                [''.concat(t, 'Loaded')]: !0
            }),
            {}
        );
        this.setState(n);
    }
    arePaymentRequestWalletsLoading() {
        var e;
        if ((0, g.isDesktop)()) return !1;
        let t = null !== (e = this.props.paymentRequestWallets) && void 0 !== e ? e : [];
        if (0 === t.length) return !1;
        for (let e of t) if (!this.state[''.concat(e, 'Loaded')]) return !0;
        return !1;
    }
    toggleAllPayments() {
        let { showAllPaymentMethods: e } = this.state;
        this.setState({ showAllPaymentMethods: !e });
    }
    createPaymentButtons(e) {
        return e.map((e) => {
            var t;
            let n = b[e],
                r = h.Wo[e](),
                a = null === (t = this.props.localizedPromo) || void 0 === t ? void 0 : t.paymentSourceTypes.includes(e);
            return (0, i.jsx)(
                l.zxk,
                {
                    onClick: () => this.props.onChooseType(e),
                    children: (0, i.jsxs)('div', {
                        className: s()(I.flex, I.alignCenter),
                        children: [
                            (0, i.jsx)(p.ZP, {
                                className: y.buttonIcon,
                                type: n
                            }),
                            r,
                            a &&
                                (0, i.jsx)(l.IGR, {
                                    text: v.intl.string(v.t.y2b7CA),
                                    className: y.newPaymentBadge,
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
        let { showAllPaymentMethods: t } = this.state,
            { onChooseType: n, className: r, onStripePaymentMethodReceived: a, ipCountryCode: o, ipCountryCodeHasError: u, paymentRequestPaymentContext: d, isEligibleForTrial: _ = !1 } = this.props,
            p = null !== (e = this.props.paymentRequestWallets) && void 0 !== e ? e : [],
            h = {
                iconClassName: y.buttonIcon,
                paymentLabel: v.intl.string(v.t.ZURqX1),
                onStripePaymentMethodReceived: a,
                onChooseType: n,
                paymentRequestPaymentContext: d
            },
            m = p.map((e, t) => {
                let n = () => this.setState({ [''.concat(e, 'Loaded')]: !0 }),
                    r = {
                        onValidPaymentRequest: n,
                        onPaymentRequestFailure: n
                    },
                    a = ''.concat(e, '-').concat(t);
                return 'applePay' === e
                    ? (0, i.jsx)(
                          f.Ch,
                          {
                              ...h,
                              ...r
                          },
                          a
                      )
                    : (0, i.jsx)(
                          f.Tr,
                          {
                              ...h,
                              ...r
                          },
                          a
                      );
            }),
            g = [],
            E = [],
            T = void 0 === o || this.arePaymentRequestWalletsLoading();
        if (u) g.push(...this.createPaymentButtons(D('ALL').countryPaymentMethods));
        else {
            let { countryPaymentMethods: e, remainingPaymentMethods: t } = D(o);
            g.push(...this.createPaymentButtons(e)), E.push(...this.createPaymentButtons(t));
        }
        let b = (0, i.jsxs)('div', {
            children: [
                (0, i.jsxs)('div', {
                    className: s()(I.wrap, I.horizontal, y.container),
                    children: [g, m]
                }),
                (0, i.jsx)('div', {
                    className: E.length > 0 ? I.flex : y.hidden,
                    children: (0, i.jsxs)(l.P3F, {
                        onClick: () => this.toggleAllPayments(),
                        className: s()(I.flex, y.allPaymentsToggleButton),
                        children: [v.intl.string(v.t['4uiQm5']), (0, i.jsx)(c.Z, { open: t })]
                    })
                }),
                t &&
                    (0, i.jsx)('div', {
                        className: s()(I.wrap, I.horizontal, y.allPaymentsSection, y.container, { [I.flex]: t }),
                        children: E
                    })
            ]
        });
        return (
            T &&
                !u &&
                (b = (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)('div', {
                            className: y.hidden,
                            children: m
                        }),
                        (0, i.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE })
                    ]
                })),
            (0, i.jsxs)('div', {
                children: [
                    _ && (0, i.jsx)('hr', { className: y.SeparatorUpper }),
                    (0, i.jsx)(l.hjN, {
                        title: _ ? v.intl.string(v.t.tywMsb) : v.intl.string(v.t['8lqkf3']),
                        className: r,
                        children: b
                    }),
                    _ && (0, i.jsx)('hr', { className: y.SeparatorLower })
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
let L = o.ZP.connectStores([m.Z], () => ({
    ipCountryCode: m.Z.ipCountryCode,
    ipCountryCodeHasError: m.Z.ipCountryCodeHasError,
    localizedPromo: m.Z.localizedPricingPromo
}))(x);

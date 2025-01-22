n(47120), n(653041), n(724458);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    i = n(442837),
    o = n(481060),
    c = n(355467),
    u = n(269128),
    d = n(987032),
    p = n(502109),
    m = n(710845),
    h = n(219929),
    A = n(985754),
    E = n(351402),
    y = n(358085),
    P = n(981631),
    f = n(388032),
    N = n(742415),
    _ = n(652849);
let b = new m.Z('ChoosePaymentSourceType'),
    g = {
        [P.HeQ.CARD]: h.ZP.Types.UNKNOWN,
        [P.HeQ.PAYPAL]: h.ZP.Types.PAYPAL,
        [P.HeQ.SOFORT]: h.ZP.Types.SOFORT,
        [P.HeQ.GIROPAY]: h.ZP.Types.GIROPAY,
        [P.HeQ.PRZELEWY24]: h.ZP.Types.PRZELEWY24,
        [P.HeQ.PAYSAFE_CARD]: h.ZP.Types.PAYSAFECARD,
        [P.HeQ.GCASH]: h.ZP.Types.GCASH,
        [P.HeQ.GRABPAY_MY]: h.ZP.Types.GRABPAY,
        [P.HeQ.MOMO_WALLET]: h.ZP.Types.MOMO_WALLET,
        [P.HeQ.VENMO]: h.ZP.Types.VENMO,
        [P.HeQ.KAKAOPAY]: h.ZP.Types.KAKAOPAY,
        [P.HeQ.GOPAY_WALLET]: h.ZP.Types.GOPAY_WALLET,
        [P.HeQ.BANCONTACT]: h.ZP.Types.BANCONTACT,
        [P.HeQ.EPS]: h.ZP.Types.EPS,
        [P.HeQ.IDEAL]: h.ZP.Types.IDEAL,
        [P.HeQ.CASH_APP]: h.ZP.Types.CASH_APP
    },
    C = [P.HeQ.CARD, P.HeQ.PAYPAL],
    T = new Set(['DE', 'BG', 'CZ', 'DK', 'HU', 'RO', 'SE', 'CH', 'SI', 'IE', 'LV', 'MT', 'FR', 'SK', 'FI', 'GR', 'PT', 'LU', 'LT', 'CY', 'NO', 'NL', 'ES', 'BE', 'AT', 'IT']),
    I = new Map([
        [P.HeQ.SOFORT, new Set([])],
        [P.HeQ.PRZELEWY24, new Set(['ALL', 'PL'])],
        [P.HeQ.GIROPAY, new Set(['ALL', 'DE'])],
        [P.HeQ.PAYSAFE_CARD, new Set(['ALL', ...T])],
        [P.HeQ.GCASH, new Set(['ALL', 'PH'])],
        [P.HeQ.GRABPAY_MY, new Set(['ALL', 'MY'])],
        [P.HeQ.MOMO_WALLET, new Set(['ALL', 'VN'])],
        [P.HeQ.VENMO, new Set(['ALL', 'US'])],
        [P.HeQ.KAKAOPAY, new Set(['ALL', 'KR'])],
        [P.HeQ.GOPAY_WALLET, new Set(['ALL', 'ID'])],
        [P.HeQ.BANCONTACT, new Set(['ALL', 'BE'])],
        [P.HeQ.EPS, new Set(['ALL', 'AT'])],
        [P.HeQ.IDEAL, new Set(['ALL', 'NL'])],
        [P.HeQ.CASH_APP, new Set(['ALL', 'US'])]
    ]),
    S = new Map([[P.HeQ.PAYSAFE_CARD, new Set(['DE'])]]);
function v(e) {
    let { enabledPaymentTypes: t, forceCountryCode: n, validCountryCodes: a } = d.ZP.getCurrentConfig({ location: '40c266_1' }, { autoTrackExposure: !1 }),
        r = null != e ? e : 'ALL';
    a.length > 0 && null != n && null != e && (r = a.includes(e) ? e : n);
    let l = new Set(),
        s = [];
    return (
        I.forEach((e, n) => {
            t.includes(n) && (e.has(r) ? l.add(n) : s.push(n));
        }),
        S.forEach((e, t) => {
            e.has(r) && l.add(t);
        }),
        {
            countryPaymentMethods: [...C, ...Array.from(l)],
            remainingPaymentMethods: s
        }
    );
}
class R extends r.PureComponent {
    componentDidMount() {
        var e;
        (0, c.GE)(),
            (null !== (e = this.props.paymentRequestWallets) && void 0 !== e ? e : []).length > 0 &&
                setTimeout(() => {
                    this.considerPaymentRequestWalletsLoaded();
                }, 1000);
    }
    considerPaymentRequestWalletsLoaded() {
        var e;
        let t = null !== (e = this.props.paymentRequestWallets) && void 0 !== e ? e : [];
        if (0 === t.length || !this.arePaymentRequestWalletsLoading()) return;
        b.warn('Payment request wallets failed to load in time: '.concat(t.join(', '), '. Max time allowed: ').concat(1000, ' ms'));
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
        if ((0, y.isDesktop)()) return !1;
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
            let n = g[e],
                r = A.Wo[e](),
                l = null === (t = this.props.localizedPromo) || void 0 === t ? void 0 : t.paymentSourceTypes.includes(e);
            return (0, a.jsx)(
                o.Button,
                {
                    onClick: () => this.props.onChooseType(e),
                    className: N.button,
                    children: (0, a.jsxs)('div', {
                        className: s()(_.flex, _.alignCenter),
                        children: [
                            (0, a.jsx)(h.ZP, {
                                className: N.buttonIcon,
                                type: n
                            }),
                            r,
                            l &&
                                (0, a.jsx)(o.TextBadge, {
                                    text: f.intl.string(f.t.y2b7CA),
                                    className: N.newPaymentBadge,
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
            { onChooseType: n, className: r, onStripePaymentMethodReceived: l, ipCountryCode: i, ipCountryCodeHasError: c, isEligibleForTrial: d = !1 } = this.props,
            m = null !== (e = this.props.paymentRequestWallets) && void 0 !== e ? e : [],
            h = {
                className: N.button,
                iconClassName: N.buttonIcon,
                paymentLabel: f.intl.string(f.t.ZURqX1),
                onStripePaymentMethodReceived: l,
                onChooseType: n
            },
            A = m.map((e, t) => {
                let n = () => this.setState({ [''.concat(e, 'Loaded')]: !0 }),
                    r = {
                        onValidPaymentRequest: n,
                        onPaymentRequestFailure: n
                    },
                    l = ''.concat(e, '-').concat(t);
                return 'applePay' === e
                    ? (0, a.jsx)(
                          p.Ch,
                          {
                              ...h,
                              ...r
                          },
                          l
                      )
                    : (0, a.jsx)(
                          p.Tr,
                          {
                              ...h,
                              ...r
                          },
                          l
                      );
            }),
            E = [],
            y = [],
            P = void 0 === i || this.arePaymentRequestWalletsLoading();
        if (c) E.push(...this.createPaymentButtons(v('ALL').countryPaymentMethods));
        else {
            let { countryPaymentMethods: e, remainingPaymentMethods: t } = v(i);
            E.push(...this.createPaymentButtons(e)), y.push(...this.createPaymentButtons(t));
        }
        let b = (0, a.jsxs)('div', {
            children: [
                (0, a.jsxs)('div', {
                    className: s()(_.wrap, _.horizontal),
                    children: [E, A]
                }),
                (0, a.jsx)('div', {
                    className: y.length > 0 ? _.flex : N.hidden,
                    children: (0, a.jsxs)(o.Clickable, {
                        onClick: () => this.toggleAllPayments(),
                        className: s()(_.flex, N.allPaymentsToggleButton),
                        children: [f.intl.string(f.t['4uiQm5']), (0, a.jsx)(u.Z, { open: t })]
                    })
                }),
                (0, a.jsx)('div', {
                    className: s()(_.wrap, _.horizontal, N.allPaymentsSection, {
                        [N.hidden]: !t,
                        [_.flex]: t
                    }),
                    children: y
                })
            ]
        });
        return (
            P &&
                !c &&
                (b = (0, a.jsxs)('div', {
                    children: [
                        (0, a.jsx)('div', {
                            className: N.hidden,
                            children: A
                        }),
                        (0, a.jsx)(o.Spinner, { type: o.Spinner.Type.SPINNING_CIRCLE })
                    ]
                })),
            (0, a.jsxs)('div', {
                children: [
                    d && (0, a.jsx)('hr', { className: N.SeparatorUpper }),
                    (0, a.jsx)(o.FormSection, {
                        title: d ? f.intl.string(f.t.tywMsb) : f.intl.string(f.t['8lqkf3']),
                        className: r,
                        children: b
                    }),
                    d && (0, a.jsx)('hr', { className: N.SeparatorLower })
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
t.ZP = i.ZP.connectStores([E.Z], () => ({
    ipCountryCode: E.Z.ipCountryCode,
    ipCountryCodeHasError: E.Z.ipCountryCodeHasError,
    localizedPromo: E.Z.localizedPricingPromo
}))(R);

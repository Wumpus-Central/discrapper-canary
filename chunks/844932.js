(n.d(t, { k: () => b }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(481060),
    a = n(821849),
    l = n(45474),
    o = n(146528),
    c = n(450272),
    d = n(962915),
    u = n(981631),
    m = n(362786),
    p = n(474936),
    g = n(231338);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = () => {
        let [e, t] = r.useState(p.p9.TIER_0),
            [n, b] = r.useState(l.R.WHAT_YOU_LOSE),
            [_, j] = r.useState(null),
            [C, E] = r.useState(p.Xh.PREMIUM_MONTH_TIER_0),
            [O, v] = r.useState([]),
            [S, T] = r.useState(() => {
                let e = new Date();
                return (e.setMonth(e.getMonth() + 1), e);
            }),
            [I, N] = r.useState(null),
            [y, A] = r.useState(!1),
            [P, R] = r.useState(!1),
            [D, Z] = r.useState(!1);
        ((0, r.useEffect)(() => {
            (0, a.Y2)();
        }, []),
            (0, r.useEffect)(() => {
                let e = new Date();
                switch (C) {
                    case p.Xh.PREMIUM_MONTH_TIER_0:
                    case p.Xh.PREMIUM_MONTH_TIER_1:
                    case p.Xh.PREMIUM_MONTH_TIER_2:
                        e.setMonth(e.getMonth() + 1);
                        break;
                    case p.Xh.PREMIUM_YEAR_TIER_0:
                    case p.Xh.PREMIUM_YEAR_TIER_1:
                    case p.Xh.PREMIUM_YEAR_TIER_2:
                        e.setFullYear(e.getFullYear() + 1);
                }
                T(e);
            }, [C]),
            (0, r.useEffect)(() => {
                switch (e) {
                    case p.p9.TIER_0:
                        (v([
                            {
                                label: 'Nitro Basic Monthly',
                                value: p.Xh.PREMIUM_MONTH_TIER_0
                            },
                            {
                                label: 'Nitro Basic Yearly',
                                value: p.Xh.PREMIUM_YEAR_TIER_0
                            }
                        ]),
                            E(p.Xh.PREMIUM_MONTH_TIER_0));
                        break;
                    case p.p9.TIER_1:
                        (v([
                            {
                                label: 'Nitro Classic Monthly',
                                value: p.Xh.PREMIUM_MONTH_TIER_1
                            },
                            {
                                label: 'Nitro Classic Yearly',
                                value: p.Xh.PREMIUM_YEAR_TIER_1
                            }
                        ]),
                            E(p.Xh.PREMIUM_MONTH_TIER_1));
                        break;
                    case p.p9.TIER_2:
                        (v([
                            {
                                label: 'Nitro Monthly',
                                value: p.Xh.PREMIUM_MONTH_TIER_2
                            },
                            {
                                label: 'Nitro Yearly',
                                value: p.Xh.PREMIUM_YEAR_TIER_2
                            }
                        ]),
                            E(p.Xh.PREMIUM_MONTH_TIER_2));
                }
            }, [e]),
            (0, r.useEffect)(() => {
                ([l.R.CONFIRM_DISCOUNT, l.R.DISCOUNT_APPLIED].includes(n) && null === _ && j(x()),
                    n === l.R.PREVIEW &&
                        null === I &&
                        N(
                            new o.Z({
                                id: '',
                                invoiceItems: [
                                    {
                                        id: '',
                                        subscriptionPlanId: C,
                                        subscriptionPlanPrice: 200,
                                        amount: 400,
                                        quantity: 1,
                                        discounts: []
                                    },
                                    {
                                        id: '',
                                        subscriptionPlanId: p.Xh.PREMIUM_MONTH_GUILD,
                                        subscriptionPlanPrice: 400,
                                        amount: 100,
                                        quantity: 1,
                                        discounts: []
                                    }
                                ],
                                total: 200,
                                currency: g.pK.USD,
                                tax: 0,
                                taxInclusive: !0,
                                subscriptionPeriodStart: new Date(),
                                subscriptionPeriodEnd: S,
                                status: u.hUK.PAID
                            })
                        ),
                    n !== l.R.PREVIEW && null !== I && N(null));
            }, [n, _, S, C, I]));
        let w = r.useCallback(async () => {
            (Z(!0),
                await (0, s.ZDy)(
                    async () => (t) =>
                        (0, i.jsx)(
                            d.x,
                            f(h({}, t), {
                                onClose: () => {
                                    (t.onClose(), Z(!1));
                                },
                                premiumType: e,
                                churnDiscount: _,
                                planId: C,
                                renewalInvoice: I,
                                renewalInvoiceDetails: {
                                    intervalType: p.rV.MONTH,
                                    intervalCount: 1
                                },
                                errorOnCancel: y,
                                errorOnRedeem: P,
                                setActiveStep: (e) => {
                                    (b(e), t.onClose());
                                },
                                activeStep: n,
                                premiumSubscription: {
                                    id: '',
                                    planId: C,
                                    type: g.NY.PREMIUM,
                                    items: [],
                                    createdAt: new Date(),
                                    canceledAt: null,
                                    currentPeriodStart: new Date(),
                                    currentPeriodEnd: S,
                                    status: u.O0b.ACTIVE,
                                    paymentSourceId: null,
                                    paymentGateway: null,
                                    paymentGatewayPlanId: null,
                                    paymentGatewaySubscriptionId: null,
                                    trialId: null,
                                    trialEndsAt: null,
                                    renewalMutations: null,
                                    streakStartedAt: null,
                                    currency: g.pK.USD,
                                    pauseEndsAt: null,
                                    pauseReason: m.Id.UNKNOWN
                                }
                            })
                        )
                ));
        }, [e, _, C, I, y, P, n, S]);
        return (
            (0, r.useEffect)(() => {
                D && w();
            }, [n, D, w]),
            (0, i.jsxs)(c.$0, {
                children: [
                    (0, i.jsx)(s.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Cancellation Flow'
                    }),
                    (0, i.jsxs)(c.pg, {
                        children: [
                            (0, i.jsxs)(c.BZ, {
                                children: [
                                    (0, i.jsx)(s.Text, {
                                        variant: 'text-md/semibold',
                                        children: 'Premium Subscription'
                                    }),
                                    (0, i.jsx)(s.PhF, {
                                        placeholder: 'Premium Type',
                                        select: (e) => {
                                            t(e);
                                        },
                                        isSelected: (t) => e === t,
                                        serialize: (e) => ''.concat(e),
                                        options: [
                                            {
                                                label: 'Nitro Basic',
                                                value: p.p9.TIER_0
                                            },
                                            {
                                                label: 'Nitro Classic',
                                                value: p.p9.TIER_1
                                            },
                                            {
                                                label: 'Nitro',
                                                value: p.p9.TIER_2
                                            }
                                        ]
                                    })
                                ]
                            }),
                            O.length > 0 &&
                                (0, i.jsxs)(c.BZ, {
                                    children: [
                                        (0, i.jsx)(s.Text, {
                                            variant: 'text-md/semibold',
                                            children: 'Subscription Interval'
                                        }),
                                        (0, i.jsx)(s.PhF, {
                                            placeholder: 'Premium Type',
                                            select: (e) => {
                                                E(e);
                                            },
                                            isSelected: (e) => C === e,
                                            serialize: (e) => e,
                                            options: O
                                        })
                                    ]
                                }),
                            (0, i.jsxs)(c.BZ, {
                                children: [
                                    (0, i.jsx)(s.Text, {
                                        variant: 'text-md/semibold',
                                        children: 'Modal Step'
                                    }),
                                    (0, i.jsx)(s.PhF, {
                                        placeholder: 'Premium Type',
                                        select: (e) => {
                                            b(e);
                                        },
                                        isSelected: (e) => n === e,
                                        serialize: (e) => ''.concat(e),
                                        options: [
                                            {
                                                label: 'What You Lose',
                                                value: l.R.WHAT_YOU_LOSE
                                            },
                                            {
                                                label: 'Confirm Discount',
                                                value: l.R.CONFIRM_DISCOUNT
                                            },
                                            {
                                                label: 'Discount Applied',
                                                value: l.R.DISCOUNT_APPLIED
                                            },
                                            {
                                                label: 'Confirm Cancel',
                                                value: l.R.CONFIRM
                                            },
                                            {
                                                label: 'Preview Invoice',
                                                value: l.R.PREVIEW
                                            }
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)(c.BZ, {
                                children: (0, i.jsx)(s.XZJ, {
                                    value: null !== _,
                                    onChange: () => {
                                        if (null === _) return void j(x());
                                        j(null);
                                    },
                                    children: (0, i.jsx)(s.Text, {
                                        variant: 'text-md/semibold',
                                        children: 'Churn Discount'
                                    })
                                })
                            }),
                            (0, i.jsx)(c.BZ, {
                                children: (0, i.jsx)(s.XZJ, {
                                    value: P,
                                    onChange: () => {
                                        R(!P);
                                    },
                                    children: (0, i.jsx)(s.Text, {
                                        variant: 'text-md/semibold',
                                        children: 'Error on Redeem Offer'
                                    })
                                })
                            }),
                            (0, i.jsx)(c.BZ, {
                                children: (0, i.jsx)(s.XZJ, {
                                    value: y,
                                    onChange: () => {
                                        A(!y);
                                    },
                                    children: (0, i.jsx)(s.Text, {
                                        variant: 'text-md/semibold',
                                        children: 'Error on Cancel'
                                    })
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(c.E_, {
                        label: 'Cancellation Modal',
                        children: (0, i.jsx)(s.zxk, {
                            onClick: () => {
                                Z(!0);
                            },
                            variant: 'primary',
                            size: 'sm',
                            text: 'Open Modal'
                        })
                    })
                ]
            })
        );
    },
    x = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { discount: t = {} } = e;
        return f(
            h(
                {
                    id: '',
                    discount_id: '',
                    user_id: ''
                },
                e
            ),
            {
                discount: h(
                    {
                        id: '',
                        plan_ids: [],
                        user_usage_limit: 3,
                        user_usage_limit_interval: p.EA.MONTH,
                        user_usage_limit_interval_count: 3,
                        amount: '40'
                    },
                    t
                )
            }
        );
    };

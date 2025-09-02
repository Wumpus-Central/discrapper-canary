n.d(t, { k: () => y }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(755721),
    o = n(481060),
    s = n(821849),
    l = n(45474),
    c = n(146528),
    u = n(450272),
    d = n(962915),
    f = n(981631),
    _ = n(362786),
    p = n(474936),
    h = n(231338);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = () => {
        let [e, t] = i.useState(p.p9.TIER_0),
            [n, m] = i.useState(l.R.WHAT_YOU_LOSE),
            [E, y] = i.useState(null),
            [v, I] = i.useState(p.Xh.PREMIUM_MONTH_TIER_0),
            [T, S] = i.useState([]),
            [A, C] = i.useState(() => {
                let e = new Date();
                return e.setMonth(e.getMonth() + 1), e;
            }),
            [N, R] = i.useState(null),
            [P, w] = i.useState(!1),
            [D, x] = i.useState(!1),
            [L, j] = i.useState(!1);
        (0, i.useEffect)(() => {
            (0, s.Y2)();
        }, []),
            (0, i.useEffect)(() => {
                let e = new Date();
                switch (v) {
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
                C(e);
            }, [v]),
            (0, i.useEffect)(() => {
                switch (e) {
                    case p.p9.TIER_0:
                        S([
                            {
                                label: "Nitro Basic Monthly",
                                value: p.Xh.PREMIUM_MONTH_TIER_0,
                            },
                            {
                                label: "Nitro Basic Yearly",
                                value: p.Xh.PREMIUM_YEAR_TIER_0,
                            },
                        ]),
                            I(p.Xh.PREMIUM_MONTH_TIER_0);
                        break;
                    case p.p9.TIER_1:
                        S([
                            {
                                label: "Nitro Classic Monthly",
                                value: p.Xh.PREMIUM_MONTH_TIER_1,
                            },
                            {
                                label: "Nitro Classic Yearly",
                                value: p.Xh.PREMIUM_YEAR_TIER_1,
                            },
                        ]),
                            I(p.Xh.PREMIUM_MONTH_TIER_1);
                        break;
                    case p.p9.TIER_2:
                        S([
                            {
                                label: "Nitro Monthly",
                                value: p.Xh.PREMIUM_MONTH_TIER_2,
                            },
                            {
                                label: "Nitro Yearly",
                                value: p.Xh.PREMIUM_YEAR_TIER_2,
                            },
                        ]),
                            I(p.Xh.PREMIUM_MONTH_TIER_2);
                }
            }, [e]),
            (0, i.useEffect)(() => {
                [l.R.CONFIRM_DISCOUNT, l.R.DISCOUNT_APPLIED].includes(n) && null === E && y(O()),
                    n === l.R.PREVIEW &&
                        null === N &&
                        R(
                            new c.Z({
                                id: "",
                                invoiceItems: [
                                    {
                                        id: "",
                                        subscriptionPlanId: v,
                                        subscriptionPlanPrice: 200,
                                        amount: 400,
                                        quantity: 1,
                                        discounts: [],
                                    },
                                    {
                                        id: "",
                                        subscriptionPlanId: p.Xh.PREMIUM_MONTH_GUILD,
                                        subscriptionPlanPrice: 400,
                                        amount: 100,
                                        quantity: 1,
                                        discounts: [],
                                    },
                                ],
                                total: 200,
                                currency: h.pK.USD,
                                tax: 0,
                                taxInclusive: !0,
                                subscriptionPeriodStart: new Date(),
                                subscriptionPeriodEnd: A,
                                status: f.hUK.PAID,
                            }),
                        ),
                    n !== l.R.PREVIEW && null !== N && R(null);
            }, [n, E, A, v, N]);
        let M = i.useCallback(async () => {
            j(!0),
                await (0, o.ZDy)(
                    async () => (t) =>
                        (0, r.jsx)(
                            d.x,
                            b(g({}, t), {
                                onClose: () => {
                                    t.onClose(), j(!1);
                                },
                                premiumType: e,
                                churnDiscount: E,
                                planId: v,
                                renewalInvoice: N,
                                renewalInvoiceDetails: {
                                    intervalType: p.rV.MONTH,
                                    intervalCount: 1,
                                },
                                errorOnCancel: P,
                                errorOnRedeem: D,
                                setActiveStep: (e) => {
                                    m(e), t.onClose();
                                },
                                activeStep: n,
                                premiumSubscription: {
                                    id: "",
                                    planId: v,
                                    type: h.NY.PREMIUM,
                                    items: [],
                                    createdAt: new Date(),
                                    canceledAt: null,
                                    currentPeriodStart: new Date(),
                                    currentPeriodEnd: A,
                                    status: f.O0b.ACTIVE,
                                    paymentSourceId: null,
                                    paymentGateway: null,
                                    paymentGatewayPlanId: null,
                                    paymentGatewaySubscriptionId: null,
                                    trialId: null,
                                    trialEndsAt: null,
                                    renewalMutations: null,
                                    streakStartedAt: null,
                                    currency: h.pK.USD,
                                    pauseEndsAt: null,
                                    pauseReason: _.Id.UNKNOWN,
                                },
                            }),
                        ),
                );
        }, [e, E, v, N, P, D, n, A]);
        return (
            (0, i.useEffect)(() => {
                L && M();
            }, [n, L, M]),
            (0, r.jsxs)(u.$0, {
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: "heading-xl/semibold",
                        children: "Cancellation Flow",
                    }),
                    (0, r.jsxs)(u.pg, {
                        children: [
                            (0, r.jsxs)(u.BZ, {
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-md/semibold",
                                        children: "Premium Subscription",
                                    }),
                                    (0, r.jsx)(o.PhF, {
                                        placeholder: "Premium Type",
                                        select: (e) => {
                                            t(e);
                                        },
                                        isSelected: (t) => e === t,
                                        serialize: (e) => "".concat(e),
                                        options: [
                                            {
                                                label: "Nitro Basic",
                                                value: p.p9.TIER_0,
                                            },
                                            {
                                                label: "Nitro Classic",
                                                value: p.p9.TIER_1,
                                            },
                                            {
                                                label: "Nitro",
                                                value: p.p9.TIER_2,
                                            },
                                        ],
                                    }),
                                ],
                            }),
                            T.length > 0 &&
                                (0, r.jsxs)(u.BZ, {
                                    children: [
                                        (0, r.jsx)(o.Text, {
                                            variant: "text-md/semibold",
                                            children: "Subscription Interval",
                                        }),
                                        (0, r.jsx)(o.PhF, {
                                            placeholder: "Premium Type",
                                            select: (e) => {
                                                I(e);
                                            },
                                            isSelected: (e) => v === e,
                                            serialize: (e) => e,
                                            options: T,
                                        }),
                                    ],
                                }),
                            (0, r.jsxs)(u.BZ, {
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-md/semibold",
                                        children: "Modal Step",
                                    }),
                                    (0, r.jsx)(o.PhF, {
                                        placeholder: "Premium Type",
                                        select: (e) => {
                                            m(e);
                                        },
                                        isSelected: (e) => n === e,
                                        serialize: (e) => "".concat(e),
                                        options: [
                                            {
                                                label: "What You Lose",
                                                value: l.R.WHAT_YOU_LOSE,
                                            },
                                            {
                                                label: "Confirm Discount",
                                                value: l.R.CONFIRM_DISCOUNT,
                                            },
                                            {
                                                label: "Discount Applied",
                                                value: l.R.DISCOUNT_APPLIED,
                                            },
                                            {
                                                label: "Confirm Cancel",
                                                value: l.R.CONFIRM,
                                            },
                                            {
                                                label: "Preview Invoice",
                                                value: l.R.PREVIEW,
                                            },
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsx)(u.BZ, {
                                children: (0, r.jsx)(a.$q, {
                                    value: null !== E,
                                    onChange: () => {
                                        if (null === E) return void y(O());
                                        y(null);
                                    },
                                    children: (0, r.jsx)(o.Text, {
                                        variant: "text-md/semibold",
                                        children: "Churn Discount",
                                    }),
                                }),
                            }),
                            (0, r.jsx)(u.BZ, {
                                children: (0, r.jsx)(a.$q, {
                                    value: D,
                                    onChange: () => {
                                        x(!D);
                                    },
                                    children: (0, r.jsx)(o.Text, {
                                        variant: "text-md/semibold",
                                        children: "Error on Redeem Offer",
                                    }),
                                }),
                            }),
                            (0, r.jsx)(u.BZ, {
                                children: (0, r.jsx)(a.$q, {
                                    value: P,
                                    onChange: () => {
                                        w(!P);
                                    },
                                    children: (0, r.jsx)(o.Text, {
                                        variant: "text-md/semibold",
                                        children: "Error on Cancel",
                                    }),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(u.E_, {
                        label: "Cancellation Modal",
                        children: (0, r.jsx)(o.zxk, {
                            onClick: () => {
                                j(!0);
                            },
                            variant: "primary",
                            size: "sm",
                            text: "Open Modal",
                        }),
                    }),
                ],
            })
        );
    },
    O = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { discount: t = {} } = e;
        return b(
            g(
                {
                    id: "",
                    discount_id: "",
                    user_id: "",
                },
                e,
            ),
            {
                discount: g(
                    {
                        id: "",
                        plan_ids: [],
                        user_usage_limit: 3,
                        user_usage_limit_interval: p.EA.MONTH,
                        user_usage_limit_interval_count: 3,
                        amount: "40",
                    },
                    t,
                ),
            },
        );
    };

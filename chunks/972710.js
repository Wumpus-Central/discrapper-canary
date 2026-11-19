var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(284009),
    o = n.n(a),
    u = n(607399),
    c = n(855986),
    d = n(189213),
    m = n(683071),
    g = n(192308),
    A = n(123292),
    E = n(834730),
    h = n(793574),
    f = n(688810),
    p = n(701273),
    S = n(669815),
    T = n(780964),
    x = n(766075),
    I = n(287809),
    _ = n(129230),
    b = n(448645),
    C = n(327479),
    y = n(652215),
    N = n(601107),
    v = n(792996),
    j = n(583690);
let O = [y.Dmq.PAST_DUE, y.Dmq.ACCOUNT_HOLD, y.Dmq.BILLING_RETRY],
    D = (e) => {
        let { transitionState: t, onClose: n, subscription: s, analyticsLocations: r, analyticsLocation: a } = e,
            [o, u] = l.useState(!1),
            [c, g] = l.useState(!1);
        l.useEffect(() => {
            _.default.track(y.HAw.GUILD_BOOST_PAST_DUE_CANCEL_MODAL_VIEWED, {
                subscription_id: s.id,
                location_stack: r,
            });
        }, []);
        let A = [
            { text: v.intl.string(v.t.oEAioF), onClick: () => n(), variant: "secondary" },
            {
                text: v.intl.string(v.t["cY+Oob"]),
                onClick: () =>
                    (async function () {
                        (u(!0), g(!1));
                        try {
                            (await (0, S.M2)(s.id, r, a),
                                _.default.track(y.HAw.GUILD_BOOST_PAST_DUE_CANCELLATION_FLOW_COMPLETED, {
                                    subscription_id: s.id,
                                    location_stack: r,
                                }),
                                (0, S.hP)(),
                                n());
                        } catch (e) {
                            (g(!0), u(!1));
                        }
                    })(),
                disabled: o,
                variant: "critical-primary",
                loading: o,
            },
        ];
        return (0, i.jsx)(d.a, {
            size: "md",
            transitionState: t,
            title: v.intl.string(v.t.LZunzZ),
            subtitle: v.intl.string(v.t.FClXh9),
            actions: A,
            onClose: async () => n(),
            children: c
                ? (0, i.jsx)(m.w, { type: "critical", message: v.intl.string(v.t["5mlOCW"]), role: "alert" })
                : null,
        });
    };
n.d(
    t,
    {},
    {
        C: function (e) {
            let t,
                {
                    subscription: n,
                    renewalInvoicePreview: l,
                    fractionalPremiumInfo: s,
                    fromStandaloneBillingPage: a = !0,
                    analyticsLocation: d,
                } = e,
                m = (0, c.bG)([I.default], () => {
                    let e = I.default.getCurrentUser();
                    return (o()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e);
                }),
                { analyticsLocations: S } = (0, f.Ay)(h.A.GUILD_BOOSTING_SUBSCRIPTION_HEADER);
            if (0 === (0, b.bx)(n.additionalPlans)) return null;
            let { status: _ } = n,
                P = (0, b.$k)(n),
                R = !P && n.isBoostOnly && O.includes(n.status);
            if (P) t = j.v2;
            else
                switch (_) {
                    case y.Dmq.PAST_DUE:
                    case y.Dmq.ACCOUNT_HOLD:
                    case y.Dmq.BILLING_RETRY:
                        t = j.P7;
                        break;
                    case y.Dmq.PAUSE_PENDING:
                    case y.Dmq.PAUSED:
                        t = n.pauseReason !== N.qf.FRACTIONAL_PREMIUM ? j.C7 : j.wG;
                        break;
                    default:
                        t = j.wG;
                }
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)("div", {
                        className: r()(t, j.Qn),
                        children: [
                            (0, i.jsx)("div", { className: j.Kq }),
                            (0, i.jsx)("div", { className: j.OL }),
                            (0, i.jsxs)("div", {
                                className: j.eC,
                                children: [
                                    (0, i.jsx)("div", { className: r()(j.Ab, { [j.aD]: P }) }),
                                    (0, i.jsx)("div", {
                                        children: (0, b.Uf)({
                                            subscription: n,
                                            renewalInvoicePreview: l,
                                            user: m,
                                            fractionalPremiumInfo: s,
                                        }),
                                    }),
                                ],
                            }),
                            a &&
                                (0, i.jsxs)("div", {
                                    className: j.BQ,
                                    children: [
                                        R &&
                                            (0, i.jsx)("div", {
                                                className: j.x7,
                                                children: (0, i.jsx)(A.Q, {
                                                    variant: "always-white",
                                                    onClick: function () {
                                                        O.includes(n.status) &&
                                                            (0, g.mM)(
                                                                async () => (e) =>
                                                                    (0, i.jsx)(D, {
                                                                        ...e,
                                                                        subscription: n,
                                                                        analyticsLocations: S,
                                                                        analyticsLocation: d,
                                                                    }),
                                                            );
                                                    },
                                                    size: "sm",
                                                    text: v.intl.string(v.t["ETE/oC"]),
                                                }),
                                            }),
                                        (0, i.jsx)(C.A, {
                                            onClick: () =>
                                                (0, x.openUserSettings)(T.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
                                            text: v.intl.string(v.t["NQ5g/U"]),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    !a &&
                        (0, i.jsx)(E.E, {
                            className: j.yW,
                            variant: "body-sm/normal",
                            children: v.intl.format(u.Fr ? v.t.uxYBEa : v.t.k6haR9, {
                                openAppHook: () => (0, p.A)("app"),
                            }),
                        }),
                ],
            });
        },
    },
);

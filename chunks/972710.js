n.d(t, { C: () => D });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(284009),
    o = n.n(r),
    d = n(607399),
    u = n(189213),
    c = n(123292),
    g = n(311907),
    m = n(683071),
    _ = n(192308),
    A = n(834730),
    h = n(793574),
    p = n(688810),
    x = n(701273),
    E = n(323082),
    T = n(780964),
    S = n(858897),
    f = n(287809),
    b = n(954571),
    C = n(927578),
    v = n(866312),
    N = n(327479),
    I = n(652215),
    y = n(601107),
    j = n(985018),
    O = n(428797);
let R = [I.Dmq.PAST_DUE, I.Dmq.ACCOUNT_HOLD, I.Dmq.BILLING_RETRY],
    L = (e) => {
        let { transitionState: t, onClose: n, subscription: l, analyticsLocations: a, analyticsLocation: r } = e,
            [o, d] = s.useState(!1),
            [c, g] = s.useState(!1);
        s.useEffect(() => {
            b.default.track(I.HAw.GUILD_BOOST_PAST_DUE_CANCEL_MODAL_VIEWED, {
                subscription_id: l.id,
                location_stack: a,
            });
        }, []);
        let _ = async () => {
                d(!0), g(!1);
                try {
                    await (0, E.M2)(l.id, a, r),
                        b.default.track(I.HAw.GUILD_BOOST_PAST_DUE_CANCELLATION_FLOW_COMPLETED, {
                            subscription_id: l.id,
                            location_stack: a,
                        }),
                        (0, E.hP)(),
                        n();
                } catch (e) {
                    g(!0), d(!1);
                }
            },
            A = [
                { text: j.intl.string(j.t.oEAioF), onClick: () => n(), variant: "secondary" },
                {
                    text: j.intl.string(j.t["cY+Oob"]),
                    onClick: () => _(),
                    disabled: o,
                    variant: "critical-primary",
                    loading: o,
                },
            ];
        return (0, i.jsx)(u.Modal, {
            size: "md",
            transitionState: t,
            title: j.intl.string(j.t.LZunzZ),
            subtitle: j.intl.string(j.t.FClXh9),
            actions: A,
            onClose: async () => n(),
            children: c ? (0, i.jsx)(m.w, { type: "critical", children: j.intl.string(j.t["5mlOCW"]) }) : null,
        });
    };
function D(e) {
    let t,
        {
            subscription: n,
            renewalInvoicePreview: s,
            fractionalPremiumInfo: l,
            fromStandaloneBillingPage: r = !0,
            analyticsLocation: u,
        } = e,
        m = (0, g.bG)([f.default], () => {
            let e = f.default.getCurrentUser();
            return o()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e;
        }),
        { analyticsLocations: E } = (0, p.Ay)(h.A.GUILD_BOOSTING_SUBSCRIPTION_HEADER),
        b = (0, v.A)({ location: "GuildBoostingHeader" });
    if (0 === (0, C.bx)(n.additionalPlans)) return null;
    let { status: D } = n,
        P = (0, C.$k)(n),
        G = b && !P && n.isBoostOnly && R.includes(n.status);
    if (P) t = O.v2;
    else
        switch (D) {
            case I.Dmq.PAST_DUE:
            case I.Dmq.ACCOUNT_HOLD:
            case I.Dmq.BILLING_RETRY:
                t = O.P7;
                break;
            case I.Dmq.PAUSE_PENDING:
            case I.Dmq.PAUSED:
                t = n.pauseReason !== y.qf.FRACTIONAL_PREMIUM ? O.C7 : O.wG;
                break;
            default:
                t = O.wG;
        }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: a()(t, O.Qn),
                children: [
                    (0, i.jsx)("div", { className: O.Kq }),
                    (0, i.jsx)("div", { className: O.OL }),
                    (0, i.jsxs)("div", {
                        className: O.eC,
                        children: [
                            (0, i.jsx)("div", { className: a()(O.Ab, { [O.aD]: P }) }),
                            (0, i.jsx)("div", {
                                children: (0, C.Uf)({
                                    subscription: n,
                                    renewalInvoicePreview: s,
                                    user: m,
                                    fractionalPremiumInfo: l,
                                }),
                            }),
                        ],
                    }),
                    r &&
                        (0, i.jsxs)("div", {
                            className: O.BQ,
                            children: [
                                G &&
                                    (0, i.jsx)("div", {
                                        className: O.x7,
                                        children: (0, i.jsx)(c.Q, {
                                            variant: "always-white",
                                            onClick: () => {
                                                R.includes(n.status) &&
                                                    (0, _.openModalLazy)(
                                                        async () => (e) =>
                                                            (0, i.jsx)(L, {
                                                                ...e,
                                                                subscription: n,
                                                                analyticsLocations: E,
                                                                analyticsLocation: u,
                                                            }),
                                                    );
                                            },
                                            size: "sm",
                                            text: j.intl.string(j.t["ETE/oC"]),
                                        }),
                                    }),
                                (0, i.jsx)(N.A, {
                                    onClick: () => (0, S.openUserSettings)(T.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
                                    text: j.intl.string(j.t["NQ5g/U"]),
                                }),
                            ],
                        }),
                ],
            }),
            !r &&
                (0, i.jsx)(A.E, {
                    className: O.yW,
                    variant: "text-sm/normal",
                    children: j.intl.format(d.Fr ? j.t.uxYBEa : j.t.k6haR9, { openAppHook: () => (0, x.A)("app") }),
                }),
        ],
    });
}

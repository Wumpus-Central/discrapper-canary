n.d(t, { C: () => R });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(284009),
    o = n.n(r),
    d = n(607399),
    c = n(158954),
    u = n(311907),
    _ = n(397927),
    m = n(384904),
    g = n(793574),
    A = n(688810),
    x = n(701273),
    h = n(780964),
    p = n(840065),
    T = n(287809),
    E = n(954571),
    S = n(927578),
    f = n(866312),
    C = n(327479),
    b = n(652215),
    N = n(601107),
    I = n(985018),
    v = n(141384);
let j = [b.Dmq.PAST_DUE, b.Dmq.ACCOUNT_HOLD, b.Dmq.BILLING_RETRY],
    y = (e) => {
        let { transitionState: t, onClose: n, subscription: l, analyticsLocations: a, analyticsLocation: r } = e,
            [o, d] = s.useState(!1),
            [u, g] = s.useState(!1);
        s.useEffect(() => {
            E.default.track(b.HAw.GUILD_BOOST_PAST_DUE_CANCEL_MODAL_VIEWED, {
                subscription_id: l.id,
                location_stack: a,
            });
        }, []);
        let A = async () => {
                d(!0), g(!1);
                try {
                    await (0, m.M2)(l.id, a, r),
                        E.default.track(b.HAw.GUILD_BOOST_PAST_DUE_CANCELLATION_FLOW_COMPLETED, {
                            subscription_id: l.id,
                            location_stack: a,
                        }),
                        (0, m.hP)(),
                        n();
                } catch (e) {
                    g(!0), d(!1);
                }
            },
            x = [
                { text: I.intl.string(I.t.oEAioF), onClick: () => n(), variant: "secondary" },
                {
                    text: I.intl.string(I.t["cY+Oob"]),
                    onClick: () => A(),
                    disabled: o,
                    variant: "critical-primary",
                    loading: o,
                },
            ];
        return (0, i.jsx)(c.Modal, {
            size: "md",
            transitionState: t,
            title: I.intl.string(I.t.LZunzZ),
            subtitle: I.intl.string(I.t.FClXh9),
            actions: x,
            onClose: async () => n(),
            children: u ? (0, i.jsx)(_.wx6, { type: "critical", children: I.intl.string(I.t["5mlOCW"]) }) : null,
        });
    };
function R(e) {
    let t,
        {
            subscription: n,
            renewalInvoicePreview: s,
            fractionalPremiumInfo: l,
            fromStandaloneBillingPage: r = !0,
            analyticsLocation: m,
        } = e,
        E = (0, u.bG)([T.default], () => {
            let e = T.default.getCurrentUser();
            return o()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e;
        }),
        { analyticsLocations: R } = (0, A.Ay)(g.A.GUILD_BOOSTING_SUBSCRIPTION_HEADER),
        O = (0, f.A)({ location: "GuildBoostingHeader" });
    if (0 === (0, S.bx)(n.additionalPlans)) return null;
    let { status: L } = n,
        D = (0, S.$k)(n),
        P = O && !D && n.isBoostOnly && j.includes(n.status);
    if (D) t = v.v2;
    else
        switch (L) {
            case b.Dmq.PAST_DUE:
            case b.Dmq.ACCOUNT_HOLD:
            case b.Dmq.BILLING_RETRY:
                t = v.P7;
                break;
            case b.Dmq.PAUSE_PENDING:
            case b.Dmq.PAUSED:
                t = n.pauseReason !== N.qf.FRACTIONAL_PREMIUM ? v.C7 : v.wG;
                break;
            default:
                t = v.wG;
        }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: a()(t, v.Qn),
                children: [
                    (0, i.jsx)("div", { className: v.Kq }),
                    (0, i.jsx)("div", { className: v.OL }),
                    (0, i.jsxs)("div", {
                        className: v.eC,
                        children: [
                            (0, i.jsx)("div", { className: a()(v.Ab, { [v.aD]: D }) }),
                            (0, i.jsx)("div", {
                                children: (0, S.Uf)({
                                    subscription: n,
                                    renewalInvoicePreview: s,
                                    user: E,
                                    fractionalPremiumInfo: l,
                                }),
                            }),
                        ],
                    }),
                    r &&
                        (0, i.jsxs)("div", {
                            className: v.BQ,
                            children: [
                                P &&
                                    (0, i.jsx)("div", {
                                        className: v.x7,
                                        children: (0, i.jsx)(c.QWc, {
                                            variant: "always-white",
                                            onClick: () => {
                                                j.includes(n.status) &&
                                                    (0, _.mMO)(
                                                        async () => (e) =>
                                                            (0, i.jsx)(y, {
                                                                ...e,
                                                                subscription: n,
                                                                analyticsLocations: R,
                                                                analyticsLocation: m,
                                                            }),
                                                    );
                                            },
                                            size: "sm",
                                            text: I.intl.string(I.t["ETE/oC"]),
                                        }),
                                    }),
                                (0, i.jsx)(C.A, {
                                    onClick: () => (0, p.openUserSettings)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
                                    text: I.intl.string(I.t["NQ5g/U"]),
                                }),
                            ],
                        }),
                ],
            }),
            !r &&
                (0, i.jsx)(_.Text, {
                    className: v.yW,
                    variant: "text-sm/normal",
                    children: I.intl.format(d.Fr ? I.t.uxYBEa : I.t.k6haR9, { openAppHook: () => (0, x.A)("app") }),
                }),
        ],
    });
}

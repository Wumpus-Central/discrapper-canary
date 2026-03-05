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
    g = n(384904),
    m = n(793574),
    A = n(688810),
    h = n(701273),
    p = n(780964),
    x = n(840065),
    E = n(287809),
    T = n(954571),
    S = n(927578),
    C = n(866312),
    f = n(327479),
    I = n(652215),
    b = n(601107),
    N = n(985018),
    v = n(141384);
let j = [I.Dmq.PAST_DUE, I.Dmq.ACCOUNT_HOLD, I.Dmq.BILLING_RETRY],
    O = (e) => {
        let { transitionState: t, onClose: n, subscription: l, analyticsLocations: a, analyticsLocation: r } = e,
            [o, d] = s.useState(!1),
            [u, m] = s.useState(!1);
        s.useEffect(() => {
            T.default.track(I.HAw.GUILD_BOOST_PAST_DUE_CANCEL_MODAL_VIEWED, {
                subscription_id: l.id,
                location_stack: a,
            });
        }, []);
        let A = async () => {
                d(!0), m(!1);
                try {
                    await (0, g.M2)(l.id, a, r),
                        T.default.track(I.HAw.GUILD_BOOST_PAST_DUE_CANCELLATION_FLOW_COMPLETED, {
                            subscription_id: l.id,
                            location_stack: a,
                        }),
                        (0, g.hP)(),
                        n();
                } catch (e) {
                    m(!0), d(!1);
                }
            },
            h = [
                { text: N.intl.string(N.t.oEAioF), onClick: () => n(), variant: "secondary" },
                {
                    text: N.intl.string(N.t["cY+Oob"]),
                    onClick: () => A(),
                    disabled: o,
                    variant: "critical-primary",
                    loading: o,
                },
            ];
        return (0, i.jsx)(c.Modal, {
            size: "md",
            transitionState: t,
            title: N.intl.string(N.t.LZunzZ),
            subtitle: N.intl.string(N.t.FClXh9),
            actions: h,
            onClose: async () => n(),
            children: u ? (0, i.jsx)(_.wx6, { type: "critical", children: N.intl.string(N.t["5mlOCW"]) }) : null,
        });
    };
function R(e) {
    let t,
        {
            subscription: n,
            renewalInvoicePreview: s,
            fractionalPremiumInfo: l,
            fromStandaloneBillingPage: r = !0,
            analyticsLocation: g,
        } = e,
        T = (0, u.bG)([E.default], () => {
            let e = E.default.getCurrentUser();
            return o()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e;
        }),
        { analyticsLocations: R } = (0, A.Ay)(m.A.GUILD_BOOSTING_SUBSCRIPTION_HEADER),
        y = (0, C.A)({ location: "GuildBoostingHeader" });
    if (0 === (0, S.bx)(n.additionalPlans)) return null;
    let { status: P } = n,
        L = (0, S.$k)(n),
        D = y && !L && n.isBoostOnly && j.includes(n.status);
    if (L) t = v.v2;
    else
        switch (P) {
            case I.Dmq.PAST_DUE:
            case I.Dmq.ACCOUNT_HOLD:
            case I.Dmq.BILLING_RETRY:
                t = v.P7;
                break;
            case I.Dmq.PAUSE_PENDING:
            case I.Dmq.PAUSED:
                t = n.pauseReason !== b.qf.FRACTIONAL_PREMIUM ? v.C7 : v.wG;
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
                            (0, i.jsx)("div", { className: a()(v.Ab, { [v.aD]: L }) }),
                            (0, i.jsx)("div", {
                                children: (0, S.Uf)({
                                    subscription: n,
                                    renewalInvoicePreview: s,
                                    user: T,
                                    fractionalPremiumInfo: l,
                                }),
                            }),
                        ],
                    }),
                    r &&
                        (0, i.jsxs)("div", {
                            className: v.BQ,
                            children: [
                                D &&
                                    (0, i.jsx)("div", {
                                        className: v.x7,
                                        children: (0, i.jsx)(c.QWc, {
                                            variant: "always-white",
                                            onClick: () => {
                                                j.includes(n.status) &&
                                                    (0, _.mMO)(
                                                        async () => (e) =>
                                                            (0, i.jsx)(O, {
                                                                ...e,
                                                                subscription: n,
                                                                analyticsLocations: R,
                                                                analyticsLocation: g,
                                                            }),
                                                    );
                                            },
                                            size: "sm",
                                            text: N.intl.string(N.t["ETE/oC"]),
                                        }),
                                    }),
                                (0, i.jsx)(f.A, {
                                    onClick: () =>
                                        (0, x.openUserSettings)(p.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                                            section: I.nc_.GUILD_BOOSTING,
                                        }),
                                    text: N.intl.string(N.t["NQ5g/U"]),
                                }),
                            ],
                        }),
                ],
            }),
            !r &&
                (0, i.jsx)(_.Text, {
                    className: v.yW,
                    variant: "text-sm/normal",
                    children: N.intl.format(d.Fr ? N.t.uxYBEa : N.t.k6haR9, { openAppHook: () => (0, h.A)("app") }),
                }),
        ],
    });
}

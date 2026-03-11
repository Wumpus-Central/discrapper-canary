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
    A = n(793574),
    m = n(688810),
    h = n(701273),
    p = n(780964),
    x = n(840065),
    E = n(287809),
    T = n(954571),
    S = n(927578),
    C = n(866312),
    I = n(327479),
    f = n(652215),
    N = n(601107),
    b = n(985018),
    v = n(20966);
let O = [f.Dmq.PAST_DUE, f.Dmq.ACCOUNT_HOLD, f.Dmq.BILLING_RETRY],
    j = (e) => {
        let { transitionState: t, onClose: n, subscription: l, analyticsLocations: a, analyticsLocation: r } = e,
            [o, d] = s.useState(!1),
            [u, A] = s.useState(!1);
        s.useEffect(() => {
            T.default.track(f.HAw.GUILD_BOOST_PAST_DUE_CANCEL_MODAL_VIEWED, {
                subscription_id: l.id,
                location_stack: a,
            });
        }, []);
        let m = async () => {
                d(!0), A(!1);
                try {
                    await (0, g.M2)(l.id, a, r),
                        T.default.track(f.HAw.GUILD_BOOST_PAST_DUE_CANCELLATION_FLOW_COMPLETED, {
                            subscription_id: l.id,
                            location_stack: a,
                        }),
                        (0, g.hP)(),
                        n();
                } catch (e) {
                    A(!0), d(!1);
                }
            },
            h = [
                { text: b.intl.string(b.t.oEAioF), onClick: () => n(), variant: "secondary" },
                {
                    text: b.intl.string(b.t["cY+Oob"]),
                    onClick: () => m(),
                    disabled: o,
                    variant: "critical-primary",
                    loading: o,
                },
            ];
        return (0, i.jsx)(c.Modal, {
            size: "md",
            transitionState: t,
            title: b.intl.string(b.t.LZunzZ),
            subtitle: b.intl.string(b.t.FClXh9),
            actions: h,
            onClose: async () => n(),
            children: u ? (0, i.jsx)(_.wx6, { type: "critical", children: b.intl.string(b.t["5mlOCW"]) }) : null,
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
        { analyticsLocations: R } = (0, m.Ay)(A.A.GUILD_BOOSTING_SUBSCRIPTION_HEADER),
        y = (0, C.A)({ location: "GuildBoostingHeader" });
    if (0 === (0, S.bx)(n.additionalPlans)) return null;
    let { status: P } = n,
        D = (0, S.$k)(n),
        L = y && !D && n.isBoostOnly && O.includes(n.status);
    if (D) t = v.v2;
    else
        switch (P) {
            case f.Dmq.PAST_DUE:
            case f.Dmq.ACCOUNT_HOLD:
            case f.Dmq.BILLING_RETRY:
                t = v.P7;
                break;
            case f.Dmq.PAUSE_PENDING:
            case f.Dmq.PAUSED:
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
                                L &&
                                    (0, i.jsx)("div", {
                                        className: v.x7,
                                        children: (0, i.jsx)(c.QWc, {
                                            variant: "always-white",
                                            onClick: () => {
                                                O.includes(n.status) &&
                                                    (0, _.mMO)(
                                                        async () => (e) =>
                                                            (0, i.jsx)(j, {
                                                                ...e,
                                                                subscription: n,
                                                                analyticsLocations: R,
                                                                analyticsLocation: g,
                                                            }),
                                                    );
                                            },
                                            size: "sm",
                                            text: b.intl.string(b.t["ETE/oC"]),
                                        }),
                                    }),
                                (0, i.jsx)(I.A, {
                                    onClick: () =>
                                        (0, x.openUserSettings)(p.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                                            section: f.nc_.GUILD_BOOSTING,
                                        }),
                                    text: b.intl.string(b.t["NQ5g/U"]),
                                }),
                            ],
                        }),
                ],
            }),
            !r &&
                (0, i.jsx)(_.Text, {
                    className: v.yW,
                    variant: "text-sm/normal",
                    children: b.intl.format(d.Fr ? b.t.uxYBEa : b.t.k6haR9, { openAppHook: () => (0, h.A)("app") }),
                }),
        ],
    });
}

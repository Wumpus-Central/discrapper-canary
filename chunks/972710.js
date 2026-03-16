n.d(t, { C: () => y });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(284009),
    o = n.n(a),
    d = n(607399),
    c = n(158954),
    u = n(311907),
    _ = n(397927),
    m = n(384904),
    g = n(793574),
    A = n(688810),
    h = n(701273),
    x = n(780964),
    p = n(840065),
    T = n(287809),
    E = n(954571),
    C = n(927578),
    S = n(866312),
    f = n(327479),
    N = n(652215),
    b = n(601107),
    I = n(985018),
    v = n(141384);
let j = [N.Dmq.PAST_DUE, N.Dmq.ACCOUNT_HOLD, N.Dmq.BILLING_RETRY],
    O = (e) => {
        let { transitionState: t, onClose: n, subscription: l, analyticsLocations: r, analyticsLocation: a } = e,
            [o, d] = s.useState(!1),
            [u, g] = s.useState(!1);
        s.useEffect(() => {
            E.default.track(N.HAw.GUILD_BOOST_PAST_DUE_CANCEL_MODAL_VIEWED, {
                subscription_id: l.id,
                location_stack: r,
            });
        }, []);
        let A = async () => {
                d(!0), g(!1);
                try {
                    await (0, m.M2)(l.id, r, a),
                        E.default.track(N.HAw.GUILD_BOOST_PAST_DUE_CANCELLATION_FLOW_COMPLETED, {
                            subscription_id: l.id,
                            location_stack: r,
                        }),
                        (0, m.hP)(),
                        n();
                } catch (e) {
                    g(!0), d(!1);
                }
            },
            h = [
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
            actions: h,
            onClose: async () => n(),
            children: u ? (0, i.jsx)(_.wx6, { type: "critical", children: I.intl.string(I.t["5mlOCW"]) }) : null,
        });
    };
function y(e) {
    let t,
        {
            subscription: n,
            renewalInvoicePreview: s,
            fractionalPremiumInfo: l,
            fromStandaloneBillingPage: a = !0,
            analyticsLocation: m,
        } = e,
        E = (0, u.bG)([T.default], () => {
            let e = T.default.getCurrentUser();
            return o()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e;
        }),
        { analyticsLocations: y } = (0, A.Ay)(g.A.GUILD_BOOSTING_SUBSCRIPTION_HEADER),
        R = (0, S.A)({ location: "GuildBoostingHeader" });
    if (0 === (0, C.bx)(n.additionalPlans)) return null;
    let { status: P } = n,
        D = (0, C.$k)(n),
        L = R && !D && n.isBoostOnly && j.includes(n.status);
    if (D) t = v.v2;
    else
        switch (P) {
            case N.Dmq.PAST_DUE:
            case N.Dmq.ACCOUNT_HOLD:
            case N.Dmq.BILLING_RETRY:
                t = v.P7;
                break;
            case N.Dmq.PAUSE_PENDING:
            case N.Dmq.PAUSED:
                t = n.pauseReason !== b.qf.FRACTIONAL_PREMIUM ? v.C7 : v.wG;
                break;
            default:
                t = v.wG;
        }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: r()(t, v.Qn),
                children: [
                    (0, i.jsx)("div", { className: v.Kq }),
                    (0, i.jsx)("div", { className: v.OL }),
                    (0, i.jsxs)("div", {
                        className: v.eC,
                        children: [
                            (0, i.jsx)("div", { className: r()(v.Ab, { [v.aD]: D }) }),
                            (0, i.jsx)("div", {
                                children: (0, C.Uf)({
                                    subscription: n,
                                    renewalInvoicePreview: s,
                                    user: E,
                                    fractionalPremiumInfo: l,
                                }),
                            }),
                        ],
                    }),
                    a &&
                        (0, i.jsxs)("div", {
                            className: v.BQ,
                            children: [
                                L &&
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
                                                                analyticsLocations: y,
                                                                analyticsLocation: m,
                                                            }),
                                                    );
                                            },
                                            size: "sm",
                                            text: I.intl.string(I.t["ETE/oC"]),
                                        }),
                                    }),
                                (0, i.jsx)(f.A, {
                                    onClick: () =>
                                        (0, p.openUserSettings)(x.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                                            section: N.nc_.GUILD_BOOSTING,
                                        }),
                                    text: I.intl.string(I.t["NQ5g/U"]),
                                }),
                            ],
                        }),
                ],
            }),
            !a &&
                (0, i.jsx)(_.Text, {
                    className: v.yW,
                    variant: "text-sm/normal",
                    children: I.intl.format(d.Fr ? I.t.uxYBEa : I.t.k6haR9, { openAppHook: () => (0, h.A)("app") }),
                }),
        ],
    });
}

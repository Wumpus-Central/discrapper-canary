n.d(t, { C: () => O });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(284009),
    o = n.n(r),
    c = n(607399),
    d = n(158954),
    u = n(311907),
    _ = n(397927),
    m = n(384904),
    A = n(793574),
    g = n(688810),
    h = n(701273),
    x = n(780964),
    p = n(840065),
    E = n(287809),
    C = n(927578),
    T = n(866312),
    S = n(327479),
    I = n(652215),
    f = n(601107),
    N = n(985018),
    b = n(141384);
let j = [I.Dmq.PAST_DUE, I.Dmq.ACCOUNT_HOLD, I.Dmq.BILLING_RETRY],
    v = (e) => {
        let { transitionState: t, onClose: n, subscription: a, analyticsLocations: l, analyticsLocation: r } = e,
            [o, c] = s.useState(!1),
            [u, A] = s.useState(!1),
            g = async () => {
                c(!0), A(!1);
                try {
                    await (0, m.M2)(a.id, l, r), (0, m.hP)(), n();
                } catch (e) {
                    A(!0), c(!1);
                }
            },
            h = [
                { text: N.intl.string(N.t.oEAioF), onClick: () => n(), variant: "secondary" },
                {
                    text: N.intl.string(N.t["cY+Oob"]),
                    onClick: () => g(),
                    disabled: o,
                    variant: "critical-primary",
                    loading: o,
                },
            ];
        return (0, i.jsx)(d.Modal, {
            size: "md",
            transitionState: t,
            title: N.intl.string(N.t.LZunzZ),
            subtitle: N.intl.string(N.t.FClXh9),
            actions: h,
            onClose: async () => n(),
            children: u ? (0, i.jsx)(_.wx6, { type: "critical", children: N.intl.string(N.t["5mlOCW"]) }) : null,
        });
    };
function O(e) {
    let t,
        {
            subscription: n,
            renewalInvoicePreview: s,
            fractionalPremiumInfo: a,
            fromStandaloneBillingPage: r = !0,
            analyticsLocation: m,
        } = e,
        O = (0, u.bG)([E.default], () => {
            let e = E.default.getCurrentUser();
            return o()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e;
        }),
        { analyticsLocations: R } = (0, g.Ay)(A.A.GUILD_BOOSTING_SUBSCRIPTION_HEADER),
        y = (0, T.A)({ location: "GuildBoostingHeader" });
    if (0 === (0, C.bx)(n.additionalPlans)) return null;
    let { status: P } = n,
        L = (0, C.$k)(n),
        D = y && !L && n.isBoostOnly && j.includes(n.status);
    if (L) t = b.v2;
    else
        switch (P) {
            case I.Dmq.PAST_DUE:
            case I.Dmq.ACCOUNT_HOLD:
            case I.Dmq.BILLING_RETRY:
                t = b.P7;
                break;
            case I.Dmq.PAUSE_PENDING:
            case I.Dmq.PAUSED:
                t = n.pauseReason !== f.qf.FRACTIONAL_PREMIUM ? b.C7 : b.wG;
                break;
            default:
                t = b.wG;
        }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: l()(t, b.Qn),
                children: [
                    (0, i.jsx)("div", { className: b.Kq }),
                    (0, i.jsx)("div", { className: b.OL }),
                    (0, i.jsxs)("div", {
                        className: b.eC,
                        children: [
                            (0, i.jsx)("div", { className: l()(b.Ab, { [b.aD]: L }) }),
                            (0, i.jsx)("div", {
                                children: (0, C.Uf)({
                                    subscription: n,
                                    renewalInvoicePreview: s,
                                    user: O,
                                    fractionalPremiumInfo: a,
                                }),
                            }),
                        ],
                    }),
                    r &&
                        (0, i.jsxs)("div", {
                            className: b.BQ,
                            children: [
                                D &&
                                    (0, i.jsx)("div", {
                                        className: b.x7,
                                        children: (0, i.jsx)(d.QWc, {
                                            variant: "always-white",
                                            onClick: () => {
                                                j.includes(n.status) &&
                                                    (0, _.mMO)(
                                                        async () => (e) =>
                                                            (0, i.jsx)(v, {
                                                                ...e,
                                                                subscription: n,
                                                                analyticsLocations: R,
                                                                analyticsLocation: m,
                                                            }),
                                                    );
                                            },
                                            size: "sm",
                                            text: N.intl.string(N.t["ETE/oC"]),
                                        }),
                                    }),
                                (0, i.jsx)(S.A, {
                                    onClick: () =>
                                        (0, p.openUserSettings)(x.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
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
                    className: b.yW,
                    variant: "text-sm/normal",
                    children: N.intl.format(c.Fr ? N.t.uxYBEa : N.t.k6haR9, { openAppHook: () => (0, h.A)("app") }),
                }),
        ],
    });
}

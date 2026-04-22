l.d(t, { X: () => S });
var a = l(627968),
    n = l(64700),
    r = l(835245),
    i = l(821609),
    o = l(834730),
    s = l(331322),
    d = l(691885),
    c = l(292666),
    u = l(534514),
    p = l(150934),
    m = l(36167),
    b = l(252561),
    h = l(652215),
    x = l(26279),
    y = l(788868);
let v = [
        { id: "tier_2", value: y.gD.PREMIUM_MONTH_TIER_2, label: "Nitro (Monthly)" },
        { id: "tier_1", value: y.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic (Monthly)" },
        { id: "tier_0", value: y.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic (Monthly)" },
    ],
    g = [{ id: "meta_quest", value: x.uH.META_QUEST_WEB_REDIRECT_CHECKOUT, label: "Meta Quest Web Redirect Checkout" }];
function f() {
    let [e, t] = n.useState(null);
    return {
        error: e,
        handleSuccess: n.useCallback((e, l) => {
            l.searchParams.append("handoff_token", e.body.handoff_token);
            let a = l.href;
            t(null), window.open(a, "_blank");
        }, []),
        handleFailure: n.useCallback((e, l) => {
            t(`Failed to generate handoff for ${l}`);
        }, []),
    };
}
function _(e) {
    let { flowType: t } = e,
        [l, c] = n.useState(y.gD.PREMIUM_MONTH_TIER_2),
        [u, p] = n.useState(!1),
        { error: h, handleSuccess: x, handleFailure: g } = f(),
        _ = n.useCallback(() => {
            let e = (0, r.A)();
            (0, m.OD)({ planId: l, isGift: u, loadId: e, flowType: t }, x, g);
        }, [l, u, t, x, g]);
    return (0, a.jsxs)(b.Hq, {
        label: "Nitro Checkout",
        direction: "vertical",
        children: [
            (0, a.jsxs)(s.B, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [
                    (0, a.jsx)(d.l, {
                        label: "Plan",
                        value: l,
                        options: v,
                        onSelectionChange: c,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    (0, a.jsx)(d.l, {
                        label: "Gift",
                        value: u ? "true" : "false",
                        options: [
                            { id: "no", value: "false", label: "No" },
                            { id: "yes", value: "true", label: "Yes" },
                        ],
                        onSelectionChange: (e) => p("true" === e),
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                ],
            }),
            (0, a.jsx)(i.$, { variant: "primary", size: "sm", text: "Open Nitro Checkout", onClick: _ }),
            null != h && (0, a.jsx)(o.E, { variant: "text-xs/normal", color: "status-danger", children: h }),
        ],
    });
}
function E(e) {
    let { flowType: t } = e,
        { error: l, handleSuccess: s, handleFailure: d } = f(),
        c = n.useCallback(() => {
            if (null == t) return;
            let e = (0, r.A)(),
                l = h.BVt.BILLING_MANAGE_SUBSCRIPTION_WITH_FLOW_TYPE(t, e);
            (0, m.xq)(l, s, d);
        }, [t, s, d]);
    return (0, a.jsxs)(b.Hq, {
        label: "Manage Subscription",
        direction: "vertical",
        children: [
            (0, a.jsx)(i.$, {
                variant: "primary",
                size: "sm",
                text: "Open Manage Subscription",
                onClick: c,
                disabled: null == t,
            }),
            null != l && (0, a.jsx)(o.E, { variant: "text-xs/normal", color: "status-danger", children: l }),
        ],
    });
}
function C(e) {
    let { flowType: t } = e,
        [l, s] = n.useState(""),
        { error: d, handleSuccess: u, handleFailure: p } = f(),
        x = n.useCallback(() => {
            if (0 === l.length || null == t) return;
            let e = (0, r.A)(),
                a = h.BVt.BILLING_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE(l, void 0, e, t);
            (0, m.xq)(a, u, p);
        }, [l, u, p, t]);
    return (0, a.jsxs)(b.Hq, {
        label: "Guild Boosts",
        direction: "vertical",
        children: [
            (0, a.jsx)(c.k, { label: "Guild ID", placeholder: "Guild ID", value: l, onChange: s }),
            (0, a.jsx)(i.$, {
                variant: "primary",
                size: "sm",
                text: "Open Guild Boost Checkout",
                disabled: 0 === l.length || null == t,
                onClick: x,
            }),
            null != d && (0, a.jsx)(o.E, { variant: "text-xs/normal", color: "status-danger", children: d }),
        ],
    });
}
let S = {
    name: "Redirect To Standalone",
    id: "standalone-redirect",
    component: function () {
        let [e, t] = n.useState(!1),
            [l, r] = n.useState(x.uH.META_QUEST_WEB_REDIRECT_CHECKOUT),
            i = n.useCallback((e) => {
                t(e);
            }, []),
            c = e ? l : void 0;
        return (0, a.jsxs)(b.wn, {
            children: [
                (0, a.jsx)(u.D, { variant: "heading-xl/semibold", children: "Redirect To Standalone" }),
                (0, a.jsx)(b.nB, {}),
                (0, a.jsxs)(s.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, a.jsx)(p.S, { label: "Enable Flow Type", checked: e, onChange: i }),
                        (0, a.jsx)(d.l, {
                            label: "Flow Type",
                            value: l,
                            options: g,
                            onSelectionChange: r,
                            selectionMode: "single",
                            disabled: !e,
                            fullWidth: !0,
                        }),
                    ],
                }),
                (0, a.jsx)(o.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: "Some link outs require enabling the flow type to work.",
                }),
                (0, a.jsx)(_, { flowType: c }),
                (0, a.jsx)(E, { flowType: c }),
                (0, a.jsx)(C, { flowType: c }),
            ],
        });
    },
};

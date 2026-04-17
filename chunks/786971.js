l.d(t, { X: () => f });
var a = l(627968),
    n = l(64700),
    r = l(835245),
    i = l(732955),
    o = l(397927),
    s = l(36167),
    d = l(252561),
    c = l(652215),
    u = l(26279),
    p = l(788868);
let m = [
        { id: "tier_2", value: p.gD.PREMIUM_MONTH_TIER_2, label: "Nitro (Monthly)" },
        { id: "tier_1", value: p.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic (Monthly)" },
        { id: "tier_0", value: p.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic (Monthly)" },
    ],
    h = [{ id: "meta_quest", value: u.uH.META_QUEST_WEB_REDIRECT_CHECKOUT, label: "Meta Quest Web Redirect Checkout" }];
function x() {
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
function b(e) {
    let { flowType: t } = e,
        [l, c] = n.useState(p.gD.PREMIUM_MONTH_TIER_2),
        [u, h] = n.useState(!1),
        { error: b, handleSuccess: y, handleFailure: g } = x(),
        f = n.useCallback(() => {
            let e = (0, r.A)();
            (0, s.OD)({ planId: l, isGift: u, loadId: e, flowType: t }, y, g);
        }, [l, u, t, y, g]);
    return (0, a.jsxs)(d.Hq, {
        label: "Nitro Checkout",
        direction: "vertical",
        children: [
            (0, a.jsxs)(o.BJc, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [
                    (0, a.jsx)(o.l6P, {
                        label: "Plan",
                        value: l,
                        options: m,
                        onSelectionChange: c,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    (0, a.jsx)(o.l6P, {
                        label: "Gift",
                        value: u ? "true" : "false",
                        options: [
                            { id: "no", value: "false", label: "No" },
                            { id: "yes", value: "true", label: "Yes" },
                        ],
                        onSelectionChange: (e) => h("true" === e),
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                ],
            }),
            (0, a.jsx)(i.$nd, { variant: "primary", size: "sm", text: "Open Nitro Checkout", onClick: f }),
            null != b && (0, a.jsx)(i.EYj, { variant: "text-xs/normal", color: "status-danger", children: b }),
        ],
    });
}
function y(e) {
    let { flowType: t } = e,
        { error: l, handleSuccess: o, handleFailure: u } = x(),
        p = n.useCallback(() => {
            if (null == t) return;
            let e = (0, r.A)(),
                l = c.BVt.BILLING_MANAGE_SUBSCRIPTION_WITH_FLOW_TYPE(t, e);
            (0, s.xq)(l, o, u);
        }, [t, o, u]);
    return (0, a.jsxs)(d.Hq, {
        label: "Manage Subscription",
        direction: "vertical",
        children: [
            (0, a.jsx)(i.$nd, {
                variant: "primary",
                size: "sm",
                text: "Open Manage Subscription",
                onClick: p,
                disabled: null == t,
            }),
            null != l && (0, a.jsx)(i.EYj, { variant: "text-xs/normal", color: "status-danger", children: l }),
        ],
    });
}
function g(e) {
    let { flowType: t } = e,
        [l, u] = n.useState(""),
        { error: p, handleSuccess: m, handleFailure: h } = x(),
        b = n.useCallback(() => {
            if (0 === l.length || null == t) return;
            let e = (0, r.A)(),
                a = c.BVt.BILLING_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE(l, void 0, e, t);
            (0, s.xq)(a, m, h);
        }, [l, m, h, t]);
    return (0, a.jsxs)(d.Hq, {
        label: "Guild Boosts",
        direction: "vertical",
        children: [
            (0, a.jsx)(o.ksK, { label: "Guild ID", placeholder: "Guild ID", value: l, onChange: u }),
            (0, a.jsx)(i.$nd, {
                variant: "primary",
                size: "sm",
                text: "Open Guild Boost Checkout",
                disabled: 0 === l.length || null == t,
                onClick: b,
            }),
            null != p && (0, a.jsx)(i.EYj, { variant: "text-xs/normal", color: "status-danger", children: p }),
        ],
    });
}
let f = {
    name: "Redirect To Standalone",
    id: "standalone-redirect",
    component: function () {
        let [e, t] = n.useState(!1),
            [l, r] = n.useState(u.uH.META_QUEST_WEB_REDIRECT_CHECKOUT),
            s = n.useCallback((e) => {
                t(e);
            }, []),
            c = e ? l : void 0;
        return (0, a.jsxs)(d.wn, {
            children: [
                (0, a.jsx)(o.Heading, { variant: "heading-xl/semibold", children: "Redirect To Standalone" }),
                (0, a.jsx)(d.nB, {}),
                (0, a.jsxs)(o.BJc, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, a.jsx)(o.Checkbox, { label: "Enable Flow Type", checked: e, onChange: s }),
                        (0, a.jsx)(o.l6P, {
                            label: "Flow Type",
                            value: l,
                            options: h,
                            onSelectionChange: r,
                            selectionMode: "single",
                            disabled: !e,
                            fullWidth: !0,
                        }),
                    ],
                }),
                (0, a.jsx)(i.EYj, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: "Some link outs require enabling the flow type to work.",
                }),
                (0, a.jsx)(b, { flowType: c }),
                (0, a.jsx)(y, { flowType: c }),
                (0, a.jsx)(g, { flowType: c }),
            ],
        });
    },
};

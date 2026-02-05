n.d(t, { $L: () => g, Ft: () => x, NI: () => h, P5: () => A, TG: () => m, Yq: () => _, kd: () => f });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    o = n(397927),
    a = n(915624),
    u = n(162362),
    d = n(333354),
    c = n(985018),
    p = n(876380);
function m(e) {
    let { text: t } = e;
    return (0, r.jsxs)("div", {
        className: p.mG,
        children: [
            (0, r.jsx)(o.yr3, { size: "xs", color: o.LU0.colors.STATUS_POSITIVE }),
            (0, r.jsx)(o.Text, { color: "text-feedback-positive", variant: "text-sm/bold", children: t }),
        ],
    });
}
function A(e) {
    let { dateString: t } = e;
    return (0, r.jsxs)("div", {
        className: p.mG,
        children: [
            (0, r.jsx)(o.EpV, { size: "xs", color: o.LU0.colors.STATUS_WARNING }),
            (0, r.jsx)(o.Text, {
                color: "status-warning",
                variant: "text-sm/bold",
                children: c.intl.formatToMarkdownString(d.default["ol/ao/"], { dateString: (0, a.A)(t) }),
            }),
        ],
    });
}
function _(e) {
    let { removingAt: t } = e;
    return (0, r.jsxs)("div", {
        className: p.wL,
        children: [
            (0, r.jsx)(o.EpV, { size: "xs", color: o.LU0.colors.STATUS_WARNING }),
            (0, r.jsx)(o.Text, {
                color: "status-warning",
                variant: "text-sm/bold",
                children: c.intl.formatToPlainString(d.default["6e2ry1"], { dateString: (0, u.A)(t) }),
            }),
        ],
    });
}
function g(e) {
    let { cost: t, costDecorator: n, status: l, className: i } = e,
        a = void 0 !== t ? p._A : p.$3;
    return (0, r.jsxs)("div", {
        className: s()(a, i),
        children: [
            void 0 !== t &&
                (0, r.jsxs)("div", {
                    className: s()(p.mG, p.pT),
                    children: [
                        (0, r.jsx)(o._Jp, { size: "sm", color: o.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                        (0, r.jsx)(o.Text, {
                            className: p.q9,
                            tag: "div",
                            variant: "heading-md/semibold",
                            color: "text-subtle",
                            children: c.intl.formatToPlainString(c.t.t2Wbo1, { required: t, decorator: n ?? "" }),
                        }),
                    ],
                }),
            l?.type === "expiring" && (0, r.jsx)(A, { dateString: l.expiringAt }),
            l?.type === "removing" && (0, r.jsx)(_, { removingAt: l.removingAt }),
            l?.type === "active" && (0, r.jsx)(m, { text: l.statusText }),
        ],
    });
}
function f(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: p.UD, children: t });
}
function x(e) {
    let { title: t, textColor: n, children: l, footer: i } = e;
    return (0, r.jsxs)("div", {
        className: p.hQ,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)("div", {
                        className: p.N1,
                        children: (0, r.jsx)(o.Heading, { color: n, variant: "heading-md/bold", children: t }),
                    }),
                    l,
                ],
            }),
            i,
        ],
    });
}
let h = l.forwardRef(function (e, t) {
    let {
        className: n,
        label: l,
        isActive: i,
        isWarning: a,
        badge: u,
        canRollback: d,
        onClick: m,
        onMouseOver: A,
        onMouseLeave: _,
        children: g,
    } = e;
    return (0, r.jsx)("div", {
        className: s()(p.gp, { [p.Wq]: d && !i }),
        ref: t,
        children: (0, r.jsxs)(o.sqX, {
            "aria-label": l,
            onClick: m,
            onMouseOver: A,
            onMouseLeave: _,
            className: s()(p.kL, { [p.vu]: i, [p.$e]: a || (d && i) }, n),
            children: [
                g,
                "new" === u && (0, r.jsx)(o.LpS, { className: p.Hl, text: c.intl.string(c.t.y2b7CA) }),
                "beta" === u &&
                    (0, r.jsx)(o.LpS, {
                        className: p.Hl,
                        text: c.intl.string(c.t.oW0eUd),
                        color: o.LU0.colors.BACKGROUND_BRAND.css,
                    }),
            ],
        }),
    });
});

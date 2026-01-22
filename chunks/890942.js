l.d(t, {
    $L: () => A,
    Ft: () => x,
    NI: () => b,
    P5: () => m,
    TG: () => p,
    Yq: () => v,
    kd: () => g,
});
var r = l(627968),
    n = l(64700),
    i = l(503698),
    s = l.n(i),
    o = l(397927),
    a = l(915624),
    u = l(162362),
    d = l(333354),
    c = l(985018),
    f = l(876380);
function p(e) {
    let { text: t } = e;
    return (0, r.jsxs)("div", {
        className: f.mG,
        children: [
            (0, r.jsx)(o.yr3, {
                size: "xs",
                color: o.LU0.colors.STATUS_POSITIVE,
            }),
            (0, r.jsx)(o.Text, {
                color: "text-feedback-positive",
                variant: "text-sm/bold",
                children: t,
            }),
        ],
    });
}
function m(e) {
    let { dateString: t } = e;
    return (0, r.jsxs)("div", {
        className: f.mG,
        children: [
            (0, r.jsx)(o.EpV, {
                size: "xs",
                color: o.LU0.colors.STATUS_WARNING,
            }),
            (0, r.jsx)(o.Text, {
                color: "status-warning",
                variant: "text-sm/bold",
                children: c.intl.formatToMarkdownString(d.default["ol/ao/"], { dateString: (0, a.A)(t) }),
            }),
        ],
    });
}
function v(e) {
    let { removingAt: t } = e;
    return (0, r.jsxs)("div", {
        className: f.wL,
        children: [
            (0, r.jsx)(o.EpV, {
                size: "xs",
                color: o.LU0.colors.STATUS_WARNING,
            }),
            (0, r.jsx)(o.Text, {
                color: "status-warning",
                variant: "text-sm/bold",
                children: c.intl.formatToPlainString(d.default["6e2ry1"], { dateString: (0, u.A)(t) }),
            }),
        ],
    });
}
function A(e) {
    let { cost: t, costDecorator: l, status: n, className: i } = e,
        a = void 0 !== t ? f._A : f.$3;
    return (0, r.jsxs)("div", {
        className: s()(a, i),
        children: [
            void 0 !== t &&
                (0, r.jsxs)("div", {
                    className: s()(f.mG, f.pT),
                    children: [
                        (0, r.jsx)(o._Jp, {
                            size: "sm",
                            color: o.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                        }),
                        (0, r.jsx)(o.Text, {
                            className: f.q9,
                            tag: "div",
                            variant: "heading-md/semibold",
                            color: "text-subtle",
                            children: c.intl.formatToPlainString(c.t.t2Wbo1, {
                                required: t,
                                decorator: null != l ? l : "",
                            }),
                        }),
                    ],
                }),
            (null == n ? void 0 : n.type) === "expiring" && (0, r.jsx)(m, { dateString: n.expiringAt }),
            (null == n ? void 0 : n.type) === "removing" && (0, r.jsx)(v, { removingAt: n.removingAt }),
            (null == n ? void 0 : n.type) === "active" && (0, r.jsx)(p, { text: n.statusText }),
        ],
    });
}
function g(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: f.UD,
        children: t,
    });
}
function x(e) {
    let { title: t, textColor: l, children: n, footer: i } = e;
    return (0, r.jsxs)("div", {
        className: f.hQ,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)("div", {
                        className: f.N1,
                        children: (0, r.jsx)(o.Heading, {
                            color: l,
                            variant: "heading-md/bold",
                            children: t,
                        }),
                    }),
                    n,
                ],
            }),
            i,
        ],
    });
}
let b = n.forwardRef(function (e, t) {
    let {
        className: l,
        label: n,
        isActive: i,
        isWarning: a,
        badge: u,
        canRollback: d,
        onClick: p,
        onMouseOver: m,
        onMouseLeave: v,
        children: A,
    } = e;
    return (0, r.jsx)("div", {
        className: s()(f.gp, { [f.Wq]: d && !i }),
        ref: t,
        children: (0, r.jsxs)(o.sqX, {
            "aria-label": n,
            onClick: p,
            onMouseOver: m,
            onMouseLeave: v,
            className: s()(
                f.kL,
                {
                    [f.vu]: i,
                    [f.$e]: a || (d && i),
                },
                l,
            ),
            children: [
                A,
                "new" === u &&
                    (0, r.jsx)(o.LpS, {
                        className: f.Hl,
                        text: c.intl.string(c.t.y2b7CA),
                    }),
                "beta" === u &&
                    (0, r.jsx)(o.LpS, {
                        className: f.Hl,
                        text: c.intl.string(c.t.oW0eUd),
                        color: o.LU0.colors.BACKGROUND_BRAND.css,
                    }),
            ],
        }),
    });
});

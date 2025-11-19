t.d(n, {
    N4: () => b,
    P2: () => f,
    Q9: () => p,
    aB: () => j,
    c: () => _,
    rL: () => x,
    uf: () => v,
});
var r = t(54381),
    a = t(473749),
    i = t(120356),
    l = t.n(i),
    s = t(481060),
    o = t(377171),
    c = t(192371),
    d = t(834209),
    u = t(18853),
    m = t(388032),
    g = t(237522);
function f(e) {
    let { text: n } = e;
    return (0, r.jsxs)("div", {
        className: g.inline,
        children: [
            (0, r.jsx)(s.owK, {
                size: "xs",
                color: s.TVs.colors.STATUS_POSITIVE,
            }),
            (0, r.jsx)(s.Text, {
                color: "text-feedback-positive",
                variant: "text-sm/bold",
                children: n,
            }),
        ],
    });
}
function x(e) {
    let { dateString: n } = e;
    return (0, r.jsxs)("div", {
        className: g.inline,
        children: [
            (0, r.jsx)(s.Mgn, {
                size: "xs",
                color: s.TVs.colors.STATUS_WARNING,
            }),
            (0, r.jsx)(s.Text, {
                color: "status-warning",
                variant: "text-sm/bold",
                children: m.intl.formatToMarkdownString(u.default["ol/ao/"], { dateString: (0, c.Z)(n) }),
            }),
        ],
    });
}
function _(e) {
    let { removingAt: n } = e;
    return (0, r.jsxs)("div", {
        className: g.rollbackInline,
        children: [
            (0, r.jsx)(s.Mgn, {
                size: "xs",
                color: s.TVs.colors.STATUS_WARNING,
            }),
            (0, r.jsx)(s.Text, {
                color: "status-warning",
                variant: "text-sm/bold",
                children: m.intl.formatToPlainString(u.default["6e2ry1"], { dateString: (0, d.Z)(n) }),
            }),
        ],
    });
}
function v(e) {
    let { cost: n, costDecorator: t, status: a, className: i } = e,
        o = void 0 !== n ? g.labelContainer : g.labelContainerEnd;
    return (0, r.jsxs)("div", {
        className: l()(o, i),
        children: [
            void 0 !== n &&
                (0, r.jsxs)("div", {
                    className: l()(g.inline, g.inlineBoost),
                    children: [
                        (0, r.jsx)(s.Ucv, {
                            size: "sm",
                            color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                        }),
                        (0, r.jsx)(s.Text, {
                            className: g.price,
                            tag: "div",
                            variant: "heading-md/semibold",
                            color: "text-secondary",
                            children: m.intl.formatToPlainString(m.t.t2Wbo1, {
                                required: n,
                                decorator: null != t ? t : "",
                            }),
                        }),
                    ],
                }),
            (null == a ? void 0 : a.type) === "expiring" && (0, r.jsx)(x, { dateString: a.expiringAt }),
            (null == a ? void 0 : a.type) === "removing" && (0, r.jsx)(_, { removingAt: a.removingAt }),
            (null == a ? void 0 : a.type) === "active" && (0, r.jsx)(f, { text: a.statusText }),
        ],
    });
}
function b(e) {
    let { children: n } = e;
    return (0, r.jsx)("div", {
        className: g.buttonContainer,
        children: n,
    });
}
function p(e) {
    let { title: n, textColor: t, children: a, footer: i } = e;
    return (0, r.jsxs)("div", {
        className: g.contentContainer,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)("div", {
                        className: g.headerContainer,
                        children: (0, r.jsx)(s.Heading, {
                            color: t,
                            variant: "heading-md/bold",
                            children: n,
                        }),
                    }),
                    a,
                ],
            }),
            i,
        ],
    });
}
let j = a.forwardRef(function (e, n) {
    let {
        className: t,
        label: a,
        isActive: i,
        isWarning: c,
        badge: d,
        canRollback: u,
        onClick: f,
        onMouseOver: x,
        onMouseLeave: _,
        children: v,
    } = e;
    return (0, r.jsx)("div", {
        className: l()(g.parentContainer, { [g.rollbackInactive]: u && !i }),
        ref: n,
        children: (0, r.jsxs)(s.kL8, {
            "aria-label": a,
            onClick: f,
            onMouseOver: x,
            onMouseLeave: _,
            className: l()(
                g.container,
                {
                    [g.active]: i,
                    [g.warning]: c || (u && i),
                },
                t,
            ),
            children: [
                v,
                "new" === d &&
                    (0, r.jsx)(s.IGR, {
                        className: g.new,
                        text: m.intl.string(m.t.y2b7CA),
                    }),
                "beta" === d &&
                    (0, r.jsx)(s.IGR, {
                        className: g.new,
                        text: m.intl.string(m.t.oW0eUd),
                        color: o.Z.BG_BRAND,
                    }),
            ],
        }),
    });
});

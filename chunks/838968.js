n.d(t, {
    N4: () => v,
    P2: () => f,
    Q9: () => b,
    aB: () => h,
    c: () => x,
    rL: () => _,
    uf: () => g,
});
var r = n(255367),
    o = n(73800),
    i = n(120356),
    l = n.n(i),
    a = n(481060),
    s = n(377171),
    c = n(192371),
    u = n(834209),
    d = n(93841),
    p = n(388032),
    m = n(91900);
function f(e) {
    let { text: t } = e;
    return (0, r.jsxs)("div", {
        className: m.inline,
        children: [
            (0, r.jsx)(a.owK, {
                size: "xs",
                color: a.TVs.colors.STATUS_POSITIVE,
            }),
            (0, r.jsx)(a.Text, {
                color: "text-feedback-positive",
                variant: "text-sm/bold",
                children: t,
            }),
        ],
    });
}
function _(e) {
    let { dateString: t } = e;
    return (0, r.jsxs)("div", {
        className: m.inline,
        children: [
            (0, r.jsx)(a.Mgn, {
                size: "xs",
                color: a.TVs.colors.STATUS_WARNING,
            }),
            (0, r.jsx)(a.Text, {
                color: "status-warning",
                variant: "text-sm/bold",
                children: p.intl.formatToMarkdownString(d.default["ol/ao6"], { dateString: (0, c.Z)(t) }),
            }),
        ],
    });
}
function x(e) {
    let { removingAt: t } = e;
    return (0, r.jsxs)("div", {
        className: m.rollbackInline,
        children: [
            (0, r.jsx)(a.Mgn, {
                size: "xs",
                color: a.TVs.colors.STATUS_WARNING,
            }),
            (0, r.jsx)(a.Text, {
                color: "status-warning",
                variant: "text-sm/bold",
                children: p.intl.formatToPlainString(d.default["6e2ry8"], { dateString: (0, u.Z)(t) }),
            }),
        ],
    });
}
function g(e) {
    let { cost: t, costDecorator: n, status: o, className: i } = e,
        s = void 0 !== t ? m.labelContainer : m.labelContainerEnd;
    return (0, r.jsxs)("div", {
        className: l()(s, i),
        children: [
            void 0 !== t &&
                (0, r.jsxs)("div", {
                    className: l()(m.inline, m.inlineBoost),
                    children: [
                        (0, r.jsx)(a.$Eu, {
                            size: "sm",
                            color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                        }),
                        (0, r.jsx)(a.Text, {
                            className: m.price,
                            tag: "div",
                            variant: "heading-md/semibold",
                            color: "text-secondary",
                            children: p.intl.formatToPlainString(p.t.t2Wbo6, {
                                required: t,
                                decorator: null != n ? n : "",
                            }),
                        }),
                    ],
                }),
            (null == o ? void 0 : o.type) === "expiring" && (0, r.jsx)(_, { dateString: o.expiringAt }),
            (null == o ? void 0 : o.type) === "removing" && (0, r.jsx)(x, { removingAt: o.removingAt }),
            (null == o ? void 0 : o.type) === "active" && (0, r.jsx)(f, { text: o.statusText }),
        ],
    });
}
function v(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: m.buttonContainer,
        children: t,
    });
}
function b(e) {
    let { title: t, textColor: n, children: o, footer: i } = e;
    return (0, r.jsxs)("div", {
        className: m.contentContainer,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)("div", {
                        className: m.headerContainer,
                        children: (0, r.jsx)(a.X6q, {
                            color: n,
                            variant: "heading-md/bold",
                            children: t,
                        }),
                    }),
                    o,
                ],
            }),
            i,
        ],
    });
}
let h = o.forwardRef(function (e, t) {
    let {
        className: n,
        label: o,
        isActive: i,
        isWarning: c,
        badge: u,
        canRollback: d,
        onClick: f,
        onMouseOver: _,
        onMouseLeave: x,
        children: g,
    } = e;
    return (0, r.jsx)("div", {
        className: l()(m.parentContainer, { [m.rollbackInactive]: d && !i }),
        ref: t,
        children: (0, r.jsxs)(a.kL8, {
            "aria-label": o,
            onClick: f,
            onMouseOver: _,
            onMouseLeave: x,
            className: l()(
                m.container,
                {
                    [m.active]: i,
                    [m.warning]: c || (d && i),
                },
                n,
            ),
            children: [
                "new" === u &&
                    (0, r.jsx)(a.IGR, {
                        className: m.new,
                        text: p.intl.string(p.t.y2b7CA),
                    }),
                "beta" === u &&
                    (0, r.jsx)(a.IGR, {
                        className: m.new,
                        text: p.intl.string(p.t.oW0eUV),
                        color: s.Z.BG_BRAND,
                    }),
                g,
            ],
        }),
    });
});

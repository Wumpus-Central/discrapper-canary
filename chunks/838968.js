t.d(n, {
    N4: () => _,
    P2: () => g,
    Q9: () => b,
    aB: () => j,
    c: () => x,
    rL: () => f,
    uf: () => v,
});
var r = t(54381),
    a = t(473749),
    i = t(120356),
    l = t.n(i),
    s = t(481060),
    o = t(192371),
    c = t(834209),
    d = t(130231),
    u = t(388032),
    m = t(237522);
function g(e) {
    let { text: n } = e;
    return (0, r.jsxs)("div", {
        className: m.inline,
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
function f(e) {
    let { dateString: n } = e;
    return (0, r.jsxs)("div", {
        className: m.inline,
        children: [
            (0, r.jsx)(s.Mgn, {
                size: "xs",
                color: s.TVs.colors.STATUS_WARNING,
            }),
            (0, r.jsx)(s.Text, {
                color: "status-warning",
                variant: "text-sm/bold",
                children: u.intl.formatToMarkdownString(d.default["ol/ao/"], { dateString: (0, o.Z)(n) }),
            }),
        ],
    });
}
function x(e) {
    let { removingAt: n } = e;
    return (0, r.jsxs)("div", {
        className: m.rollbackInline,
        children: [
            (0, r.jsx)(s.Mgn, {
                size: "xs",
                color: s.TVs.colors.STATUS_WARNING,
            }),
            (0, r.jsx)(s.Text, {
                color: "status-warning",
                variant: "text-sm/bold",
                children: u.intl.formatToPlainString(d.default["6e2ry1"], { dateString: (0, c.Z)(n) }),
            }),
        ],
    });
}
function v(e) {
    let { cost: n, costDecorator: t, status: a, className: i } = e,
        o = void 0 !== n ? m.labelContainer : m.labelContainerEnd;
    return (0, r.jsxs)("div", {
        className: l()(o, i),
        children: [
            void 0 !== n &&
                (0, r.jsxs)("div", {
                    className: l()(m.inline, m.inlineBoost),
                    children: [
                        (0, r.jsx)(s.Ucv, {
                            size: "sm",
                            color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                        }),
                        (0, r.jsx)(s.Text, {
                            className: m.price,
                            tag: "div",
                            variant: "heading-md/semibold",
                            color: "text-secondary",
                            children: u.intl.formatToPlainString(u.t.t2Wbo1, {
                                required: n,
                                decorator: null != t ? t : "",
                            }),
                        }),
                    ],
                }),
            (null == a ? void 0 : a.type) === "expiring" && (0, r.jsx)(f, { dateString: a.expiringAt }),
            (null == a ? void 0 : a.type) === "removing" && (0, r.jsx)(x, { removingAt: a.removingAt }),
            (null == a ? void 0 : a.type) === "active" && (0, r.jsx)(g, { text: a.statusText }),
        ],
    });
}
function _(e) {
    let { children: n } = e;
    return (0, r.jsx)("div", {
        className: m.buttonContainer,
        children: n,
    });
}
function b(e) {
    let { title: n, textColor: t, children: a, footer: i } = e;
    return (0, r.jsxs)("div", {
        className: m.contentContainer,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)("div", {
                        className: m.headerContainer,
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
        isWarning: o,
        badge: c,
        canRollback: d,
        onClick: g,
        onMouseOver: f,
        onMouseLeave: x,
        children: v,
    } = e;
    return (0, r.jsx)("div", {
        className: l()(m.parentContainer, { [m.rollbackInactive]: d && !i }),
        ref: n,
        children: (0, r.jsxs)(s.kL8, {
            "aria-label": a,
            onClick: g,
            onMouseOver: f,
            onMouseLeave: x,
            className: l()(
                m.container,
                {
                    [m.active]: i,
                    [m.warning]: o || (d && i),
                },
                t,
            ),
            children: [
                v,
                "new" === c &&
                    (0, r.jsx)(s.IGR, {
                        className: m.new,
                        text: u.intl.string(u.t.y2b7CA),
                    }),
                "beta" === c &&
                    (0, r.jsx)(s.IGR, {
                        className: m.new,
                        text: u.intl.string(u.t.oW0eUd),
                        color: s.TVs.colors.BG_BRAND.css,
                    }),
            ],
        }),
    });
});

n.d(t, {
    N4: () => x,
    P2: () => f,
    Q9: () => _,
    aB: () => b,
    c: () => g,
    rL: () => m,
    uf: () => v,
});
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(192371),
    u = n(834209),
    c = n(265397),
    d = n(388032),
    p = n(237522);
function f(e) {
    let { text: t } = e;
    return (0, r.jsxs)("div", {
        className: p.inline,
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
function m(e) {
    let { dateString: t } = e;
    return (0, r.jsxs)("div", {
        className: p.inline,
        children: [
            (0, r.jsx)(a.Mgn, {
                size: "xs",
                color: a.TVs.colors.STATUS_WARNING,
            }),
            (0, r.jsx)(a.Text, {
                color: "status-warning",
                variant: "text-sm/bold",
                children: d.intl.formatToMarkdownString(c.default["ol/ao/"], { dateString: (0, s.Z)(t) }),
            }),
        ],
    });
}
function g(e) {
    let { removingAt: t } = e;
    return (0, r.jsxs)("div", {
        className: p.rollbackInline,
        children: [
            (0, r.jsx)(a.Mgn, {
                size: "xs",
                color: a.TVs.colors.STATUS_WARNING,
            }),
            (0, r.jsx)(a.Text, {
                color: "status-warning",
                variant: "text-sm/bold",
                children: d.intl.formatToPlainString(c.default["6e2ry1"], { dateString: (0, u.Z)(t) }),
            }),
        ],
    });
}
function v(e) {
    let { cost: t, costDecorator: n, status: i, className: l } = e,
        s = void 0 !== t ? p.labelContainer : p.labelContainerEnd;
    return (0, r.jsxs)("div", {
        className: o()(s, l),
        children: [
            void 0 !== t &&
                (0, r.jsxs)("div", {
                    className: o()(p.inline, p.inlineBoost),
                    children: [
                        (0, r.jsx)(a.Ucv, {
                            size: "sm",
                            color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                        }),
                        (0, r.jsx)(a.Text, {
                            className: p.price,
                            tag: "div",
                            variant: "heading-md/semibold",
                            color: "text-subtle",
                            children: d.intl.formatToPlainString(d.t.t2Wbo1, {
                                required: t,
                                decorator: null != n ? n : "",
                            }),
                        }),
                    ],
                }),
            (null == i ? void 0 : i.type) === "expiring" && (0, r.jsx)(m, { dateString: i.expiringAt }),
            (null == i ? void 0 : i.type) === "removing" && (0, r.jsx)(g, { removingAt: i.removingAt }),
            (null == i ? void 0 : i.type) === "active" && (0, r.jsx)(f, { text: i.statusText }),
        ],
    });
}
function x(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: p.buttonContainer,
        children: t,
    });
}
function _(e) {
    let { title: t, textColor: n, children: i, footer: l } = e;
    return (0, r.jsxs)("div", {
        className: p.contentContainer,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)("div", {
                        className: p.headerContainer,
                        children: (0, r.jsx)(a.Heading, {
                            color: n,
                            variant: "heading-md/bold",
                            children: t,
                        }),
                    }),
                    i,
                ],
            }),
            l,
        ],
    });
}
let b = i.forwardRef(function (e, t) {
    let {
        className: n,
        label: i,
        isActive: l,
        isWarning: s,
        badge: u,
        canRollback: c,
        onClick: f,
        onMouseOver: m,
        onMouseLeave: g,
        children: v,
    } = e;
    return (0, r.jsx)("div", {
        className: o()(p.parentContainer, { [p.rollbackInactive]: c && !l }),
        ref: t,
        children: (0, r.jsxs)(a.kL8, {
            "aria-label": i,
            onClick: f,
            onMouseOver: m,
            onMouseLeave: g,
            className: o()(
                p.container,
                {
                    [p.active]: l,
                    [p.warning]: s || (c && l),
                },
                n,
            ),
            children: [
                v,
                "new" === u &&
                    (0, r.jsx)(a.IGR, {
                        className: p.new,
                        text: d.intl.string(d.t.y2b7CA),
                    }),
                "beta" === u &&
                    (0, r.jsx)(a.IGR, {
                        className: p.new,
                        text: d.intl.string(d.t.oW0eUd),
                        color: a.TVs.colors.BACKGROUND_BRAND.css,
                    }),
            ],
        }),
    });
});

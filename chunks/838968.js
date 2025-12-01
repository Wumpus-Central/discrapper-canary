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
    o = n(120356),
    l = n.n(o),
    a = n(481060),
    s = n(192371),
    c = n(834209),
    u = n(130231),
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
                children: d.intl.formatToMarkdownString(u.default["ol/ao/"], { dateString: (0, s.Z)(t) }),
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
                children: d.intl.formatToPlainString(u.default["6e2ry1"], { dateString: (0, c.Z)(t) }),
            }),
        ],
    });
}
function v(e) {
    let { cost: t, costDecorator: n, status: i, className: o } = e,
        s = void 0 !== t ? p.labelContainer : p.labelContainerEnd;
    return (0, r.jsxs)("div", {
        className: l()(s, o),
        children: [
            void 0 !== t &&
                (0, r.jsxs)("div", {
                    className: l()(p.inline, p.inlineBoost),
                    children: [
                        (0, r.jsx)(a.Ucv, {
                            size: "sm",
                            color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                        }),
                        (0, r.jsx)(a.Text, {
                            className: p.price,
                            tag: "div",
                            variant: "heading-md/semibold",
                            color: "text-secondary",
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
    let { title: t, textColor: n, children: i, footer: o } = e;
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
            o,
        ],
    });
}
let b = i.forwardRef(function (e, t) {
    let {
        className: n,
        label: i,
        isActive: o,
        isWarning: s,
        badge: c,
        canRollback: u,
        onClick: f,
        onMouseOver: m,
        onMouseLeave: g,
        children: v,
    } = e;
    return (0, r.jsx)("div", {
        className: l()(p.parentContainer, { [p.rollbackInactive]: u && !o }),
        ref: t,
        children: (0, r.jsxs)(a.kL8, {
            "aria-label": i,
            onClick: f,
            onMouseOver: m,
            onMouseLeave: g,
            className: l()(
                p.container,
                {
                    [p.active]: o,
                    [p.warning]: s || (u && o),
                },
                n,
            ),
            children: [
                v,
                "new" === c &&
                    (0, r.jsx)(a.IGR, {
                        className: p.new,
                        text: d.intl.string(d.t.y2b7CA),
                    }),
                "beta" === c &&
                    (0, r.jsx)(a.IGR, {
                        className: p.new,
                        text: d.intl.string(d.t.oW0eUd),
                        color: a.TVs.colors.BG_BRAND.css,
                    }),
            ],
        }),
    });
});

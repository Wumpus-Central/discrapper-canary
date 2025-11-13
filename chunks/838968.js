n.d(t, {
    N4: () => _,
    P2: () => m,
    Q9: () => b,
    aB: () => h,
    c: () => v,
    rL: () => g,
    uf: () => x,
});
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(377171),
    c = n(192371),
    u = n(834209),
    d = n(18853),
    p = n(388032),
    f = n(237522);
function m(e) {
    let { text: t } = e;
    return (0, r.jsxs)("div", {
        className: f.inline,
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
function g(e) {
    let { dateString: t } = e;
    return (0, r.jsxs)("div", {
        className: f.inline,
        children: [
            (0, r.jsx)(a.Mgn, {
                size: "xs",
                color: a.TVs.colors.STATUS_WARNING,
            }),
            (0, r.jsx)(a.Text, {
                color: "status-warning",
                variant: "text-sm/bold",
                children: p.intl.formatToMarkdownString(d.default["ol/ao/"], { dateString: (0, c.Z)(t) }),
            }),
        ],
    });
}
function v(e) {
    let { removingAt: t } = e;
    return (0, r.jsxs)("div", {
        className: f.rollbackInline,
        children: [
            (0, r.jsx)(a.Mgn, {
                size: "xs",
                color: a.TVs.colors.STATUS_WARNING,
            }),
            (0, r.jsx)(a.Text, {
                color: "status-warning",
                variant: "text-sm/bold",
                children: p.intl.formatToPlainString(d.default["6e2ry1"], { dateString: (0, u.Z)(t) }),
            }),
        ],
    });
}
function x(e) {
    let { cost: t, costDecorator: n, status: i, className: l } = e,
        s = void 0 !== t ? f.labelContainer : f.labelContainerEnd;
    return (0, r.jsxs)("div", {
        className: o()(s, l),
        children: [
            void 0 !== t &&
                (0, r.jsxs)("div", {
                    className: o()(f.inline, f.inlineBoost),
                    children: [
                        (0, r.jsx)(a.Ucv, {
                            size: "sm",
                            color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                        }),
                        (0, r.jsx)(a.Text, {
                            className: f.price,
                            tag: "div",
                            variant: "heading-md/semibold",
                            color: "text-secondary",
                            children: p.intl.formatToPlainString(p.t.t2Wbo1, {
                                required: t,
                                decorator: null != n ? n : "",
                            }),
                        }),
                    ],
                }),
            (null == i ? void 0 : i.type) === "expiring" && (0, r.jsx)(g, { dateString: i.expiringAt }),
            (null == i ? void 0 : i.type) === "removing" && (0, r.jsx)(v, { removingAt: i.removingAt }),
            (null == i ? void 0 : i.type) === "active" && (0, r.jsx)(m, { text: i.statusText }),
        ],
    });
}
function _(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: f.buttonContainer,
        children: t,
    });
}
function b(e) {
    let { title: t, textColor: n, children: i, footer: l } = e;
    return (0, r.jsxs)("div", {
        className: f.contentContainer,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)("div", {
                        className: f.headerContainer,
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
let h = i.forwardRef(function (e, t) {
    let {
        className: n,
        label: i,
        isActive: l,
        isWarning: c,
        badge: u,
        canRollback: d,
        onClick: m,
        onMouseOver: g,
        onMouseLeave: v,
        children: x,
    } = e;
    return (0, r.jsx)("div", {
        className: o()(f.parentContainer, { [f.rollbackInactive]: d && !l }),
        ref: t,
        children: (0, r.jsxs)(a.kL8, {
            "aria-label": i,
            onClick: m,
            onMouseOver: g,
            onMouseLeave: v,
            className: o()(
                f.container,
                {
                    [f.active]: l,
                    [f.warning]: c || (d && l),
                },
                n,
            ),
            children: [
                x,
                "new" === u &&
                    (0, r.jsx)(a.IGR, {
                        className: f.new,
                        text: p.intl.string(p.t.y2b7CA),
                    }),
                "beta" === u &&
                    (0, r.jsx)(a.IGR, {
                        className: f.new,
                        text: p.intl.string(p.t.oW0eUd),
                        color: s.Z.BG_BRAND,
                    }),
            ],
        }),
    });
});

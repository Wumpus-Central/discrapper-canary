n.d(t, {
    N4: () => x,
    P2: () => p,
    Q9: () => b,
    aB: () => h,
    c: () => g,
    rL: () => m,
    uf: () => v,
});
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(192371),
    c = n(834209),
    u = n(44542),
    d = n(388032),
    f = n(138545);
function p(e) {
    let { text: t } = e;
    return (0, r.jsxs)("div", {
        className: f.inline,
        children: [
            (0, r.jsx)(o.owK, {
                size: "xs",
                color: o.TVs.colors.STATUS_POSITIVE,
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
        className: f.inline,
        children: [
            (0, r.jsx)(o.Mgn, {
                size: "xs",
                color: o.TVs.colors.STATUS_WARNING,
            }),
            (0, r.jsx)(o.Text, {
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
        className: f.rollbackInline,
        children: [
            (0, r.jsx)(o.Mgn, {
                size: "xs",
                color: o.TVs.colors.STATUS_WARNING,
            }),
            (0, r.jsx)(o.Text, {
                color: "status-warning",
                variant: "text-sm/bold",
                children: d.intl.formatToPlainString(u.default["6e2ry1"], { dateString: (0, c.Z)(t) }),
            }),
        ],
    });
}
function v(e) {
    let { cost: t, costDecorator: n, status: i, className: l } = e,
        s = void 0 !== t ? f.labelContainer : f.labelContainerEnd;
    return (0, r.jsxs)("div", {
        className: a()(s, l),
        children: [
            void 0 !== t &&
                (0, r.jsxs)("div", {
                    className: a()(f.inline, f.inlineBoost),
                    children: [
                        (0, r.jsx)(o.Ucv, {
                            size: "sm",
                            color: o.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                        }),
                        (0, r.jsx)(o.Text, {
                            className: f.price,
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
            (null == i ? void 0 : i.type) === "active" && (0, r.jsx)(p, { text: i.statusText }),
        ],
    });
}
function x(e) {
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
                        children: (0, r.jsx)(o.Heading, {
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
        isWarning: s,
        badge: c,
        canRollback: u,
        onClick: p,
        onMouseOver: m,
        onMouseLeave: g,
        children: v,
    } = e;
    return (0, r.jsx)("div", {
        className: a()(f.parentContainer, { [f.rollbackInactive]: u && !l }),
        ref: t,
        children: (0, r.jsxs)(o.kL8, {
            "aria-label": i,
            onClick: p,
            onMouseOver: m,
            onMouseLeave: g,
            className: a()(
                f.container,
                {
                    [f.active]: l,
                    [f.warning]: s || (u && l),
                },
                n,
            ),
            children: [
                v,
                "new" === c &&
                    (0, r.jsx)(o.IGR, {
                        className: f.new,
                        text: d.intl.string(d.t.y2b7CA),
                    }),
                "beta" === c &&
                    (0, r.jsx)(o.IGR, {
                        className: f.new,
                        text: d.intl.string(d.t.oW0eUd),
                        color: o.TVs.colors.BACKGROUND_BRAND.css,
                    }),
            ],
        }),
    });
});

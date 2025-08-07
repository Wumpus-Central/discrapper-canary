n.d(t, {
    N4: () => v,
    P2: () => m,
    Q9: () => b,
    aB: () => j,
    c: () => x,
    rL: () => g,
    uf: () => _,
});
var r = n(255367),
    o = n(73800),
    i = n(120356),
    l = n.n(i),
    s = n(481060),
    a = n(377171),
    c = n(192371),
    u = n(834209),
    d = n(93841),
    p = n(388032),
    f = n(246499);
function m(e) {
    let { text: t } = e;
    return (0, r.jsxs)("div", {
        className: f.inline,
        children: [
            (0, r.jsx)(s.owK, {
                size: "xs",
                color: s.TVs.colors.STATUS_POSITIVE,
            }),
            (0, r.jsx)(s.Text, {
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
            (0, r.jsx)(s.Mgn, {
                size: "xs",
                color: s.TVs.colors.STATUS_WARNING,
            }),
            (0, r.jsx)(s.Text, {
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
        className: f.rollbackInline,
        children: [
            (0, r.jsx)(s.Mgn, {
                size: "xs",
                color: s.TVs.colors.STATUS_WARNING,
            }),
            (0, r.jsx)(s.Text, {
                color: "status-warning",
                variant: "text-sm/bold",
                children: p.intl.formatToPlainString(d.default["6e2ry8"], { dateString: (0, u.Z)(t) }),
            }),
        ],
    });
}
function _(e) {
    let { cost: t, costDecorator: n, status: o, className: i } = e,
        a = void 0 !== t ? f.labelContainer : f.labelContainerEnd;
    return (0, r.jsxs)("div", {
        className: l()(a, i),
        children: [
            void 0 !== t &&
                (0, r.jsxs)("div", {
                    className: l()(f.inline, f.inlineBoost),
                    children: [
                        (0, r.jsx)(s.$Eu, {
                            size: "sm",
                            color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                        }),
                        (0, r.jsx)(s.Text, {
                            className: f.price,
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
            (null == o ? void 0 : o.type) === "expiring" && (0, r.jsx)(g, { dateString: o.expiringAt }),
            (null == o ? void 0 : o.type) === "removing" && (0, r.jsx)(x, { removingAt: o.removingAt }),
            (null == o ? void 0 : o.type) === "active" && (0, r.jsx)(m, { text: o.statusText }),
        ],
    });
}
function v(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: f.buttonContainer,
        children: t,
    });
}
function b(e) {
    let { title: t, textColor: n, children: o, footer: i } = e;
    return (0, r.jsxs)("div", {
        className: f.contentContainer,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)("div", {
                        className: f.headerContainer,
                        children: (0, r.jsx)(s.X6q, {
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
let j = o.forwardRef(function (e, t) {
    let {
        className: n,
        label: o,
        isActive: i,
        isWarning: c,
        badge: u,
        canRollback: d,
        onClick: m,
        onMouseOver: g,
        onMouseLeave: x,
        children: _,
    } = e;
    return (0, r.jsx)("div", {
        className: l()(f.parentContainer, { [f.rollbackInactive]: d && !i }),
        ref: t,
        children: (0, r.jsxs)(s.kL8, {
            "aria-label": o,
            onClick: m,
            onMouseOver: g,
            onMouseLeave: x,
            className: l()(
                f.container,
                {
                    [f.active]: i,
                    [f.warning]: c || (d && i),
                },
                n,
            ),
            children: [
                "new" === u &&
                    (0, r.jsx)(s.IGR, {
                        className: f.new,
                        text: p.intl.string(p.t.y2b7CA),
                    }),
                "beta" === u &&
                    (0, r.jsx)(s.IGR, {
                        className: f.new,
                        text: p.intl.string(p.t.oW0eUV),
                        color: a.Z.BG_BRAND,
                    }),
                _,
            ],
        }),
    });
});

n.d(t, { $L: () => I, Ft: () => j, NI: () => C, P5: () => E, TG: () => v, Yq: () => S, kd: () => b });
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(628284),
    o = n(827734),
    d = n(834730),
    u = n(695366),
    c = n(104510),
    _ = n(534514),
    m = n(890856),
    p = n(777666),
    A = n(915624),
    x = n(162362),
    g = n(853513),
    f = n(985018),
    h = n(989177);
function v(e) {
    let { text: t } = e;
    return (0, r.jsxs)("div", {
        className: h.mG,
        children: [
            (0, r.jsx)(a.y, { size: "xs", color: o.A.colors.STATUS_POSITIVE }),
            (0, r.jsx)(d.E, { color: "text-feedback-positive", variant: "text-sm/bold", children: t }),
        ],
    });
}
function E(e) {
    let { dateString: t } = e;
    return (0, r.jsxs)("div", {
        className: h.mG,
        children: [
            (0, r.jsx)(u.E, { size: "xs", color: o.A.colors.STATUS_WARNING }),
            (0, r.jsx)(d.E, {
                color: "status-warning",
                variant: "text-sm/bold",
                children: f.intl.formatToMarkdownString(g.default["ol/ao/"], { dateString: (0, A.A)(t) }),
            }),
        ],
    });
}
function S(e) {
    let { removingAt: t } = e;
    return (0, r.jsxs)("div", {
        className: h.wL,
        children: [
            (0, r.jsx)(u.E, { size: "xs", color: o.A.colors.STATUS_WARNING }),
            (0, r.jsx)(d.E, {
                color: "status-warning",
                variant: "text-sm/bold",
                children: f.intl.formatToPlainString(g.default["6e2ry1"], { dateString: (0, x.A)(t) }),
            }),
        ],
    });
}
function I(e) {
    let { cost: t, costDecorator: n, status: i, className: l } = e,
        a = void 0 !== t ? h._A : h.$3;
    return (0, r.jsxs)("div", {
        className: s()(a, l),
        children: [
            void 0 !== t &&
                (0, r.jsxs)("div", {
                    className: s()(h.mG, h.pT),
                    children: [
                        (0, r.jsx)(c._, { size: "sm", color: o.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                        (0, r.jsx)(d.E, {
                            className: h.q9,
                            tag: "div",
                            variant: "heading-md/semibold",
                            color: "text-subtle",
                            children: f.intl.formatToPlainString(f.t.t2Wbo1, { required: t, decorator: n ?? "" }),
                        }),
                    ],
                }),
            i?.type === "expiring" && (0, r.jsx)(E, { dateString: i.expiringAt }),
            i?.type === "removing" && (0, r.jsx)(S, { removingAt: i.removingAt }),
            i?.type === "active" && (0, r.jsx)(v, { text: i.statusText }),
        ],
    });
}
function b(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: h.UD, children: t });
}
function j(e) {
    let { title: t, textColor: n, children: i, footer: l } = e;
    return (0, r.jsxs)("div", {
        className: h.hQ,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)("div", {
                        className: h.N1,
                        children: (0, r.jsx)(_.D, { color: n, variant: "heading-md/bold", children: t }),
                    }),
                    i,
                ],
            }),
            l,
        ],
    });
}
let C = i.forwardRef(function (e, t) {
    let {
        className: n,
        label: i,
        isActive: l,
        isWarning: a,
        badge: d,
        canRollback: u,
        onClick: c,
        onMouseOver: _,
        onMouseLeave: A,
        children: x,
    } = e;
    return (0, r.jsx)("div", {
        className: s()(h.gp, { [h.Wq]: u && !l }),
        ref: t,
        children: (0, r.jsxs)(m.s, {
            "aria-label": i,
            onClick: c,
            onMouseOver: _,
            onMouseLeave: A,
            className: s()(h.kL, { [h.vu]: l, [h.$e]: a || (u && l) }, n),
            children: [
                x,
                "new" === d && (0, r.jsx)(p.Lp, { className: h.Hl, text: f.intl.string(f.t.y2b7CA) }),
                "beta" === d &&
                    (0, r.jsx)(p.Lp, {
                        className: h.Hl,
                        text: f.intl.string(f.t.oW0eUd),
                        color: o.A.colors.BACKGROUND_BRAND.css,
                    }),
            ],
        }),
    });
});

l.d(t, { P: () => z });
var n = l(477900),
    i = l(582128),
    s = l(503698),
    a = l.n(s),
    r = l(855986),
    d = l(866665),
    o = l(408278),
    c = l(22231),
    u = l(241326),
    m = l(331322),
    x = l(834730),
    h = l(104510),
    f = l(646514),
    g = l(821609),
    p = l(645619),
    j = l(915667),
    v = l(451395),
    b = l(49303),
    _ = l(328006),
    N = l(857909),
    y = l(334840),
    A = l(393750);
let I = [
    { avatar: _.A, topBarWidth: "68%", bottomBarWidths: ["26%", "55%"] },
    { avatar: N.A, topBarWidth: "48%", bottomBarWidths: ["26%", "100%"] },
    { avatar: y.A, topBarWidth: "96%", bottomBarWidths: ["26%", "24%"] },
];
function C(e) {
    let { width: t } = e;
    return (0, n.jsx)("div", { className: A.M0, style: { width: t } });
}
function E(e) {
    let { rank: t, row: l } = e;
    return (0, n.jsxs)("div", {
        className: A.nM,
        children: [
            (0, n.jsx)("div", {
                className: A.Tm,
                "aria-hidden": !0,
                children: (0, n.jsx)(x.E, {
                    variant: "body-xs/medium",
                    color: "text-muted",
                    className: A._k,
                    children: t,
                }),
            }),
            (0, n.jsx)("img", { className: A.my, src: l.avatar, alt: "", "aria-hidden": !0 }),
            (0, n.jsxs)("div", {
                className: A.n_,
                "aria-hidden": !0,
                children: [
                    (0, n.jsx)(C, { width: l.topBarWidth }),
                    (0, n.jsxs)("div", {
                        className: A.O3,
                        children: [
                            (0, n.jsx)(C, { width: l.bottomBarWidths[0] }),
                            (0, n.jsx)(C, { width: l.bottomBarWidths[1] }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function S() {
    return (0, n.jsx)("div", { className: A.kL, children: I.map((e, t) => (0, n.jsx)(E, { rank: t + 1, row: e }, t)) });
}
var k = l(562073),
    w = l(77593),
    T = l(189213),
    R = l(192308),
    M = l(220744),
    D = l(338532),
    L = l(135294),
    U = l(792996),
    G = l(397462);
function P(e) {
    let {
        title: t,
        widgetName: l,
        titleIcon: i,
        accessory: s,
        disabled: r = !1,
        dragHandleRef: m,
        canEdit: x = !1,
        onEdit: h,
        onRemove: f,
    } = e;
    return (0, n.jsxs)("div", {
        className: a()(G.wx, { [G.kZ]: null != m }),
        children: [
            (0, n.jsx)("div", {
                ref: m,
                className: G.T_,
                "data-dnd-name": l,
                children: (0, n.jsxs)("div", {
                    className: G.i8,
                    children: [
                        null != m &&
                            (0, n.jsx)("div", {
                                className: G.BU,
                                children: (0, n.jsx)(v.jV, {
                                    iconSize: "xs",
                                    "aria-label": U.intl.formatToPlainString(L.default.NV85DR, { widgetName: l }),
                                }),
                            }),
                        null != i && (0, n.jsx)("div", { className: G.gr, children: i }),
                        t,
                        s,
                    ],
                }),
            }),
            (0, n.jsxs)("div", {
                className: G.o1,
                children: [
                    x &&
                        (0, n.jsx)(d.m, {
                            text: U.intl.string(U.t.bt75uw),
                            children: (0, n.jsx)(o.K, {
                                variant: "icon-only",
                                size: "sm",
                                icon: c.PencilIcon,
                                "aria-label": U.intl.string(U.t.bt75uw),
                                disabled: r,
                                onClick: h,
                            }),
                        }),
                    null != f &&
                        (0, n.jsx)(d.m, {
                            text: U.intl.string(U.t.Mm07Yc),
                            children: (0, n.jsx)(o.K, {
                                variant: "icon-only",
                                size: "sm",
                                icon: u.TrashIcon,
                                "aria-label":
                                    "" === l
                                        ? U.intl.string(U.t.Mm07Yc)
                                        : U.intl.formatToPlainString(L.default.hmNYxk, { widgetName: l }),
                                disabled: r,
                                onClick: f,
                            }),
                        }),
                ],
            }),
        ],
    });
}
function O(e) {
    let { title: t, titleIcon: l, accessory: i, trailing: s, actions: a } = e;
    return (0, n.jsxs)("div", {
        className: G.wx,
        children: [
            (0, n.jsxs)("div", {
                className: G.i8,
                children: [null != l && (0, n.jsx)("div", { className: G.gr, children: l }), t, i],
            }),
            (null != s || null != a) &&
                (0, n.jsxs)("div", {
                    className: G.Bo,
                    children: [
                        null != s && (0, n.jsx)("div", { className: G.o5, children: s }),
                        null != a && (0, n.jsx)("div", { className: G.o1, children: a }),
                    ],
                }),
        ],
    });
}
function B() {
    return ((0, D.R)(b.b_), null);
}
function F(e) {
    let { title: t, boostPrice: l, powerupSkuId: i, LockedPreview: s, guildId: a } = e,
        d = (0, r.bG)([p.A], () => (null != i ? p.A.getStateForGuild(a)?.allPowerups[i] : void 0), [a, i]);
    return (0, n.jsxs)(m.B, {
        className: G.xt,
        align: "center",
        justify: "center",
        gap: 32,
        children: [
            (0, n.jsxs)(m.B, {
                align: "center",
                gap: 16,
                children: [
                    (0, n.jsx)("div", {
                        className: G.$x,
                        children: null != s ? (0, n.jsx)(s, { alt: "", ariaHidden: !0 }) : (0, n.jsx)(S, {}),
                    }),
                    (0, n.jsxs)(m.B, {
                        align: "center",
                        gap: 8,
                        children: [
                            (0, n.jsx)(x.E, {
                                variant: "body-md/semibold",
                                color: "text-default",
                                children: U.intl.formatToPlainString(L.default.G5zCGV, { widgetName: t }),
                            }),
                            null != l &&
                                l > 0 &&
                                (0, n.jsxs)(m.B, {
                                    direction: "horizontal",
                                    align: "center",
                                    justify: "center",
                                    gap: 4,
                                    children: [
                                        (0, n.jsx)(h.BoostGemIcon, {
                                            size: "sm",
                                            color: f.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                        }),
                                        (0, n.jsx)(x.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children: U.intl.format(L.default["8wD0Un"], { boostPrice: l }),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(g.$, {
                variant: "expressive",
                size: "sm",
                icon: h.BoostGemIcon,
                text: U.intl.string(U.t["+7XY31"]),
                disabled: null == d,
                loading: null != i && null == d,
                onClick: function () {
                    null != d && (0, j.A)(a, d);
                },
            }),
        ],
    });
}
function z(e) {
    let {
            guildId: t,
            widget: l,
            guildSpaceMode: s,
            hydration: a,
            onRemove: r,
            onCommitConfig: d,
            dragHandleRef: o,
            disabled: c = !1,
            lock: u,
            loadId: m,
            column: x,
            order: h,
        } = e,
        f = M.m[l.type],
        g = i.useRef(null),
        p = i.useCallback(() => {
            f?.Edit != null &&
                null != d &&
                null == u &&
                ((0, b.Nv)(t, l.type, l.id),
                (function (e) {
                    let { widget: t, Edit: l, onCommit: i } = e,
                        s = (e) =>
                            (0, n.jsx)(T.a, {
                                title: t.default_title ?? void 0,
                                actions: [],
                                ...e,
                                children: (0, n.jsx)(l, {
                                    widget: t,
                                    commit: function (t) {
                                        (i(t), e.onClose());
                                    },
                                    cancel: function () {
                                        e.onClose();
                                    },
                                }),
                            });
                    (0, R.mM)(() => Promise.resolve(s), { modalKey: "guild-space-widget-edit" });
                })({ widget: l, Edit: f.Edit, onCommit: d }));
        }, [l, f, d, u, t]);
    if (null == f) return null;
    let { View: j, Edit: v, HeaderAccessory: _, HeaderActions: N, Title: y, TitleIcon: A, ViewHeaderTrailing: I } = f,
        C = "edit" === s,
        E = null != v && null != d && null == u,
        S = null != _ ? (0, n.jsx)(_, { hydration: a, guildId: t }) : null,
        D = null != A ? (0, n.jsx)(A, { hydration: a }) : null,
        L = null == u && null != N ? (0, n.jsx)(N, { hydration: a, guildId: t, column: l.position.column }) : null,
        U = l.default_title ?? "",
        z =
            null != y && null == u
                ? (0, n.jsx)(y, { widget: l, hydration: a, guildSpaceMode: s, guildId: t, disabled: c })
                : (0, n.jsx)(k.q, { children: U });
    return (0, n.jsxs)("div", {
        ref: g,
        className: G.kL,
        "data-guild-space-widget": "",
        children: [
            C
                ? (0, n.jsx)(P, {
                      title: z,
                      widgetName: U,
                      titleIcon: D,
                      accessory: S,
                      disabled: c,
                      dragHandleRef: o,
                      canEdit: E,
                      onEdit: p,
                      onRemove: r,
                  })
                : (0, n.jsx)(O, {
                      title: z,
                      titleIcon: D,
                      accessory: S,
                      trailing:
                          null != I && null == u
                              ? (0, n.jsx)(I, { widget: l, hydration: a, title: U, guildId: t })
                              : null,
                      actions: L,
                  }),
            (0, n.jsx)("div", {
                className: G.rf,
                children: (0, n.jsxs)(w.m, {
                    guildId: t,
                    widget: l,
                    loadId: "view" === s ? m : void 0,
                    column: x,
                    order: h,
                    elementRef: g,
                    children: [
                        (0, n.jsx)(B, {}),
                        null != u
                            ? (0, n.jsx)(F, {
                                  title: U,
                                  boostPrice: u.boostPrice,
                                  powerupSkuId: u.powerupSkuId,
                                  LockedPreview: f.LockedPreview,
                                  guildId: t,
                              })
                            : (0, n.jsx)(j, {
                                  widget: l,
                                  hydration: a,
                                  guildSpaceMode: s,
                                  guildId: t,
                                  onEdit: C && E ? p : void 0,
                                  disabled: c,
                              }),
                    ],
                }),
            }),
        ],
    });
}

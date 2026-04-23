s.d(e, { A: () => C });
var a = s(627968),
    l = s(64700),
    n = s(503698),
    i = s.n(n),
    d = s(311907),
    c = s(554146),
    r = s(827734),
    o = s(777666),
    u = s(43990),
    m = s(815021),
    x = s(534514),
    f = s(834730),
    p = s(821609),
    b = s(224640),
    g = s(367727),
    h = s(954571),
    A = s(832163),
    N = s(44724),
    _ = s(652215),
    j = s(49999),
    v = s(547735);
function C(t) {
    let { logo: e, titles: s, subtitle: n, features: C, buttonText: D, applicationId: k, onClose: S, ...T } = t,
        I = (0, d.bG)([A.A], () => A.A.getGuildIdFromApplicationId(k ?? void 0));
    l.useEffect(() => {
        h.default.track(_.HAw.OPEN_MODAL, { type: "Social Layer Storefront Announcement Modal", application_id: k }),
            (0, g.d6)(c.M.GAME_SHOP_ANNOUNCEMENT_MODAL, { dismissAction: j.i.AUTO_DISMISS });
    }, [k]);
    let M = l.useCallback(() => {
            null != I && (0, N.X)({ guildId: I });
        }, [I]),
        E = l.useCallback(() => {
            null != I && ((0, N.default)({ guildId: I }), S());
        }, [I, S]);
    return (0, a.jsx)(u.N, {
        theme: _.NJ8.DARK,
        children: (t) =>
            (0, a.jsx)(b.d, {
                ...T,
                onClose: S,
                size: "lg",
                children: (0, a.jsxs)("div", {
                    className: i()(t, v.Qs),
                    children: [
                        (0, a.jsx)("div", {
                            className: v.b,
                            children: (0, a.jsx)(m.J, { onClick: S, variant: "overlay-secondary" }),
                        }),
                        (0, a.jsx)("div", {
                            className: v.xX,
                            children: (0, a.jsx)("img", { src: e, alt: "", className: v.wm }),
                        }),
                        (0, a.jsxs)("div", {
                            className: v.gn,
                            children: [
                                s.map((t, e) =>
                                    (0, a.jsx)(
                                        x.D,
                                        { variant: "display-md", color: "text-strong", className: v.DD, children: t },
                                        e,
                                    ),
                                ),
                                (0, a.jsx)(f.E, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    className: v.VA,
                                    children: n,
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: v.qT,
                            children: C.map((t, e) =>
                                (0, a.jsxs)(
                                    "div",
                                    {
                                        className: v.N4,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: v.AD,
                                                children: [
                                                    (0, a.jsx)("img", { src: t.icon, alt: "" }),
                                                    null != t.iconLabelText &&
                                                        (0, a.jsx)(o.Lp, {
                                                            text: t.iconLabelText,
                                                            color: r.A.colors.STATUS_POSITIVE.css,
                                                            className: v.go,
                                                        }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: v.kh,
                                                children: [
                                                    (0, a.jsx)(x.D, {
                                                        variant: "heading-md/bold",
                                                        color: "text-strong",
                                                        children: t.title,
                                                    }),
                                                    (0, a.jsx)(f.E, {
                                                        variant: "text-sm/medium",
                                                        color: "text-muted",
                                                        children: t.subtitle,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    },
                                    e,
                                ),
                            ),
                        }),
                        (0, a.jsx)("div", {
                            className: v.UD,
                            children: (0, a.jsx)(p.$, {
                                variant: "primary",
                                text: D,
                                onClick: E,
                                onMouseDown: M,
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            }),
    });
}

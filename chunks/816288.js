n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(563495),
    o = n(158954),
    d = n(311907),
    c = n(397927),
    u = n(442433),
    h = n(793574),
    A = n(230135),
    g = n(552836),
    m = n(147925),
    p = n(363487),
    _ = n(267771),
    x = n(828162),
    f = n(333354),
    E = n(985018),
    C = n(375395);
function I(e) {
    let { guild: t, withMargin: s } = e,
        I = (0, _.A)(t),
        S = (0, p.A)(t.id),
        b = l.useCallback(() => {
            (0, x.A)(t.id, h.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        N = (0, d.bG)([g.A], () => g.A.getCountForGuild(t.id) ?? 0);
    l.useEffect(() => {
        N !== t.premiumSubscriberCount && (0, A.u)(t.id, t.premiumSubscriberCount);
    }, [t.id, N, t.premiumSubscriberCount]);
    let T = Math.min((N / I) * 100, 100),
        [j, v] = (0, c.zhh)(
            () => ({
                width: N === t.premiumSubscriberCount ? `calc(${T}% - 4px)` : "0%",
                config: { tension: 250, damping: 5, mass: 1 },
            }),
            "respect-motion-settings",
            [N, t.premiumSubscriberCount],
        );
    l.useEffect(() => {
        v({ width: `calc(${T}% - 4px)` });
    }, [T, v]);
    let y = N >= I;
    return (0, i.jsx)(c.DUT, {
        "aria-label": void 0,
        role: "button",
        focusProps: { offset: { left: 10, right: 4 } },
        onClick: () => {
            b();
        },
        className: a()(C.kL, { [C.aF]: s }),
        onContextMenu: (e) => {
            S &&
                (0, u.L3)(e, async () => {
                    let { default: e } = await n.e("71728").then(n.bind(n, 709843));
                    return (n) => (0, i.jsx)(e, { ...n, guild: t });
                });
        },
        children: (0, i.jsxs)("div", {
            className: C.hQ,
            children: [
                (0, i.jsx)("div", { className: C.L$ }),
                (0, i.jsx)(r.animated.div, { className: a()(C.qB, { [C.mu]: T <= 5 }), style: j }),
                (0, i.jsxs)("div", {
                    className: C.FS,
                    children: [
                        (0, i.jsxs)("div", {
                            className: C.Ui,
                            children: [
                                (0, i.jsx)(o.EYj, {
                                    className: C.Qq,
                                    variant: "text-xs/semibold",
                                    children: E.intl.string(f.default.NI6Ihe),
                                }),
                                t.premiumSubscriberCount >= I &&
                                    (0, i.jsx)(o.EYj, {
                                        className: C.Qq,
                                        variant: "text-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: C.Ui,
                            children: [
                                (0, i.jsx)(o.EYj, {
                                    className: a()(C.Qq, C.ue),
                                    variant: "text-xs/semibold",
                                    children: y
                                        ? E.intl.formatToPlainString(f.default["Ehpq+7"], { appliedBoostCount: N })
                                        : E.intl.formatToPlainString(f.default["/rbPDs"], {
                                              appliedBoostCount: N,
                                              maxBoostCount: I,
                                          }),
                                }),
                                (0, i.jsx)(m.A, {
                                    width: 12,
                                    height: 12,
                                    direction: m.A.Directions.RIGHT,
                                    className: a()(C.Qq, C.ue),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function S(e) {
    let { guild: t, withMargin: n } = e;
    return (0, i.jsx)(I, { guild: t, withMargin: n });
}

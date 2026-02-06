n.d(t, { A: () => S, n: () => b });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(92674),
    o = n(158954),
    d = n(311907),
    c = n(397927),
    u = n(442433),
    h = n(793574),
    A = n(230135),
    m = n(552836),
    p = n(147925),
    g = n(363487),
    _ = n(267771),
    f = n(828162),
    x = n(259568),
    C = n(333354),
    E = n(985018),
    I = n(375395);
let b = l.forwardRef((e, t) => {
    let { appliedBoostCount: n, maxBoostCount: s, premiumSubscriberCount: d, className: u } = e,
        h = n >= s,
        A = Math.min((n / s) * 100, 100),
        [m, g] = (0, c.zhh)(
            () => ({ width: n === d ? `calc(${A}% - 4px)` : "0%", config: { tension: 250, damping: 5, mass: 1 } }),
            "respect-motion-settings",
            [n, d],
        );
    return (
        l.useEffect(() => {
            g({ width: `calc(${A}% - 4px)` });
        }, [A, g]),
        (0, i.jsxs)("div", {
            ref: t,
            className: I.hQ,
            children: [
                (0, i.jsx)("div", { className: a()(I.L$, u) }),
                (0, i.jsx)(r.animated.div, { className: a()(I.qB, { [I.mu]: A <= 5 }), style: m }),
                (0, i.jsxs)("div", {
                    className: I.FS,
                    children: [
                        (0, i.jsxs)("div", {
                            className: I.Ui,
                            children: [
                                (0, i.jsx)(o.EYj, {
                                    className: I.Qq,
                                    variant: "text-xs/semibold",
                                    children: E.intl.string(C.default.NI6Ihe),
                                }),
                                d >= s &&
                                    (0, i.jsx)(o.EYj, {
                                        className: I.Qq,
                                        variant: "text-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: I.Ui,
                            children: [
                                (0, i.jsx)(o.EYj, {
                                    className: a()(I.Qq, I.ue),
                                    variant: "text-xs/semibold",
                                    children: h
                                        ? E.intl.formatToPlainString(C.default["Ehpq+7"], { appliedBoostCount: n })
                                        : E.intl.formatToPlainString(C.default["/rbPDs"], {
                                              appliedBoostCount: n,
                                              maxBoostCount: s,
                                          }),
                                }),
                                (0, i.jsx)(p.A, {
                                    width: 12,
                                    height: 12,
                                    direction: p.A.Directions.RIGHT,
                                    className: a()(I.Qq, I.ue),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
function N(e) {
    let { guild: t, withMargin: s } = e,
        r = l.useRef(null),
        o = (0, _.A)(t),
        p = (0, g.A)(t.id),
        C = l.useCallback(() => {
            (0, f.A)(t.id, h.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        E = (0, d.bG)([m.A], () => m.A.getCountForGuild(t.id) ?? 0);
    l.useEffect(() => {
        E !== t.premiumSubscriberCount && (0, A.u)(t.id, t.premiumSubscriberCount);
    }, [t.id, E, t.premiumSubscriberCount]);
    let N = l.useCallback(
        (e) => {
            p &&
                (0, u.L3)(e, async () => {
                    let { default: e } = await n.e("71728").then(n.bind(n, 709843));
                    return (n) => (0, i.jsx)(e, { ...n, guild: t });
                });
        },
        [p, t],
    );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.DUT, {
                "aria-label": void 0,
                role: "button",
                focusProps: { offset: { left: 10, right: 4 } },
                onClick: C,
                className: a()(I.kL, { [I.aF]: s }),
                onContextMenu: N,
                children: (0, i.jsx)(b, {
                    ref: r,
                    appliedBoostCount: E,
                    maxBoostCount: o,
                    premiumSubscriberCount: t.premiumSubscriberCount,
                }),
            }),
            (0, i.jsx)(x.a, {
                guildId: t.id,
                targetElementRef: r,
                appliedBoostCount: E,
                maxBoostCount: o,
                premiumSubscriberCount: t.premiumSubscriberCount,
            }),
        ],
    });
}
function S(e) {
    let { guild: t, withMargin: n } = e;
    return (0, i.jsx)(N, { guild: t, withMargin: n });
}
b.displayName = "GuildPowerupsProgressBarUI";

n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(517738),
    o = n(834730),
    d = n(311907),
    c = n(717421),
    u = n(939249),
    h = n(442433),
    A = n(793574),
    _ = n(230135),
    m = n(552836),
    g = n(147925),
    p = n(363487),
    f = n(267771),
    E = n(828162),
    x = n(853513),
    I = n(985018),
    C = n(424460);
let b = l.forwardRef((e, t) => {
    let { appliedBoostCount: n, maxBoostCount: s, premiumSubscriberCount: d, className: u } = e,
        h = n >= s,
        A = Math.min((n / s) * 100, 100),
        _ = `calc(${A}% - 4px)`,
        [m, p] = (0, c.z)(
            () => ({ width: n === d ? _ : "calc(0% - 0px)", config: { tension: 250, damping: 5, mass: 1 } }),
            "respect-motion-settings",
            [n, d],
        );
    return (
        l.useEffect(() => {
            p({ width: _ });
        }, [_, p]),
        (0, i.jsxs)("div", {
            ref: t,
            className: C.hQ,
            children: [
                (0, i.jsx)("div", { className: a()(C.L$, u) }),
                (0, i.jsx)(r.animated.div, { className: a()(C.qB, { [C.mu]: A <= 5 }), style: m }),
                (0, i.jsxs)("div", {
                    className: C.FS,
                    children: [
                        (0, i.jsxs)("div", {
                            className: C.Ui,
                            children: [
                                (0, i.jsx)(o.E, {
                                    className: C.Qq,
                                    variant: "text-xs/semibold",
                                    children: I.intl.string(x.default.NI6Ihe),
                                }),
                                d >= s &&
                                    (0, i.jsx)(o.E, {
                                        className: C.Qq,
                                        variant: "text-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: C.Ui,
                            children: [
                                (0, i.jsx)(o.E, {
                                    className: a()(C.Qq, C.ue),
                                    variant: "text-xs/semibold",
                                    children: h
                                        ? I.intl.formatToPlainString(x.default["Ehpq+7"], { appliedBoostCount: n })
                                        : I.intl.formatToPlainString(x.default["/rbPDs"], {
                                              appliedBoostCount: n,
                                              maxBoostCount: s,
                                          }),
                                }),
                                (0, i.jsx)(g.A, {
                                    width: 12,
                                    height: 12,
                                    direction: g.A.Directions.RIGHT,
                                    className: a()(C.Qq, C.ue),
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
        r = (0, f.A)(t),
        o = (0, p.A)(t.id),
        c = l.useCallback(() => {
            (0, E.A)(t.id, A.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        g = (0, d.bG)([m.A], () => m.A.getCountForGuild(t.id) ?? 0);
    l.useEffect(() => {
        g !== t.premiumSubscriberCount && (0, _.u)(t.id, t.premiumSubscriberCount);
    }, [t.id, g, t.premiumSubscriberCount]);
    let x = l.useCallback(
        (e) => {
            o &&
                (0, h.L3)(e, async () => {
                    let { default: e } = await n.e("71728").then(n.bind(n, 709843));
                    return (n) => (0, i.jsx)(e, { ...n, guild: t });
                });
        },
        [o, t],
    );
    return (0, i.jsx)(u.D, {
        "aria-label": void 0,
        role: "button",
        focusProps: { offset: { left: 10, right: 4 } },
        onClick: c,
        className: a()(C.kL, { [C.aF]: s }),
        onContextMenu: x,
        children: (0, i.jsx)(b, {
            appliedBoostCount: g,
            maxBoostCount: r,
            premiumSubscriberCount: t.premiumSubscriberCount,
        }),
    });
}
function S(e) {
    let { guild: t, withMargin: n } = e;
    return (0, i.jsx)(N, { guild: t, withMargin: n });
}
b.displayName = "GuildPowerupsProgressBarUI";

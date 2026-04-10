n.d(t, { A: () => T });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(687498),
    o = n(158954),
    d = n(311907),
    c = n(397927),
    u = n(442433),
    h = n(793574),
    A = n(230135),
    _ = n(552836),
    m = n(147925),
    p = n(363487),
    g = n(267771),
    f = n(828162),
    x = n(333354),
    E = n(985018),
    I = n(208988);
let C = l.forwardRef((e, t) => {
    let { appliedBoostCount: n, maxBoostCount: s, premiumSubscriberCount: d, className: u } = e,
        h = n >= s,
        A = Math.min((n / s) * 100, 100),
        _ = `calc(${A}% - 4px)`,
        [p, g] = (0, c.zhh)(
            () => ({ width: n === d ? _ : "calc(0% - 0px)", config: { tension: 250, damping: 5, mass: 1 } }),
            "respect-motion-settings",
            [n, d],
        );
    return (
        l.useEffect(() => {
            g({ width: _ });
        }, [_, g]),
        (0, i.jsxs)("div", {
            ref: t,
            className: I.hQ,
            children: [
                (0, i.jsx)("div", { className: a()(I.L$, u) }),
                (0, i.jsx)(r.animated.div, { className: a()(I.qB, { [I.mu]: A <= 5 }), style: p }),
                (0, i.jsxs)("div", {
                    className: I.FS,
                    children: [
                        (0, i.jsxs)("div", {
                            className: I.Ui,
                            children: [
                                (0, i.jsx)(o.EYj, {
                                    className: I.Qq,
                                    variant: "text-xs/semibold",
                                    children: E.intl.string(x.default.NI6Ihe),
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
                                        ? E.intl.formatToPlainString(x.default["Ehpq+7"], { appliedBoostCount: n })
                                        : E.intl.formatToPlainString(x.default["/rbPDs"], {
                                              appliedBoostCount: n,
                                              maxBoostCount: s,
                                          }),
                                }),
                                (0, i.jsx)(m.A, {
                                    width: 12,
                                    height: 12,
                                    direction: m.A.Directions.RIGHT,
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
        r = (0, g.A)(t),
        o = (0, p.A)(t.id),
        m = l.useCallback(() => {
            (0, f.A)(t.id, h.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        x = (0, d.bG)([_.A], () => _.A.getCountForGuild(t.id) ?? 0);
    l.useEffect(() => {
        x !== t.premiumSubscriberCount && (0, A.u)(t.id, t.premiumSubscriberCount);
    }, [t.id, x, t.premiumSubscriberCount]);
    let E = l.useCallback(
        (e) => {
            o &&
                (0, u.L3)(e, async () => {
                    let { default: e } = await n.e("71728").then(n.bind(n, 709843));
                    return (n) => (0, i.jsx)(e, { ...n, guild: t });
                });
        },
        [o, t],
    );
    return (0, i.jsx)(c.DUT, {
        "aria-label": void 0,
        role: "button",
        focusProps: { offset: { left: 10, right: 4 } },
        onClick: m,
        className: a()(I.kL, { [I.aF]: s }),
        onContextMenu: E,
        children: (0, i.jsx)(C, {
            appliedBoostCount: x,
            maxBoostCount: r,
            premiumSubscriberCount: t.premiumSubscriberCount,
        }),
    });
}
function T(e) {
    let { guild: t, withMargin: n } = e;
    return (0, i.jsx)(N, { guild: t, withMargin: n });
}
C.displayName = "GuildPowerupsProgressBarUI";

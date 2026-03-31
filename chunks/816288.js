n.d(t, { A: () => S, n: () => N });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(382222),
    o = n(158954),
    c = n(311907),
    d = n(397927),
    u = n(442433),
    h = n(793574),
    A = n(230135),
    _ = n(552836),
    m = n(147925),
    g = n(363487),
    p = n(267771),
    f = n(828162),
    x = n(259568),
    E = n(333354),
    I = n(985018),
    C = n(208988);
let N = l.forwardRef((e, t) => {
    let { appliedBoostCount: n, maxBoostCount: s, premiumSubscriberCount: c, className: u } = e,
        h = n >= s,
        A = Math.min((n / s) * 100, 100),
        [_, g] = (0, d.zhh)(
            () => ({ width: n === c ? `calc(${A}% - 4px)` : "0%", config: { tension: 250, damping: 5, mass: 1 } }),
            "respect-motion-settings",
            [n, c],
        );
    return (
        l.useEffect(() => {
            g({ width: `calc(${A}% - 4px)` });
        }, [A, g]),
        (0, i.jsxs)("div", {
            ref: t,
            className: C.hQ,
            children: [
                (0, i.jsx)("div", { className: a()(C.L$, u) }),
                (0, i.jsx)(r.animated.div, { className: a()(C.qB, { [C.mu]: A <= 5 }), style: _ }),
                (0, i.jsxs)("div", {
                    className: C.FS,
                    children: [
                        (0, i.jsxs)("div", {
                            className: C.Ui,
                            children: [
                                (0, i.jsx)(o.EYj, {
                                    className: C.Qq,
                                    variant: "text-xs/semibold",
                                    children: I.intl.string(E.default.NI6Ihe),
                                }),
                                c >= s &&
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
                                    children: h
                                        ? I.intl.formatToPlainString(E.default["Ehpq+7"], { appliedBoostCount: n })
                                        : I.intl.formatToPlainString(E.default["/rbPDs"], {
                                              appliedBoostCount: n,
                                              maxBoostCount: s,
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
        })
    );
});
function T(e) {
    let { guild: t, withMargin: s } = e,
        r = l.useRef(null),
        o = (0, p.A)(t),
        m = (0, g.A)(t.id),
        E = l.useCallback(() => {
            (0, f.A)(t.id, h.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        I = (0, c.bG)([_.A], () => _.A.getCountForGuild(t.id) ?? 0);
    l.useEffect(() => {
        I !== t.premiumSubscriberCount && (0, A.u)(t.id, t.premiumSubscriberCount);
    }, [t.id, I, t.premiumSubscriberCount]);
    let T = l.useCallback(
        (e) => {
            m &&
                (0, u.L3)(e, async () => {
                    let { default: e } = await n.e("71728").then(n.bind(n, 709843));
                    return (n) => (0, i.jsx)(e, { ...n, guild: t });
                });
        },
        [m, t],
    );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.DUT, {
                "aria-label": void 0,
                role: "button",
                focusProps: { offset: { left: 10, right: 4 } },
                onClick: E,
                className: a()(C.kL, { [C.aF]: s }),
                onContextMenu: T,
                children: (0, i.jsx)(N, {
                    ref: r,
                    appliedBoostCount: I,
                    maxBoostCount: o,
                    premiumSubscriberCount: t.premiumSubscriberCount,
                }),
            }),
            (0, i.jsx)(x.a, { guild: t, targetElementRef: r }),
        ],
    });
}
function S(e) {
    let { guild: t, withMargin: n } = e;
    return (0, i.jsx)(T, { guild: t, withMargin: n });
}
N.displayName = "GuildPowerupsProgressBarUI";

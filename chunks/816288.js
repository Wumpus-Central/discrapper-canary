"use strict";
n.d(t, { A: () => S, n: () => N });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(4208),
    o = n(158954),
    c = n(311907),
    d = n(397927),
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
    I = n(208988);
let N = s.forwardRef((e, t) => {
    let { appliedBoostCount: n, maxBoostCount: l, premiumSubscriberCount: c, className: u } = e,
        h = n >= l,
        A = Math.min((n / l) * 100, 100),
        [m, g] = (0, d.zhh)(
            () => ({ width: n === c ? `calc(${A}% - 4px)` : "0%", config: { tension: 250, damping: 5, mass: 1 } }),
            "respect-motion-settings",
            [n, c],
        );
    return (
        s.useEffect(() => {
            g({ width: `calc(${A}% - 4px)` });
        }, [A, g]),
        (0, i.jsxs)("div", {
            ref: t,
            className: I.hQ,
            children: [
                (0, i.jsx)("div", { className: r()(I.L$, u) }),
                (0, i.jsx)(a.animated.div, { className: r()(I.qB, { [I.mu]: A <= 5 }), style: m }),
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
                                c >= l &&
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
                                    className: r()(I.Qq, I.ue),
                                    variant: "text-xs/semibold",
                                    children: h
                                        ? E.intl.formatToPlainString(C.default["Ehpq+7"], { appliedBoostCount: n })
                                        : E.intl.formatToPlainString(C.default["/rbPDs"], {
                                              appliedBoostCount: n,
                                              maxBoostCount: l,
                                          }),
                                }),
                                (0, i.jsx)(p.A, {
                                    width: 12,
                                    height: 12,
                                    direction: p.A.Directions.RIGHT,
                                    className: r()(I.Qq, I.ue),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
function b(e) {
    let { guild: t, withMargin: l } = e,
        a = s.useRef(null),
        o = (0, _.A)(t),
        p = (0, g.A)(t.id),
        C = s.useCallback(() => {
            (0, f.A)(t.id, h.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        E = (0, c.bG)([m.A], () => m.A.getCountForGuild(t.id) ?? 0);
    s.useEffect(() => {
        E !== t.premiumSubscriberCount && (0, A.u)(t.id, t.premiumSubscriberCount);
    }, [t.id, E, t.premiumSubscriberCount]);
    let b = s.useCallback(
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
            (0, i.jsx)(d.DUT, {
                "aria-label": void 0,
                role: "button",
                focusProps: { offset: { left: 10, right: 4 } },
                onClick: C,
                className: r()(I.kL, { [I.aF]: l }),
                onContextMenu: b,
                children: (0, i.jsx)(N, {
                    ref: a,
                    appliedBoostCount: E,
                    maxBoostCount: o,
                    premiumSubscriberCount: t.premiumSubscriberCount,
                }),
            }),
            (0, i.jsx)(x.a, { guild: t, targetElementRef: a }),
        ],
    });
}
function S(e) {
    let { guild: t, withMargin: n } = e;
    return (0, i.jsx)(b, { guild: t, withMargin: n });
}
N.displayName = "GuildPowerupsProgressBarUI";

l.d(t, { A: () => g });
var s,
    a = l(627968),
    i = l(64700),
    n = l(503698),
    r = l.n(n),
    c = (((s = {})[(s.NONE = 0)] = "NONE"), (s[(s.LOW = 1)] = "LOW"), (s[(s.HIGH = 2)] = "HIGH"), s),
    d = l(990078),
    m = l(834730),
    o = l(825860),
    u = l(661531),
    x = l(573435),
    h = l(822017);
function v(e) {
    let { game: t, activityLevel: l, hideTooltip: s } = e,
        i = t.getIconURL(24);
    if (null == i) return null;
    let n = l?.level === c.HIGH,
        r = (0, a.jsx)(m.E, { variant: "text-sm/medium", color: "interactive-text-active", children: t.name });
    return (0, a.jsx)(d.m, {
        __unsupportedReactNodeAsText: r,
        position: "bottom",
        "aria-label": t.name,
        shouldShow: !s,
        children: (0, a.jsxs)("div", {
            className: h.Gt,
            children: [
                (0, a.jsx)("img", { className: h.T_, src: i, alt: t.name }),
                n &&
                    (0, a.jsx)(x.Ay, {
                        mask: x.hW.GAMEPLAY_HIGH_ACTIVITY_ICON,
                        width: 14,
                        height: 14,
                        className: h.Sy,
                        children: (0, a.jsx)("div", {
                            className: h._8,
                            children: (0, a.jsx)(o.Y, {
                                color: u.A.unsafe_rawColors.ORANGE_330.css,
                                width: 10,
                                height: 10,
                                size: "custom",
                            }),
                        }),
                    }),
            ],
        }),
    });
}
function j(e) {
    let { games: t, activity: l } = e;
    return (0, a.jsx)("div", {
        className: h.Fz,
        children: t.map((e) =>
            (0, a.jsxs)(
                "div",
                {
                    className: h.ZS,
                    children: [
                        (0, a.jsx)(v, { game: e, activityLevel: l[e.id] }),
                        (0, a.jsx)(m.E, {
                            variant: "text-xs/medium",
                            color: "interactive-text-active",
                            children: e.name,
                        }),
                    ],
                },
                e.id,
            ),
        ),
    });
}
function N(e) {
    let { game: t, activityLevel: l } = e;
    return (0, a.jsxs)("div", {
        className: h.E,
        children: [
            (0, a.jsx)(v, { game: t, activityLevel: l, hideTooltip: !0 }),
            (0, a.jsx)(m.E, { variant: "text-sm/medium", color: "text-default", children: t.name }),
        ],
    });
}
function g(e) {
    let { gamesToDisplay: t, lastGameToDisplay: l, remainingGames: s, activity: n } = e,
        c = l?.getIconURL(24),
        o = i.useMemo(
            () =>
                null == l || null == c
                    ? null
                    : 0 === s.length
                      ? (0, a.jsx)(v, { game: l, activityLevel: n[l.id] })
                      : (0, a.jsx)(d.m, {
                            "aria-label": "",
                            position: "bottom",
                            __unsupportedReactNodeAsText: (0, a.jsx)(j, { games: s, activity: n }),
                            children: (0, a.jsxs)("div", {
                                className: r()(h.Gt, h.oL),
                                children: [
                                    (0, a.jsx)("img", { className: r()(h.T_, h.tJ), src: c, alt: l.name }),
                                    (0, a.jsx)("div", { className: h.Fg }),
                                    (0, a.jsx)("div", {
                                        className: h.AZ,
                                        children: (0, a.jsx)(m.E, {
                                            variant: "text-xs/normal",
                                            color: "always-white",
                                            children: `+${s.length}`,
                                        }),
                                    }),
                                ],
                            }),
                        }),
            [l, c, s, n],
        );
    return null == t || 0 === t.length
        ? null
        : 1 === t.length
          ? (0, a.jsx)("div", { className: h.kL, children: (0, a.jsx)(N, { game: t[0], activityLevel: n[t[0].id] }) })
          : (0, a.jsxs)("div", {
                className: h.kL,
                children: [t.map((e) => (0, a.jsx)(v, { game: e, activityLevel: n[e.id] }, e.id)), o],
            });
}

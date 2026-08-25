l.d(t, { A: () => p });
var i,
    s = l(477900),
    a = l(582128),
    n = l(503698),
    r = l.n(n),
    d = (((i = {})[(i.NONE = 0)] = "NONE"), (i[(i.LOW = 1)] = "LOW"), (i[(i.HIGH = 2)] = "HIGH"), i),
    o = l(834730),
    c = l(825860),
    m = l(661531),
    u = l(866665),
    x = l(573435),
    h = l(409626),
    v = l(692969),
    g = l(658630);
function j(e) {
    let { game: t, activityLevel: l, hideTooltip: i } = e,
        a = (0, v.A)({ gameId: t.id, source: h.GameProfileSources.GuildProfileGames, trackEntryPointImpression: !0 }),
        n = null != a,
        j = t.getIconURL(24);
    if (null == j) return null;
    let f = l?.level === d.HIGH,
        N = (0, s.jsx)(o.E, { variant: "text-sm/medium", color: "interactive-text-active", children: t.name }),
        p = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)("img", { className: g.T_, src: j, alt: t.name }),
                f &&
                    (0, s.jsx)(x.Ay, {
                        mask: x.hW.GAMEPLAY_HIGH_ACTIVITY_ICON,
                        width: 14,
                        height: 14,
                        className: g.Sy,
                        children: (0, s.jsx)("div", {
                            className: g._8,
                            children: (0, s.jsx)(c.FireIcon, {
                                color: m.A.unsafe_rawColors.ORANGE_330.css,
                                width: 10,
                                height: 10,
                                size: "custom",
                            }),
                        }),
                    }),
            ],
        });
    return (0, s.jsx)(u.m, {
        __unsupportedReactNodeAsText: N,
        position: "bottom",
        "aria-label": t.name,
        shouldShow: !i,
        children: n
            ? (0, s.jsx)("button", { type: "button", className: r()(g.Gt, g.U_), onClick: a, children: p })
            : (0, s.jsx)("div", { className: g.Gt, children: p }),
    });
}
function f(e) {
    let { games: t, activity: l } = e;
    return (0, s.jsx)("div", {
        className: g.Fz,
        children: t.map((e) =>
            (0, s.jsxs)(
                "div",
                {
                    className: g.ZS,
                    children: [
                        (0, s.jsx)(j, { game: e, activityLevel: l[e.id] }),
                        (0, s.jsx)(o.E, {
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
    return (0, s.jsxs)("div", {
        className: g.E,
        children: [
            (0, s.jsx)(j, { game: t, activityLevel: l, hideTooltip: !0 }),
            (0, s.jsx)(o.E, { variant: "text-sm/medium", color: "text-default", children: t.name }),
        ],
    });
}
function p(e) {
    let { gamesToDisplay: t, lastGameToDisplay: l, remainingGames: i, activity: n } = e,
        d = l?.getIconURL(24),
        c = a.useMemo(
            () =>
                null == l || null == d
                    ? null
                    : 0 === i.length
                      ? (0, s.jsx)(j, { game: l, activityLevel: n[l.id] })
                      : (0, s.jsx)(u.m, {
                            "aria-label": "",
                            position: "bottom",
                            __unsupportedReactNodeAsText: (0, s.jsx)(f, { games: i, activity: n }),
                            children: (0, s.jsxs)("div", {
                                className: r()(g.Gt, g.oL),
                                children: [
                                    (0, s.jsx)("img", { className: r()(g.T_, g.tJ), src: d, alt: l.name }),
                                    (0, s.jsx)("div", { className: g.Fg }),
                                    (0, s.jsx)("div", {
                                        className: g.AZ,
                                        children: (0, s.jsx)(o.E, {
                                            variant: "text-xs/normal",
                                            color: "text-overlay-light",
                                            children: `+${i.length}`,
                                        }),
                                    }),
                                ],
                            }),
                        }),
            [l, d, i, n],
        );
    return null == t || 0 === t.length
        ? null
        : 1 === t.length
          ? (0, s.jsx)("div", { className: g.kL, children: (0, s.jsx)(N, { game: t[0], activityLevel: n[t[0].id] }) })
          : (0, s.jsxs)("div", {
                className: g.kL,
                children: [t.map((e) => (0, s.jsx)(j, { game: e, activityLevel: n[e.id] }, e.id)), c],
            });
}

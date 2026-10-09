l.d(n, { A: () => j, J: () => G });
var t = l(477900),
    a = l(582128),
    r = l(17928),
    i = l(369606),
    o = l(179097),
    s = l(661531),
    u = l(297264),
    d = l(834730),
    c = l(821609),
    A = l(922016),
    f = l(939249),
    g = l(964486),
    h = l(421773),
    E = l(378570),
    m = l(309010),
    _ = l(287809),
    v = l(174459),
    S = l(562153),
    R = l(49303),
    p = l(313627),
    D = l(251812),
    w = l(927813),
    N = l(518782),
    x = l(61567),
    y = l(660183),
    M = l(32090),
    T = l(652215),
    I = l(746080),
    C = l(631949);
function b(e) {
    let { variant: n, placement: l } = e,
        a = "winner" === n ? i.TrophyIcon : o.MedalIcon,
        r = s.A.colors.ICON_FEEDBACK_WARNING;
    return "badge" === l
        ? (0, t.jsx)(a, { size: "xs", color: r, "aria-hidden": !0 })
        : (0, t.jsx)(a, { size: "custom", width: 48, height: 48, color: r, "aria-hidden": !0 });
}
function L(e) {
    let {
            guildId: n,
            userId: l,
            onClose: a,
            onMouseEnter: i,
            onMouseLeave: o,
            variant: s,
            statName: A,
            title: f,
            detailText: h,
        } = e,
        D = (0, r.bG)([m.Ay], () => m.Ay.getChannelId(n)),
        w = (0, r.bG)([_.default], () => _.default.getUser(l)),
        N = S.Ay.useName(n, D, w),
        M = (0, p.Uq)(n, "LeaderboardWinnerBadgePopout"),
        L = "winner" === s ? "Leaderboard Winner Badge Popout" : "Leaderboard Leader Badge Popout";
    (0, g.Ay)(() => {
        v.default.track(T.HAw.OPEN_POPOUT, { type: L, guild_id: n, channel_id: D });
    });
    let G =
        "winner" === s
            ? y.intl.formatToPlainString(y.t["LRh/OJ"], { username: N, statName: A })
            : y.intl.formatToPlainString(x.default.HervnJ, { username: N, statName: A });
    return (0, t.jsxs)("div", {
        role: "dialog",
        "aria-label": G,
        className: C.Nr,
        onMouseEnter: i,
        onMouseLeave: o,
        children: [
            (0, t.jsxs)("div", {
                className: C.rb,
                children: [
                    (0, t.jsx)(b, { variant: s, placement: "card" }),
                    (0, t.jsxs)("div", {
                        className: C.C,
                        children: [
                            (0, t.jsx)(u.D, { variant: "heading-md/semibold", children: f }),
                            null != h
                                ? (0, t.jsx)(d.E, { variant: "text-sm/normal", color: "text-muted", children: h })
                                : null,
                        ],
                    }),
                ],
            }),
            M
                ? (0, t.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      children: (0, t.jsx)(c.$, {
                          variant: "secondary",
                          size: "sm",
                          text: y.intl.string(x.default.npZ6IB),
                          fullWidth: !0,
                          onClick: function () {
                              (a(),
                                  (0, R.jb)(n, "winner" === s ? R.Rk.WINNER_BADGE : R.Rk.LEADER_BADGE),
                                  (0, E.vn)(n, I.VV.GUILD_SPACE, { source: L }));
                          },
                      }),
                  })
                : null,
        ],
    });
}
function G(e) {
    let { guildId: n, userId: l, winnerData: r, leaderData: i } = e,
        o = a.useRef(null),
        { isHovered: s, setIsHovered: u, onMouseEnter: d, onMouseLeave: c, cancelTimers: g } = (0, h.A)(200, 100),
        E = a.useCallback(() => {
            (g(), u(!1));
        }, [g, u]),
        m = a.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), g(), u(!s));
            },
            [g, s, u],
        ),
        _ = (function (e, n) {
            if (null != e) {
                let n = (0, D.K)(e.winningStat).name;
                return {
                    variant: "winner",
                    statName: n,
                    title: (e.winningStreak ?? 0) > 1 ? y.intl.string(x.default["/Z2sDF"]) : n,
                    detailText: (function (e) {
                        let n = e.winningStreak ?? 0;
                        if (n > 1) return y.intl.formatToPlainString(x.default["ZCFDN+"], { streakCount: n });
                        let l = e.winningValue;
                        if (null == l || !Number.isFinite(l) || l < 0) return null;
                        switch (e.winningStat) {
                            case N.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED: {
                                let e = Math.floor(l / w.A.Millis.MINUTE),
                                    n = Math.floor(e / w.A.Minutes.HOUR),
                                    t = e % w.A.Minutes.HOUR;
                                if (0 === n) return y.intl.formatToPlainString(x.default["/272et"], { minutes: t });
                                return y.intl.formatToPlainString(x.default.GC7N5H, { hours: n, minutes: t });
                            }
                            case N.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
                                return y.intl.formatToPlainString(x.default.IXdbVJ, { days: l });
                            case N.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
                                return y.intl.formatToPlainString(x.default["/VAMco"], { count: l });
                            default:
                                return null;
                        }
                    })(e),
                };
            }
            if (null != n) {
                let e = (0, D.K)(n.currentLeaderStat).name;
                return { variant: "leader", statName: e, title: e, detailText: y.intl.string(x.default.jCZgxQ) };
            }
            return null;
        })(r, i);
    if (null == _) return null;
    let { variant: v, title: S, detailText: R } = _,
        p = null != R ? `${S}. ${R}` : S;
    return (0, t.jsx)(A.Y, {
        targetElementRef: o,
        animation: A.Y.Animation.TRANSLATE,
        align: "center",
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        position: "top",
        shouldShow: s,
        onRequestClose: E,
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, t.jsx)(L, { guildId: n, userId: l, onClose: a, onMouseEnter: d, onMouseLeave: c, ..._ });
        },
        children: () =>
            (0, t.jsx)(f.D, {
                tag: "span",
                innerRef: o,
                className: C.qS,
                "aria-label": p,
                "aria-haspopup": "dialog",
                "aria-expanded": s,
                onClick: m,
                onMouseEnter: d,
                onMouseLeave: c,
                children: (0, t.jsx)(b, { variant: v, placement: "badge" }),
            }),
    });
}
function j(e) {
    let { guildId: n, userId: l } = e,
        a = (0, M.Ay)(n, l),
        r = (0, M.iW)(n, l);
    return (0, t.jsx)(G, { guildId: n, userId: l, winnerData: a, leaderData: r });
}

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
    E = l(421773),
    m = l(378570),
    h = l(309010),
    _ = l(287809),
    S = l(174459),
    R = l(562153),
    D = l(49303),
    p = l(313627),
    v = l(251812),
    w = l(927813),
    y = l(518782),
    M = l(61567),
    N = l(660183),
    x = l(32090),
    b = l(652215),
    C = l(746080),
    T = l(631949);
function I(e) {
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
            detailText: E,
        } = e,
        v = (0, r.bG)([h.Ay], () => h.Ay.getChannelId(n)),
        w = (0, r.bG)([_.default], () => _.default.getUser(l)),
        y = R.Ay.useName(n, v, w),
        x = (0, p.Uq)(n, "LeaderboardWinnerBadgePopout"),
        L = "winner" === s ? "Leaderboard Winner Badge Popout" : "Leaderboard Leader Badge Popout";
    (0, g.Ay)(() => {
        S.default.track(b.HAw.OPEN_POPOUT, { type: L, guild_id: n, channel_id: v });
    });
    let G =
        "winner" === s
            ? N.intl.formatToPlainString(N.t["LRh/OJ"], { username: y, statName: A })
            : N.intl.formatToPlainString(M.default.HervnJ, { username: y, statName: A });
    return (0, t.jsxs)("div", {
        role: "dialog",
        "aria-label": G,
        className: T.Nr,
        onMouseEnter: i,
        onMouseLeave: o,
        children: [
            (0, t.jsxs)("div", {
                className: T.rb,
                children: [
                    (0, t.jsx)(I, { variant: s, placement: "card" }),
                    (0, t.jsxs)("div", {
                        className: T.C,
                        children: [
                            (0, t.jsx)(u.D, { variant: "heading-md/semibold", children: f }),
                            null != E
                                ? (0, t.jsx)(d.E, { variant: "text-sm/normal", color: "text-muted", children: E })
                                : null,
                        ],
                    }),
                ],
            }),
            x
                ? (0, t.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      children: (0, t.jsx)(c.$, {
                          variant: "secondary",
                          size: "sm",
                          text: N.intl.string(M.default.npZ6IB),
                          fullWidth: !0,
                          onClick: function () {
                              (a(),
                                  (0, D.jb)(n, "winner" === s ? D.Rk.WINNER_BADGE : D.Rk.LEADER_BADGE),
                                  (0, m.vn)(n, C.VV.GUILD_SPACE, { source: L }));
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
        { isHovered: s, setIsHovered: u, onMouseEnter: d, onMouseLeave: c, cancelTimers: g } = (0, E.A)(200, 100),
        m = a.useCallback(() => {
            (g(), u(!1));
        }, [g, u]),
        h = a.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), g(), u(!s));
            },
            [g, s, u],
        ),
        _ = (function (e, n) {
            if (null != e) {
                let n = (0, v.K)(e.winningStat).name;
                return {
                    variant: "winner",
                    statName: n,
                    title: (e.winningStreak ?? 0) > 1 ? N.intl.string(M.default["/Z2sDF"]) : n,
                    detailText: (function (e) {
                        let n = e.winningStreak ?? 0;
                        if (n > 1) return N.intl.formatToPlainString(M.default["ZCFDN+"], { streakCount: n });
                        let l = e.winningValue;
                        if (null == l || !Number.isFinite(l) || l < 0) return null;
                        switch (e.winningStat) {
                            case y.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED: {
                                let e = Math.floor(l / w.A.Millis.MINUTE),
                                    n = Math.floor(e / w.A.Minutes.HOUR),
                                    t = e % w.A.Minutes.HOUR;
                                if (0 === n) return N.intl.formatToPlainString(M.default["/272et"], { minutes: t });
                                return N.intl.formatToPlainString(M.default.GC7N5H, { hours: n, minutes: t });
                            }
                            case y.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
                                return N.intl.formatToPlainString(M.default.IXdbVJ, { days: l });
                            case y.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
                                return N.intl.formatToPlainString(M.default["/VAMco"], { count: l });
                            default:
                                return null;
                        }
                    })(e),
                };
            }
            if (null != n) {
                let e = (0, v.K)(n.currentLeaderStat).name;
                return { variant: "leader", statName: e, title: e, detailText: N.intl.string(M.default.jCZgxQ) };
            }
            return null;
        })(r, i);
    if (null == _) return null;
    let { variant: S, title: R, detailText: D } = _,
        p = null != D ? `${R}. ${D}` : R;
    return (0, t.jsx)(A.Y, {
        targetElementRef: o,
        animation: A.Y.Animation.TRANSLATE,
        align: "center",
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        position: "top",
        shouldShow: s,
        onRequestClose: m,
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, t.jsx)(L, { guildId: n, userId: l, onClose: a, onMouseEnter: d, onMouseLeave: c, ..._ });
        },
        children: () =>
            (0, t.jsx)(f.D, {
                tag: "span",
                innerRef: o,
                className: T.qS,
                "aria-label": p,
                "aria-haspopup": "dialog",
                "aria-expanded": s,
                onClick: h,
                onMouseEnter: d,
                onMouseLeave: c,
                children: (0, t.jsx)(I, { variant: S, placement: "badge" }),
            }),
    });
}
function j(e) {
    let { guildId: n, userId: l } = e,
        a = (0, x.Ay)(n, l),
        r = (0, x.iW)(n, l);
    return (0, t.jsx)(G, { guildId: n, userId: l, winnerData: a, leaderData: r });
}

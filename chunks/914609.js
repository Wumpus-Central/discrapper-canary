n.d(t, { A: () => O, J: () => k });
var l = n(477900),
    a = n(582128),
    r = n(793169),
    i = n(62617);
let s =
        "https://cdn.discordapp.com/assets/content/b68abdf7f0b79c135850ee225775b37bc5c0dacfb9b590bc3f1ea58db9cc936d.png",
    o = `${s} 1x, https://cdn.discordapp.com/assets/content/5809f70341bbef0e0ecb3f843e543908271bdf63dfb95ef89e61d9db1c84d1e9.png 2x, https://cdn.discordapp.com/assets/content/3a44b1a9c01ae23b5f8363cd164a8ca92a10d5170d80e89f2727b2a52a8a246e.png 3x`;
function u(e) {
    let { alt: t, ariaLabel: n, ariaHidden: r, role: u, width: d, height: c, className: f, style: g } = e,
        m = a.useMemo(
            () => (0, i.H)({ width: d, height: c, intrinsicWidth: 24, intrinsicHeight: 24, style: g }),
            [d, c, g],
        );
    return (0, l.jsx)("img", {
        style: m,
        src: s,
        srcSet: o,
        className: (0, i.Z)(f),
        alt: t,
        "aria-label": n,
        "aria-hidden": r,
        role: u ?? "img",
    });
}
var d = n(846058),
    c = n(17928),
    f = n(297264),
    g = n(834730),
    m = n(821609),
    A = n(922016),
    p = n(939249),
    E = n(964486),
    h = n(421773),
    b = n(378570),
    _ = n(309010),
    S = n(287809),
    y = n(174459),
    R = n(562153),
    x = n(49303),
    D = n(313627),
    M = n(251812),
    v = n(927813),
    N = n(518782),
    T = n(61567),
    w = n(105292),
    G = n(32090),
    I = n(652215),
    L = n(746080),
    C = n(631949),
    j = n(318626);
function H(e) {
    let { variant: t, isStreak: n, placement: a } = e,
        i = "leader" === t ? r.t : n ? u : d.b,
        s = "badge" === a ? 16 : 48;
    return (0, l.jsx)(i, { width: s, height: s, alt: "", ariaHidden: !0 });
}
function P(e) {
    let {
            guildId: t,
            userId: n,
            onClose: a,
            onMouseEnter: r,
            onMouseLeave: i,
            variant: s,
            isStreak: o,
            statName: u,
            title: d,
            detailText: A,
        } = e,
        p = (0, c.bG)([_.Ay], () => _.Ay.getChannelId(t)),
        h = (0, c.bG)([S.default], () => S.default.getUser(n)),
        M = R.Ay.useName(t, p, h),
        v = (0, D.Uq)(t, "LeaderboardWinnerBadgePopout"),
        N = "winner" === s ? "Leaderboard Winner Badge Popout" : "Leaderboard Leader Badge Popout";
    (0, E.Ay)(() => {
        y.default.track(I.HAw.OPEN_POPOUT, { type: N, guild_id: t, channel_id: p });
    });
    let G =
        "winner" === s
            ? w.intl.formatToPlainString(w.t["LRh/OJ"], { username: M, statName: u })
            : w.intl.formatToPlainString(T.default.HervnJ, { username: M, statName: u });
    return (0, l.jsxs)("div", {
        role: "dialog",
        "aria-label": G,
        className: C.Nr,
        onMouseEnter: r,
        onMouseLeave: i,
        children: [
            (0, l.jsxs)("div", {
                className: C.rb,
                children: [
                    (0, l.jsx)(H, { variant: s, isStreak: o, placement: "card" }),
                    (0, l.jsxs)("div", {
                        className: C.C,
                        children: [
                            (0, l.jsx)(f.D, { variant: "heading-md/semibold", children: d }),
                            null != A
                                ? (0, l.jsx)(g.E, { variant: "text-sm/normal", color: "text-muted", children: A })
                                : null,
                        ],
                    }),
                ],
            }),
            v
                ? (0, l.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      children: (0, l.jsx)(m.$, {
                          variant: "secondary",
                          size: "sm",
                          text: w.intl.string(T.default.npZ6IB),
                          fullWidth: !0,
                          onClick: function () {
                              (a(),
                                  (0, x.jb)(t, "winner" === s ? x.Rk.WINNER_BADGE : x.Rk.LEADER_BADGE),
                                  (0, b.vn)(t, L.VV.GUILD_SPACE, { source: N }));
                          },
                      }),
                  })
                : null,
        ],
    });
}
function k(e) {
    let { guildId: t, userId: n, winnerData: r, leaderData: i } = e,
        s = a.useRef(null),
        { isHovered: o, setIsHovered: u, onMouseEnter: d, onMouseLeave: c, cancelTimers: f } = (0, h.A)(200, 100),
        g = a.useCallback(() => {
            (f(), u(!1));
        }, [f, u]),
        m = a.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), f(), u(!o));
            },
            [f, o, u],
        ),
        E = (function (e, t) {
            if (null != e) {
                let t = (0, M.K)(e.winningStat).name,
                    n = (e.winningStreak ?? 0) > 1;
                return {
                    variant: "winner",
                    isStreak: n,
                    statName: t,
                    title: n ? w.intl.string(T.default["/Z2sDF"]) : t,
                    detailText: (function (e) {
                        let t = e.winningStreak ?? 0;
                        if (t > 1) return w.intl.formatToPlainString(T.default["ZCFDN+"], { streakCount: t });
                        let n = e.winningValue;
                        if (null == n || !Number.isFinite(n) || n < 0) return null;
                        switch (e.winningStat) {
                            case N.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED: {
                                let e = Math.floor(n / v.A.Millis.MINUTE),
                                    t = Math.floor(e / v.A.Minutes.HOUR),
                                    l = e % v.A.Minutes.HOUR;
                                if (0 === t) return w.intl.formatToPlainString(T.default["/272et"], { minutes: l });
                                return w.intl.formatToPlainString(T.default.GC7N5H, { hours: t, minutes: l });
                            }
                            case N.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
                                return w.intl.formatToPlainString(T.default.IXdbVJ, { days: n });
                            case N.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
                                return w.intl.formatToPlainString(T.default["/VAMco"], { count: n });
                            default:
                                return null;
                        }
                    })(e),
                };
            }
            if (null != t) {
                let e = (0, M.K)(t.currentLeaderStat).name;
                return {
                    variant: "leader",
                    isStreak: !1,
                    statName: e,
                    title: e,
                    detailText: w.intl.string(T.default.jCZgxQ),
                };
            }
            return null;
        })(r, i);
    if (null == E) return null;
    let { variant: b, isStreak: _, title: S, detailText: y } = E,
        R = null != y ? `${S}. ${y}` : S;
    return (0, l.jsx)(A.Y, {
        targetElementRef: s,
        animation: A.Y.Animation.TRANSLATE,
        align: "center",
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        position: "top",
        shouldShow: o,
        onRequestClose: g,
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, l.jsx)(P, { guildId: t, userId: n, onClose: a, onMouseEnter: d, onMouseLeave: c, ...E });
        },
        children: () =>
            (0, l.jsx)(p.D, {
                tag: "span",
                innerRef: s,
                className: j.UT,
                "aria-label": R,
                "aria-haspopup": "dialog",
                "aria-expanded": o,
                onClick: m,
                onMouseEnter: d,
                onMouseLeave: c,
                children: (0, l.jsx)(H, { variant: b, isStreak: _, placement: "badge" }),
            }),
    });
}
function O(e) {
    let { guildId: t, userId: n } = e,
        a = (0, G.Ay)(t, n),
        r = (0, G.iW)(t, n);
    return (0, l.jsx)(k, { guildId: t, userId: n, winnerData: a, leaderData: r });
}

t.d(n, { A: () => O, J: () => P });
var a = t(477900),
    l = t(582128),
    r = t(793169),
    i = t(62617);
let s =
        "https://cdn.discordapp.com/assets/content/b68abdf7f0b79c135850ee225775b37bc5c0dacfb9b590bc3f1ea58db9cc936d.png",
    o = `${s} 1x, https://cdn.discordapp.com/assets/content/5809f70341bbef0e0ecb3f843e543908271bdf63dfb95ef89e61d9db1c84d1e9.png 2x, https://cdn.discordapp.com/assets/content/3a44b1a9c01ae23b5f8363cd164a8ca92a10d5170d80e89f2727b2a52a8a246e.png 3x`;
function d(e) {
    let { alt: n, ariaLabel: t, ariaHidden: r, role: d, width: u, height: c, className: f, style: g } = e,
        m = l.useMemo(
            () => (0, i.H)({ width: u, height: c, intrinsicWidth: 24, intrinsicHeight: 24, style: g }),
            [u, c, g],
        );
    return (0, a.jsx)("img", {
        style: m,
        src: s,
        srcSet: o,
        className: (0, i.Z)(f),
        alt: n,
        "aria-label": t,
        "aria-hidden": r,
        role: d ?? "img",
    });
}
var u = t(846058),
    c = t(17928),
    f = t(297264),
    g = t(834730),
    m = t(821609),
    A = t(922016),
    b = t(939249),
    p = t(964486),
    E = t(421773),
    h = t(378570),
    _ = t(309010),
    S = t(287809),
    y = t(174459),
    D = t(562153),
    R = t(49303),
    x = t(313627),
    v = t(251812),
    M = t(927813),
    N = t(518782),
    T = t(61567),
    w = t(105292),
    L = t(32090),
    C = t(652215),
    G = t(746080),
    j = t(631949),
    I = t(318626);
function k(e) {
    let { variant: n, isStreak: t, placement: l } = e,
        i = "leader" === n ? r.t : t ? d : u.b,
        s = "badge" === l ? 16 : 48;
    return (0, a.jsx)(i, { width: s, height: s, alt: "", ariaHidden: !0 });
}
function H(e) {
    let {
            guildId: n,
            userId: t,
            onClose: l,
            onMouseEnter: r,
            onMouseLeave: i,
            variant: s,
            isStreak: o,
            statName: d,
            title: u,
            detailText: A,
        } = e,
        b = (0, c.bG)([_.Ay], () => _.Ay.getChannelId(n)),
        E = (0, c.bG)([S.default], () => S.default.getUser(t)),
        v = D.Ay.useName(n, b, E),
        M = (0, x.Uq)(n, "LeaderboardWinnerBadgePopout"),
        N = "winner" === s ? "Leaderboard Winner Badge Popout" : "Leaderboard Leader Badge Popout";
    (0, p.Ay)(() => {
        y.default.track(C.HAw.OPEN_POPOUT, { type: N, guild_id: n, channel_id: b });
    });
    let L =
        "winner" === s
            ? w.intl.formatToPlainString(w.t["LRh/OJ"], { username: v, statName: d })
            : w.intl.formatToPlainString(T.default.HervnJ, { username: v, statName: d });
    return (0, a.jsxs)("div", {
        role: "dialog",
        "aria-label": L,
        className: j.Nr,
        onMouseEnter: r,
        onMouseLeave: i,
        children: [
            (0, a.jsxs)("div", {
                className: j.rb,
                children: [
                    (0, a.jsx)(k, { variant: s, isStreak: o, placement: "card" }),
                    (0, a.jsxs)("div", {
                        className: j.C,
                        children: [
                            (0, a.jsx)(f.D, { variant: "heading-md/semibold", children: u }),
                            null != A
                                ? (0, a.jsx)(g.E, { variant: "text-sm/normal", color: "text-muted", children: A })
                                : null,
                        ],
                    }),
                ],
            }),
            M
                ? (0, a.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      children: (0, a.jsx)(m.$, {
                          variant: "secondary",
                          size: "sm",
                          text: w.intl.string(T.default.npZ6IB),
                          fullWidth: !0,
                          onClick: function () {
                              (l(),
                                  (0, R.jb)(n, "winner" === s ? R.Rk.WINNER_BADGE : R.Rk.LEADER_BADGE),
                                  (0, h.vn)(n, G.VV.GUILD_SPACE, { source: N }));
                          },
                      }),
                  })
                : null,
        ],
    });
}
function P(e) {
    let { guildId: n, userId: t, winnerData: r, leaderData: i } = e,
        s = l.useRef(null),
        { isHovered: o, setIsHovered: d, onMouseEnter: u, onMouseLeave: c, cancelTimers: f } = (0, E.A)(200, 100),
        g = l.useCallback(() => {
            (f(), d(!1));
        }, [f, d]),
        m = l.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), f(), d(!o));
            },
            [f, o, d],
        ),
        p = (function (e, n) {
            if (null != e) {
                let n = (0, v.K)(e.winningStat).name,
                    t = (e.winningStreak ?? 0) > 1;
                return {
                    variant: "winner",
                    isStreak: t,
                    statName: n,
                    title: t ? w.intl.string(T.default["/Z2sDF"]) : n,
                    detailText: (function (e) {
                        let n = e.winningStreak ?? 0;
                        if (n > 1) return w.intl.formatToPlainString(T.default["ZCFDN+"], { streakCount: n });
                        let t = e.winningValue;
                        if (null == t || !Number.isFinite(t) || t < 0) return null;
                        switch (e.winningStat) {
                            case N.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED: {
                                let e = Math.floor(t / M.A.Millis.MINUTE),
                                    n = Math.floor(e / M.A.Minutes.HOUR),
                                    a = e % M.A.Minutes.HOUR;
                                if (0 === n) return w.intl.formatToPlainString(T.default["/272et"], { minutes: a });
                                return w.intl.formatToPlainString(T.default.GC7N5H, { hours: n, minutes: a });
                            }
                            case N.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
                                return w.intl.formatToPlainString(T.default.IXdbVJ, { days: t });
                            case N.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
                                return w.intl.formatToPlainString(T.default["/VAMco"], { count: t });
                            default:
                                return null;
                        }
                    })(e),
                };
            }
            if (null != n) {
                let e = (0, v.K)(n.currentLeaderStat).name;
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
    if (null == p) return null;
    let { variant: h, isStreak: _, title: S, detailText: y } = p,
        D = null != y ? `${S}. ${y}` : S;
    return (0, a.jsx)(A.Y, {
        targetElementRef: s,
        animation: A.Y.Animation.TRANSLATE,
        align: "center",
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        position: "top",
        shouldShow: o,
        onRequestClose: g,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(H, { guildId: n, userId: t, onClose: l, onMouseEnter: u, onMouseLeave: c, ...p });
        },
        children: () =>
            (0, a.jsx)(b.D, {
                tag: "span",
                innerRef: s,
                className: I.UT,
                "aria-label": D,
                "aria-haspopup": "dialog",
                "aria-expanded": o,
                onClick: m,
                onMouseEnter: u,
                onMouseLeave: c,
                children: (0, a.jsx)(k, { variant: h, isStreak: _, placement: "badge" }),
            }),
    });
}
function O(e) {
    let { guildId: n, userId: t } = e,
        l = (0, L.Ay)(n, t),
        r = (0, L.iW)(n, t);
    return (0, a.jsx)(P, { guildId: n, userId: t, winnerData: l, leaderData: r });
}

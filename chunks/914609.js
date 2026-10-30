t.d(n, { A: () => O, J: () => P });
var l = t(477900),
    a = t(582128),
    r = t(793169),
    i = t(62617);
let s =
        "https://cdn.discordapp.com/assets/content/b68abdf7f0b79c135850ee225775b37bc5c0dacfb9b590bc3f1ea58db9cc936d.png",
    o = `${s} 1x, https://cdn.discordapp.com/assets/content/5809f70341bbef0e0ecb3f843e543908271bdf63dfb95ef89e61d9db1c84d1e9.png 2x, https://cdn.discordapp.com/assets/content/3a44b1a9c01ae23b5f8363cd164a8ca92a10d5170d80e89f2727b2a52a8a246e.png 3x`;
function u(e) {
    let { alt: n, ariaLabel: t, ariaHidden: r, role: u, width: d, height: c, className: f, style: m } = e,
        g = a.useMemo(
            () => (0, i.H)({ width: d, height: c, intrinsicWidth: 24, intrinsicHeight: 24, style: m }),
            [d, c, m],
        );
    return (0, l.jsx)("img", {
        style: g,
        src: s,
        srcSet: o,
        className: (0, i.Z)(f),
        alt: n,
        "aria-label": t,
        "aria-hidden": r,
        role: u ?? "img",
    });
}
var d = t(846058),
    c = t(17928),
    f = t(297264),
    m = t(834730),
    g = t(821609),
    A = t(265872),
    p = t(939249),
    E = t(964486),
    h = t(421773),
    b = t(378570),
    _ = t(309010),
    S = t(287809),
    y = t(174459),
    D = t(562153),
    M = t(49303),
    R = t(313627),
    x = t(251812),
    v = t(927813),
    N = t(518782),
    T = t(880098),
    w = t(105292),
    C = t(32090),
    G = t(652215),
    I = t(746080),
    L = t(631949),
    j = t(318626);
function H(e) {
    let { variant: n, isStreak: t, placement: a } = e,
        i = "leader" === n ? r.t : t ? u : d.b,
        s = "badge" === a ? 16 : 48;
    return (0, l.jsx)(i, { width: s, height: s, alt: "", ariaHidden: !0 });
}
function k(e) {
    let {
            guildId: n,
            userId: t,
            onClose: a,
            onMouseEnter: r,
            onMouseLeave: i,
            variant: s,
            isStreak: o,
            statName: u,
            title: d,
            detailText: A,
        } = e,
        p = (0, c.bG)([_.Ay], () => _.Ay.getChannelId(n)),
        h = (0, c.bG)([S.default], () => S.default.getUser(t)),
        x = D.Ay.useName(n, p, h),
        v = (0, R.Uq)(n, "LeaderboardWinnerBadgePopout"),
        N = "winner" === s ? "Leaderboard Winner Badge Popout" : "Leaderboard Leader Badge Popout";
    (0, E.Ay)(() => {
        y.default.track(G.HAw.OPEN_POPOUT, { type: N, guild_id: n, channel_id: p });
    });
    let C =
        "winner" === s
            ? w.intl.formatToPlainString(w.t["LRh/OJ"], { username: x, statName: u })
            : w.intl.formatToPlainString(T.default.HervnJ, { username: x, statName: u });
    return (0, l.jsxs)("div", {
        role: "dialog",
        "aria-label": C,
        className: L.Nr,
        onMouseEnter: r,
        onMouseLeave: i,
        children: [
            (0, l.jsxs)("div", {
                className: L.rb,
                children: [
                    (0, l.jsx)(H, { variant: s, isStreak: o, placement: "card" }),
                    (0, l.jsxs)("div", {
                        className: L.C,
                        children: [
                            (0, l.jsx)(f.D, { variant: "heading-md/semibold", children: d }),
                            null != A
                                ? (0, l.jsx)(m.E, { variant: "text-sm/normal", color: "text-muted", children: A })
                                : null,
                        ],
                    }),
                ],
            }),
            v
                ? (0, l.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      children: (0, l.jsx)(g.$, {
                          variant: "secondary",
                          size: "sm",
                          text: w.intl.string(T.default.npZ6IB),
                          fullWidth: !0,
                          onClick: function () {
                              (a(),
                                  (0, M.jb)(n, "winner" === s ? M.Rk.WINNER_BADGE : M.Rk.LEADER_BADGE),
                                  (0, b.vn)(n, I.VV.GUILD_SPACE, { source: N }));
                          },
                      }),
                  })
                : null,
        ],
    });
}
function P(e) {
    let { guildId: n, userId: t, winnerData: r, leaderData: i } = e,
        s = a.useRef(null),
        { isHovered: o, setIsHovered: u, onMouseEnter: d, onMouseLeave: c, cancelTimers: f } = (0, h.A)(200, 100),
        m = a.useCallback(() => {
            (f(), u(!1));
        }, [f, u]),
        g = a.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), f(), u(!o));
            },
            [f, o, u],
        ),
        E = (function (e, n) {
            if (null != e) {
                let n = (0, x.K)(e.winningStat).name,
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
                                let e = Math.floor(t / v.A.Millis.MINUTE),
                                    n = Math.floor(e / v.A.Minutes.HOUR),
                                    l = e % v.A.Minutes.HOUR;
                                if (0 === n) return w.intl.formatToPlainString(T.default["/272et"], { minutes: l });
                                return w.intl.formatToPlainString(T.default.GC7N5H, { hours: n, minutes: l });
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
                let e = (0, x.K)(n.currentLeaderStat).name;
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
        D = null != y ? `${S}. ${y}` : S;
    return (0, l.jsx)(A.Y, {
        targetElementRef: s,
        animation: A.Y.Animation.TRANSLATE,
        align: "center",
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        position: "top",
        shouldShow: o,
        onRequestClose: m,
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, l.jsx)(k, { guildId: n, userId: t, onClose: a, onMouseEnter: d, onMouseLeave: c, ...E });
        },
        children: () =>
            (0, l.jsx)(p.D, {
                tag: "span",
                innerRef: s,
                className: j.UT,
                "aria-label": D,
                "aria-haspopup": "dialog",
                "aria-expanded": o,
                onClick: g,
                onMouseEnter: d,
                onMouseLeave: c,
                children: (0, l.jsx)(H, { variant: b, isStreak: _, placement: "badge" }),
            }),
    });
}
function O(e) {
    let { guildId: n, userId: t } = e,
        a = (0, C.Ay)(n, t),
        r = (0, C.iW)(n, t);
    return (0, l.jsx)(P, { guildId: n, userId: t, winnerData: a, leaderData: r });
}

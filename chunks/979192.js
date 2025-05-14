n.d(t, { O: () => u });
var r = n(442837),
    i = n(675478),
    o = n(581883),
    a = n(626135),
    s = n(434382),
    l = n(981631);
async function c(e, t) {
    await (0, i.PS)(
        e,
        (n) => {
            (n.leaderboardsDisabled = !n.leaderboardsDisabled),
                a.default.track(l.rMx.LEADERBOARD_USER_OPT_OUT_UPDATED, {
                    leaderboard_id: t,
                    guild_id: e,
                    leaderboards_disabled: n.leaderboardsDisabled
                });
        },
        i.fy.INFREQUENT_USER_ACTION
    ),
        await new Promise((e) => setTimeout(e, 300)),
        await s.Z.fetchLeaderboard({
            guildId: e,
            leaderboardId: t,
            force: !0
        });
}
function u(e, t) {
    let n = (0, r.e7)(
        [o.Z],
        () => {
            var t, n;
            return null == (n = o.Z.settings.guilds) || null == (t = n.guilds) ? void 0 : t[e];
        },
        [e]
    );
    return {
        leaderboardsDisabled: (null == n ? void 0 : n.leaderboardsDisabled) === !0,
        toggleGuildLeaderboardsDisabled: () => c(e, t)
    };
}

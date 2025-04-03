a.d(e, { O: () => p });
var c = a(442837),
    d = a(675478),
    s = a(581883),
    n = a(626135),
    f = a(434382),
    i = a(981631);
async function o(t, e) {
    await (0, d.PS)(
        t,
        (a) => {
            (a.leaderboardsDisabled = !a.leaderboardsDisabled),
                n.default.track(i.rMx.LEADERBOARD_USER_OPT_OUT_UPDATED, {
                    leaderboard_id: e,
                    guild_id: t,
                    leaderboards_disabled: a.leaderboardsDisabled
                });
        },
        d.fy.INFREQUENT_USER_ACTION
    ),
        await new Promise((t) => setTimeout(t, 300)),
        await f.Z.fetchLeaderboard({
            guildId: t,
            leaderboardId: e,
            force: !0
        });
}
function p(t, e) {
    let a = (0, c.e7)(
        [s.Z],
        () => {
            var e, a;
            return null == (a = s.Z.settings.guilds) || null == (e = a.guilds) ? void 0 : e[t];
        },
        [t]
    );
    return {
        leaderboardsDisabled: (null == a ? void 0 : a.leaderboardsDisabled) === !0,
        toggleGuildLeaderboardsDisabled: () => o(t, e)
    };
}

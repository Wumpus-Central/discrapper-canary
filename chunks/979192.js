c.d(e, { O: () => p });
var d = c(442837),
    a = c(675478),
    s = c(581883),
    n = c(626135),
    o = c(434382),
    f = c(981631);
async function i(t, e) {
    await (0, a.PS)(
        t,
        (c) => {
            (c.leaderboardsDisabled = !c.leaderboardsDisabled),
                n.default.track(f.rMx.LEADERBOARD_USER_OPT_OUT_UPDATED, {
                    leaderboard_id: e,
                    guild_id: t,
                    leaderboards_disabled: c.leaderboardsDisabled
                });
        },
        a.fy.INFREQUENT_USER_ACTION
    ),
        await new Promise((t) => setTimeout(t, 300)),
        await o.Z.fetchLeaderboard({
            guildId: t,
            leaderboardId: e,
            force: !0
        });
}
function p(t, e) {
    let c = (0, d.e7)(
        [s.Z],
        () => {
            var e, c;
            return null === (c = s.Z.settings.guilds) || void 0 === c ? void 0 : null === (e = c.guilds) || void 0 === e ? void 0 : e[t];
        },
        [t]
    );
    return {
        leaderboardsDisabled: (null == c ? void 0 : c.leaderboardsDisabled) === !0,
        toggleGuildLeaderboardsDisabled: () => i(t, e)
    };
}

r.d(n, {
    O: function () {
        return d;
    }
});
var i = r(442837),
    a = r(675478),
    o = r(581883),
    s = r(626135),
    l = r(434382),
    u = r(981631);
async function c(e, n) {
    await (0, a.PS)(
        e,
        (r) => {
            (r.leaderboardsDisabled = !r.leaderboardsDisabled),
                s.default.track(u.rMx.LEADERBOARD_USER_OPT_OUT_UPDATED, {
                    leaderboard_id: n,
                    guild_id: e,
                    leaderboards_disabled: r.leaderboardsDisabled
                });
        },
        a.fy.INFREQUENT_USER_ACTION
    ),
        await new Promise((e) => setTimeout(e, 300)),
        await l.Z.fetchLeaderboard({
            guildId: e,
            leaderboardId: n,
            force: !0
        });
}
function d(e, n) {
    let r = (0, i.e7)(
        [o.Z],
        () => {
            var n, r;
            return null === (r = o.Z.settings.guilds) || void 0 === r ? void 0 : null === (n = r.guilds) || void 0 === n ? void 0 : n[e];
        },
        [e]
    );
    return {
        leaderboardsDisabled: (null == r ? void 0 : r.leaderboardsDisabled) === !0,
        toggleGuildLeaderboardsDisabled: () => c(e, n)
    };
}

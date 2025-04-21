n.d(t, { h: () => s });
var i = n(626135),
    r = n(981631);
function s(e) {
    let { guildId: t, userId: n, source: s } = e;
    i.default.track(r.rMx.CLAN_ADOPT_IDENTITY, {
        guild_id: t,
        user_id: n,
        source: s
    });
}

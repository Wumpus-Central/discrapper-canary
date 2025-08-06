n.d(t, {
    Z: () => s,
    t: () => l
});
var r = n(442837),
    i = n(430824),
    o = n(938475),
    a = n(981631);
function s(e) {
    return (0, r.cj)(
        [o.ZP, i.Z],
        () => {
            let t = o.ZP.countVoiceStatesForChannel(e.id),
                n = i.Z.getGuild(e.getGuildId());
            return null == n
                ? {
                      reachedLimit: !1,
                      limit: -1
                  }
                : e.type === a.d4z.GUILD_STAGE_VOICE
                  ? {
                        reachedLimit: t > n.maxStageVideoChannelUsers,
                        limit: n.maxStageVideoChannelUsers
                    }
                  : {
                        reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
                        limit: n.maxVideoChannelUsers
                    };
        },
        [e]
    );
}
function l(e) {
    let t = o.ZP.countVoiceStatesForChannel(e.id),
        n = i.Z.getGuild(e.getGuildId());
    return null == n
        ? {
              reachedLimit: !1,
              limit: -1
          }
        : e.type === a.d4z.GUILD_STAGE_VOICE
          ? {
                reachedLimit: t > n.maxStageVideoChannelUsers,
                limit: n.maxStageVideoChannelUsers
            }
          : {
                reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
                limit: n.maxVideoChannelUsers
            };
}

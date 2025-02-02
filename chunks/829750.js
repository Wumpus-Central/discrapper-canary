n.d(t, {
    Z: () => l,
    t: () => c
});
var i = n(442837),
    a = n(430824),
    r = n(938475),
    o = n(981631);
function l(e) {
    return (0, i.cj)(
        [r.ZP, a.Z],
        () => {
            let t = r.ZP.countVoiceStatesForChannel(e.id),
                n = a.Z.getGuild(e.getGuildId());
            return null == n
                ? {
                      reachedLimit: !1,
                      limit: -1
                  }
                : e.type === o.d4z.GUILD_STAGE_VOICE
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
function c(e) {
    let t = r.ZP.countVoiceStatesForChannel(e.id),
        n = a.Z.getGuild(e.getGuildId());
    return null == n
        ? {
              reachedLimit: !1,
              limit: -1
          }
        : e.type === o.d4z.GUILD_STAGE_VOICE
          ? {
                reachedLimit: t > n.maxStageVideoChannelUsers,
                limit: n.maxStageVideoChannelUsers
            }
          : {
                reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
                limit: n.maxVideoChannelUsers
            };
}

n.d(t, {
    Z: () => c,
    t: () => l
});
var r = n(442837),
    o = n(430824),
    i = n(938475),
    a = n(981631);
function c(e) {
    return (0, r.cj)(
        [i.ZP, o.Z],
        () => {
            let t = i.ZP.countVoiceStatesForChannel(e.id),
                n = o.Z.getGuild(e.getGuildId());
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
    let t = i.ZP.countVoiceStatesForChannel(e.id),
        n = o.Z.getGuild(e.getGuildId());
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

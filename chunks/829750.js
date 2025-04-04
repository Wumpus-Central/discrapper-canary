n.d(t, {
    Z: () => c,
    t: () => l
});
var i = n(442837),
    o = n(430824),
    r = n(938475),
    a = n(981631);
function c(e) {
    return (0, i.cj)(
        [r.ZP, o.Z],
        () => {
            let t = r.ZP.countVoiceStatesForChannel(e.id),
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
    let t = r.ZP.countVoiceStatesForChannel(e.id),
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

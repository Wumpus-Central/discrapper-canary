t.d(n, {
    Z: () => c,
    t: () => _
});
var i = t(442837),
    o = t(430824),
    r = t(938475),
    a = t(981631);
function c(e) {
    return (0, i.cj)(
        [r.ZP, o.Z],
        () => {
            let n = r.ZP.countVoiceStatesForChannel(e.id),
                t = o.Z.getGuild(e.getGuildId());
            return null == t
                ? {
                      reachedLimit: !1,
                      limit: -1
                  }
                : e.type === a.d4z.GUILD_STAGE_VOICE
                  ? {
                        reachedLimit: n > t.maxStageVideoChannelUsers,
                        limit: t.maxStageVideoChannelUsers
                    }
                  : {
                        reachedLimit: t.maxVideoChannelUsers > 0 && n > t.maxVideoChannelUsers,
                        limit: t.maxVideoChannelUsers
                    };
        },
        [e]
    );
}
function _(e) {
    let n = r.ZP.countVoiceStatesForChannel(e.id),
        t = o.Z.getGuild(e.getGuildId());
    return null == t
        ? {
              reachedLimit: !1,
              limit: -1
          }
        : e.type === a.d4z.GUILD_STAGE_VOICE
          ? {
                reachedLimit: n > t.maxStageVideoChannelUsers,
                limit: t.maxStageVideoChannelUsers
            }
          : {
                reachedLimit: t.maxVideoChannelUsers > 0 && n > t.maxVideoChannelUsers,
                limit: t.maxVideoChannelUsers
            };
}

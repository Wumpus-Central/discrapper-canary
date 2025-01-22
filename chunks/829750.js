t.d(n, {
    Z: function () {
        return a;
    },
    t: function () {
        return c;
    }
});
var i = t(442837),
    r = t(430824),
    l = t(938475),
    o = t(981631);
function a(e) {
    return (0, i.cj)(
        [l.ZP, r.Z],
        () => {
            let n = l.ZP.countVoiceStatesForChannel(e.id),
                t = r.Z.getGuild(e.getGuildId());
            return null == t
                ? {
                      reachedLimit: !1,
                      limit: -1
                  }
                : e.type === o.d4z.GUILD_STAGE_VOICE
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
function c(e) {
    let n = l.ZP.countVoiceStatesForChannel(e.id),
        t = r.Z.getGuild(e.getGuildId());
    return null == t
        ? {
              reachedLimit: !1,
              limit: -1
          }
        : e.type === o.d4z.GUILD_STAGE_VOICE
          ? {
                reachedLimit: n > t.maxStageVideoChannelUsers,
                limit: t.maxStageVideoChannelUsers
            }
          : {
                reachedLimit: t.maxVideoChannelUsers > 0 && n > t.maxVideoChannelUsers,
                limit: t.maxVideoChannelUsers
            };
}

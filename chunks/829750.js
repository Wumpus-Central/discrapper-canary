t.d(n, {
    Z: function () {
        return r;
    },
    t: function () {
        return o;
    }
});
var l = t(442837),
    i = t(430824),
    u = t(938475),
    a = t(981631);
function r(e) {
    return (0, l.cj)(
        [u.ZP, i.Z],
        () => {
            let n = u.ZP.countVoiceStatesForChannel(e.id),
                t = i.Z.getGuild(e.getGuildId());
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
function o(e) {
    let n = u.ZP.countVoiceStatesForChannel(e.id),
        t = i.Z.getGuild(e.getGuildId());
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

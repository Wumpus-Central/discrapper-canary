var i = n(512969),
    r = n(65400),
    l = n(731965),
    u = n(893607),
    a = n(981631);
function s(e) {
    let t = (0, i.LX)(null != e ? e : '', { path: a.Z5c.CHANNEL(u.Hw.guildId(), u.Hw.channelId({ optional: !0 }), ':messageId?') });
    if (null != t) {
        let { guildId: e, channelId: n } = t.params;
        return {
            guildId: e === a.ME ? null : e,
            channelId: null != n ? n : null
        };
    }
    let n = (0, i.LX)(null != e ? e : '', { path: a.Z5c.GUILD_BOOSTING_MARKETING(u.Hw.guildId()) });
    return null != n
        ? {
              guildId: n.params.guildId,
              channelId: null
          }
        : {
              guildId: null,
              channelId: null
          };
}
t.Z = (0, r.F)((e) => ({
    path: null,
    basePath: '/',
    guildId: null,
    channelId: null,
    updatePath(t) {
        let { guildId: n, channelId: i } = s(t);
        (0, l.j)(() =>
            e({
                path: t,
                guildId: n,
                channelId: i
            })
        );
    },
    resetPath(t) {
        let { guildId: n, channelId: i } = s(t);
        (0, l.j)(() =>
            e({
                path: null,
                guildId: n,
                channelId: i,
                basePath: t
            })
        );
    }
}));

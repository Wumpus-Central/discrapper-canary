var l = t(512969),
    i = t(65400),
    a = t(731965),
    u = t(893607),
    r = t(981631);
function o(n) {
    let e = (0, l.LX)(null != n ? n : '', { path: r.Z5c.CHANNEL(u.Hw.guildId(), u.Hw.channelId({ optional: !0 }), ':messageId?') });
    if (null != e) {
        let { guildId: n, channelId: t } = e.params;
        return {
            guildId: n === r.ME ? null : n,
            channelId: null != t ? t : null
        };
    }
    let t = (0, l.LX)(null != n ? n : '', { path: r.Z5c.GUILD_BOOSTING_MARKETING(u.Hw.guildId()) });
    return null != t
        ? {
              guildId: t.params.guildId,
              channelId: null
          }
        : {
              guildId: null,
              channelId: null
          };
}
e.Z = (0, i.F)((n) => ({
    path: null,
    basePath: '/',
    guildId: null,
    channelId: null,
    updatePath(e) {
        let { guildId: t, channelId: l } = o(e);
        (0, a.j)(() =>
            n({
                path: e,
                guildId: t,
                channelId: l
            })
        );
    },
    resetPath(e) {
        let { guildId: t, channelId: l } = o(e);
        (0, a.j)(() =>
            n({
                path: null,
                guildId: t,
                channelId: l,
                basePath: e
            })
        );
    }
}));

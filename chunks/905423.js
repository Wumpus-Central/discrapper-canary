n.d(t, { Z: () => c });
var r = n(114858),
    i = n(362383),
    l = n(731965),
    s = n(893607),
    a = n(981631);
function o(e) {
    let t = (0, r.LX)(null != e ? e : '', { path: a.Z5c.CHANNEL(s.Hw.guildId(), s.Hw.channelId({ optional: !0 }), ':messageId?') });
    if (null != t) {
        let { guildId: e, channelId: n } = t.params;
        return {
            guildId: e === a.ME ? null : e,
            channelId: null != n ? n : null
        };
    }
    let n = (0, r.LX)(null != e ? e : '', { path: a.Z5c.GUILD_BOOSTING_MARKETING(s.Hw.guildId()) });
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
let c = (0, i.F)((e) => ({
    path: null,
    basePath: '/',
    guildId: null,
    channelId: null,
    updatePath(t) {
        let { guildId: n, channelId: r } = o(t);
        (0, l.j)(() =>
            e({
                path: t,
                guildId: n,
                channelId: r
            })
        );
    },
    resetPath(t) {
        let { guildId: n, channelId: r } = o(t);
        (0, l.j)(() =>
            e({
                path: null,
                guildId: n,
                channelId: r,
                basePath: t
            })
        );
    }
}));

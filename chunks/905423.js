n.d(t, { Z: () => c });
var r = n(512969),
    a = n(65400),
    i = n(731965),
    l = n(893607),
    o = n(981631);
function s(e) {
    let t = (0, r.LX)(null != e ? e : '', { path: o.Z5c.CHANNEL(l.Hw.guildId(), l.Hw.channelId({ optional: !0 }), ':messageId?') });
    if (null != t) {
        let { guildId: e, channelId: n } = t.params;
        return {
            guildId: e === o.ME ? null : e,
            channelId: null != n ? n : null
        };
    }
    let n = (0, r.LX)(null != e ? e : '', { path: o.Z5c.GUILD_BOOSTING_MARKETING(l.Hw.guildId()) });
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
let c = (0, a.F)((e) => ({
    path: null,
    basePath: '/',
    guildId: null,
    channelId: null,
    updatePath(t) {
        let { guildId: n, channelId: r } = s(t);
        (0, i.j)(() =>
            e({
                path: t,
                guildId: n,
                channelId: r
            })
        );
    },
    resetPath(t) {
        let { guildId: n, channelId: r } = s(t);
        (0, i.j)(() =>
            e({
                path: null,
                guildId: n,
                channelId: r,
                basePath: t
            })
        );
    }
}));

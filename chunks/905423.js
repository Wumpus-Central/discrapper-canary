n.d(t, { Z: () => c });
var r = n(512969),
    i = n(993192),
    o = n(731965),
    a = n(893607),
    l = n(981631);
function s(e) {
    let t = (0, r.LX)(null != e ? e : '', { path: l.Z5c.CHANNEL(a.Hw.guildId(), a.Hw.channelId({ optional: !0 }), ':messageId?') });
    if (null != t) {
        let { guildId: e, channelId: n } = t.params;
        return {
            guildId: e === l.ME ? null : e,
            channelId: null != n ? n : null
        };
    }
    let n = (0, r.LX)(null != e ? e : '', { path: l.Z5c.GUILD_BOOSTING_MARKETING(a.Hw.guildId()) });
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
        let { guildId: n, channelId: r } = s(t);
        (0, o.j)(() =>
            e({
                path: t,
                guildId: n,
                channelId: r
            })
        );
    },
    resetPath(t) {
        let { guildId: n, channelId: r } = s(t);
        (0, o.j)(() =>
            e({
                path: null,
                guildId: n,
                channelId: r,
                basePath: t
            })
        );
    }
}));

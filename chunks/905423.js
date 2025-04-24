n.d(t, { Z: () => c });
var a = n(512969),
    r = n(993192),
    l = n(731965),
    i = n(893607),
    s = n(981631);
function o(e) {
    let t = (0, a.LX)(null != e ? e : '', { path: s.Z5c.CHANNEL(i.Hw.guildId(), i.Hw.channelId({ optional: !0 }), ':messageId?') });
    if (null != t) {
        let { guildId: e, channelId: n } = t.params;
        return {
            guildId: e === s.ME ? null : e,
            channelId: null != n ? n : null
        };
    }
    let n = (0, a.LX)(null != e ? e : '', { path: s.Z5c.GUILD_BOOSTING_MARKETING(i.Hw.guildId()) });
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
let c = (0, r.F)((e) => ({
    path: null,
    basePath: '/',
    guildId: null,
    channelId: null,
    updatePath(t) {
        let { guildId: n, channelId: a } = o(t);
        (0, l.j)(() =>
            e({
                path: t,
                guildId: n,
                channelId: a
            })
        );
    },
    resetPath(t) {
        let { guildId: n, channelId: a } = o(t);
        (0, l.j)(() =>
            e({
                path: null,
                guildId: n,
                channelId: a,
                basePath: t
            })
        );
    }
}));

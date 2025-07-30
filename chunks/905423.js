a.d(t, { Z: () => c });
var n = a(114858),
    r = a(362383),
    l = a(731965),
    i = a(893607),
    s = a(981631);
function o(e) {
    let t = (0, n.LX)(null != e ? e : '', { path: s.Z5c.CHANNEL(i.Hw.guildId(), i.Hw.channelId({ optional: !0 }), ':messageId?') });
    if (null != t) {
        let { guildId: e, channelId: a } = t.params;
        return {
            guildId: e === s.ME ? null : e,
            channelId: null != a ? a : null
        };
    }
    let a = (0, n.LX)(null != e ? e : '', { path: s.Z5c.GUILD_BOOSTING_MARKETING(i.Hw.guildId()) });
    return null != a
        ? {
              guildId: a.params.guildId,
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
        let { guildId: a, channelId: n } = o(t);
        (0, l.j)(() =>
            e({
                path: t,
                guildId: a,
                channelId: n
            })
        );
    },
    resetPath(t) {
        let { guildId: a, channelId: n } = o(t);
        (0, l.j)(() =>
            e({
                path: null,
                guildId: a,
                channelId: n,
                basePath: t
            })
        );
    }
}));

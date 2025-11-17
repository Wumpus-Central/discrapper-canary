n.d(t, { Z: () => c });
var r = n(828700),
    i = n(748521),
    a = n(731965),
    o = n(893607),
    s = n(981631);
function l(e) {
    let t = (0, r.LX)(null != e ? e : "", {
        path: s.Z5c.CHANNEL(o.Hw.guildId(), o.Hw.channelId({ optional: !0 }), ":messageId?"),
    });
    if (null != t) {
        let { guildId: e, channelId: n } = t.params;
        return {
            guildId: e === s.ME ? null : e,
            channelId: null != n ? n : null,
        };
    }
    let n = (0, r.LX)(null != e ? e : "", { path: s.Z5c.GUILD_BOOSTING_MARKETING(o.Hw.guildId()) });
    return null != n
        ? {
              guildId: n.params.guildId,
              channelId: null,
          }
        : {
              guildId: null,
              channelId: null,
          };
}
let c = (0, i.F)((e) => ({
    path: null,
    basePath: "/",
    guildId: null,
    channelId: null,
    updatePath(t) {
        let { guildId: n, channelId: r } = l(t);
        (0, a.j)(() =>
            e({
                path: t,
                guildId: n,
                channelId: r,
            }),
        );
    },
    resetPath(t) {
        let { guildId: n, channelId: r } = l(t);
        (0, a.j)(() =>
            e({
                path: null,
                guildId: n,
                channelId: r,
                basePath: t,
            }),
        );
    },
}));

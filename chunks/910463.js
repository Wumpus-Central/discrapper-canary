"use strict";
n.d(t, { X: () => _ });
var r = n(47167),
    i = n(633965),
    s = n(734057),
    a = n(71393),
    o = n(994500),
    l = n(967198),
    u = n(287809),
    c = n(486020),
    d = n(710969);
function _(e) {
    let t = (0, d.xn)(e),
        n = (0, d.vZ)(e),
        _ = (0, i.pc)(),
        f = (0, i.Ld)();
    if (!n?.is_campaign_ias_enabled || !t || void 0 === _ || void 0 === f) return null;
    let p = () => {
            let e = _(),
                t = a.A.getGuilds();
            return e
                .map((e) => {
                    let n = t[e];
                    if (void 0 === n) return null;
                    let r = { id: n.id, name: n.name };
                    null !== n.description && (r.description = n.description);
                    let i =
                        null !== n.icon
                            ? (c.Ay.getGuildIconURL({ id: n.id, icon: n.icon, size: 44, canAnimate: !0 }) ?? null)
                            : null;
                    return null !== i && (r.icon_url = i), r;
                })
                .filter((e) => null !== e);
        },
        h = l.A.getGuildId(),
        m = null != h ? a.A.getGuild(h) : null,
        E = () =>
            null == m
                ? []
                : f()
                      .map((e) => {
                          let t = s.A.getChannel(e);
                          if (void 0 === t) return null;
                          let n = { id: t.id, name: (0, r.m1)(t, u.default, o.A) };
                          return t.topic.length > 0 && (n.channel_topic = t.topic), n;
                      })
                      .filter((e) => null !== e),
        g = { guilds: p(), channels: E() };
    null != h && (g.selected_guild_id = h);
    let A =
        m?.banner !== null && m?.banner !== void 0
            ? (c.Ay.getGuildBannerURL({ id: m.id, banner: m.banner }, !0) ?? null)
            : null;
    return (
        null !== A && (g.selected_guild_banner_url = A),
        g.guilds.length > 100 && ((g.guilds = g.guilds.slice(0, 100)), (g.truncated = !0)),
        g.channels.length > 100 && ((g.channels = g.channels.slice(0, 100)), (g.truncated = !0)),
        { brand_safety_context: JSON.stringify(g) }
    );
}
n(23766);

"use strict";
n.d(t, { X: () => _ });
var r = n(47167),
    i = n(633965),
    s = n(734057),
    a = n(71393),
    o = n(994500),
    l = n(967198),
    u = n(287809),
    d = n(486020),
    c = n(710969);
function _(e) {
    let t,
        n,
        _ = (0, c.xn)(e),
        f = (0, c.vZ)(e),
        E = (0, i.pc)(),
        h = (0, i.Ld)();
    if (!f?.is_campaign_ias_enabled || !_ || void 0 === E || void 0 === h) return null;
    let p = l.A.getGuildId(),
        m = null != p ? a.A.getGuild(p) : null,
        g = {
            guilds:
                ((t = E()),
                (n = a.A.getGuilds()),
                t
                    .map((e) => {
                        let t = n[e];
                        if (void 0 === t) return null;
                        let r = { id: t.id, name: t.name };
                        null !== t.description && (r.description = t.description);
                        let i =
                            null !== t.icon
                                ? (d.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 44, canAnimate: !0 }) ?? null)
                                : null;
                        return null !== i && (r.icon_url = i), r;
                    })
                    .filter((e) => null !== e)),
            channels:
                null == m
                    ? []
                    : h()
                          .map((e) => {
                              let t = s.A.getChannel(e);
                              if (void 0 === t) return null;
                              let n = { id: t.id, name: (0, r.m1)(t, u.default, o.A) };
                              return t.topic.length > 0 && (n.channel_topic = t.topic), n;
                          })
                          .filter((e) => null !== e),
        };
    null != p && (g.selected_guild_id = p);
    let A =
        m?.banner !== null && m?.banner !== void 0
            ? (d.Ay.getGuildBannerURL({ id: m.id, banner: m.banner }, !0) ?? null)
            : null;
    return (
        null !== A && (g.selected_guild_banner_url = A),
        g.guilds.length > 100 && ((g.guilds = g.guilds.slice(0, 100)), (g.truncated = !0)),
        g.channels.length > 100 && ((g.channels = g.channels.slice(0, 100)), (g.truncated = !0)),
        { brand_safety_context: JSON.stringify(g) }
    );
}
n(23766);

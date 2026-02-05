"use strict";
n.d(t, { X: () => u });
var r = n(633965),
    i = n(734057),
    a = n(71393),
    s = n(967198),
    o = n(486020),
    l = n(710969);
function u(e) {
    let t = (0, l.xn)(e),
        n = (0, l.vZ)(e),
        u = (0, r.pc)(),
        c = (0, r.Ld)();
    if (!n?.is_campaign_ias_enabled || !t || void 0 === u || void 0 === c) return null;
    let d = () => {
            let e = u(),
                t = a.A.getGuilds();
            return e
                .map((e) => {
                    let n = t[e];
                    if (void 0 === n) return null;
                    let r = { id: n.id, name: n.name };
                    null !== n.description && (r.description = n.description);
                    let i =
                        null !== n.icon
                            ? (o.Ay.getGuildIconURL({ id: n.id, icon: n.icon, size: 44, canAnimate: !0 }) ?? null)
                            : null;
                    return null !== i && (r.icon_url = i), r;
                })
                .filter((e) => null !== e);
        },
        _ = s.A.getGuildId(),
        f = null != _ ? a.A.getGuild(_) : null,
        p = () =>
            null == f
                ? []
                : c()
                      .map((e) => {
                          let t = i.A.getChannel(e);
                          if (void 0 === t) return null;
                          let n = { id: t.id, name: t.name };
                          return t.topic.length > 0 && (n.channel_topic = t.topic), n;
                      })
                      .filter((e) => null !== e),
        h = { guilds: d(), channels: p() };
    null != _ && (h.selected_guild_id = _);
    let m =
        f?.banner !== null && f?.banner !== void 0
            ? (o.Ay.getGuildBannerURL({ id: f.id, banner: f.banner }, !0) ?? null)
            : null;
    return (
        null !== m && (h.selected_guild_banner_url = m),
        h.guilds.length > 100 && ((h.guilds = h.guilds.slice(0, 100)), (h.truncated = !0)),
        h.channels.length > 100 && ((h.channels = h.channels.slice(0, 100)), (h.truncated = !0)),
        { brand_safety_context: JSON.stringify(h) }
    );
}
n(23766);

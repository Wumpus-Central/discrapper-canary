"use strict";
n.d(t, { X: () => _ });
var i = n(47167),
    r = n(633965),
    a = n(734057),
    s = n(71393),
    l = n(994500),
    o = n(967198),
    d = n(287809),
    c = n(486020),
    u = n(710969);
function _(e) {
    let t = (0, u.xn)(e),
        n = (0, u.vZ)(e),
        _ = (0, r.pc)(),
        E = (0, r.Ld)();
    if (!n?.is_campaign_ias_enabled || !t || void 0 === _ || void 0 === E) return null;
    let A = o.A.getGuildId(),
        h = null != A ? s.A.getGuild(A) : null,
        I = {
            guilds: (function () {
                if (void 0 === _) return [];
                let e = _(),
                    t = s.A.getGuilds();
                return e
                    .map((e) => {
                        let n = t[e];
                        if (void 0 === n) return null;
                        let i = { id: n.id, name: n.name };
                        null !== n.description && (i.description = n.description);
                        let r =
                            null !== n.icon
                                ? (c.Ay.getGuildIconURL({ id: n.id, icon: n.icon, size: 44, canAnimate: !0 }) ?? null)
                                : null;
                        return null !== r && (i.icon_url = r), i;
                    })
                    .filter((e) => null !== e);
            })(),
            channels:
                void 0 === E || null == h
                    ? []
                    : E()
                          .map((e) => {
                              let t = a.A.getChannel(e);
                              if (void 0 === t) return null;
                              let n = { id: t.id, name: (0, i.m1)(t, d.default, l.A) };
                              return t.topic.length > 0 && (n.channel_topic = t.topic), n;
                          })
                          .filter((e) => null !== e),
        };
    null != A && (I.selected_guild_id = A);
    let f =
        h?.banner !== null && h?.banner !== void 0
            ? (c.Ay.getGuildBannerURL({ id: h.id, banner: h.banner }, !0) ?? null)
            : null;
    return (
        null !== f && (I.selected_guild_banner_url = f),
        I.guilds.length > 100 && ((I.guilds = I.guilds.slice(0, 100)), (I.truncated = !0)),
        I.channels.length > 100 && ((I.channels = I.channels.slice(0, 100)), (I.truncated = !0)),
        { brand_safety_context: JSON.stringify(I) }
    );
}
n(23766);

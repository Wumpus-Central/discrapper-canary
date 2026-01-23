n.d(t, {
    X: () => c,
}),
    n(228524),
    n(457529);
var r = n(633965),
    i = n(734057),
    a = n(71393),
    s = n(967198),
    o = n(486020),
    l = n(710969);

function c(e) {
    var t;
    let n = (0, l.xn)(e),
        c = (0, l.vZ)(e),
        u = (0, r.pc)(),
        d = (0, r.Ld)();
    if (!(null == c ? void 0 : c.is_campaign_ias_enabled) || !n || void 0 === u || void 0 === d) return null;
    let f = () => {
            let e = u(),
                t = a.A.getGuilds();
            return e
                .map((e) => {
                    var n;
                    let r = t[e];
                    if (void 0 === r) return null;
                    let i = {
                        id: r.id,
                        name: r.name,
                    };
                    null !== r.description && (i.description = r.description);
                    let a =
                        null !== r.icon &&
                        null !=
                            (n = o.Ay.getGuildIconURL({
                                id: r.id,
                                icon: r.icon,
                                size: 44,
                                canAnimate: !0,
                            }))
                            ? n
                            : null;
                    return null !== a && (i.icon_url = a), i;
                })
                .filter((e) => null !== e);
        },
        p = s.A.getGuildId(),
        _ = null != p ? a.A.getGuild(p) : null,
        h = () =>
            null == _
                ? []
                : d()
                      .map((e) => {
                          let t = i.A.getChannel(e);
                          if (void 0 === t) return null;
                          let n = {
                              id: t.id,
                              name: t.name,
                          };
                          return t.topic.length > 0 && (n.channel_topic = t.topic), n;
                      })
                      .filter((e) => null !== e),
        m = {
            guilds: f(),
            channels: h(),
        };
    null != p && (m.selected_guild_id = p);
    let g =
        (null == _ ? void 0 : _.banner) !== null &&
        (null == _ ? void 0 : _.banner) !== void 0 &&
        null !=
            (t = o.Ay.getGuildBannerURL(
                {
                    id: _.id,
                    banner: _.banner,
                },
                !0,
            ))
            ? t
            : null;
    return (
        null !== g && (m.selected_guild_banner_url = g),
        m.guilds.length > 100 && ((m.guilds = m.guilds.slice(0, 100)), (m.truncated = !0)),
        m.channels.length > 100 && ((m.channels = m.channels.slice(0, 100)), (m.truncated = !0)),
        {
            brand_safety_context: JSON.stringify(m),
        }
    );
}
n(23766);

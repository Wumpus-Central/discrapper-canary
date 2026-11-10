var l = t(477900),
    r = t(855986),
    a = t(95362),
    i = t(86182),
    s = t(265872),
    o = t(442433),
    u = t(538451),
    c = t(342296),
    d = t(413599),
    m = t(562153),
    h = t(462117);
function p(e) {
    let { participants: n, channel: r } = e;
    return (0, l.jsx)(a.Ip, {
        className: h.S,
        children: n.map((e) =>
            (0, l.jsx)(
                u.A,
                {
                    user: e,
                    guildId: r?.guild_id,
                    channelId: r?.id,
                    nick: m.Ay.getNickname(r?.guild_id, r?.id, e),
                    onContextMenu: (n) => {
                        (0, o.L3)(n, async () => {
                            let { default: n } = await Promise.all([
                                t.e(924697),
                                t.e(463317),
                                t.e(834552),
                                t.e(708757),
                                t.e(585968),
                                t.e(893190),
                                t.e(776273),
                                t.e(189673),
                                t.e(576432),
                                t.e(797558),
                                t.e(451162),
                                t.e(229787),
                                t.e(576665),
                                t.e(624198),
                                t.e(715038),
                                t.e(60086),
                                t.e(190889),
                                t.e(242204),
                                t.e(856753),
                                t.e(61129),
                                t.e(205941),
                                t.e(331203),
                                t.e(255302),
                                t.e(349644),
                                t.e(172883),
                                t.e(825486),
                                t.e(169103),
                                t.e(873786),
                                t.e(532418),
                            ]).then(t.bind(t, 668569));
                            return (t) => (0, l.jsx)(n, { ...t, user: e });
                        });
                    },
                },
                e.id,
            ),
        ),
    });
}
t.d(
    n,
    {},
    {
        A: function (e) {
            let { children: n, participants: t, channel: a, onPopoutClosed: o, targetElementRef: u } = e,
                m = (0, r.bG)([d.A], () => d.A.theme),
                h = 1 === t.length ? t[0] : null;
            return null != h
                ? (0, l.jsx)(i.w, {
                      theme: m,
                      children: (0, l.jsx)(c.A, {
                          targetElementRef: u,
                          user: h,
                          guildId: a?.guild_id,
                          channelId: a?.id,
                          onClosePopout: o,
                          children: n,
                      }),
                  })
                : (0, l.jsx)(i.w, {
                      theme: m,
                      children: (0, l.jsx)(s.Y, {
                          targetElementRef: u,
                          renderPopout: () => {
                              if (null != t) return (0, l.jsx)(p, { participants: t, channel: a });
                              throw Error("One of participant or participants is required");
                          },
                          children: n,
                      }),
                  });
        },
    },
);

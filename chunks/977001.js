t.d(i, { Ay: () => _, _E: () => j, ac: () => m });
var n = t(477900),
    l = t(582128),
    r = t(56121),
    s = t(774926),
    a = t(263577),
    c = t(583846),
    d = t(506326),
    o = t(868065),
    x = t(804779);
let m = [d.Xr],
    u = [r.j.WEEK];
function j(e) {
    return null != e && u.includes(e);
}
let _ =
    221552 == t.j
        ? l.memo(function (e) {
              let { entry: i, channel: t, selected: l } = e,
                  { largeImage: r } = (0, s.nO)({
                      entry: i,
                      showCoverImage: !1,
                      trackingSource: "memberlist_top_game_content_row",
                  }),
                  u = (0, c.TQ)(i);
              return null != u && j(u)
                  ? (0, n.jsxs)(o.Zp, {
                        selected: l,
                        children: [
                            (0, n.jsxs)(o.UA, {
                                children: [
                                    (0, n.jsx)(o.Hp, { entry: i, channelId: t.id, guildId: t.guild_id }),
                                    (0, n.jsx)(o.ZB, { children: i.extra.game_name }),
                                    (0, n.jsx)(d.mG, {
                                        location: d.N5.CARD,
                                        children: m.map((e, t) => (0, n.jsx)(e, { entry: i }, t)),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(a.V, { src: r?.src, size: 48, className: x.xn, alt: r?.alt }),
                        ],
                    })
                  : null;
          })
        : null;

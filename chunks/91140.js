n.d(t, {
    W: () => u,
    Z: () => d
});
var r = n(200651),
    i = n(192379),
    o = n(379357),
    l = n(442550),
    s = n(297781),
    a = n(443487),
    c = n(522314);
let u = [s.OV, s.EE, s.Af, s.U9, s.wO, s.f, s.n8, s.v1, s.pQ],
    d = i.memo((e) => {
        var t;
        let { entry: n, channel: i, selected: d, hovered: p } = e,
            { largeImage: _ } = (0, o.rv)({
                entry: n,
                showCoverImage: !1
            });
        return (0, r.jsxs)(a.Zb, {
            selected: d,
            children: [
                (0, r.jsxs)(a.e$, {
                    children: [
                        (0, r.jsx)(a.F9, {
                            entry: n,
                            channelId: i.id,
                            guildId: i.guild_id
                        }),
                        (0, r.jsx)(a.ll, { children: n.extra.game_name }),
                        (0, r.jsx)(s.Gk, {
                            location: s.Gt.CARD,
                            children: u.map((e, t) =>
                                (0, r.jsx)(
                                    e,
                                    {
                                        entry: n,
                                        hovered: p
                                    },
                                    t
                                )
                            )
                        })
                    ]
                }),
                (0, r.jsx)(l.f, {
                    alt: null != (t = null == _ ? void 0 : _.text) ? t : null == _ ? void 0 : _.alt,
                    src: null == _ ? void 0 : _.src,
                    size: 48,
                    className: c.thumbnail,
                    showTooltip: (null == _ ? void 0 : _.text) != null
                })
            ]
        });
    });

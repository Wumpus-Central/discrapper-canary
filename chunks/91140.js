n.d(t, {
    W: () => u,
    Z: () => f
});
var r = n(200651),
    i = n(192379),
    o = n(379357),
    a = n(442550),
    s = n(297781),
    l = n(443487),
    c = n(62545);
let u = [s.OV, s.EE, s.Af, s.U9, s.wO, s.f, s.n8, s.v1, s.pQ],
    d = (e) => {
        var t;
        let { entry: n, channel: i, selected: d, hovered: f } = e,
            { largeImage: p } = (0, o.rv)({
                entry: n,
                showCoverImage: !1
            });
        return (0, r.jsxs)(l.Zb, {
            selected: d,
            children: [
                (0, r.jsxs)(l.e$, {
                    children: [
                        (0, r.jsx)(l.F9, {
                            entry: n,
                            channelId: i.id,
                            guildId: i.guild_id
                        }),
                        (0, r.jsx)(l.ll, { children: n.extra.game_name }),
                        (0, r.jsx)(s.Gk, {
                            location: s.Gt.CARD,
                            children: u.map((e, t) =>
                                (0, r.jsx)(
                                    e,
                                    {
                                        entry: n,
                                        hovered: f
                                    },
                                    t
                                )
                            )
                        })
                    ]
                }),
                (0, r.jsx)(a.f, {
                    alt: null !== (t = null == p ? void 0 : p.text) && void 0 !== t ? t : null == p ? void 0 : p.alt,
                    src: null == p ? void 0 : p.src,
                    size: 48,
                    className: c.thumbnail,
                    showTooltip: (null == p ? void 0 : p.text) != null
                })
            ]
        });
    },
    f = i.memo(d);

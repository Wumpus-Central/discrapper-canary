n.d(t, {
    W: () => c,
    Z: () => f
});
var i = n(200651),
    r = n(192379),
    a = n(379357),
    s = n(442550),
    o = n(297781),
    l = n(443487),
    u = n(112311);
let c = [o.OV, o.EE, o.Af, o.U9, o.wO, o.f, o.n8, o.v1, o.pQ],
    d = (e) => {
        var t;
        let { entry: n, channel: r, selected: d, hovered: f } = e,
            { largeImage: _ } = (0, a.rv)({
                entry: n,
                showCoverImage: !1
            });
        return (0, i.jsxs)(l.Zb, {
            selected: d,
            children: [
                (0, i.jsxs)(l.e$, {
                    children: [
                        (0, i.jsx)(l.F9, {
                            entry: n,
                            channelId: r.id,
                            guildId: r.guild_id
                        }),
                        (0, i.jsx)(l.ll, { children: n.extra.game_name }),
                        (0, i.jsx)(o.Gk, {
                            location: o.Gt.CARD,
                            children: c.map((e, t) =>
                                (0, i.jsx)(
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
                (0, i.jsx)(s.f, {
                    alt: null !== (t = null == _ ? void 0 : _.text) && void 0 !== t ? t : null == _ ? void 0 : _.alt,
                    src: null == _ ? void 0 : _.src,
                    size: 48,
                    className: u.thumbnail,
                    showTooltip: (null == _ ? void 0 : _.text) != null
                })
            ]
        });
    },
    f = r.memo(d);

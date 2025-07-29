n.d(t, {
    W: () => u,
    Z: () => _
});
var r = n(255367),
    i = n(73800),
    a = n(379357),
    o = n(442550),
    s = n(297781),
    l = n(443487),
    c = n(522314);
let u = [s.OV, s.EE, s.Af, s.U9, s.wO, s.f, s.n8, s.v1, s.pQ],
    d = (e) => {
        var t;
        let { entry: n, channel: i, selected: d, hovered: _ } = e,
            { largeImage: f } = (0, a.rv)({
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
                                        hovered: _
                                    },
                                    t
                                )
                            )
                        })
                    ]
                }),
                (0, r.jsx)(o.f, {
                    alt: null != (t = null == f ? void 0 : f.text) ? t : null == f ? void 0 : f.alt,
                    src: null == f ? void 0 : f.src,
                    size: 48,
                    className: c.thumbnail,
                    showTooltip: (null == f ? void 0 : f.text) != null
                })
            ]
        });
    },
    _ = i.memo(d);

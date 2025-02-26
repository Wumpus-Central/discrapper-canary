n.d(t, {
    W: () => u,
    Z: () => d
});
var r = n(200651),
    i = n(192379),
    l = n(379357),
    o = n(442550),
    s = n(297781),
    a = n(443487),
    c = n(62545);
let u = [s.OV, s.EE, s.Af, s.U9, s.wO, s.f, s.n8, s.v1, s.pQ],
    d = i.memo((e) => {
        var t;
        let { entry: n, channel: i, selected: d, hovered: _ } = e,
            { largeImage: E } = (0, l.rv)({
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
                                        hovered: _
                                    },
                                    t
                                )
                            )
                        })
                    ]
                }),
                (0, r.jsx)(o.f, {
                    alt: null !== (t = null == E ? void 0 : E.text) && void 0 !== t ? t : null == E ? void 0 : E.alt,
                    src: null == E ? void 0 : E.src,
                    size: 48,
                    className: c.thumbnail,
                    showTooltip: (null == E ? void 0 : E.text) != null
                })
            ]
        });
    });

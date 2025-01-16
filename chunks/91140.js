r.d(n, {
    W: function () {
        return d;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(379357),
    o = r(442550),
    l = r(297781),
    u = r(443487),
    c = r(830677);
let d = [l.OV, l.EE, l.Af, l.U9, l.wO, l.f, l.n8, l.v1, l.pQ],
    f = (e) => {
        var n;
        let { entry: r, channel: a, selected: f, hovered: _ } = e,
            { largeImage: h } = (0, s.rv)({
                entry: r,
                showCoverImage: !1
            });
        return (0, i.jsxs)(u.Zb, {
            selected: f,
            children: [
                (0, i.jsxs)(u.e$, {
                    children: [
                        (0, i.jsx)(u.F9, {
                            entry: r,
                            channelId: a.id,
                            guildId: a.guild_id
                        }),
                        (0, i.jsx)(u.ll, { children: r.extra.game_name }),
                        (0, i.jsx)(l.Gk, {
                            location: l.Gt.CARD,
                            children: d.map((e, n) =>
                                (0, i.jsx)(
                                    e,
                                    {
                                        entry: r,
                                        hovered: _
                                    },
                                    n
                                )
                            )
                        })
                    ]
                }),
                (0, i.jsx)(o.f, {
                    alt: null !== (n = null == h ? void 0 : h.text) && void 0 !== n ? n : null == h ? void 0 : h.alt,
                    src: null == h ? void 0 : h.src,
                    size: 48,
                    className: c.thumbnail,
                    showTooltip: (null == h ? void 0 : h.text) != null
                })
            ]
        });
    };
n.Z = a.memo(f);

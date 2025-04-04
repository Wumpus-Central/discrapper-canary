n.d(t, { Z: () => u });
var r = n(200651),
    i = n(442837),
    o = n(596454),
    a = n(965386),
    s = n(430824),
    l = n(710111),
    c = n(388032);
function u(e) {
    let { sound: t } = e,
        n = (0, i.e7)([s.Z], () => {
            var e;
            return t.guildId === l.X8 ? c.NW.string(c.t.Rtvk9f) : null == (e = s.Z.getGuild(t.guildId)) ? void 0 : e.name;
        });
    return (0, r.jsxs)(a.RX, {
        children: [
            (null != t.emojiId || null != t.emojiName) &&
                (0, r.jsx)(a.Tw, {
                    children: (0, r.jsx)(o.Z, {
                        emojiId: t.emojiId,
                        emojiName: t.emojiName
                    })
                }),
            (0, r.jsx)(a.z5, { children: (0, r.jsx)(a.BR, { children: t.name }) }),
            null != n && (0, r.jsx)(a.dY, { children: n })
        ]
    });
}

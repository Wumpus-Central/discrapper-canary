n.d(t, { Z: () => u });
var r = n(200651),
    i = n(442837),
    a = n(596454),
    o = n(965386),
    s = n(430824),
    l = n(710111),
    c = n(388032);
function u(e) {
    let { sound: t } = e,
        n = (0, i.e7)([s.Z], () => {
            var e;
            return t.guildId === l.X8 ? c.intl.string(c.t.Rtvk9f) : null == (e = s.Z.getGuild(t.guildId)) ? void 0 : e.name;
        });
    return (0, r.jsxs)(o.RX, {
        children: [
            (null != t.emojiId || null != t.emojiName) &&
                (0, r.jsx)(o.Tw, {
                    children: (0, r.jsx)(a.Z, {
                        emojiId: t.emojiId,
                        emojiName: t.emojiName
                    })
                }),
            (0, r.jsx)(o.z5, { children: (0, r.jsx)(o.BR, { children: t.name }) }),
            null != n && (0, r.jsx)(o.dY, { children: n })
        ]
    });
}

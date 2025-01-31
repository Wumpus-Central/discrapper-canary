n.d(t, { Z: () => c });
var i = n(200651),
    r = n(442837),
    a = n(596454),
    s = n(965386),
    o = n(430824),
    l = n(710111),
    u = n(388032);
function c(e) {
    let { sound: t } = e,
        n = (0, r.e7)([o.Z], () => {
            var e;
            return t.guildId === l.X8 ? u.intl.string(u.t.Rtvk9f) : null === (e = o.Z.getGuild(t.guildId)) || void 0 === e ? void 0 : e.name;
        });
    return (0, i.jsxs)(s.RX, {
        children: [
            (null != t.emojiId || null != t.emojiName) &&
                (0, i.jsx)(s.Tw, {
                    children: (0, i.jsx)(a.Z, {
                        emojiId: t.emojiId,
                        emojiName: t.emojiName
                    })
                }),
            (0, i.jsx)(s.z5, { children: (0, i.jsx)(s.BR, { children: t.name }) }),
            null != n && (0, i.jsx)(s.dY, { children: n })
        ]
    });
}

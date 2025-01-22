r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(200651),
    a = r(442837),
    o = r(596454),
    s = r(965386),
    l = r(430824),
    u = r(710111),
    c = r(388032);
function d(e) {
    let { sound: n } = e,
        r = (0, a.e7)([l.Z], () => {
            var e;
            return n.guildId === u.X8 ? c.intl.string(c.t.Rtvk9f) : null === (e = l.Z.getGuild(n.guildId)) || void 0 === e ? void 0 : e.name;
        });
    return (0, i.jsxs)(s.RX, {
        children: [
            (null != n.emojiId || null != n.emojiName) &&
                (0, i.jsx)(s.Tw, {
                    children: (0, i.jsx)(o.Z, {
                        emojiId: n.emojiId,
                        emojiName: n.emojiName
                    })
                }),
            (0, i.jsx)(s.z5, { children: (0, i.jsx)(s.BR, { children: n.name }) }),
            null != r && (0, i.jsx)(s.dY, { children: r })
        ]
    });
}

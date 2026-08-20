s.d(a, { A: () => t });
var l = s(477900);
s(582128);
var i = s(570287),
    o = s(822775),
    d = s(784886),
    n = s(47453);
function t(e) {
    let { user: a, guildId: s, channelId: t, onClose: r, appContext: c, disableAutoFocus: h = !1 } = e,
        u = (0, i.A)(a.id, s);
    return (0, l.jsxs)("div", {
        className: n.qr,
        children: [
            u && (0, l.jsx)(d.A, { user: a, guildId: s, channelId: t, onClose: r, disableAutoFocus: h }),
            !u && (0, l.jsx)(o.A, { user: a, guildId: s, onClose: r, fullWidth: !0, appContext: c }),
        ],
    });
}

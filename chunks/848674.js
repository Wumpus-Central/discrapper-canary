s.d(a, { A: () => n });
var l = s(627968);
s(64700);
var i = s(570287),
    d = s(822775),
    o = s(784886),
    t = s(656884);
function n(e) {
    let { user: a, guildId: s, channelId: n, onClose: r, appContext: c, disableAutoFocus: h = !1 } = e,
        u = (0, i.A)(a.id, s);
    return (0, l.jsxs)("div", {
        className: t.qr,
        children: [
            u && (0, l.jsx)(o.A, { user: a, guildId: s, channelId: n, onClose: r, disableAutoFocus: h }),
            !u && (0, l.jsx)(d.A, { user: a, guildId: s, onClose: r, fullWidth: !0, appContext: c }),
        ],
    });
}

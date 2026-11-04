var d = s(477900);
s(582128);
var i = s(570287),
    n = s(822775),
    l = s(784886),
    t = s(47453);
s.d(
    o,
    {},
    {
        A: function (e) {
            let { user: o, guildId: s, channelId: a, onClose: r, appContext: u, disableAutoFocus: A = !1 } = e,
                c = (0, i.A)(o.id, s);
            return (0, d.jsxs)("div", {
                className: t.qr,
                children: [
                    c && (0, d.jsx)(l.A, { user: o, guildId: s, channelId: a, onClose: r, disableAutoFocus: A }),
                    !c && (0, d.jsx)(n.A, { user: o, guildId: s, onClose: r, fullWidth: !0, appContext: u }),
                ],
            });
        },
    },
);

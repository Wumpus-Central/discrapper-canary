n.d(e, { default: () => h });
var i = n(627968);
n(64700);
var s = n(31717),
    a = n(625494),
    r = n(453771),
    c = n(518960),
    o = n(87719),
    l = n(831318),
    p = n(652215),
    u = n(375708),
    d = n(101280);
function h(t) {
    let { channel: e, onClose: n, content: h, ...C } = t;
    return (0, i.jsx)(l.A, {
        title: u.intl.string(u.t.TZT3sJ),
        subtitle: u.intl.format(u.t.QhcEAL, {
            maxLength: p.uvi,
            onLearnMore: function () {
                n(), (0, o.e)();
            },
        }),
        graphic: { src: d.A, type: "image" },
        onClose: n,
        secondaryCTA: u.intl.string(u.t.Fnsb1t),
        onSecondaryClick: function () {
            n();
            let t = new Blob([h], { type: "text/plain" });
            (0, c.R)([(0, r.VE)(t, "message.txt", "text/plain")], e, s.C.ChannelMessage, { requireConfirm: !0 }),
                a._.dispatchToLastSubscribed(p.jej.CLEAR_TEXT);
        },
        ...C,
    });
}

n.d(e, { default: () => b });
var s = n(627968);
n(64700);
var i = n(31717),
    a = n(203982),
    c = n(453771),
    r = n(518960),
    o = n(87719),
    d = n(244975),
    p = n(652215),
    l = n(985018),
    u = n(101280);
function b(t) {
    let { channel: e, onClose: n, content: b, ...h } = t;
    return (0, s.jsx)(d.F, {
        title: l.intl.string(l.t.TZT3sJ),
        subtitle: l.intl.format(l.t.QhcEAL, {
            maxLength: p.uvi,
            onLearnMore: function () {
                n(), (0, o.e)();
            },
        }),
        graphic: { src: u.A, type: "image" },
        onClose: n,
        secondaryCTA: l.intl.string(l.t.Fnsb1t),
        onSecondaryClick: function () {
            n();
            let t = new Blob([b], { type: "text/plain" });
            (0, r.R)([(0, c.VE)(t, "message.txt", "text/plain")], e, i.C.ChannelMessage, { requireConfirm: !0 }),
                a._.dispatchToLastSubscribed(p.jej.CLEAR_TEXT);
        },
        ...h,
    });
}

d.d(c, { default: () => A });
var t = d(627968);
d(64700);
var a = d(87719),
    s = d(377108),
    b = d(831318),
    n = d(985018);
function A(e) {
    let { premiumUpsellType: c, title: d, body: A, onClose: o, onSecondaryClick: p, ...f } = e,
        r = (0, s.A)(c);
    return (0, t.jsx)(b.A, {
        title: d,
        subtitle: A,
        graphic: r,
        onSecondaryClick: () => {
            p(), (0, a.x)(o);
        },
        secondaryCTA: n.intl.string(n.t.PcTCB7),
        onClose: o,
        ...f,
    });
}

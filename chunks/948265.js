d.d(e, { default: () => o });
var a = d(627968);
d(64700);
var t = d(87719),
    s = d(81456),
    b = d(831318),
    n = d(985018);
function o(c) {
    let { premiumUpsellType: e, title: d, body: o, onClose: p, onSecondaryClick: f, ...r } = c,
        A = (0, s.A)(e);
    return (0, a.jsx)(b.A, {
        title: d,
        subtitle: o,
        graphic: A,
        onSecondaryClick: () => {
            f(), (0, t.x)(p);
        },
        secondaryCTA: n.intl.string(n.t.PcTCB7),
        onClose: p,
        ...r,
    });
}

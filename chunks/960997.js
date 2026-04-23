s.d(e, { default: () => x });
var a = s(627968);
s(64700);
var l = s(311907),
    n = s(832163),
    i = s(533562),
    d = s(971690),
    c = s(430825),
    r = s(985018),
    o = s(642785),
    u = s(221437),
    m = s(40820);
function x(t) {
    let e = (0, l.bG)([n.A], () => n.A.getAnnouncementModalConfig()),
        s = (0, i.W)() ?? e?.applicationId;
    return (0, a.jsx)(d.A, {
        ...t,
        applicationId: s,
        logo: u,
        titles: [r.intl.string(c.default["2FKQ2n"]), r.intl.string(c.default.JN38wW)],
        subtitle: r.intl.string(c.default.me6trO),
        features: [
            {
                icon: m.A,
                title: r.intl.string(c.default["C+RsW7"]),
                subtitle: r.intl.string(c.default["7mIXs6"]),
                iconLabelText: r.intl.formatToPlainString(c.default.IraH2Q, { discountOfferAmount: 20 }),
            },
            { icon: o, title: r.intl.string(c.default["5aC9+e"]), subtitle: r.intl.string(c.default.RMafGC) },
        ],
        buttonText: r.intl.string(c.default.WBMEcr),
    });
}

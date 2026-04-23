n.d(t, { K: () => o, default: () => d });
var i = n(627968);
n(64700);
var l = n(192308),
    s = n(87719),
    a = n(831318),
    r = n(985018);
function o(e) {
    let { onSubscribeFinish: t, stackingBehavior: s } = e;
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 835071));
            return (n) => (0, i.jsx)(e, { onSubscribeFinish: t, ...n });
        },
        { stackingBehavior: s },
    );
}
function d(e) {
    let { onClose: t, ...n } = e;
    return (0, i.jsx)(a.A, {
        title: r.intl.string(r.t.reVc0M),
        subtitle: r.intl.string(r.t.KckEj7),
        graphic: {
            src: "https://cdn.discordapp.com/assets/content/47cc9b4a38d020f9f0bf747920f0a9b0d02109a9eb9a15510e7a08b7fb106350.svg",
            type: "image",
        },
        onSecondaryClick: () => {
            (0, s.x)(t);
        },
        secondaryCTA: r.intl.string(r.t.PcTCB7),
        onClose: t,
        ...n,
    });
}

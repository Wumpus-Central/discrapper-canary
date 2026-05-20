n.d(t, { A: () => a });
var l = n(627968);
n(64700);
var i = n(192308),
    r = n(568065);
function a(e, t) {
    (0, i.openModalLazy)(
        async () => {
            switch (t.type) {
                case r.o9.LEVEL: {
                    let { default: i } = await Promise.all([
                        n.e("64422"),
                        n.e("36723"),
                        n.e("67567"),
                        n.e("31203"),
                        n.e("22455"),
                        n.e("48317"),
                        n.e("69149"),
                        n.e("34598"),
                        n.e("50186"),
                        n.e("2988"),
                    ]).then(n.bind(n, 787367));
                    return (n) => (0, l.jsx)(i, { guildId: e, powerup: t, ...n });
                }
                case r.o9.PERK: {
                    let { default: i } = await Promise.all([
                        n.e("8802"),
                        n.e("44710"),
                        n.e("64422"),
                        n.e("35912"),
                        n.e("3930"),
                        n.e("3663"),
                        n.e("42749"),
                        n.e("66147"),
                        n.e("22455"),
                        n.e("48111"),
                        n.e("69149"),
                        n.e("8710"),
                    ]).then(n.bind(n, 288416));
                    return (n) => (0, l.jsx)(i, { guildId: e, powerup: t, ...n });
                }
            }
        },
        { modalKey: r.Fq },
    );
}

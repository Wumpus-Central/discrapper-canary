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
                        n.e("4969"),
                        n.e("36723"),
                        n.e("84529"),
                        n.e("16229"),
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
                        n.e("45370"),
                        n.e("4969"),
                        n.e("75730"),
                        n.e("39216"),
                        n.e("35912"),
                        n.e("3930"),
                        n.e("3663"),
                        n.e("42749"),
                        n.e("66147"),
                        n.e("22455"),
                        n.e("42935"),
                        n.e("91977"),
                        n.e("69149"),
                        n.e("77224"),
                    ]).then(n.bind(n, 373627));
                    return (n) => (0, l.jsx)(i, { guildId: e, powerup: t, ...n });
                }
            }
        },
        { modalKey: r.Fq },
    );
}

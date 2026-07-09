l.d(t, { A: () => r });
var n = l(627968);
l(64700);
var i = l(192308),
    s = l(568065);
function r(e, t) {
    (0, i.openModalLazy)(
        async () => {
            switch (t.type) {
                case s.o9.LEVEL: {
                    let { default: i } = await Promise.all([
                        l.e("845"),
                        l.e("49332"),
                        l.e("34198"),
                        l.e("31203"),
                        l.e("22455"),
                        l.e("48317"),
                        l.e("69149"),
                        l.e("34598"),
                        l.e("50186"),
                        l.e("2988"),
                    ]).then(l.bind(l, 787367));
                    return (l) => (0, n.jsx)(i, { guildId: e, powerup: t, ...l });
                }
                case s.o9.PERK: {
                    let { default: i } = await Promise.all([
                        l.e("31343"),
                        l.e("20966"),
                        l.e("130"),
                        l.e("74025"),
                        l.e("23016"),
                        l.e("38887"),
                        l.e("3930"),
                        l.e("3663"),
                        l.e("38090"),
                        l.e("42749"),
                        l.e("66147"),
                        l.e("22455"),
                        l.e("42935"),
                        l.e("91977"),
                        l.e("69149"),
                        l.e("14530"),
                        l.e("77224"),
                    ]).then(l.bind(l, 373627));
                    return (l) => (0, n.jsx)(i, { guildId: e, powerup: t, ...l });
                }
            }
        },
        { modalKey: s.Fq },
    );
}

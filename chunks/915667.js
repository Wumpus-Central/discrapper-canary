a.d(t, { A: () => l });
var i = a(477900);
if ((a(582128), 21552 == a.j)) var r = a(192308);
var n = a(568065);
function l(e, t) {
    (0, r.openModalLazy)(
        async () => {
            switch (t.type) {
                case n.o9.LEVEL: {
                    let { default: r } = await Promise.all([
                        a.e("47426"),
                        a.e("43036"),
                        a.e("34654"),
                        a.e("22455"),
                        a.e("48317"),
                        a.e("53584"),
                        a.e("69149"),
                        a.e("34598"),
                        a.e("50186"),
                        a.e("2988"),
                    ]).then(a.bind(a, 787367));
                    return (a) => (0, i.jsx)(r, { guildId: e, powerup: t, ...a });
                }
                case n.o9.PERK: {
                    let { default: r } = await Promise.all([
                        a.e("52123"),
                        a.e("21398"),
                        a.e("202"),
                        a.e("9454"),
                        a.e("32424"),
                        a.e("61268"),
                        a.e("3930"),
                        a.e("3663"),
                        a.e("66147"),
                        a.e("38090"),
                        a.e("42749"),
                        a.e("22455"),
                        a.e("42935"),
                        a.e("91977"),
                        a.e("14530"),
                        a.e("69149"),
                        a.e("77224"),
                    ]).then(a.bind(a, 373627));
                    return (a) => (0, i.jsx)(r, { guildId: e, powerup: t, ...a });
                }
            }
        },
        { modalKey: n.Fq },
    );
}

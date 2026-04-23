l.d(e, { A: () => r });
var n = l(627968);
l(64700);
var a = l(192308),
    i = l(568065);
function r(t, e) {
    (0, a.openModalLazy)(
        async () => {
            switch (e.type) {
                case i.o9.LEVEL: {
                    let { default: a } = await l.e("2988").then(l.bind(l, 787367));
                    return (l) => (0, n.jsx)(a, { guildId: t, powerup: e, ...l });
                }
                case i.o9.PERK: {
                    let { default: a } = await Promise.all([l.e("42749"), l.e("15666"), l.e("40066")]).then(
                        l.bind(l, 288416),
                    );
                    return (l) => (0, n.jsx)(a, { guildId: t, powerup: e, ...l });
                }
            }
        },
        { modalKey: i.Fq },
    );
}

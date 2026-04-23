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
                    let { default: a } = await l.e("54508").then(l.bind(l, 278087));
                    return (l) => (0, n.jsx)(a, { guildId: t, powerup: e, ...l });
                }
                case i.o9.PERK: {
                    let { default: a } = await Promise.all([l.e("63379"), l.e("94253"), l.e("57909")]).then(
                        l.bind(l, 940481),
                    );
                    return (l) => (0, n.jsx)(a, { guildId: t, powerup: e, ...l });
                }
            }
        },
        { modalKey: i.Fq },
    );
}

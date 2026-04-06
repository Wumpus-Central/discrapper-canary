n.d(t, { A: () => s });
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(568065);
function s(e, t) {
    (0, i.mMO)(
        async () => {
            switch (t.type) {
                case l.o9.LEVEL: {
                    let { default: i } = await n.e("54508").then(n.bind(n, 278087));
                    return (n) => (0, r.jsx)(i, { guildId: e, powerup: t, ...n });
                }
                case l.o9.PERK: {
                    let { default: i } = await Promise.all([n.e("63379"), n.e("94253"), n.e("49146")]).then(
                        n.bind(n, 940481),
                    );
                    return (n) => (0, r.jsx)(i, { guildId: e, powerup: t, ...n });
                }
            }
        },
        { modalKey: l.Fq },
    );
}

n.d(t, { A: () => a });
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(568065);
function a(e, t) {
    (0, l.mMO)(
        async () => {
            switch (t.type) {
                case s.o9.LEVEL:
                    let { default: l } = await n.e("96914").then(n.bind(n, 391209));
                    return (n) => (0, i.jsx)(l, { guildId: e, powerup: t, ...n });
                case s.o9.PERK: {
                    let { default: l } = await Promise.all([n.e("63379"), n.e("34249")]).then(n.bind(n, 940481));
                    return (n) => (0, i.jsx)(l, { guildId: e, powerup: t, ...n });
                }
            }
        },
        { modalKey: s.Fq },
    );
}

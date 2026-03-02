"use strict";
n.d(t, { A: () => a });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(568065);
function a(e, t) {
    (0, s.mMO)(
        async () => {
            switch (t.type) {
                case l.o9.LEVEL: {
                    let { default: s } = await n.e("54508").then(n.bind(n, 278087));
                    return (n) => (0, i.jsx)(s, { guildId: e, powerup: t, ...n });
                }
                case l.o9.PERK: {
                    let { default: s } = await Promise.all([n.e("63379"), n.e("34249")]).then(n.bind(n, 940481));
                    return (n) => (0, i.jsx)(s, { guildId: e, powerup: t, ...n });
                }
            }
        },
        { modalKey: l.Fq },
    );
}

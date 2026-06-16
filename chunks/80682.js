"use strict";
n.d(t, { Eq: () => u }), n(627968);
var i = n(64700),
    r = n(735438),
    s = n.n(r);
n(52133);
var a = n(361610),
    o = n(38405);
let l = !1;
function u(e, t) {
    i.useEffect(
        () => (
            s().forEach(e, (e, n) => {
                !l &&
                    e.length > 50 &&
                    ((l = !0),
                    o.A.captureMessage("SubscribeGuildMembers called with more than 50 userIds.", {
                        extra: { count: e.length, guildId: n, reason: t },
                    })),
                    (0, a.un)(n, e);
            }),
            () => {
                s().forEach(e, (e, t) => (0, a.NE)(t, e));
            }
        ),
        [e, t],
    );
}

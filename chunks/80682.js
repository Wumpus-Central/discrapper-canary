"use strict";
n.d(t, { Eq: () => d, JM: () => o }), n(627968);
var i = n(64700),
    r = n(735438),
    l = n.n(r);
n(52133);
var a = n(361610),
    s = n(38405);
let o = 50,
    c = !1;
function d(e, t) {
    i.useEffect(
        () => (
            l().forEach(e, (e, n) => {
                !c &&
                    e.length > o &&
                    ((c = !0),
                    s.A.captureMessage("SubscribeGuildMembers called with more than 50 userIds.", {
                        extra: { count: e.length, guildId: n, reason: t },
                    })),
                    (0, a.un)(n, e);
            }),
            () => {
                l().forEach(e, (e, t) => (0, a.NE)(t, e));
            }
        ),
        [e, t],
    );
}

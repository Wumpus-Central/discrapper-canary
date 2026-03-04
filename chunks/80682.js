"use strict";
n.d(t, { Eq: () => c, JM: () => l }), n(627968);
var r = n(64700),
    i = n(735438),
    s = n.n(i);
n(52133);
var a = n(361610),
    o = n(728458);
let l = 50,
    u = !1;
function c(e, t) {
    r.useEffect(
        () => (
            s().forEach(e, (e, n) => {
                !u &&
                    e.length > l &&
                    ((u = !0),
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

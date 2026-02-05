"use strict";
n.d(t, { E: () => u }), n(627968);
var r = n(64700),
    i = n(735438),
    a = n.n(i);
n(52133);
var s = n(361610),
    o = n(728458);
let l = !1;
function u(e, t) {
    r.useEffect(
        () => (
            a().forEach(e, (e, n) => {
                !l &&
                    e.length > 50 &&
                    ((l = !0),
                    o.A.captureMessage("SubscribeGuildMembers called with more than 50 userIds.", {
                        extra: { userIdsCount: e.length, guildId: n, reason: t },
                    })),
                    (0, s.un)(n, e);
            }),
            () => {
                a().forEach(e, (e, t) => (0, s.NE)(t, e));
            }
        ),
        [e, t],
    );
}

"use strict";
n.d(t, { Dg: () => a, YG: () => o, n5: () => l });
var i = n(17928),
    r = n(473503),
    s = n(734057);
let a = "No Mic";
function o(e) {
    return (0, i.bG)(
        [s.A],
        () =>
            null != e &&
            !!e.isForumPost() &&
            null != e.parent_id &&
            (s.A.getChannel(e.parent_id)?.isGameInvitesChannel() ?? !1),
    );
}
function l(e, t) {
    return (0, r.OA)(e, { enabled: t, allowArchived: !0 });
}

"use strict";
n.d(t, { A: () => o });
var i = n(729937),
    r = n(981616),
    s = n(285933),
    a = n(227005);
async function o(e, t, n) {
    let { hasSpotifyAccount: o, activity: l, user: u } = e;
    (0, a.A)(o) && null != l && null != l.sync_id && (await (0, r.dM)(), i.ZH(l, u.id), (0, s.A)(t, u, l, n));
}

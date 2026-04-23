"use strict";
n.d(t, { A: () => s });
var a = n(729937),
    i = n(981616),
    r = n(285933),
    l = n(227005);
async function s(e, t, n) {
    let { hasSpotifyAccount: s, activity: d, user: o } = e;
    (0, l.A)(s) && null != d && null != d.sync_id && (await (0, i.dM)(), a.ZH(d, o.id), (0, r.A)(t, o, d, n));
}

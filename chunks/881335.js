"use strict";
n.d(t, { A: () => s });
var a = n(729937),
    r = n(981616),
    i = n(285933),
    l = n(227005);
async function s(e, t, n) {
    let { hasSpotifyAccount: s, activity: o, user: c } = e;
    (0, l.A)(s) && null != o && null != o.sync_id && (await (0, r.dM)(), a.ZH(o, c.id), (0, i.A)(t, c, o, n));
}

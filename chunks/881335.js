"use strict";
n.d(t, { A: () => l });
var i = n(729937),
    r = n(981616),
    a = n(285933),
    s = n(227005);
async function l(e, t, n) {
    let { hasSpotifyAccount: l, activity: o, user: d } = e;
    (0, s.A)(l) && null != o && null != o.sync_id && (await (0, r.dM)(), i.ZH(o, d.id), (0, a.A)(t, d, o, n));
}

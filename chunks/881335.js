n.d(t, { A: () => s });
var l = n(729937),
    a = n(981616),
    i = n(285933),
    r = n(227005);
async function s(e, t, n) {
    let { hasSpotifyAccount: s, activity: d, user: o } = e;
    (0, r.A)(s) && null != d && null != d.sync_id && (await (0, a.dM)(), l.ZH(d, o.id), (0, i.A)(t, o, d, n));
}

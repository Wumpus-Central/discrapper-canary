n.d(t, { A: () => o });
var r = n(729937),
    i = n(981616),
    l = n(285933),
    a = n(227005);
async function o(e, t, n) {
    let { hasSpotifyAccount: o, activity: u, user: s } = e;
    (0, a.A)(o) && null != u && null != u.sync_id && (await (0, i.dM)(), r.ZH(u, s.id), (0, l.A)(t, s, u, n));
}

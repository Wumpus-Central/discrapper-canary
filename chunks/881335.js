n.d(t, { A: () => o });
var a = n(729937),
    i = n(981616),
    l = n(285933),
    r = n(227005);
async function o(e, t, n) {
    let { hasSpotifyAccount: o, activity: s, user: c } = e;
    (0, r.A)(o) && null != s && null != s.sync_id && (await (0, i.dM)(), a.ZH(s, c.id), (0, l.A)(t, c, s, n));
}

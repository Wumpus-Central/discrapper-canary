r.d(n, { A: () => s });
var i = r(729937),
    a = r(981616),
    e = r(285933),
    l = r(227005);
async function s(t, n, r) {
    let { hasSpotifyAccount: s, activity: u, user: c } = t;
    (0, l.A)(s) && null != u && null != u.sync_id && (await (0, a.dM)(), i.ZH(u, c.id), (0, e.A)(n, c, u, r));
}

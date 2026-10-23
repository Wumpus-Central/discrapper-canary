r.d(n, { A: () => u });
var i = r(729937),
    a = r(981616),
    e = r(285933),
    l = r(227005);
async function u(t, n, r) {
    let { hasSpotifyAccount: u, activity: s, user: c } = t;
    (0, l.A)(u) && null != s && null != s.sync_id && (await (0, a.dM)(), i.ZH(s, c.id), (0, e.A)(n, c, s, r));
}

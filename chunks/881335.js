i.d(n, { A: () => u });
var r = i(729937),
    a = i(981616),
    e = i(285933),
    l = i(227005);
async function u(t, n, i) {
    let { hasSpotifyAccount: u, activity: s, user: c } = t;
    (0, l.A)(u) && null != s && null != s.sync_id && (await (0, a.dM)(), r.ZH(s, c.id), (0, e.A)(n, c, s, i));
}

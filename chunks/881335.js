n.d(t, {
    A: () => o,
});
var r = n(729937),
    i = n(981616),
    a = n(285933),
    s = n(227005);
async function o(e, t, n) {
    let { hasSpotifyAccount: o, activity: l, user: c } = e;
    (0, s.A)(o) && null != l && null != l.sync_id && (await (0, i.dM)(), r.ZH(l, c.id), (0, a.A)(t, c, l, n));
}

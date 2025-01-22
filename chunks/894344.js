r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(763472),
    s = r(647162),
    l = r(680686),
    u = r(131303);
async function c(e, n, c) {
    let { hasSpotifyAccount: d, activity: f, user: p } = e;
    (0, u.Z)(d) &&
        null != f &&
        null != f.sync_id &&
        (await (0, s.KV)(),
        await (0, s.yp)().catch(
            (e) => (
                (0, a.openModalLazy)(async () => {
                    let { default: e } = await r.e('46317').then(r.bind(r, 841178));
                    return (n) => (0, i.jsx)(e, { ...n });
                }),
                Promise.reject(e)
            )
        ),
        o.Z_(f, p.id),
        (0, l.Z)(n, p, f, c));
}

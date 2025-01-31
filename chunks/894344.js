n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(763472),
    s = n(647162),
    o = n(680686),
    l = n(131303);
async function u(e, t, u) {
    let { hasSpotifyAccount: c, activity: d, user: f } = e;
    (0, l.Z)(c) &&
        null != d &&
        null != d.sync_id &&
        (await (0, s.KV)(),
        await (0, s.yp)().catch(
            (e) => (
                (0, r.ZDy)(async () => {
                    let { default: e } = await n.e('46317').then(n.bind(n, 841178));
                    return (t) => (0, i.jsx)(e, { ...t });
                }),
                Promise.reject(e)
            )
        ),
        a.Z_(d, f.id),
        (0, o.Z)(t, f, d, u));
}

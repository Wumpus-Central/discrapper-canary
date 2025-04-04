n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(763472),
    a = n(647162),
    s = n(680686),
    l = n(131303);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
async function d(e, t, c) {
    let { hasSpotifyAccount: d, activity: f, user: _ } = e;
    (0, l.Z)(d) &&
        null != f &&
        null != f.sync_id &&
        (await (0, a.KV)(),
        await (0, a.yp)().catch(
            (e) => (
                (0, i.ZDy)(async () => {
                    let { default: e } = await n.e('46317').then(n.bind(n, 841178));
                    return (t) => (0, r.jsx)(e, u({}, t));
                }),
                Promise.reject(e)
            )
        ),
        o.Z_(f, _.id),
        (0, s.Z)(t, _, f, c));
}

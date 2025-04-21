n.d(t, { Z: () => o }), n(388685);
var r = n(192379),
    i = n(479531),
    l = n(388032);
function o(e) {
    let [t, n] = r.useState(!1),
        [o, a] = r.useState(null);
    return [
        r.useCallback(
            async function () {
                for (var t = arguments.length, r = Array(t), o = 0; o < t; o++) r[o] = arguments[o];
                try {
                    return a(null), n(!0), await e(...r);
                } catch (e) {
                    e.message !== l.intl.string(l.t.N2yb9f) && a(e instanceof i.Z ? e : new i.Z(e));
                } finally {
                    n(!1);
                }
            },
            [e]
        ),
        {
            loading: t,
            error: o
        }
    ];
}

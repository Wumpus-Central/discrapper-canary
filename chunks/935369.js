(n.d(t, { Z: () => a }), n(388685));
var r = n(73800),
    i = n(479531),
    o = n(388032);
function a(e) {
    let [t, n] = r.useState(!1),
        [a, s] = r.useState(null);
    return [
        r.useCallback(
            async function () {
                for (var t = arguments.length, r = Array(t), a = 0; a < t; a++) r[a] = arguments[a];
                try {
                    return (s(null), n(!0), await e(...r));
                } catch (e) {
                    e.message !== o.intl.string(o.t.N2yb9f) && s(e instanceof i.Z ? e : new i.Z(e));
                } finally {
                    n(!1);
                }
            },
            [e]
        ),
        {
            loading: t,
            error: a
        }
    ];
}

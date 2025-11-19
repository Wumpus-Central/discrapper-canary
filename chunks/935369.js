n.d(t, { Z: () => o }), n(388685);
var r = n(473749),
    i = n(479531),
    a = n(388032);
function o(e) {
    let [t, n] = r.useState(!1),
        [o, s] = r.useState(null);
    return [
        r.useCallback(
            async function () {
                for (var t = arguments.length, r = Array(t), o = 0; o < t; o++) r[o] = arguments[o];
                try {
                    return s(null), n(!0), await e(...r);
                } catch (e) {
                    e.message !== a.intl.string(a.t.N2yb9a) && s(e instanceof i.Z ? e : new i.Z(e));
                } finally {
                    n(!1);
                }
            },
            [e],
        ),
        {
            loading: t,
            error: o,
        },
    ];
}

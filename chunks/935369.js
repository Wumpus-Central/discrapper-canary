n.d(t, { Z: () => r }), n(47120);
var i = n(192379),
    s = n(479531),
    a = n(388032);
function r(e) {
    let [t, n] = i.useState(!1),
        [r, l] = i.useState(null);
    return [
        i.useCallback(
            async function () {
                for (var t = arguments.length, i = Array(t), r = 0; r < t; r++) i[r] = arguments[r];
                try {
                    return l(null), n(!0), await e(...i);
                } catch (e) {
                    e.message !== a.intl.string(a.t.N2yb9f) && l(e instanceof s.Z ? e : new s.Z(e));
                } finally {
                    n(!1);
                }
            },
            [e]
        ),
        {
            loading: t,
            error: r
        }
    ];
}

n.d(t, { Z: () => s }), n(47120);
var i = n(192379),
    l = n(479531),
    r = n(388032);
function s(e) {
    let [t, n] = i.useState(!1),
        [s, a] = i.useState(null);
    return [
        i.useCallback(
            async function () {
                for (var t = arguments.length, i = Array(t), s = 0; s < t; s++) i[s] = arguments[s];
                try {
                    return a(null), n(!0), await e(...i);
                } catch (e) {
                    e.message !== r.intl.string(r.t.N2yb9f) && a(e instanceof l.Z ? e : new l.Z(e));
                } finally {
                    n(!1);
                }
            },
            [e]
        ),
        {
            loading: t,
            error: s
        }
    ];
}

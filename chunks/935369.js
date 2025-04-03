r.d(t, { Z: () => a }), r(47120);
var n = r(192379),
    i = r(479531),
    s = r(388032);
function a(e) {
    let [t, r] = n.useState(!1),
        [a, o] = n.useState(null);
    return [
        n.useCallback(
            async function () {
                for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
                try {
                    return o(null), r(!0), await e(...n);
                } catch (e) {
                    e.message !== s.NW.string(s.t.N2yb9f) && o(e instanceof i.Z ? e : new i.Z(e));
                } finally {
                    r(!1);
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

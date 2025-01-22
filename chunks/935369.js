e.d(n, {
    Z: function () {
        return u;
    }
}),
    e(47120);
var i = e(192379),
    r = e(479531),
    l = e(388032);
function u(t) {
    let [n, e] = i.useState(!1),
        [u, o] = i.useState(null);
    return [
        i.useCallback(
            async function () {
                for (var n = arguments.length, i = Array(n), u = 0; u < n; u++) i[u] = arguments[u];
                try {
                    return o(null), e(!0), await t(...i);
                } catch (t) {
                    t.message !== l.intl.string(l.t.N2yb9f) && o(t instanceof r.Z ? t : new r.Z(t));
                } finally {
                    e(!1);
                }
            },
            [t]
        ),
        {
            loading: n,
            error: u
        }
    ];
}

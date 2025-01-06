n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120);
var i = n(192379),
    a = n(479531),
    r = n(388032);
function s(e) {
    let [t, n] = i.useState(!1),
        [s, o] = i.useState(null);
    return [
        i.useCallback(
            async function () {
                for (var t = arguments.length, i = Array(t), s = 0; s < t; s++) i[s] = arguments[s];
                try {
                    return o(null), n(!0), await e(...i);
                } catch (e) {
                    e.message !== r.intl.string(r.t.N2yb9f) && o(e instanceof a.Z ? e : new a.Z(e));
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

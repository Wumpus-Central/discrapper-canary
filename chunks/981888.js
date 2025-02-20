t.d(n, { Z: () => l }), t(47120);
var r = t(192379),
    i = t(881052);
function l(e, n) {
    let [t, l] = r.useState(!1),
        [o, c] = r.useState(null);
    return [
        async () => {
            l(!0), c(null);
            try {
                let n = await e();
                return l(!1), c(null), n;
            } catch (t) {
                let e = new i.Hx(t);
                return null == n || n(e), c(e), l(!1), null;
            }
        },
        {
            loading: t,
            error: o
        }
    ];
}

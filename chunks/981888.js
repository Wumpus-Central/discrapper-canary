t.d(n, { Z: () => l }), t(388685);
var i = t(73800),
    r = t(881052);
function l(e, n) {
    let [t, l] = i.useState(!1),
        [o, c] = i.useState(null);
    return [
        async () => {
            l(!0), c(null);
            try {
                let n = await e();
                return l(!1), c(null), n;
            } catch (t) {
                let e = new r.Hx(t);
                return null == n || n(e), c(e), l(!1), null;
            }
        },
        {
            loading: t,
            error: o,
        },
    ];
}

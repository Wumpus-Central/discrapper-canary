t.d(n, { Z: () => i }), t(388685);
var a = t(647438),
    r = t(881052);
function i(e, n) {
    let [t, i] = a.useState(!1),
        [o, l] = a.useState(null);
    return [
        async () => {
            i(!0), l(null);
            try {
                let n = await e();
                return i(!1), l(null), n;
            } catch (t) {
                let e = new r.Hx(t);
                return null == n || n(e), l(e), i(!1), null;
            }
        },
        {
            loading: t,
            error: o,
        },
    ];
}

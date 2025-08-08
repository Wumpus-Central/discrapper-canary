t.d(n, { Z: () => i }), t(388685);
var r = t(73800),
    o = t(881052);
function i(e, n) {
    let [t, i] = r.useState(!1),
        [a, l] = r.useState(null);
    return [
        async () => {
            i(!0), l(null);
            try {
                let n = await e();
                return i(!1), l(null), n;
            } catch (t) {
                let e = new o.Hx(t);
                return null == n || n(e), l(e), i(!1), null;
            }
        },
        {
            loading: t,
            error: a,
        },
    ];
}

t.d(n, { Z: () => a }), t(47120);
var i = t(192379),
    l = t(881052);
function a(e, n) {
    let [t, a] = i.useState(!1),
        [r, d] = i.useState(null);
    return [
        async () => {
            a(!0), d(null);
            try {
                let n = await e();
                return a(!1), d(null), n;
            } catch (t) {
                let e = new l.Hx(t);
                return null == n || n(e), d(e), a(!1), null;
            }
        },
        {
            loading: t,
            error: r
        }
    ];
}

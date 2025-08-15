t.d(n, { Z: () => r }), t(388685);
var i = t(73800),
    l = t(881052);
function r(e, n) {
    let [t, r] = i.useState(!1),
        [d, a] = i.useState(null);
    return [
        async () => {
            r(!0), a(null);
            try {
                let n = await e();
                return r(!1), a(null), n;
            } catch (t) {
                let e = new l.Hx(t);
                return null == n || n(e), a(e), r(!1), null;
            }
        },
        {
            loading: t,
            error: d,
        },
    ];
}

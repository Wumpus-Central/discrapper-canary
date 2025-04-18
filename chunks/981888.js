t.d(n, { Z: () => r }), t(388685);
var i = t(192379),
    l = t(881052);
function r(e, n) {
    let [t, r] = i.useState(!1),
        [a, d] = i.useState(null);
    return [
        async () => {
            r(!0), d(null);
            try {
                let n = await e();
                return r(!1), d(null), n;
            } catch (t) {
                let e = new l.Hx(t);
                return null == n || n(e), d(e), r(!1), null;
            }
        },
        {
            loading: t,
            error: a
        }
    ];
}

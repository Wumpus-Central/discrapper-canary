t.d(n, { Z: () => r }), t(388685);
var a = t(473749),
    i = t(881052);
function r(e, n) {
    let [t, r] = a.useState(!1),
        [o, c] = a.useState(null);
    return [
        async () => {
            r(!0), c(null);
            try {
                let n = await e();
                return r(!1), c(null), n;
            } catch (t) {
                let e = new i.Hx(t);
                return null == n || n(e), c(e), r(!1), null;
            }
        },
        {
            loading: t,
            error: o,
        },
    ];
}

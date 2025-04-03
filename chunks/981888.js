t.d(n, { Z: () => r }), t(47120);
var i = t(192379),
    a = t(881052);
function r(e, n) {
    let [t, r] = i.useState(!1),
        [o, d] = i.useState(null);
    return [
        async () => {
            r(!0), d(null);
            try {
                let n = await e();
                return r(!1), d(null), n;
            } catch (t) {
                let e = new a.Hx(t);
                return null == n || n(e), d(e), r(!1), null;
            }
        },
        {
            loading: t,
            error: o
        }
    ];
}

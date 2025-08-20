n.d(t, { Z: () => r }), n(388685);
var i = n(647438),
    l = n(881052);
function r(e, t) {
    let [n, r] = i.useState(!1),
        [a, d] = i.useState(null);
    return [
        async () => {
            r(!0), d(null);
            try {
                let t = await e();
                return r(!1), d(null), t;
            } catch (n) {
                let e = new l.Hx(n);
                return null == t || t(e), d(e), r(!1), null;
            }
        },
        {
            loading: n,
            error: a,
        },
    ];
}

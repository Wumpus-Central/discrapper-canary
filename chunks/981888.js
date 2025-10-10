t.d(n, { Z: () => r }), t(388685);
var i = t(647438),
    a = t(881052);
function r(e, n) {
    let [t, r] = i.useState(!1),
        [l, o] = i.useState(null);
    return [
        async () => {
            r(!0), o(null);
            try {
                let n = await e();
                return r(!1), o(null), n;
            } catch (t) {
                let e = new a.Hx(t);
                return null == n || n(e), o(e), r(!1), null;
            }
        },
        {
            loading: t,
            error: l,
        },
    ];
}

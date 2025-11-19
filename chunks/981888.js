t.d(n, { Z: () => a }), t(388685);
var i = t(473749),
    r = t(881052);
function a(e, n) {
    let [t, a] = i.useState(!1),
        [l, o] = i.useState(null);
    return [
        async () => {
            a(!0), o(null);
            try {
                let n = await e();
                return a(!1), o(null), n;
            } catch (t) {
                let e = new r.Hx(t);
                return null == n || n(e), o(e), a(!1), null;
            }
        },
        {
            loading: t,
            error: l,
        },
    ];
}

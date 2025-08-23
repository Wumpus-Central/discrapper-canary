t.d(n, { Z: () => a }), t(388685);
var r = t(647438),
    i = t(881052);
function a(e, n) {
    let [t, a] = r.useState(!1),
        [l, o] = r.useState(null);
    return [
        async () => {
            a(!0), o(null);
            try {
                let n = await e();
                return a(!1), o(null), n;
            } catch (t) {
                let e = new i.Hx(t);
                return null == n || n(e), o(e), a(!1), null;
            }
        },
        {
            loading: t,
            error: l,
        },
    ];
}

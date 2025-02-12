t.d(n, { Z: () => o }), t(47120);
var a = t(192379),
    i = t(881052);
function o(e, n) {
    let [t, o] = a.useState(!1),
        [r, c] = a.useState(null);
    return [
        async () => {
            o(!0), c(null);
            try {
                let n = await e();
                return o(!1), c(null), n;
            } catch (t) {
                let e = new i.Hx(t);
                return null == n || n(e), c(e), o(!1), null;
            }
        },
        {
            loading: t,
            error: r
        }
    ];
}

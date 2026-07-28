d.d(n, { A: () => i });
var t = d(477900),
    u = d(582128),
    l = d(192308);
function i(e, n) {
    return u.useCallback(() => {
        (0, l.openModalLazy)(async () => {
            let { default: u } = await Promise.all([
                d.e("90540"),
                d.e("47426"),
                d.e("43036"),
                d.e("31203"),
                d.e("6350"),
                d.e("69149"),
                d.e("34598"),
                d.e("86794"),
            ]).then(d.bind(d, 922545));
            return (d) => (0, t.jsx)(u, { guildId: e, powerup: n, ...d });
        });
    }, [e, n]);
}

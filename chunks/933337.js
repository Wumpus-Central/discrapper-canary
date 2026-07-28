t.d(n, { A: () => a });
var d = t(477900),
    u = t(582128),
    l = t(192308);
function a(e, n) {
    return u.useCallback(() => {
        (0, l.openModalLazy)(async () => {
            let { default: u } = await Promise.all([
                t.e("90540"),
                t.e("47426"),
                t.e("43036"),
                t.e("53584"),
                t.e("6350"),
                t.e("29657"),
                t.e("69149"),
                t.e("74488"),
                t.e("34598"),
                t.e("61334"),
            ]).then(t.bind(t, 285899));
            return (t) => (0, d.jsx)(u, { guildId: e, powerup: n, ...t });
        });
    }, [e, n]);
}

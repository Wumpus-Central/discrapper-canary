t.d(n, { A: () => a });
var d = t(477900),
    u = t(582128),
    l = t(192308);
function a(e, n) {
    return u.useCallback(() => {
        (0, l.openModalLazy)(async () => {
            let { default: u } = await Promise.all([
                t.e("522052"),
                t.e("463455"),
                t.e("470532"),
                t.e("543039"),
                t.e("721690"),
                t.e("295366"),
                t.e("844695"),
                t.e("601469"),
                t.e("553584"),
                t.e("706350"),
                t.e("652038"),
                t.e("728633"),
                t.e("669149"),
                t.e("374488"),
                t.e("234598"),
                t.e("861334"),
            ]).then(t.bind(t, 285899));
            return (t) => (0, d.jsx)(u, { guildId: e, powerup: n, ...t });
        });
    }, [e, n]);
}

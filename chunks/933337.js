d.d(n, { A: () => i });
var t = d(477900),
    u = d(582128),
    l = d(192308);
function i(e, n) {
    return u.useCallback(() => {
        (0, l.openModalLazy)(async () => {
            let { default: u } = await Promise.all([
                d.e("522052"),
                d.e("463455"),
                d.e("470532"),
                d.e("543039"),
                d.e("721690"),
                d.e("295366"),
                d.e("844695"),
                d.e("588940"),
                d.e("728633"),
                d.e("331203"),
                d.e("504045"),
                d.e("706350"),
                d.e("669149"),
                d.e("234598"),
                d.e("786794"),
            ]).then(d.bind(d, 922545));
            return (d) => (0, t.jsx)(u, { guildId: e, powerup: n, ...d });
        });
    }, [e, n]);
}

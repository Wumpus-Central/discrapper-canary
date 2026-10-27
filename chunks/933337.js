d.d(n, { A: () => i });
var t = d(477900),
    u = d(582128),
    l = d(192308);
function i(e, n) {
    return u.useCallback(() => {
        (0, l.openModalLazy)(async () => {
            let { default: u } = await Promise.all([
                d.e("861494"),
                d.e("771137"),
                d.e("543039"),
                d.e("266900"),
                d.e("721690"),
                d.e("728633"),
                d.e("401590"),
                d.e("844695"),
                d.e("92124"),
                d.e("588940"),
                d.e("553584"),
                d.e("161283"),
                d.e("669149"),
                d.e("149379"),
                d.e("901559"),
                d.e("30863"),
            ]).then(d.bind(d, 204690));
            return (d) => (0, t.jsx)(u, { guildId: e, powerup: n, ...d });
        });
    }, [e, n]);
}

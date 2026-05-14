n.d(t, { A: () => a });
var l = n(627968),
    i = n(64700),
    r = n(192308);
function a(e, t) {
    return i.useCallback(() => {
        (0, r.openModalLazy)(async () => {
            let { default: i } = await Promise.all([
                n.e("31920"),
                n.e("36723"),
                n.e("31203"),
                n.e("69149"),
                n.e("34598"),
                n.e("86794"),
            ]).then(n.bind(n, 922545));
            return (n) => (0, l.jsx)(i, { guildId: e, powerup: t, ...n });
        });
    }, [e, t]);
}

l.d(e, { A: () => r });
var n = l(627968),
    a = l(64700),
    i = l(192308);
function r(t, e) {
    return a.useCallback(() => {
        (0, i.openModalLazy)(async () => {
            let { default: a } = await l.e("74488").then(l.bind(l, 285899));
            return (l) => (0, n.jsx)(a, { guildId: t, powerup: e, ...l });
        });
    }, [t, e]);
}

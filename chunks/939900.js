n.d(t, { Z: () => l }), n(35282);
var r = n(54381);
n(473749);
var i = n(3570),
    s = n(685311),
    a = n(186901);
let l = function (e) {
    let { match: t, location: n } = e,
        l = async (e) => {
            await (0, i.s)(a.jE.GAME_SHOP, {
                guildId: e.params.guildId,
                pageIndex: e.params.pageIndex,
                skuId: e.params.skuId,
                slug: e.params.slug,
            });
        };
    return (0, r.jsx)(s.Z, {
        match: t,
        location: n,
        attemptDeepLink: l,
    });
};

n.d(t, { A: () => d });
var i = n(417597),
    l = n(524799),
    a = n(585958),
    r = n(760751),
    s = n(486020),
    o = n(985018);
function d(e) {
    let { coverImageUrl: t, localizedName: n, isFetching: d } = (0, a.n)(e),
        c = (0, i.bG)([r.A], () => r.A.getDetectableGame(e)),
        u = (0, i.bG)([l.A], () => l.A.canFetch(e));
    return {
        coverImageUrl: t ?? s.Ay.getGameAssetURL({ id: e, hash: c?.cover_image_hash, keepAspectRatio: !0 }),
        gameName: n ?? c?.name ?? o.intl.string(o.t.GIWFlF),
        isLoading: u || d,
    };
}

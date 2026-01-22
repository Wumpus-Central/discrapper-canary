n.d(t, {
    A: () => c,
});
var r = n(417597),
    l = n(524799),
    i = n(585958),
    a = n(760751),
    s = n(486020),
    o = n(985018);

function c(e) {
    var t;
    let { coverImageUrl: n, localizedName: c, isFetching: u } = (0, i.n)(e),
        d = (0, r.bG)([a.A], () => a.A.getDetectableGame(e)),
        f = (0, r.bG)([l.A], () => l.A.canFetch(e));
    return {
        coverImageUrl:
            null != n
                ? n
                : s.Ay.getGameAssetURL({
                      id: e,
                      hash: null == d ? void 0 : d.cover_image_hash,
                      keepAspectRatio: !0,
                  }),
        gameName: null != (t = null != c ? c : null == d ? void 0 : d.name) ? t : o.intl.string(o.t.GIWFlF),
        isLoading: f || u,
    };
}

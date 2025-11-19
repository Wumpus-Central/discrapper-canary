n.d(t, { Z: () => c });
var r = n(473749),
    i = n(399606),
    a = n(675478),
    o = n(208049),
    s = n(763296),
    l = n(771784);
function c() {
    let e = (0, l.q3)("useFetchSoundboardData");
    return {
        fetching: (0, i.e7)([s.Z], () => s.Z.isFetchingAnySounds()),
        maybeFetchData: r.useCallback(() => {
            o.w(), a.DZ.loadIfNecessary();
        }, [e.sortingStrategy]),
    };
}

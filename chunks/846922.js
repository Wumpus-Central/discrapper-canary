var n,
    r = i(196765),
    a = i(121894),
    s =
        (((n = {})[(n.ALL_CHANNELS_ACCESS = 0)] = "ALL_CHANNELS_ACCESS"),
        (n[(n.SOME_CHANNELS_ACCESS = 1)] = "SOME_CHANNELS_ACCESS"),
        n);
let l = (0, r.v)((e) => ({
    listings: {},
    setListing: (t, i) => (0, a.r)(() => e((e) => ({ listings: { ...e.listings, [t]: i(e.listings[t]) } }))),
    editStateIdsForGroup: {},
    setEditStateIdsForGroup: (t, i) =>
        (0, a.r)(() => {
            e((e) => ({ editStateIdsForGroup: { ...e.editStateIdsForGroup, [t]: i(e.editStateIdsForGroup[t]) } }));
        }),
}));
i.d(t, {}, { h: s, y: l });

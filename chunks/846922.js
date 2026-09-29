i.d(t, { h: () => s, y: () => r });
var l,
    n = i(196765),
    a = i(121894),
    s =
        (((l = {})[(l.ALL_CHANNELS_ACCESS = 0)] = "ALL_CHANNELS_ACCESS"),
        (l[(l.SOME_CHANNELS_ACCESS = 1)] = "SOME_CHANNELS_ACCESS"),
        l);
let r = (0, n.v)((e) => ({
    listings: {},
    setListing: (t, i) => (0, a.r)(() => e((e) => ({ listings: { ...e.listings, [t]: i(e.listings[t]) } }))),
    editStateIdsForGroup: {},
    setEditStateIdsForGroup: (t, i) =>
        (0, a.r)(() => {
            e((e) => ({ editStateIdsForGroup: { ...e.editStateIdsForGroup, [t]: i(e.editStateIdsForGroup[t]) } }));
        }),
}));

i.d(t, { h: () => s, y: () => r });
var l,
    a = i(196765),
    n = i(121894),
    s =
        (((l = {})[(l.ALL_CHANNELS_ACCESS = 0)] = "ALL_CHANNELS_ACCESS"),
        (l[(l.SOME_CHANNELS_ACCESS = 1)] = "SOME_CHANNELS_ACCESS"),
        l);
let r = (0, a.v)((e) => ({
    listings: {},
    setListing: (t, i) => (0, n.r)(() => e((e) => ({ listings: { ...e.listings, [t]: i(e.listings[t]) } }))),
    editStateIdsForGroup: {},
    setEditStateIdsForGroup: (t, i) =>
        (0, n.r)(() => {
            e((e) => ({ editStateIdsForGroup: { ...e.editStateIdsForGroup, [t]: i(e.editStateIdsForGroup[t]) } }));
        }),
}));

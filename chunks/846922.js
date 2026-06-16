i.d(t, { h: () => r, y: () => s });
var n,
    a = i(353640),
    l = i(121894),
    r =
        (((n = {})[(n.ALL_CHANNELS_ACCESS = 0)] = "ALL_CHANNELS_ACCESS"),
        (n[(n.SOME_CHANNELS_ACCESS = 1)] = "SOME_CHANNELS_ACCESS"),
        n);
let s = (0, a.v)((e) => ({
    listings: {},
    setListing: (t, i) => (0, l.r)(() => e((e) => ({ listings: { ...e.listings, [t]: i(e.listings[t]) } }))),
    editStateIdsForGroup: {},
    setEditStateIdsForGroup: (t, i) =>
        (0, l.r)(() => {
            e((e) => ({ editStateIdsForGroup: { ...e.editStateIdsForGroup, [t]: i(e.editStateIdsForGroup[t]) } }));
        }),
}));

n.d(t, { h: () => a, y: () => s });
var l,
    i = n(353640),
    r = n(121894),
    a =
        (((l = {})[(l.ALL_CHANNELS_ACCESS = 0)] = "ALL_CHANNELS_ACCESS"),
        (l[(l.SOME_CHANNELS_ACCESS = 1)] = "SOME_CHANNELS_ACCESS"),
        l);
let s = (0, i.v)((e) => ({
    listings: {},
    setListing: (t, n) => (0, r.r)(() => e((e) => ({ listings: { ...e.listings, [t]: n(e.listings[t]) } }))),
    editStateIdsForGroup: {},
    setEditStateIdsForGroup: (t, n) =>
        (0, r.r)(() => {
            e((e) => ({ editStateIdsForGroup: { ...e.editStateIdsForGroup, [t]: n(e.editStateIdsForGroup[t]) } }));
        }),
}));

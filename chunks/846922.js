i.d(t, { h: () => n, y: () => s });
var r,
    l = i(353640),
    a = i(121894),
    n =
        (((r = {})[(r.ALL_CHANNELS_ACCESS = 0)] = "ALL_CHANNELS_ACCESS"),
        (r[(r.SOME_CHANNELS_ACCESS = 1)] = "SOME_CHANNELS_ACCESS"),
        r);
let s = (0, l.v)((e) => ({
    listings: {},
    setListing: (t, i) => (0, a.r)(() => e((e) => ({ listings: { ...e.listings, [t]: i(e.listings[t]) } }))),
    editStateIdsForGroup: {},
    setEditStateIdsForGroup: (t, i) =>
        (0, a.r)(() => {
            e((e) => ({ editStateIdsForGroup: { ...e.editStateIdsForGroup, [t]: i(e.editStateIdsForGroup[t]) } }));
        }),
}));

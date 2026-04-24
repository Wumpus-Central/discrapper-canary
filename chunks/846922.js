n.d(t, { h: () => a, y: () => s });
var r,
    l = n(353640),
    i = n(121894),
    a =
        (((r = {})[(r.ALL_CHANNELS_ACCESS = 0)] = "ALL_CHANNELS_ACCESS"),
        (r[(r.SOME_CHANNELS_ACCESS = 1)] = "SOME_CHANNELS_ACCESS"),
        r);
let s = (0, l.v)((e) => ({
    listings: {},
    setListing: (t, n) => (0, i.r)(() => e((e) => ({ listings: { ...e.listings, [t]: n(e.listings[t]) } }))),
    editStateIdsForGroup: {},
    setEditStateIdsForGroup: (t, n) =>
        (0, i.r)(() => {
            e((e) => ({ editStateIdsForGroup: { ...e.editStateIdsForGroup, [t]: n(e.editStateIdsForGroup[t]) } }));
        }),
}));

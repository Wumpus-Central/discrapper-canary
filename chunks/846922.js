l.d(t, { h: () => r, y: () => s });
var a,
    i = l(353640),
    n = l(121894),
    r =
        (((a = {})[(a.ALL_CHANNELS_ACCESS = 0)] = "ALL_CHANNELS_ACCESS"),
        (a[(a.SOME_CHANNELS_ACCESS = 1)] = "SOME_CHANNELS_ACCESS"),
        a);
let s = (0, i.v)((e) => ({
    listings: {},
    setListing: (t, l) => (0, n.r)(() => e((e) => ({ listings: { ...e.listings, [t]: l(e.listings[t]) } }))),
    editStateIdsForGroup: {},
    setEditStateIdsForGroup: (t, l) =>
        (0, n.r)(() => {
            e((e) => ({ editStateIdsForGroup: { ...e.editStateIdsForGroup, [t]: l(e.editStateIdsForGroup[t]) } }));
        }),
}));

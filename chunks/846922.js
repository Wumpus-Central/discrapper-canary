l.d(t, { h: () => s, y: () => r });
var i,
    a = l(353640),
    n = l(121894),
    s =
        (((i = {})[(i.ALL_CHANNELS_ACCESS = 0)] = "ALL_CHANNELS_ACCESS"),
        (i[(i.SOME_CHANNELS_ACCESS = 1)] = "SOME_CHANNELS_ACCESS"),
        i);
let r = (0, a.v)((e) => ({
    listings: {},
    setListing: (t, l) => (0, n.r)(() => e((e) => ({ listings: { ...e.listings, [t]: l(e.listings[t]) } }))),
    editStateIdsForGroup: {},
    setEditStateIdsForGroup: (t, l) =>
        (0, n.r)(() => {
            e((e) => ({ editStateIdsForGroup: { ...e.editStateIdsForGroup, [t]: l(e.editStateIdsForGroup[t]) } }));
        }),
}));

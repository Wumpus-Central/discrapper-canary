l.d(t, { h: () => s, y: () => n });
var i,
    r = l(353640),
    a = l(121894),
    s =
        (((i = {})[(i.ALL_CHANNELS_ACCESS = 0)] = "ALL_CHANNELS_ACCESS"),
        (i[(i.SOME_CHANNELS_ACCESS = 1)] = "SOME_CHANNELS_ACCESS"),
        i);
let n = (0, r.v)((e) => ({
    listings: {},
    setListing: (t, l) => (0, a.r)(() => e((e) => ({ listings: { ...e.listings, [t]: l(e.listings[t]) } }))),
    editStateIdsForGroup: {},
    setEditStateIdsForGroup: (t, l) =>
        (0, a.r)(() => {
            e((e) => ({ editStateIdsForGroup: { ...e.editStateIdsForGroup, [t]: l(e.editStateIdsForGroup[t]) } }));
        }),
}));

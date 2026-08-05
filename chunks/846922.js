l.d(t, { h: () => r, y: () => s });
var n,
    i = l(196765),
    a = l(121894),
    r =
        (((n = {})[(n.ALL_CHANNELS_ACCESS = 0)] = "ALL_CHANNELS_ACCESS"),
        (n[(n.SOME_CHANNELS_ACCESS = 1)] = "SOME_CHANNELS_ACCESS"),
        n);
let s = (0, i.v)((e) => ({
    listings: {},
    setListing: (t, l) => (0, a.r)(() => e((e) => ({ listings: { ...e.listings, [t]: l(e.listings[t]) } }))),
    editStateIdsForGroup: {},
    setEditStateIdsForGroup: (t, l) =>
        (0, a.r)(() => {
            e((e) => ({ editStateIdsForGroup: { ...e.editStateIdsForGroup, [t]: l(e.editStateIdsForGroup[t]) } }));
        }),
}));

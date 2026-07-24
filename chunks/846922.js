"use strict";
n.d(t, { h: () => s, y: () => l });
var i,
    r = n(353640),
    a = n(121894),
    s =
        (((i = {})[(i.ALL_CHANNELS_ACCESS = 0)] = "ALL_CHANNELS_ACCESS"),
        (i[(i.SOME_CHANNELS_ACCESS = 1)] = "SOME_CHANNELS_ACCESS"),
        i);
let l = (0, r.v)((e) => ({
    listings: {},
    setListing: (t, n) => (0, a.r)(() => e((e) => ({ listings: { ...e.listings, [t]: n(e.listings[t]) } }))),
    editStateIdsForGroup: {},
    setEditStateIdsForGroup: (t, n) =>
        (0, a.r)(() => {
            e((e) => ({ editStateIdsForGroup: { ...e.editStateIdsForGroup, [t]: n(e.editStateIdsForGroup[t]) } }));
        }),
}));

"use strict";
n.d(t, { h: () => a, y: () => s });
var r = n(353640),
    i = n(121894),
    a = (function (e) {
        return (
            (e[(e.ALL_CHANNELS_ACCESS = 0)] = "ALL_CHANNELS_ACCESS"),
            (e[(e.SOME_CHANNELS_ACCESS = 1)] = "SOME_CHANNELS_ACCESS"),
            e
        );
    })({});
let s = (0, r.v)((e) => ({
    listings: {},
    setListing: (t, n) => (0, i.r)(() => e((e) => ({ listings: { ...e.listings, [t]: n(e.listings[t]) } }))),
    editStateIdsForGroup: {},
    setEditStateIdsForGroup: (t, n) =>
        (0, i.r)(() => {
            e((e) => ({ editStateIdsForGroup: { ...e.editStateIdsForGroup, [t]: n(e.editStateIdsForGroup[t]) } }));
        }),
}));

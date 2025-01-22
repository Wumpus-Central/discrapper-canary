n.d(t, {
    I: function () {
        return r;
    },
    n: function () {
        return s;
    }
});
var i,
    r,
    l = n(15729),
    o = n(731965);
((i = r || (r = {}))[(i.ALL_CHANNELS_ACCESS = 0)] = 'ALL_CHANNELS_ACCESS'), (i[(i.SOME_CHANNELS_ACCESS = 1)] = 'SOME_CHANNELS_ACCESS');
let s = (0, l.U)((e) => ({
    listings: {},
    setListing: (t, n) =>
        (0, o.j)(() =>
            e((e) => ({
                listings: {
                    ...e.listings,
                    [t]: n(e.listings[t])
                }
            }))
        ),
    editStateIdsForGroup: {},
    setEditStateIdsForGroup: (t, n) =>
        (0, o.j)(() => {
            e((e) => ({
                editStateIdsForGroup: {
                    ...e.editStateIdsForGroup,
                    [t]: n(e.editStateIdsForGroup[t])
                }
            }));
        })
}));

n.d(t, {
    I: () => s,
    n: () => a
});
var i,
    l = n(15729),
    r = n(731965),
    s = (((i = {})[(i.ALL_CHANNELS_ACCESS = 0)] = 'ALL_CHANNELS_ACCESS'), (i[(i.SOME_CHANNELS_ACCESS = 1)] = 'SOME_CHANNELS_ACCESS'), i);
let a = (0, l.U)((e) => ({
    listings: {},
    setListing: (t, n) =>
        (0, r.j)(() =>
            e((e) => ({
                listings: {
                    ...e.listings,
                    [t]: n(e.listings[t])
                }
            }))
        ),
    editStateIdsForGroup: {},
    setEditStateIdsForGroup: (t, n) =>
        (0, r.j)(() => {
            e((e) => ({
                editStateIdsForGroup: {
                    ...e.editStateIdsForGroup,
                    [t]: n(e.editStateIdsForGroup[t])
                }
            }));
        })
}));

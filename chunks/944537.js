e.d(n, {
    I: function () {
        return r;
    },
    n: function () {
        return o;
    }
});
var i,
    r,
    l = e(15729),
    u = e(731965);
((i = r || (r = {}))[(i.ALL_CHANNELS_ACCESS = 0)] = 'ALL_CHANNELS_ACCESS'), (i[(i.SOME_CHANNELS_ACCESS = 1)] = 'SOME_CHANNELS_ACCESS');
let o = (0, l.U)((t) => ({
    listings: {},
    setListing: (n, e) =>
        (0, u.j)(() =>
            t((t) => ({
                listings: {
                    ...t.listings,
                    [n]: e(t.listings[n])
                }
            }))
        ),
    editStateIdsForGroup: {},
    setEditStateIdsForGroup: (n, e) =>
        (0, u.j)(() => {
            t((t) => ({
                editStateIdsForGroup: {
                    ...t.editStateIdsForGroup,
                    [n]: e(t.editStateIdsForGroup[n])
                }
            }));
        })
}));

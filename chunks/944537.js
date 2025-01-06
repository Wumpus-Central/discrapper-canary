n.d(e, {
    I: function () {
        return r;
    },
    n: function () {
        return u;
    }
});
var i,
    r,
    l = n(15729),
    o = n(731965);
((i = r || (r = {}))[(i.ALL_CHANNELS_ACCESS = 0)] = 'ALL_CHANNELS_ACCESS'), (i[(i.SOME_CHANNELS_ACCESS = 1)] = 'SOME_CHANNELS_ACCESS');
let u = (0, l.U)((t) => ({
    listings: {},
    setListing: (e, n) =>
        (0, o.j)(() =>
            t((t) => ({
                listings: {
                    ...t.listings,
                    [e]: n(t.listings[e])
                }
            }))
        ),
    editStateIdsForGroup: {},
    setEditStateIdsForGroup: (e, n) =>
        (0, o.j)(() => {
            t((t) => ({
                editStateIdsForGroup: {
                    ...t.editStateIdsForGroup,
                    [e]: n(t.editStateIdsForGroup[e])
                }
            }));
        })
}));

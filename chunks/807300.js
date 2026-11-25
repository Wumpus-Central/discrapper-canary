var i = n(582128),
    s = n(855986),
    l = n(617617),
    r = n(956396);
let a = [];
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = (0, s.bG)([r.A], () => (e ? r.A.getPacks() : a), [e]),
                n = (0, s.bG)([l.A], () => (e ? l.A.frecencyWithoutFetchingLatest.pinnedEmojiPacks?.packIds : void 0), [
                    e,
                ]);
            return i.useMemo(
                () =>
                    e && null != n && 0 !== n.length
                        ? n.map((e) => t.find((t) => t.id === e)).filter((e) => null != e)
                        : a,
                [e, t, n],
            );
        },
    },
);

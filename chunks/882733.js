var i = n(46653);
n.d(
    t,
    {},
    {
        k: function (e) {
            let t = i.default.getId();
            return null != t && !!(e.removedMemberIds?.includes(t) || e.addedMembers?.some((e) => e.userId === t));
        },
    },
);

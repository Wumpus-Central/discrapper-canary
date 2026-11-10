t.d(
    l,
    {},
    {
        A: function (n) {
            let { memberCount: l, maxMembers: t } = n;
            return null != l && null != t && l >= t;
        },
    },
);

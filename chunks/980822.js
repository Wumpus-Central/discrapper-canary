var l = t(582128),
    u = t(429913),
    a = t(454908);
t.d(
    e,
    {},
    {
        A: function (n) {
            let { applicationId: e, gameId: t } = n,
                i = (0, u.h)(null == t ? e : void 0),
                r = null == t && null != e && null == i,
                o = l.useMemo(() => (null != t ? t : null == i ? null : i.getCanonicalGameId()), [t, i]),
                { data: c, isLoading: s } = (0, a.I)(o);
            return { gameId: o, gameRecord: c ?? null, isLoading: r || s };
        },
    },
);

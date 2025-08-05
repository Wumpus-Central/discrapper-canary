(r.d(t, {
    H: () => f,
    Z: () => h
}),
    r(388685),
    r(539854),
    r(290780));
var n = r(255367),
    l = r(73800),
    a = r(481060),
    i = r(594174),
    u = r(5192),
    s = r(738018),
    o = r(607802),
    c = r(532428);
function d(e) {
    let { user: t, guildId: r, channelId: n } = e,
        l = u.ZP.getName(r, n, t);
    return {
        value: t.id,
        label: l,
        key: t.id
    };
}
function f(e, t) {
    let r = l.useMemo(() => (0, o.s5)(e), [e]),
        n = l.useMemo(() => (0, o.AH)(e), [e]),
        [a, u] = l.useState([]),
        [f, h] = l.useState(''),
        p = l.useMemo(() => {
            let l = s.Z.getFilterResults(e, t, f);
            if (0 === l.length) return [];
            let u = [],
                o = l.map((e) =>
                    d({
                        user: e.user,
                        guildId: r,
                        channelId: n
                    })
                ),
                c = new Set(o.map((e) => (null == e ? void 0 : e.value)));
            return (
                u.push(...o),
                a.length > 0 &&
                    a.forEach((e) => {
                        if (c.has(e)) return;
                        let t = i.default.getUser(e);
                        if (null == t) return;
                        let l = d({
                            user: t,
                            guildId: r,
                            channelId: n
                        });
                        u.unshift(l);
                    }),
                u
            );
        }, [e, t, f, a, r, n]),
        g = l.useCallback(() => {
            (u([]), h(''));
        }, []),
        b = l.useCallback(
            (e) => {
                if (0 === a.length) return null;
                let t = c.ZP[e];
                return a
                    .map((e) => {
                        let r = i.default.getUser(e);
                        return ''.concat(t.key, ' ').concat(null == r ? void 0 : r.username);
                    })
                    .join(' ');
            },
            [a]
        );
    return {
        options: p,
        query: a,
        setQuery: u,
        setQueryString: h,
        handleClearFilter: g,
        getApplyQueryString: b
    };
}
function h(e) {
    return {
        filter: !1,
        closeOnSelect: !1,
        renderOptionPrefix: l.useCallback(
            (t) => {
                var r;
                if (null == t) return;
                let l = i.default.getUser(t.value);
                if (null == l) return;
                let u = null != (r = l.getAvatarURL(e, 80)) ? r : l.avatar;
                return (0, n.jsx)(a.qEK, {
                    src: u,
                    size: a.EFr.SIZE_16,
                    'aria-hidden': !0
                });
            },
            [e]
        ),
        renderOptionSuffix: l.useCallback((e) => {
            if (null == e) return;
            let t = i.default.getUser(e.value);
            if (null != t)
                return (0, n.jsx)(a.Text, {
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    children: t.username
                });
        }, [])
    };
}

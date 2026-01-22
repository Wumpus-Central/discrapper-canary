n.d(t, {
    K: () => h,
}),
    n(733351),
    n(591487),
    n(727858),
    n(747238);
var r = n(64700),
    l = n(311907),
    i = n(39255),
    a = n(696451),
    s = n(317525),
    o = n(695184),
    c = n(257120),
    u = n(495273),
    d = n(737045);

function f(e) {
    let t = e.trim();
    return "@" === t[0] ? t.slice(1) : t;
}

function p(e, t) {
    let n = f(e);
    return RegExp("".concat(c.A.escape(n)), "i").test(t);
}

function h(e, t, n, c) {
    let h = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null != t && t.isGuildStageVoice(),
        b = (0, l.bG)([s.A], () => (null != e ? s.A.getSortedRoles(e.id) : [])),
        g = (0, l.yK)([a.Ay], () => (null != e ? a.Ay.getMemberIds(e.id) : [])),
        m = r.useMemo(() => {
            if (null == e || "@" === c[0]) return [];
            if (h) return u.M2(e, b, null != t ? t : null, n, (e) => p(c, e));
            let r = u.rT(e, b, null != t ? t : null, n, (e) => p(c, e));
            return 0 === r.length && "" === c.trim() && 1 === b.length && (r = u.Vl()), r;
        }, [b, c, e, t, n, h]),
        A = r.useMemo(() => (null == e ? [] : u.Lq(g, null != t ? t : null, e, n, (e) => p(c, e))), [g, c, e, t, n]);
    return (
        r.useEffect(() => {
            null != e && o.A.requestMembers(e.id, f(c), d.$N);
        }, [c, e]),
        {
            roles: m,
            members: A,
            getRichTag: r.useCallback((e) => {
                let t = null;
                return (
                    e.rowType === d.T6.ROLE || e.rowType === d.T6.ADMINISTRATOR
                        ? (t = {
                              type: i._.ROLE,
                              label: e.name,
                              color: e.colorString,
                          })
                        : (e.rowType === d.T6.MEMBER || e.rowType === d.T6.OWNER) &&
                          (t = {
                              type: i._.MEMBER,
                              label: e.name,
                              avatar: e.avatarURL,
                          }),
                    t
                );
            }, []),
        }
    );
}

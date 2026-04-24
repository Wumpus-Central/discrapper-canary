n.d(t, { K: () => m });
var l = n(64700),
    r = n(17928),
    s = n(39255),
    o = n(696451),
    i = n(317525),
    a = n(695184),
    c = n(257120),
    u = n(495273),
    d = n(719366);
function x(e) {
    let t = e.trim();
    return "@" === t[0] ? t.slice(1) : t;
}
function h(e, t) {
    let n = x(e);
    return RegExp(`${c.A.escape(n)}`, "i").test(t);
}
function m(e, t, n, c) {
    let m = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null != t && t.isGuildStageVoice(),
        w = (0, r.bG)([i.A], () => (null != e ? i.A.getSortedRoles(e.id) : [])),
        g = (0, r.yK)([o.Ay], () => (null != e ? o.Ay.getMemberIds(e.id) : [])),
        E = l.useMemo(() => {
            if (null == e || "@" === c[0]) return [];
            if (m) return u.M2(e, w, t ?? null, n, (e) => h(c, e));
            let l = u.rT(e, w, t ?? null, n, (e) => h(c, e));
            return 0 === l.length && "" === c.trim() && 1 === w.length && (l = u.Vl()), l;
        }, [w, c, e, t, n, m]),
        R = l.useMemo(() => (null == e ? [] : u.Lq(g, t ?? null, e, n, (e) => h(c, e))), [g, c, e, t, n]);
    return (
        l.useEffect(() => {
            null != e && a.A.requestMembers(e.id, x(c), d.$N);
        }, [c, e]),
        {
            roles: E,
            members: R,
            getRichTag: l.useCallback((e) => {
                let t = null;
                return (
                    e.rowType === d.T6.ROLE || e.rowType === d.T6.ADMINISTRATOR
                        ? (t = { type: s._.ROLE, label: e.name, color: e.colorString })
                        : (e.rowType === d.T6.MEMBER || e.rowType === d.T6.OWNER) &&
                          (t = { type: s._.MEMBER, label: e.name, avatar: e.avatarURL }),
                    t
                );
            }, []),
        }
    );
}

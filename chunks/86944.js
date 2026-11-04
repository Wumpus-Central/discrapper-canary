var r = t(582128),
    n = t(855986),
    u = t(39255),
    i = t(696451),
    a = t(317525),
    o = t(695184),
    s = t(257120),
    c = t(495273),
    p = t(290261);
function d(e) {
    let l = e.trim();
    return "@" === l[0] ? l.slice(1) : l;
}
function T(e, l) {
    let t = d(e);
    return RegExp(`${s.A.escape(t)}`, "i").test(l);
}
t.d(
    l,
    {},
    {
        K: function (e, l, t, s) {
            let R = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null != l && l.isGuildStageVoice(),
                g = (0, n.bG)([a.A], () => (null != e ? a.A.getSortedRoles(e.id) : [])),
                M = (0, n.yK)([i.Ay], () => (null != e ? i.Ay.getMemberIds(e.id) : [])),
                h = r.useMemo(() => {
                    if (null == e || "@" === s[0]) return [];
                    if (R) return c.M2(e, g, l ?? null, t, (e) => T(s, e));
                    let r = c.rT(e, g, l ?? null, t, (e) => T(s, e));
                    return (0 === r.length && "" === s.trim() && 1 === g.length && (r = c.Vl()), r);
                }, [g, s, e, l, t, R]),
                y = r.useMemo(
                    () => (null == e ? [] : c.Lq(M, l ?? null, e, t, { filter: (e) => T(s, e) })),
                    [M, s, e, l, t],
                );
            return (
                r.useEffect(() => {
                    null != e && o.A.requestMembers(e.id, d(s), 20);
                }, [s, e]),
                {
                    roles: h,
                    members: y,
                    getRichTag: r.useCallback((e) => {
                        let l = null;
                        return (
                            e.rowType === p.T6.ROLE || e.rowType === p.T6.ADMINISTRATOR
                                ? (l = { type: u._.ROLE, label: e.name, color: e.colorString })
                                : (e.rowType === p.T6.MEMBER || e.rowType === p.T6.OWNER) &&
                                  (l = { type: u._.MEMBER, label: e.name, avatar: e.avatarURL }),
                            l
                        );
                    }, []),
                }
            );
        },
    },
);

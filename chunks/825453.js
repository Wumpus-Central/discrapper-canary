n.d(t, { A: () => j }), n(321073);
var i = n(64700),
    l = n(284009),
    s = n.n(l),
    a = n(735438),
    r = n.n(a),
    o = n(17928),
    d = n(282956),
    c = n(392054),
    u = n(168186),
    m = n(734057),
    g = n(317525),
    h = n(71393),
    x = n(576705),
    p = n(287809),
    A = n(403362),
    b = n(803378),
    f = n(200662),
    _ = n(652215);
function j(e, t, n) {
    let l = (0, o.bG)([b.A], () => b.A.getApplicationPermissions()),
        a = i.useMemo(() => {
            var t;
            let n, i, s, a;
            return (
                (t = e),
                (n = { ...(l ?? {}) }),
                (i = (0, u.Ap)(t)),
                (s = (0, f.Eu)(i, c.RA.CHANNEL)),
                (a = (0, f.Eu)(t, c.RA.ROLE)) in n || (n[a] = { id: t, permission: !0, type: c.RA.ROLE }),
                s in n || (n[s] = { id: i, permission: !0, type: c.RA.CHANNEL }),
                n
            );
        }, [l, e]),
        j = (0, o.bG)([b.A], () => {
            if (null == n) return;
            let e = b.A.getCommand(n);
            return e?.permissions ?? {};
        }, [n]),
        N = (0, o.bG)([b.A], () => (null == n ? b.A.getEditedApplication() : b.A.getEditedCommand()?.permissions), [n]),
        v = n ?? t,
        E = null != n ? j : a,
        C = i.useMemo(() => N ?? { ...(E ?? {}) }, [N, E]),
        I = i.useMemo(() => Object.keys(C).length, [C]),
        T = i.useMemo(() => (null == E || null == C ? null : !r().isEqual(E, C)), [E, C]);
    return (
        i.useEffect(() => {
            v === t && (T ? d.A.startEditingCommandPermissions(v) : d.A.stopEditingCommandPermissions(v));
        }, [t, T, v]),
        {
            originalApplicationPermissions: a,
            originalCommandPermissions: j,
            editedTargetPermissions: (function (e, t) {
                let n = (0, o.bG)([h.A], () => h.A.getGuild(e), [e]);
                s()(null != n, "guild must be present to be editing its integration settings");
                let l = (0, o.bG)([x.A], () => x.A.getHighestRole(n), [n]),
                    a = (0, o.bG)([p.default], () => p.default.getCurrentUser()?.id);
                s()(null != a, "useComputePermissions: currentUserId must not be null");
                let r = a === n.ownerId,
                    {
                        channelIds: d,
                        roleIds: b,
                        userIds: f,
                    } = i.useMemo(() => {
                        let e = [],
                            n = [],
                            i = [];
                        for (let l of Object.values(t))
                            l.type === c.RA.CHANNEL
                                ? e.push(l.id)
                                : l.type === c.RA.ROLE
                                  ? n.push(l.id)
                                  : l.type === c.RA.USER && i.push(l.id);
                        return { channelIds: e, roleIds: n, userIds: i };
                    }, [t]),
                    j = (0, o.cf)(
                        [m.A],
                        () =>
                            Object.fromEntries(
                                d
                                    .map(m.A.getChannel)
                                    .filter(A.Vq)
                                    .map((e) => [e.id, e]),
                            ),
                        [d],
                    ),
                    N = (0, o.cf)(
                        [g.A],
                        () =>
                            Object.fromEntries(
                                b
                                    .map((t) => g.A.getRole(e, t))
                                    .filter(A.Vq)
                                    .map((e) => [e.id, e]),
                            ),
                        [b, e],
                    ),
                    v = (0, o.cf)(
                        [p.default],
                        () =>
                            Object.fromEntries(
                                f
                                    .map(p.default.getUser)
                                    .filter(A.Vq)
                                    .map((e) => [e.id, e]),
                            ),
                        [f],
                    );
                return i.useMemo(() => {
                    let e = n.id,
                        i = (0, u.Ap)(n.id),
                        s = {};
                    for (let [a, o] of Object.entries(t)) {
                        let t = !1,
                            d = !1;
                        if (o.type === c.RA.CHANNEL) {
                            let e = o.id === i,
                                n = j[o.id];
                            (t = e || x.A.can(_.xBc.VIEW_CHANNEL, n)), (d = !0);
                        } else if (o.type === c.RA.ROLE) {
                            let i = o.id === e,
                                s = N[o.id];
                            (t = i || null != s), (d = r || i || x.A.isRoleHigher(n, l, s));
                        } else if (o.type === c.RA.USER) {
                            let e = v[o.id];
                            (t = null != e),
                                (d = null != e && (r || x.A.canManageUser(_.xBc.USE_APPLICATION_COMMANDS, e, n)));
                        }
                        s[a] = { ...o, canRead: t, canWrite: d };
                    }
                    return s;
                }, [j, n, l, r, t, N, v]);
            })(e, C),
            hasChanges: T,
            selectedPermissionCount: I,
        }
    );
}

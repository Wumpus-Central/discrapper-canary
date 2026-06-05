n.d(t, { A: () => N }), n(321073);
var i = n(64700),
    l = n(284009),
    s = n.n(l),
    a = n(735438),
    r = n.n(a),
    o = n(17928),
    c = n(282956),
    d = n(392054),
    u = n(168186),
    m = n(734057),
    g = n(317525),
    h = n(71393),
    x = n(576705),
    A = n(287809),
    p = n(403362),
    b = n(803378),
    f = n(200662),
    j = n(652215);
function N(e, t, n) {
    let l = (0, o.bG)([b.A], () => b.A.getApplicationPermissions()),
        a = i.useMemo(() => {
            var t;
            let n, i, s, a;
            return (
                (t = e),
                (n = { ...(l ?? {}) }),
                (i = (0, u.Ap)(t)),
                (s = (0, f.Eu)(i, d.RA.CHANNEL)),
                (a = (0, f.Eu)(t, d.RA.ROLE)) in n || (n[a] = { id: t, permission: !0, type: d.RA.ROLE }),
                s in n || (n[s] = { id: i, permission: !0, type: d.RA.CHANNEL }),
                n
            );
        }, [l, e]),
        N = (0, o.bG)([b.A], () => {
            if (null == n) return;
            let e = b.A.getCommand(n);
            return e?.permissions ?? {};
        }, [n]),
        E = (0, o.bG)([b.A], () => (null == n ? b.A.getEditedApplication() : b.A.getEditedCommand()?.permissions), [n]),
        C = n ?? t,
        v = null != n ? N : a,
        T = i.useMemo(() => E ?? { ...(v ?? {}) }, [E, v]),
        I = i.useMemo(() => Object.keys(T).length, [T]),
        S = i.useMemo(() => (null == v || null == T ? null : !r().isEqual(v, T)), [v, T]);
    return (
        i.useEffect(() => {
            C === t && (S ? c.A.startEditingCommandPermissions(C) : c.A.stopEditingCommandPermissions(C));
        }, [t, S, C]),
        {
            originalApplicationPermissions: a,
            originalCommandPermissions: N,
            editedTargetPermissions: (function (e, t) {
                let n = (0, o.bG)([h.A], () => h.A.getGuild(e), [e]);
                s()(null != n, "guild must be present to be editing its integration settings");
                let l = (0, o.bG)([x.A], () => x.A.getHighestRole(n), [n]),
                    a = (0, o.bG)([A.default], () => A.default.getCurrentUser()?.id);
                s()(null != a, "useComputePermissions: currentUserId must not be null");
                let r = a === n.ownerId,
                    {
                        channelIds: c,
                        roleIds: b,
                        userIds: f,
                    } = i.useMemo(() => {
                        let e = [],
                            n = [],
                            i = [];
                        for (let l of Object.values(t))
                            switch (l.type) {
                                case d.RA.CHANNEL:
                                    e.push(l.id);
                                    break;
                                case d.RA.ROLE:
                                    n.push(l.id);
                                    break;
                                case d.RA.USER:
                                    i.push(l.id);
                                    break;
                                default:
                                    l.type;
                            }
                        return { channelIds: e, roleIds: n, userIds: i };
                    }, [t]),
                    N = (0, o.cf)(
                        [m.A],
                        () =>
                            Object.fromEntries(
                                c
                                    .map(m.A.getChannel)
                                    .filter(p.Vq)
                                    .map((e) => [e.id, e]),
                            ),
                        [c],
                    ),
                    E = (0, o.cf)(
                        [g.A],
                        () =>
                            Object.fromEntries(
                                b
                                    .map((t) => g.A.getRole(e, t))
                                    .filter(p.Vq)
                                    .map((e) => [e.id, e]),
                            ),
                        [b, e],
                    ),
                    C = (0, o.cf)(
                        [A.default],
                        () =>
                            Object.fromEntries(
                                f
                                    .map(A.default.getUser)
                                    .filter(p.Vq)
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
                            c = !1;
                        switch (o.type) {
                            case d.RA.CHANNEL: {
                                let e = o.id === i,
                                    n = N[o.id];
                                (t = e || x.A.can(j.xBc.VIEW_CHANNEL, n)), (c = !0);
                                break;
                            }
                            case d.RA.ROLE: {
                                let i = o.id === e,
                                    s = E[o.id];
                                (t = i || null != s), (c = r || i || x.A.isRoleHigher(n, l, s));
                                break;
                            }
                            case d.RA.USER: {
                                let e = C[o.id];
                                (t = null != e),
                                    (c = null != e && (r || x.A.canManageUser(j.xBc.USE_APPLICATION_COMMANDS, e, n)));
                                break;
                            }
                            default:
                                o.type;
                        }
                        s[a] = { ...o, canRead: t, canWrite: c };
                    }
                    return s;
                }, [N, n, l, r, t, E, C]);
            })(e, T),
            hasChanges: S,
            selectedPermissionCount: I,
        }
    );
}

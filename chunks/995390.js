n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(653041),
    n(47120);
var i = n(192379),
    l = n(512722),
    r = n.n(l),
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    d = n(139387),
    c = n(895924),
    u = n(581364),
    m = n(592125),
    h = n(430824),
    p = n(496675),
    g = n(594174),
    x = n(823379),
    f = n(905753),
    b = n(399860),
    v = n(981631);
function C(e, t, n) {
    let l = (0, s.e7)([f.Z], () => f.Z.getApplicationPermissions()),
        a = i.useMemo(
            () =>
                (function (e, t) {
                    let n = { ...t },
                        i = (0, u.bD)(e),
                        l = (0, b.rE)(i, c.Kw.CHANNEL),
                        r = (0, b.rE)(e, c.Kw.ROLE);
                    return (
                        !(r in n) &&
                            (n[r] = {
                                id: e,
                                permission: !0,
                                type: c.Kw.ROLE
                            }),
                        !(l in n) &&
                            (n[l] = {
                                id: i,
                                permission: !0,
                                type: c.Kw.CHANNEL
                            }),
                        n
                    );
                })(e, null != l ? l : {}),
            [l, e]
        ),
        C = (0, s.e7)(
            [f.Z],
            () => {
                var e;
                if (null == n) return;
                let t = f.Z.getCommand(n);
                return null !== (e = null == t ? void 0 : t.permissions) && void 0 !== e ? e : {};
            },
            [n]
        ),
        N = (0, s.e7)(
            [f.Z],
            () => {
                var e;
                return null == n ? f.Z.getEditedApplication() : null === (e = f.Z.getEditedCommand()) || void 0 === e ? void 0 : e.permissions;
            },
            [n]
        ),
        I = null != n ? n : t,
        j = null != n ? C : a,
        T = i.useMemo(() => (null != N ? N : { ...(null != j ? j : {}) }), [N, j]),
        _ = i.useMemo(() => Object.keys(T).length, [T]),
        Z = i.useMemo(() => (null == j || null == T ? null : !o().isEqual(j, T)), [j, T]);
    return (
        i.useEffect(() => {
            if (I === t) Z ? d.Z.startEditingCommandPermissions(I) : d.Z.stopEditingCommandPermissions(I);
        }, [t, Z, I]),
        {
            originalApplicationPermissions: a,
            originalCommandPermissions: C,
            editedTargetPermissions: (function (e, t) {
                let n = (0, s.e7)([h.Z], () => h.Z.getGuild(e), [e]);
                r()(null != n, 'guild must be present to be editing its integration settings');
                let l = (0, s.e7)([p.Z], () => p.Z.getHighestRole(n), [n]),
                    a = (0, s.e7)([g.default], () => {
                        var e;
                        return null === (e = g.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
                    });
                r()(null != a, 'useComputePermissions: currentUserId must not be null');
                let o = a === n.ownerId,
                    {
                        channelIds: d,
                        roleIds: f,
                        userIds: b
                    } = i.useMemo(() => {
                        let e = [],
                            n = [],
                            i = [];
                        for (let l of Object.values(t)) l.type === c.Kw.CHANNEL ? e.push(l.id) : l.type === c.Kw.ROLE ? n.push(l.id) : l.type === c.Kw.USER && i.push(l.id);
                        return {
                            channelIds: e,
                            roleIds: n,
                            userIds: i
                        };
                    }, [t]),
                    C = (0, s.cj)(
                        [m.Z],
                        () =>
                            Object.fromEntries(
                                d
                                    .map(m.Z.getChannel)
                                    .filter(x.lm)
                                    .map((e) => [e.id, e])
                            ),
                        [d]
                    ),
                    N = (0, s.cj)(
                        [h.Z],
                        () =>
                            Object.fromEntries(
                                f
                                    .map((t) => h.Z.getRole(e, t))
                                    .filter(x.lm)
                                    .map((e) => [e.id, e])
                            ),
                        [f, e]
                    ),
                    I = (0, s.cj)(
                        [g.default],
                        () =>
                            Object.fromEntries(
                                b
                                    .map(g.default.getUser)
                                    .filter(x.lm)
                                    .map((e) => [e.id, e])
                            ),
                        [b]
                    );
                return i.useMemo(() => {
                    let e = n.id,
                        i = (0, u.bD)(n.id),
                        r = {};
                    for (let [a, s] of Object.entries(t)) {
                        let t = !1,
                            d = !1;
                        if (s.type === c.Kw.CHANNEL) {
                            let e = s.id === i,
                                n = C[s.id];
                            (t = e || p.Z.can(v.Plq.VIEW_CHANNEL, n)), (d = !0);
                        } else if (s.type === c.Kw.ROLE) {
                            let i = s.id === e,
                                r = N[s.id];
                            (t = i || null != r), (d = o || i || p.Z.isRoleHigher(n, l, r));
                        } else if (s.type === c.Kw.USER) {
                            let e = I[s.id];
                            (t = null != e), (d = null != e && (o || p.Z.canManageUser(v.Plq.USE_APPLICATION_COMMANDS, e, n)));
                        }
                        r[a] = {
                            ...s,
                            canRead: t,
                            canWrite: d
                        };
                    }
                    return r;
                }, [C, n, l, o, t, N, I]);
            })(e, T),
            hasChanges: Z,
            selectedPermissionCount: _
        }
    );
}

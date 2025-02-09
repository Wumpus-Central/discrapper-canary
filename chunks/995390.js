n.d(t, { Z: () => v }), n(653041), n(47120);
var i = n(192379),
    l = n(512722),
    a = n.n(l),
    r = n(392711),
    s = n.n(r),
    o = n(442837),
    d = n(139387),
    c = n(895924),
    u = n(581364),
    m = n(592125),
    h = n(430824),
    x = n(496675),
    g = n(594174),
    p = n(823379),
    b = n(905753),
    _ = n(399860),
    f = n(981631);
function v(e, t, n) {
    let l = (0, o.e7)([b.Z], () => b.Z.getApplicationPermissions()),
        r = i.useMemo(
            () =>
                (function (e, t) {
                    let n = { ...t },
                        i = (0, u.bD)(e),
                        l = (0, _.rE)(i, c.Kw.CHANNEL),
                        a = (0, _.rE)(e, c.Kw.ROLE);
                    return (
                        a in n ||
                            (n[a] = {
                                id: e,
                                permission: !0,
                                type: c.Kw.ROLE
                            }),
                        l in n ||
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
        v = (0, o.e7)(
            [b.Z],
            () => {
                var e;
                if (null == n) return;
                let t = b.Z.getCommand(n);
                return null !== (e = null == t ? void 0 : t.permissions) && void 0 !== e ? e : {};
            },
            [n]
        ),
        C = (0, o.e7)(
            [b.Z],
            () => {
                var e;
                return null == n ? b.Z.getEditedApplication() : null === (e = b.Z.getEditedCommand()) || void 0 === e ? void 0 : e.permissions;
            },
            [n]
        ),
        j = null != n ? n : t,
        N = null != n ? v : r,
        I = i.useMemo(() => (null != C ? C : { ...(null != N ? N : {}) }), [C, N]),
        Z = i.useMemo(() => Object.keys(I).length, [I]),
        T = i.useMemo(() => (null == N || null == I ? null : !s().isEqual(N, I)), [N, I]);
    return (
        i.useEffect(() => {
            j === t && (T ? d.Z.startEditingCommandPermissions(j) : d.Z.stopEditingCommandPermissions(j));
        }, [t, T, j]),
        {
            originalApplicationPermissions: r,
            originalCommandPermissions: v,
            editedTargetPermissions: (function (e, t) {
                let n = (0, o.e7)([h.Z], () => h.Z.getGuild(e), [e]);
                a()(null != n, 'guild must be present to be editing its integration settings');
                let l = (0, o.e7)([x.Z], () => x.Z.getHighestRole(n), [n]),
                    r = (0, o.e7)([g.default], () => {
                        var e;
                        return null === (e = g.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
                    });
                a()(null != r, 'useComputePermissions: currentUserId must not be null');
                let s = r === n.ownerId,
                    {
                        channelIds: d,
                        roleIds: b,
                        userIds: _
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
                    v = (0, o.cj)(
                        [m.Z],
                        () =>
                            Object.fromEntries(
                                d
                                    .map(m.Z.getChannel)
                                    .filter(p.lm)
                                    .map((e) => [e.id, e])
                            ),
                        [d]
                    ),
                    C = (0, o.cj)(
                        [h.Z],
                        () =>
                            Object.fromEntries(
                                b
                                    .map((t) => h.Z.getRole(e, t))
                                    .filter(p.lm)
                                    .map((e) => [e.id, e])
                            ),
                        [b, e]
                    ),
                    j = (0, o.cj)(
                        [g.default],
                        () =>
                            Object.fromEntries(
                                _.map(g.default.getUser)
                                    .filter(p.lm)
                                    .map((e) => [e.id, e])
                            ),
                        [_]
                    );
                return i.useMemo(() => {
                    let e = n.id,
                        i = (0, u.bD)(n.id),
                        a = {};
                    for (let [r, o] of Object.entries(t)) {
                        let t = !1,
                            d = !1;
                        if (o.type === c.Kw.CHANNEL) {
                            let e = o.id === i,
                                n = v[o.id];
                            (t = e || x.Z.can(f.Plq.VIEW_CHANNEL, n)), (d = !0);
                        } else if (o.type === c.Kw.ROLE) {
                            let i = o.id === e,
                                a = C[o.id];
                            (t = i || null != a), (d = s || i || x.Z.isRoleHigher(n, l, a));
                        } else if (o.type === c.Kw.USER) {
                            let e = j[o.id];
                            (t = null != e), (d = null != e && (s || x.Z.canManageUser(f.Plq.USE_APPLICATION_COMMANDS, e, n)));
                        }
                        a[r] = {
                            ...o,
                            canRead: t,
                            canWrite: d
                        };
                    }
                    return a;
                }, [v, n, l, s, t, C, j]);
            })(e, I),
            hasChanges: T,
            selectedPermissionCount: Z
        }
    );
}

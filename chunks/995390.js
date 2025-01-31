n.d(t, { Z: () => _ }), n(653041), n(47120);
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
    p = n(594174),
    g = n(823379),
    f = n(905753),
    b = n(399860),
    v = n(981631);
function _(e, t, n) {
    let l = (0, o.e7)([f.Z], () => f.Z.getApplicationPermissions()),
        r = i.useMemo(
            () =>
                (function (e, t) {
                    let n = { ...t },
                        i = (0, u.bD)(e),
                        l = (0, b.rE)(i, c.Kw.CHANNEL),
                        a = (0, b.rE)(e, c.Kw.ROLE);
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
        _ = (0, o.e7)(
            [f.Z],
            () => {
                var e;
                if (null == n) return;
                let t = f.Z.getCommand(n);
                return null !== (e = null == t ? void 0 : t.permissions) && void 0 !== e ? e : {};
            },
            [n]
        ),
        j = (0, o.e7)(
            [f.Z],
            () => {
                var e;
                return null == n ? f.Z.getEditedApplication() : null === (e = f.Z.getEditedCommand()) || void 0 === e ? void 0 : e.permissions;
            },
            [n]
        ),
        N = null != n ? n : t,
        C = null != n ? _ : r,
        I = i.useMemo(() => (null != j ? j : { ...(null != C ? C : {}) }), [j, C]),
        Z = i.useMemo(() => Object.keys(I).length, [I]),
        T = i.useMemo(() => (null == C || null == I ? null : !s().isEqual(C, I)), [C, I]);
    return (
        i.useEffect(() => {
            N === t && (T ? d.Z.startEditingCommandPermissions(N) : d.Z.stopEditingCommandPermissions(N));
        }, [t, T, N]),
        {
            originalApplicationPermissions: r,
            originalCommandPermissions: _,
            editedTargetPermissions: (function (e, t) {
                let n = (0, o.e7)([h.Z], () => h.Z.getGuild(e), [e]);
                a()(null != n, 'guild must be present to be editing its integration settings');
                let l = (0, o.e7)([x.Z], () => x.Z.getHighestRole(n), [n]),
                    r = (0, o.e7)([p.default], () => {
                        var e;
                        return null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
                    });
                a()(null != r, 'useComputePermissions: currentUserId must not be null');
                let s = r === n.ownerId,
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
                    _ = (0, o.cj)(
                        [m.Z],
                        () =>
                            Object.fromEntries(
                                d
                                    .map(m.Z.getChannel)
                                    .filter(g.lm)
                                    .map((e) => [e.id, e])
                            ),
                        [d]
                    ),
                    j = (0, o.cj)(
                        [h.Z],
                        () =>
                            Object.fromEntries(
                                f
                                    .map((t) => h.Z.getRole(e, t))
                                    .filter(g.lm)
                                    .map((e) => [e.id, e])
                            ),
                        [f, e]
                    ),
                    N = (0, o.cj)(
                        [p.default],
                        () =>
                            Object.fromEntries(
                                b
                                    .map(p.default.getUser)
                                    .filter(g.lm)
                                    .map((e) => [e.id, e])
                            ),
                        [b]
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
                                n = _[o.id];
                            (t = e || x.Z.can(v.Plq.VIEW_CHANNEL, n)), (d = !0);
                        } else if (o.type === c.Kw.ROLE) {
                            let i = o.id === e,
                                a = j[o.id];
                            (t = i || null != a), (d = s || i || x.Z.isRoleHigher(n, l, a));
                        } else if (o.type === c.Kw.USER) {
                            let e = N[o.id];
                            (t = null != e), (d = null != e && (s || x.Z.canManageUser(v.Plq.USE_APPLICATION_COMMANDS, e, n)));
                        }
                        a[r] = {
                            ...o,
                            canRead: t,
                            canWrite: d
                        };
                    }
                    return a;
                }, [_, n, l, s, t, j, N]);
            })(e, I),
            hasChanges: T,
            selectedPermissionCount: Z
        }
    );
}

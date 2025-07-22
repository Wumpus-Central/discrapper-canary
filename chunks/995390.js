(n.d(t, { Z: () => y }), n(539854), n(388685), n(467055));
var r = n(73800),
    i = n(512722),
    l = n.n(i),
    o = n(392711),
    a = n.n(o),
    s = n(442837),
    c = n(139387),
    d = n(895924),
    u = n(581364),
    p = n(592125),
    m = n(485386),
    b = n(430824),
    g = n(496675),
    f = n(594174),
    h = n(823379),
    x = n(905753),
    j = n(399860),
    O = n(981631);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function y(e, t, n) {
    let i = (0, s.e7)([x.Z], () => x.Z.getApplicationPermissions()),
        o = r.useMemo(
            () =>
                (function (e, t) {
                    let n = v({}, t),
                        r = (0, u.bD)(e),
                        i = (0, j.rE)(r, d.Kw.CHANNEL),
                        l = (0, j.rE)(e, d.Kw.ROLE);
                    return (
                        l in n ||
                            (n[l] = {
                                id: e,
                                permission: !0,
                                type: d.Kw.ROLE
                            }),
                        i in n ||
                            (n[i] = {
                                id: r,
                                permission: !0,
                                type: d.Kw.CHANNEL
                            }),
                        n
                    );
                })(e, null != i ? i : {}),
            [i, e]
        ),
        y = (0, s.e7)(
            [x.Z],
            () => {
                var e;
                if (null == n) return;
                let t = x.Z.getCommand(n);
                return null != (e = null == t ? void 0 : t.permissions) ? e : {};
            },
            [n]
        ),
        _ = (0, s.e7)(
            [x.Z],
            () => {
                var e;
                return null == n ? x.Z.getEditedApplication() : null == (e = x.Z.getEditedCommand()) ? void 0 : e.permissions;
            },
            [n]
        ),
        C = null != n ? n : t,
        N = null != n ? y : o,
        S = r.useMemo(() => (null != _ ? _ : v({}, null != N ? N : {})), [_, N]),
        I = r.useMemo(() => Object.keys(S).length, [S]),
        E = r.useMemo(() => (null == N || null == S ? null : !a().isEqual(N, S)), [N, S]);
    return (
        r.useEffect(() => {
            C === t && (E ? c.Z.startEditingCommandPermissions(C) : c.Z.stopEditingCommandPermissions(C));
        }, [t, E, C]),
        {
            originalApplicationPermissions: o,
            originalCommandPermissions: y,
            editedTargetPermissions: (function (e, t) {
                let n = (0, s.e7)([b.Z], () => b.Z.getGuild(e), [e]);
                l()(null != n, 'guild must be present to be editing its integration settings');
                let i = (0, s.e7)([g.Z], () => g.Z.getHighestRole(n), [n]),
                    o = (0, s.e7)([f.default], () => {
                        var e;
                        return null == (e = f.default.getCurrentUser()) ? void 0 : e.id;
                    });
                l()(null != o, 'useComputePermissions: currentUserId must not be null');
                let a = o === n.ownerId,
                    {
                        channelIds: c,
                        roleIds: x,
                        userIds: j
                    } = r.useMemo(() => {
                        let e = [],
                            n = [],
                            r = [];
                        for (let i of Object.values(t)) i.type === d.Kw.CHANNEL ? e.push(i.id) : i.type === d.Kw.ROLE ? n.push(i.id) : i.type === d.Kw.USER && r.push(i.id);
                        return {
                            channelIds: e,
                            roleIds: n,
                            userIds: r
                        };
                    }, [t]),
                    y = (0, s.cj)(
                        [p.Z],
                        () =>
                            Object.fromEntries(
                                c
                                    .map(p.Z.getChannel)
                                    .filter(h.lm)
                                    .map((e) => [e.id, e])
                            ),
                        [c]
                    ),
                    _ = (0, s.cj)(
                        [m.Z],
                        () =>
                            Object.fromEntries(
                                x
                                    .map((t) => m.Z.getRole(e, t))
                                    .filter(h.lm)
                                    .map((e) => [e.id, e])
                            ),
                        [x, e]
                    ),
                    C = (0, s.cj)(
                        [f.default],
                        () =>
                            Object.fromEntries(
                                j
                                    .map(f.default.getUser)
                                    .filter(h.lm)
                                    .map((e) => [e.id, e])
                            ),
                        [j]
                    );
                return r.useMemo(() => {
                    let e = n.id,
                        r = (0, u.bD)(n.id),
                        l = {};
                    for (let [o, s] of Object.entries(t)) {
                        let t = !1,
                            c = !1;
                        if (s.type === d.Kw.CHANNEL) {
                            let e = s.id === r,
                                n = y[s.id];
                            ((t = e || g.Z.can(O.Plq.VIEW_CHANNEL, n)), (c = !0));
                        } else if (s.type === d.Kw.ROLE) {
                            let r = s.id === e,
                                l = _[s.id];
                            ((t = r || null != l), (c = a || r || g.Z.isRoleHigher(n, i, l)));
                        } else if (s.type === d.Kw.USER) {
                            let e = C[s.id];
                            ((t = null != e), (c = null != e && (a || g.Z.canManageUser(O.Plq.USE_APPLICATION_COMMANDS, e, n))));
                        }
                        l[o] = (function (e, t) {
                            return (
                                (t = null != t ? t : {}),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(t)).forEach(function (n) {
                                          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                                      }),
                                e
                            );
                        })(v({}, s), {
                            canRead: t,
                            canWrite: c
                        });
                    }
                    return l;
                }, [y, n, i, a, t, _, C]);
            })(e, S),
            hasChanges: E,
            selectedPermissionCount: I
        }
    );
}

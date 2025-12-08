n.d(t, { Z: () => y }), n(539854), n(388685), n(467055);
var i = n(473749),
    r = n(512722),
    l = n.n(r),
    a = n(392711),
    o = n.n(a),
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
    v = n(981631);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function y(e, t, n) {
    let r = (0, s.e7)([x.Z], () => x.Z.getApplicationPermissions()),
        a = i.useMemo(
            () =>
                (function (e, t) {
                    let n = O({}, t),
                        i = (0, u.bD)(e),
                        r = (0, j.rE)(i, d.Kw.CHANNEL),
                        l = (0, j.rE)(e, d.Kw.ROLE);
                    return (
                        l in n ||
                            (n[l] = {
                                id: e,
                                permission: !0,
                                type: d.Kw.ROLE,
                            }),
                        r in n ||
                            (n[r] = {
                                id: i,
                                permission: !0,
                                type: d.Kw.CHANNEL,
                            }),
                        n
                    );
                })(e, null != r ? r : {}),
            [r, e],
        ),
        y = (0, s.e7)([x.Z], () => {
            var e;
            if (null == n) return;
            let t = x.Z.getCommand(n);
            return null != (e = null == t ? void 0 : t.permissions) ? e : {};
        }, [n]),
        _ = (0, s.e7)([x.Z], () => {
            var e;
            return null == n
                ? x.Z.getEditedApplication()
                : null == (e = x.Z.getEditedCommand())
                  ? void 0
                  : e.permissions;
        }, [n]),
        C = null != n ? n : t,
        N = null != n ? y : a,
        S = i.useMemo(() => (null != _ ? _ : O({}, null != N ? N : {})), [_, N]),
        I = i.useMemo(() => Object.keys(S).length, [S]),
        w = i.useMemo(() => (null == N || null == S ? null : !o().isEqual(N, S)), [N, S]);
    return (
        i.useEffect(() => {
            C === t && (w ? c.Z.startEditingCommandPermissions(C) : c.Z.stopEditingCommandPermissions(C));
        }, [t, w, C]),
        {
            originalApplicationPermissions: a,
            originalCommandPermissions: y,
            editedTargetPermissions: (function (e, t) {
                let n = (0, s.e7)([b.Z], () => b.Z.getGuild(e), [e]);
                l()(null != n, "guild must be present to be editing its integration settings");
                let r = (0, s.e7)([g.Z], () => g.Z.getHighestRole(n), [n]),
                    a = (0, s.e7)([f.default], () => {
                        var e;
                        return null == (e = f.default.getCurrentUser()) ? void 0 : e.id;
                    });
                l()(null != a, "useComputePermissions: currentUserId must not be null");
                let o = a === n.ownerId,
                    {
                        channelIds: c,
                        roleIds: x,
                        userIds: j,
                    } = i.useMemo(() => {
                        let e = [],
                            n = [],
                            i = [];
                        for (let r of Object.values(t))
                            r.type === d.Kw.CHANNEL
                                ? e.push(r.id)
                                : r.type === d.Kw.ROLE
                                  ? n.push(r.id)
                                  : r.type === d.Kw.USER && i.push(r.id);
                        return {
                            channelIds: e,
                            roleIds: n,
                            userIds: i,
                        };
                    }, [t]),
                    y = (0, s.cj)(
                        [p.Z],
                        () =>
                            Object.fromEntries(
                                c
                                    .map(p.Z.getChannel)
                                    .filter(h.lm)
                                    .map((e) => [e.id, e]),
                            ),
                        [c],
                    ),
                    _ = (0, s.cj)(
                        [m.Z],
                        () =>
                            Object.fromEntries(
                                x
                                    .map((t) => m.Z.getRole(e, t))
                                    .filter(h.lm)
                                    .map((e) => [e.id, e]),
                            ),
                        [x, e],
                    ),
                    C = (0, s.cj)(
                        [f.default],
                        () =>
                            Object.fromEntries(
                                j
                                    .map(f.default.getUser)
                                    .filter(h.lm)
                                    .map((e) => [e.id, e]),
                            ),
                        [j],
                    );
                return i.useMemo(() => {
                    let e = n.id,
                        i = (0, u.bD)(n.id),
                        l = {};
                    for (let [a, s] of Object.entries(t)) {
                        let t = !1,
                            c = !1;
                        if (s.type === d.Kw.CHANNEL) {
                            let e = s.id === i,
                                n = y[s.id];
                            (t = e || g.Z.can(v.Plq.VIEW_CHANNEL, n)), (c = !0);
                        } else if (s.type === d.Kw.ROLE) {
                            let i = s.id === e,
                                l = _[s.id];
                            (t = i || null != l), (c = o || i || g.Z.isRoleHigher(n, r, l));
                        } else if (s.type === d.Kw.USER) {
                            let e = C[s.id];
                            (t = null != e),
                                (c = null != e && (o || g.Z.canManageUser(v.Plq.USE_APPLICATION_COMMANDS, e, n)));
                        }
                        l[a] = (function (e, t) {
                            return (
                                (t = null != t ? t : {}),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var i = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, i);
                                          }
                                          return n;
                                      })(Object(t)).forEach(function (n) {
                                          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                                      }),
                                e
                            );
                        })(O({}, s), {
                            canRead: t,
                            canWrite: c,
                        });
                    }
                    return l;
                }, [y, n, r, o, t, _, C]);
            })(e, S),
            hasChanges: w,
            selectedPermissionCount: I,
        }
    );
}

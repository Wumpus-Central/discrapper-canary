n.d(t, {
    A: () => A,
}),
    n(321073),
    n(896048),
    n(446912);
var i = n(64700),
    r = n(284009),
    l = n.n(r),
    a = n(735438),
    s = n.n(a),
    o = n(311907),
    c = n(282956),
    d = n(392054),
    u = n(168186),
    b = n(734057),
    f = n(317525),
    p = n(71393),
    m = n(576705),
    g = n(287809),
    h = n(403362),
    x = n(803378),
    j = n(200662),
    O = n(652215);

function y(e) {
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

function A(e, t, n) {
    let r = (0, o.bG)([x.A], () => x.A.getApplicationPermissions()),
        a = i.useMemo(() => {
            var t;
            let n, i, l, a;
            return (
                (t = e),
                (n = y({}, null != r ? r : {})),
                (i = (0, u.Ap)(t)),
                (l = (0, j.Eu)(i, d.RA.CHANNEL)),
                (a = (0, j.Eu)(t, d.RA.ROLE)) in n ||
                    (n[a] = {
                        id: t,
                        permission: !0,
                        type: d.RA.ROLE,
                    }),
                l in n ||
                    (n[l] = {
                        id: i,
                        permission: !0,
                        type: d.RA.CHANNEL,
                    }),
                n
            );
        }, [r, e]),
        A = (0, o.bG)([x.A], () => {
            var e;
            if (null == n) return;
            let t = x.A.getCommand(n);
            return null != (e = null == t ? void 0 : t.permissions) ? e : {};
        }, [n]),
        v = (0, o.bG)([x.A], () => {
            var e;
            return null == n
                ? x.A.getEditedApplication()
                : null == (e = x.A.getEditedCommand())
                  ? void 0
                  : e.permissions;
        }, [n]),
        N = null != n ? n : t,
        E = null != n ? A : a,
        T = i.useMemo(() => (null != v ? v : y({}, null != E ? E : {})), [v, E]),
        w = i.useMemo(() => Object.keys(T).length, [T]),
        C = i.useMemo(() => (null == E || null == T ? null : !s().isEqual(E, T)), [E, T]);
    return (
        i.useEffect(() => {
            N === t && (C ? c.A.startEditingCommandPermissions(N) : c.A.stopEditingCommandPermissions(N));
        }, [t, C, N]),
        {
            originalApplicationPermissions: a,
            originalCommandPermissions: A,
            editedTargetPermissions: (function (e, t) {
                let n = (0, o.bG)([p.A], () => p.A.getGuild(e), [e]);
                l()(null != n, "guild must be present to be editing its integration settings");
                let r = (0, o.bG)([m.A], () => m.A.getHighestRole(n), [n]),
                    a = (0, o.bG)([g.default], () => {
                        var e;
                        return null == (e = g.default.getCurrentUser()) ? void 0 : e.id;
                    });
                l()(null != a, "useComputePermissions: currentUserId must not be null");
                let s = a === n.ownerId,
                    {
                        channelIds: c,
                        roleIds: x,
                        userIds: j,
                    } = i.useMemo(() => {
                        let e = [],
                            n = [],
                            i = [];
                        for (let r of Object.values(t))
                            r.type === d.RA.CHANNEL
                                ? e.push(r.id)
                                : r.type === d.RA.ROLE
                                  ? n.push(r.id)
                                  : r.type === d.RA.USER && i.push(r.id);
                        return {
                            channelIds: e,
                            roleIds: n,
                            userIds: i,
                        };
                    }, [t]),
                    A = (0, o.cf)(
                        [b.A],
                        () =>
                            Object.fromEntries(
                                c
                                    .map(b.A.getChannel)
                                    .filter(h.Vq)
                                    .map((e) => [e.id, e]),
                            ),
                        [c],
                    ),
                    v = (0, o.cf)(
                        [f.A],
                        () =>
                            Object.fromEntries(
                                x
                                    .map((t) => f.A.getRole(e, t))
                                    .filter(h.Vq)
                                    .map((e) => [e.id, e]),
                            ),
                        [x, e],
                    ),
                    N = (0, o.cf)(
                        [g.default],
                        () =>
                            Object.fromEntries(
                                j
                                    .map(g.default.getUser)
                                    .filter(h.Vq)
                                    .map((e) => [e.id, e]),
                            ),
                        [j],
                    );
                return i.useMemo(() => {
                    let e = n.id,
                        i = (0, u.Ap)(n.id),
                        l = {};
                    for (let [a, o] of Object.entries(t)) {
                        let t = !1,
                            c = !1;
                        if (o.type === d.RA.CHANNEL) {
                            let e = o.id === i,
                                n = A[o.id];
                            (t = e || m.A.can(O.xBc.VIEW_CHANNEL, n)), (c = !0);
                        } else if (o.type === d.RA.ROLE) {
                            let i = o.id === e,
                                l = v[o.id];
                            (t = i || null != l), (c = s || i || m.A.isRoleHigher(n, r, l));
                        } else if (o.type === d.RA.USER) {
                            let e = N[o.id];
                            (t = null != e),
                                (c = null != e && (s || m.A.canManageUser(O.xBc.USE_APPLICATION_COMMANDS, e, n)));
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
                        })(y({}, o), {
                            canRead: t,
                            canWrite: c,
                        });
                    }
                    return l;
                }, [A, n, r, s, t, v, N]);
            })(e, T),
            hasChanges: C,
            selectedPermissionCount: w,
        }
    );
}

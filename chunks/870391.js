n.d(t, {
    A: () => A,
}),
    n(321073),
    n(896048);
var r,
    i = n(311907),
    l = n(73153),
    s = n(21119),
    a = n(153488),
    u = n(994500),
    o = n(287809);

function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}

function h(e, t) {
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
}
let f = [],
    g = !1;
class I extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(a.A, u.A, s.A, o.default), null != e)) {
            var t, n;
            (f = null != (t = e.groups) ? t : []), (g = null != (n = e.isInitialized) && n);
        }
    }
    getGroups() {
        return f;
    }
    getGroup(e) {
        var t;
        return null != (t = f.find((t) => t.id === e)) ? t : null;
    }
    getGroupIds() {
        return f.map((e) => e.id);
    }
    getUserGroups(e) {
        return f.filter((t) => t.userIds.includes(e));
    }
    isGroupEmpty(e) {
        let t = this.getGroup(e);
        return null == t || 0 === t.userIds.length;
    }
    isInitialized() {
        return g;
    }
    getState() {
        return {
            groups: f,
            isInitialized: g,
        };
    }
}
d(I, "displayName", "FriendGroupsStore"), d(I, "persistKey", "FriendGroupsStoreV2");
let A = new I(l.h, {
    POST_CONNECTION_OPEN: function () {
        if (g || f.length > 0) return !1;
        (f = []), (g = !0);
    },
    CREATE_FRIEND_GROUP: function (e) {
        let { groupId: t, name: n } = e;
        return (
            !f.some((e) => e.id === t) &&
            (f.push({
                id: t,
                name: n,
                userIds: [],
            }),
            !0)
        );
    },
    UPDATE_FRIEND_GROUP: function (e) {
        let { groupId: t, name: n } = e,
            r = f.findIndex((e) => e.id === t);
        return (
            -1 !== r &&
            ((f[r] = h(c({}, f[r]), {
                name: n,
            })),
            !0)
        );
    },
    DELETE_FRIEND_GROUP: function (e) {
        let { groupId: t } = e,
            n = f.length;
        return (f = f.filter((e) => e.id !== t)).length !== n;
    },
    REORDER_FRIEND_GROUPS: function (e) {
        let { groupIds: t } = e,
            n = [],
            r = new Map(f.map((e) => [e.id, e]));
        for (let e of t) {
            let t = r.get(e);
            null != t && n.push(t);
        }
        return n.length === f.length && ((f = n), !0);
    },
    ADD_USERS_TO_GROUP: function (e) {
        let { groupId: t, userIds: n } = e,
            r = f.findIndex((e) => e.id === t);
        if (-1 === r) return !1;
        let i = f[r],
            l = new Set(i.userIds),
            s = n.filter((e) => !l.has(e));
        return (
            0 !== s.length &&
            ((f[r] = h(c({}, i), {
                userIds: [...i.userIds, ...s],
            })),
            !0)
        );
    },
    REMOVE_USERS_FROM_GROUP: function (e) {
        let { groupId: t, userIds: n } = e,
            r = f.findIndex((e) => e.id === t);
        if (-1 === r) return !1;
        let i = f[r],
            l = new Set(n),
            s = i.userIds.filter((e) => !l.has(e));
        return (
            s.length !== i.userIds.length &&
            ((f[r] = h(c({}, i), {
                userIds: s,
            })),
            !0)
        );
    },
});

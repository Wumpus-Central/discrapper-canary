n.d(t, {
    A: () => O,
}),
    n(896048),
    n(638769),
    n(321073),
    n(667532);
var r,
    i = n(311907),
    l = n(73153),
    s = n(21119),
    o = n(153488),
    a = n(994500),
    u = n(287809),
    c = n(652215);

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

function p(e) {
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

function g(e, t) {
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
    h = !1;
class m extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(o.A, a.A, s.A, u.default), null != e)) {
            var t, n;
            (f = null != (t = e.groups) ? t : []), (h = null != (n = e.isInitialized) && n);
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
        return h;
    }
    getState() {
        return {
            groups: f,
            isInitialized: h,
        };
    }
}
d(m, "displayName", "FriendGroupsStore"), d(m, "persistKey", "FriendGroupsStore");
let O = new m(l.h, {
    POST_CONNECTION_OPEN: function () {
        if (h || f.length > 0) return !1;
        (f = [
            {
                id: "favorites",
                name: "Favorites",
                userIds: (function () {
                    if (!o.A.hasConsented(c.YAq.PERSONALIZATION)) return [];
                    let e = s.A.getUserAffinities();
                    if (0 === e.length) return [];
                    let t = [...e].sort((e, t) => s.A.compare(e.otherUserId, t.otherUserId)),
                        n = [];
                    for (let e of t) {
                        if (n.length >= 5) break;
                        let t = e.otherUserId;
                        null != u.default.getUser(t) &&
                            a.A.isFriend(t) &&
                            !a.A.isIgnored(t) &&
                            !a.A.isBlocked(t) &&
                            n.push(t);
                    }
                    return n;
                })(),
            },
        ]),
            (h = !0);
    },
    CREATE_FRIEND_GROUP: function (e) {
        let { groupId: t, name: n } = e;
        return (
            !f.some((e) => e.id === t) &&
            (f.unshift({
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
            ((f[r] = g(p({}, f[r]), {
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
            ((f[r] = g(p({}, i), {
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
            ((f[r] = g(p({}, i), {
                userIds: s,
            })),
            !0)
        );
    },
});

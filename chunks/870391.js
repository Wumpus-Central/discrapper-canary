n.d(t, { A: () => h }), n(321073);
var i = n(17928),
    l = n(228366),
    s = n(427358),
    r = n(153488),
    a = n(994500),
    o = n(287809);
let u = [],
    d = !1;
class c extends i.Ay.PersistedStore {
    static displayName = "FriendGroupsStore";
    static persistKey = "FriendGroupsStoreV2";
    initialize(e) {
        this.waitFor(r.A, a.A, s.A, o.default), null != e && ((u = e.groups ?? []), (d = e.isInitialized ?? !1));
    }
    getGroups() {
        return u;
    }
    getGroup(e) {
        return u.find((t) => t.id === e) ?? null;
    }
    getGroupIds() {
        return u.map((e) => e.id);
    }
    getUserGroups(e) {
        return u.filter((t) => t.userIds.includes(e));
    }
    isGroupEmpty(e) {
        let t = this.getGroup(e);
        return null == t || 0 === t.userIds.length;
    }
    isInitialized() {
        return d;
    }
    getState() {
        return { groups: u, isInitialized: d };
    }
}
let h = new c(l.h, {
    POST_CONNECTION_OPEN: function () {
        if (d || u.length > 0) return !1;
        (u = []), (d = !0);
    },
    CREATE_FRIEND_GROUP: function (e) {
        let { groupId: t, name: n } = e;
        return !u.some((e) => e.id === t) && (u.push({ id: t, name: n, userIds: [] }), !0);
    },
    UPDATE_FRIEND_GROUP: function (e) {
        let { groupId: t, name: n } = e,
            i = u.findIndex((e) => e.id === t);
        return -1 !== i && ((u[i] = { ...u[i], name: n }), !0);
    },
    DELETE_FRIEND_GROUP: function (e) {
        let { groupId: t } = e,
            n = u.length;
        return (u = u.filter((e) => e.id !== t)).length !== n;
    },
    REORDER_FRIEND_GROUPS: function (e) {
        let { groupIds: t } = e,
            n = [],
            i = new Map(u.map((e) => [e.id, e]));
        for (let e of t) {
            let t = i.get(e);
            null != t && n.push(t);
        }
        return n.length === u.length && ((u = n), !0);
    },
    ADD_USERS_TO_GROUP: function (e) {
        let { groupId: t, userIds: n } = e,
            i = u.findIndex((e) => e.id === t);
        if (-1 === i) return !1;
        let l = u[i],
            s = new Set(l.userIds),
            r = n.filter((e) => !s.has(e));
        return 0 !== r.length && ((u[i] = { ...l, userIds: [...l.userIds, ...r] }), !0);
    },
    REMOVE_USERS_FROM_GROUP: function (e) {
        let { groupId: t, userIds: n } = e,
            i = u.findIndex((e) => e.id === t);
        if (-1 === i) return !1;
        let l = u[i],
            s = new Set(n),
            r = l.userIds.filter((e) => !s.has(e));
        return r.length !== l.userIds.length && ((u[i] = { ...l, userIds: r }), !0);
    },
});

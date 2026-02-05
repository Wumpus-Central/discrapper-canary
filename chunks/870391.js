n.d(t, { A: () => h }), n(321073);
var l = n(311907),
    i = n(73153),
    s = n(21119),
    r = n(153488),
    a = n(994500),
    u = n(287809);
let o = [],
    d = !1;
class c extends l.Ay.PersistedStore {
    static displayName = "FriendGroupsStore";
    static persistKey = "FriendGroupsStoreV2";
    initialize(e) {
        this.waitFor(r.A, a.A, s.A, u.default), null != e && ((o = e.groups ?? []), (d = e.isInitialized ?? !1));
    }
    getGroups() {
        return o;
    }
    getGroup(e) {
        return o.find((t) => t.id === e) ?? null;
    }
    getGroupIds() {
        return o.map((e) => e.id);
    }
    getUserGroups(e) {
        return o.filter((t) => t.userIds.includes(e));
    }
    isGroupEmpty(e) {
        let t = this.getGroup(e);
        return null == t || 0 === t.userIds.length;
    }
    isInitialized() {
        return d;
    }
    getState() {
        return { groups: o, isInitialized: d };
    }
}
let h = new c(i.h, {
    POST_CONNECTION_OPEN: function () {
        if (d || o.length > 0) return !1;
        (o = []), (d = !0);
    },
    CREATE_FRIEND_GROUP: function (e) {
        let { groupId: t, name: n } = e;
        return !o.some((e) => e.id === t) && (o.push({ id: t, name: n, userIds: [] }), !0);
    },
    UPDATE_FRIEND_GROUP: function (e) {
        let { groupId: t, name: n } = e,
            l = o.findIndex((e) => e.id === t);
        return -1 !== l && ((o[l] = { ...o[l], name: n }), !0);
    },
    DELETE_FRIEND_GROUP: function (e) {
        let { groupId: t } = e,
            n = o.length;
        return (o = o.filter((e) => e.id !== t)).length !== n;
    },
    REORDER_FRIEND_GROUPS: function (e) {
        let { groupIds: t } = e,
            n = [],
            l = new Map(o.map((e) => [e.id, e]));
        for (let e of t) {
            let t = l.get(e);
            null != t && n.push(t);
        }
        return n.length === o.length && ((o = n), !0);
    },
    ADD_USERS_TO_GROUP: function (e) {
        let { groupId: t, userIds: n } = e,
            l = o.findIndex((e) => e.id === t);
        if (-1 === l) return !1;
        let i = o[l],
            s = new Set(i.userIds),
            r = n.filter((e) => !s.has(e));
        return 0 !== r.length && ((o[l] = { ...i, userIds: [...i.userIds, ...r] }), !0);
    },
    REMOVE_USERS_FROM_GROUP: function (e) {
        let { groupId: t, userIds: n } = e,
            l = o.findIndex((e) => e.id === t);
        if (-1 === l) return !1;
        let i = o[l],
            s = new Set(n),
            r = i.userIds.filter((e) => !s.has(e));
        return r.length !== i.userIds.length && ((o[l] = { ...i, userIds: r }), !0);
    },
});

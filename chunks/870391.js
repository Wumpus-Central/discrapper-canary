n.d(t, { A: () => h }), n(321073);
var i = n(17928),
    s = n(228366),
    r = n(427358),
    l = n(153488),
    a = n(994500),
    u = n(287809);
let o = [],
    d = !1;
class c extends i.Ay.PersistedStore {
    static displayName = "FriendGroupsStore";
    static persistKey = "FriendGroupsStoreV2";
    initialize(e) {
        this.waitFor(l.A, a.A, r.A, u.default), null != e && ((o = e.groups ?? []), (d = e.isInitialized ?? !1));
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
let h = new c(s.h, {
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
            i = o.findIndex((e) => e.id === t);
        return -1 !== i && ((o[i] = { ...o[i], name: n }), !0);
    },
    DELETE_FRIEND_GROUP: function (e) {
        let { groupId: t } = e,
            n = o.length;
        return (o = o.filter((e) => e.id !== t)).length !== n;
    },
    REORDER_FRIEND_GROUPS: function (e) {
        let { groupIds: t } = e,
            n = [],
            i = new Map(o.map((e) => [e.id, e]));
        for (let e of t) {
            let t = i.get(e);
            null != t && n.push(t);
        }
        return n.length === o.length && ((o = n), !0);
    },
    ADD_USERS_TO_GROUP: function (e) {
        let { groupId: t, userIds: n } = e,
            i = o.findIndex((e) => e.id === t);
        if (-1 === i) return !1;
        let s = o[i],
            r = new Set(s.userIds),
            l = n.filter((e) => !r.has(e));
        return 0 !== l.length && ((o[i] = { ...s, userIds: [...s.userIds, ...l] }), !0);
    },
    REMOVE_USERS_FROM_GROUP: function (e) {
        let { groupId: t, userIds: n } = e,
            i = o.findIndex((e) => e.id === t);
        if (-1 === i) return !1;
        let s = o[i],
            r = new Set(n),
            l = s.userIds.filter((e) => !r.has(e));
        return l.length !== s.userIds.length && ((o[i] = { ...s, userIds: l }), !0);
    },
});

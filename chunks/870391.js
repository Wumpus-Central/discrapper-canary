"use strict";
n.d(t, { A: () => _ }), n(321073);
var i = n(17928),
    r = n(228366),
    a = n(427358),
    s = n(153488),
    l = n(994500),
    o = n(287809);
let d = [],
    c = !1;
class u extends i.Ay.PersistedStore {
    static displayName = "FriendGroupsStore";
    static persistKey = "FriendGroupsStoreV2";
    initialize(e) {
        this.waitFor(s.A, l.A, a.A, o.default), null != e && ((d = e.groups ?? []), (c = e.isInitialized ?? !1));
    }
    getGroups() {
        return d;
    }
    getGroup(e) {
        return d.find((t) => t.id === e) ?? null;
    }
    getGroupIds() {
        return d.map((e) => e.id);
    }
    getUserGroups(e) {
        return d.filter((t) => t.userIds.includes(e));
    }
    isGroupEmpty(e) {
        let t = this.getGroup(e);
        return null == t || 0 === t.userIds.length;
    }
    isInitialized() {
        return c;
    }
    getState() {
        return { groups: d, isInitialized: c };
    }
}
let _ = new u(r.h, {
    POST_CONNECTION_OPEN: function () {
        if (c || d.length > 0) return !1;
        (d = []), (c = !0);
    },
    CREATE_FRIEND_GROUP: function (e) {
        let { groupId: t, name: n } = e;
        return !d.some((e) => e.id === t) && (d.push({ id: t, name: n, userIds: [] }), !0);
    },
    UPDATE_FRIEND_GROUP: function (e) {
        let { groupId: t, name: n } = e,
            i = d.findIndex((e) => e.id === t);
        return -1 !== i && ((d[i] = { ...d[i], name: n }), !0);
    },
    DELETE_FRIEND_GROUP: function (e) {
        let { groupId: t } = e,
            n = d.length;
        return (d = d.filter((e) => e.id !== t)).length !== n;
    },
    REORDER_FRIEND_GROUPS: function (e) {
        let { groupIds: t } = e,
            n = [],
            i = new Map(d.map((e) => [e.id, e]));
        for (let e of t) {
            let t = i.get(e);
            null != t && n.push(t);
        }
        return n.length === d.length && ((d = n), !0);
    },
    ADD_USERS_TO_GROUP: function (e) {
        let { groupId: t, userIds: n } = e,
            i = d.findIndex((e) => e.id === t);
        if (-1 === i) return !1;
        let r = d[i],
            a = new Set(r.userIds),
            s = n.filter((e) => !a.has(e));
        return 0 !== s.length && ((d[i] = { ...r, userIds: [...r.userIds, ...s] }), !0);
    },
    REMOVE_USERS_FROM_GROUP: function (e) {
        let { groupId: t, userIds: n } = e,
            i = d.findIndex((e) => e.id === t);
        if (-1 === i) return !1;
        let r = d[i],
            a = new Set(n),
            s = r.userIds.filter((e) => !a.has(e));
        return s.length !== r.userIds.length && ((d[i] = { ...r, userIds: s }), !0);
    },
});

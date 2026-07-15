"use strict";
let i;
n.d(t, { A: () => O });
var r = n(189613),
    a = n.n(r),
    s = n(641733),
    l = n.n(s),
    o = n(63494),
    d = n.n(o),
    c = n(17928),
    u = n(228366),
    _ = n(671759),
    E = n(172799);
let A = {},
    h = {},
    I = {},
    f = {},
    p = !1,
    T = !1,
    m = !1,
    g = new Map();
function S(e) {
    return e.toLowerCase();
}
function N(e) {
    let { inviteCode: t } = e,
        n = S(t);
    if (!g.has(n)) return !1;
    (g = new Map(g)).delete(n);
}
class C extends c.Ay.Store {
    static displayName = "InstantInviteStore";
    getInvite(e) {
        let {
            targetType: t,
            targetUserId: n,
            targetApplicationId: i,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return t === E.yV.STREAM && null != n
            ? h[e]?.[n]
            : t === E.yV.EMBEDDED_APPLICATION && null != i
              ? I[e]?.[i]
              : A[e];
    }
    getFriendInvite() {
        return i;
    }
    getFriendInvitesFetching() {
        return p;
    }
    canRevokeFriendInvite() {
        return null != i && !T && !m;
    }
    getReceivedInstallationIdForInviteCode(e) {
        return g.get(S(e));
    }
}
let O = new C(u.h, {
    CONNECTION_OPEN: function () {
        (A = {}), (h = {}), (I = {}), (f = {}), (i = null), (T = !1), (m = !1), (p = !1);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        delete A[t.id], delete h[t.id], delete I[t.id];
    },
    FRIEND_INVITE_CREATE_SUCCESS: function (e) {
        (f[e.invite.code] = _.A.createFromServer(e.invite)),
            (i = a()(l()(d()(Object.values(f), "createdAt"))) ?? null),
            (m = !1);
    },
    FRIEND_INVITE_CREATE_FAILURE: function () {
        m = !1;
    },
    FRIEND_INVITE_REVOKE_SUCCESS: function (e) {
        null != e.invites &&
            e.invites.forEach((e) => {
                null != f[e.code] && delete f[e.code];
            }),
            (i = a()(l()(d()(Object.values(f), "createdAt"))) ?? null),
            (T = !1);
    },
    INSTANT_INVITE_CREATE_SUCCESS: function (e) {
        let { channelId: t, invite: n } = e,
            i = _.A.createFromServer(n);
        i.targetType === E.yV.STREAM && null != i.targetUser
            ? (null == h[t] && (h[t] = {}), (h[t][String(i.targetUser.id)] = i))
            : i.targetType === E.yV.EMBEDDED_APPLICATION && null != i.targetApplication
              ? (null == I[t] && (I[t] = {}), (I[t][i.targetApplication.id] = i))
              : (A[t] = i);
    },
    INSTANT_INVITE_CREATE_FAILURE: function (e) {
        let { channelId: t } = e;
        A[t] = null;
    },
    INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
        let { channelId: t } = e;
        A[t] = null;
    },
    FRIEND_INVITE_REVOKE_REQUEST: function () {
        T = !0;
    },
    FRIEND_INVITE_CREATE_REQUEST: function () {
        m = !0;
    },
    FRIEND_INVITES_FETCH_REQUEST: function () {
        p = !0;
    },
    FRIEND_INVITES_FETCH_RESPONSE: function (e) {
        (f = {}),
            e.invites.forEach((e) => {
                f[e.code] = _.A.createFromServer(e);
            }),
            (i = a()(l()(d()(Object.values(f), "createdAt"))) ?? null),
            (p = !1);
    },
    INSTANT_INVITE_CLEAR: function (e) {
        delete A[e.channelId];
    },
    INSTANT_INVITE_RECEIVED_INSTALLATION_ID_SET: function (e) {
        (g = new Map(g)).set(S(e.inviteCode), e.receivedInstallationId);
    },
    INSTANT_INVITE_RECEIVED_INSTALLATION_ID_CLEAR: N,
    INVITE_MODAL_CLOSE: function (e) {
        let { inviteCode: t } = e;
        return null != t && N({ inviteCode: t });
    },
    LOGOUT: function () {
        if (0 === g.size) return !1;
        g = new Map();
    },
});

"use strict";
let i;
n.d(t, { A: () => C });
var r = n(177029),
    s = n.n(r),
    a = n(818125),
    o = n.n(a),
    l = n(725918),
    u = n.n(l),
    c = n(17928),
    d = n(228366),
    _ = n(671759),
    f = n(172799);
let h = {},
    p = {},
    E = {},
    m = {},
    g = !1,
    A = !1,
    I = !1,
    T = new Map();
function S(e) {
    return e.toLowerCase();
}
function N(e) {
    let { inviteCode: t } = e,
        n = S(t);
    if (!T.has(n)) return !1;
    (T = new Map(T)).delete(n);
}
class y extends c.Ay.Store {
    static displayName = "InstantInviteStore";
    getInvite(e) {
        let {
            targetType: t,
            targetUserId: n,
            targetApplicationId: i,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return t === f.yV.STREAM && null != n
            ? p[e]?.[n]
            : t === f.yV.EMBEDDED_APPLICATION && null != i
              ? E[e]?.[i]
              : h[e];
    }
    getFriendInvite() {
        return i;
    }
    getFriendInvitesFetching() {
        return g;
    }
    canRevokeFriendInvite() {
        return null != i && !A && !I;
    }
    getReceivedInstallationIdForInviteCode(e) {
        return T.get(S(e));
    }
}
let C = new y(d.h, {
    CONNECTION_OPEN: function () {
        (h = {}), (p = {}), (E = {}), (m = {}), (i = null), (A = !1), (I = !1), (g = !1);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        delete h[t.id], delete p[t.id], delete E[t.id];
    },
    FRIEND_INVITE_CREATE_SUCCESS: function (e) {
        (m[e.invite.code] = _.A.createFromServer(e.invite)),
            (i = s()(o()(u()(Object.values(m), "createdAt"))) ?? null),
            (I = !1);
    },
    FRIEND_INVITE_CREATE_FAILURE: function () {
        I = !1;
    },
    FRIEND_INVITE_REVOKE_SUCCESS: function (e) {
        null != e.invites &&
            e.invites.forEach((e) => {
                null != m[e.code] && delete m[e.code];
            }),
            (i = s()(o()(u()(Object.values(m), "createdAt"))) ?? null),
            (A = !1);
    },
    INSTANT_INVITE_CREATE_SUCCESS: function (e) {
        let { channelId: t, invite: n } = e,
            i = _.A.createFromServer(n);
        i.targetType === f.yV.STREAM && null != i.targetUser
            ? (null == p[t] && (p[t] = {}), (p[t][String(i.targetUser.id)] = i))
            : i.targetType === f.yV.EMBEDDED_APPLICATION && null != i.targetApplication
              ? (null == E[t] && (E[t] = {}), (E[t][i.targetApplication.id] = i))
              : (h[t] = i);
    },
    INSTANT_INVITE_CREATE_FAILURE: function (e) {
        let { channelId: t } = e;
        h[t] = null;
    },
    INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
        let { channelId: t } = e;
        h[t] = null;
    },
    FRIEND_INVITE_REVOKE_REQUEST: function () {
        A = !0;
    },
    FRIEND_INVITE_CREATE_REQUEST: function () {
        I = !0;
    },
    FRIEND_INVITES_FETCH_REQUEST: function () {
        g = !0;
    },
    FRIEND_INVITES_FETCH_RESPONSE: function (e) {
        (m = {}),
            e.invites.forEach((e) => {
                m[e.code] = _.A.createFromServer(e);
            }),
            (i = s()(o()(u()(Object.values(m), "createdAt"))) ?? null),
            (g = !1);
    },
    INSTANT_INVITE_CLEAR: function (e) {
        delete h[e.channelId];
    },
    INSTANT_INVITE_RECEIVED_INSTALLATION_ID_SET: function (e) {
        (T = new Map(T)).set(S(e.inviteCode), e.receivedInstallationId);
    },
    INSTANT_INVITE_RECEIVED_INSTALLATION_ID_CLEAR: N,
    INVITE_MODAL_CLOSE: function (e) {
        let { inviteCode: t } = e;
        return null != t && N({ inviteCode: t });
    },
    LOGOUT: function () {
        if (0 === T.size) return !1;
        T = new Map();
    },
});

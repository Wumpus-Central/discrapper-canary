"use strict";
let r;
n.d(t, { A: () => v });
var i = n(177029),
    s = n.n(i),
    a = n(818125),
    o = n.n(a),
    l = n(725918),
    u = n.n(l),
    c = n(311907),
    d = n(73153),
    _ = n(671759),
    f = n(172799);
let p = {},
    h = {},
    E = {},
    m = {},
    g = !1,
    A = !1,
    I = !1,
    T = new Map();
function S(e) {
    return e.toLowerCase();
}
function y(e) {
    let { inviteCode: t } = e,
        n = S(t);
    if (!T.has(n)) return !1;
    (T = new Map(T)).delete(n);
}
class N extends c.Ay.Store {
    static displayName = "InstantInviteStore";
    getInvite(e) {
        let {
            targetType: t,
            targetUserId: n,
            targetApplicationId: r,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return t === f.yV.STREAM && null != n
            ? h[e]?.[n]
            : t === f.yV.EMBEDDED_APPLICATION && null != r
              ? E[e]?.[r]
              : p[e];
    }
    getFriendInvite() {
        return r;
    }
    getFriendInvitesFetching() {
        return g;
    }
    canRevokeFriendInvite() {
        return null != r && !A && !I;
    }
    getReceivedInstallationIdForInviteCode(e) {
        return T.get(S(e));
    }
}
let v = new N(d.h, {
    CONNECTION_OPEN: function () {
        (p = {}), (h = {}), (E = {}), (m = {}), (r = null), (A = !1), (I = !1), (g = !1);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        delete p[t.id], delete h[t.id], delete E[t.id];
    },
    FRIEND_INVITE_CREATE_SUCCESS: function (e) {
        (m[e.invite.code] = _.A.createFromServer(e.invite)),
            (r = s()(o()(u()(Object.values(m), "createdAt"))) ?? null),
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
            (r = s()(o()(u()(Object.values(m), "createdAt"))) ?? null),
            (A = !1);
    },
    INSTANT_INVITE_CREATE_SUCCESS: function (e) {
        let { channelId: t, invite: n } = e,
            r = _.A.createFromServer(n);
        r.targetType === f.yV.STREAM && null != r.targetUser
            ? (null == h[t] && (h[t] = {}), (h[t][String(r.targetUser.id)] = r))
            : r.targetType === f.yV.EMBEDDED_APPLICATION && null != r.targetApplication
              ? (null == E[t] && (E[t] = {}), (E[t][r.targetApplication.id] = r))
              : (p[t] = r);
    },
    INSTANT_INVITE_CREATE_FAILURE: function (e) {
        let { channelId: t } = e;
        p[t] = null;
    },
    INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
        let { channelId: t } = e;
        p[t] = null;
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
            (r = s()(o()(u()(Object.values(m), "createdAt"))) ?? null),
            (g = !1);
    },
    INSTANT_INVITE_CLEAR: function (e) {
        delete p[e.channelId];
    },
    INSTANT_INVITE_RECEIVED_INSTALLATION_ID_SET: function (e) {
        (T = new Map(T)).set(S(e.inviteCode), e.receivedInstallationId);
    },
    INSTANT_INVITE_RECEIVED_INSTALLATION_ID_CLEAR: y,
    INVITE_MODAL_CLOSE: function (e) {
        let { inviteCode: t } = e;
        return null != t && y({ inviteCode: t });
    },
    LOGOUT: function () {
        if (0 === T.size) return !1;
        T = new Map();
    },
});

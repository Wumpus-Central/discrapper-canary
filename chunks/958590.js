"use strict";
let r;
n.d(t, { A: () => B });
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
    m = {},
    E = {},
    g = !1,
    A = !1,
    I = !1,
    T = new Map();
function S(e) {
    return e.toLowerCase();
}
function y() {
    (p = {}), (h = {}), (m = {}), (E = {}), (r = null), (A = !1), (I = !1), (g = !1);
}
function v(e) {
    let { channel: t } = e;
    delete p[t.id], delete h[t.id], delete m[t.id];
}
function N(e) {
    let { channelId: t, invite: n } = e,
        r = _.A.createFromServer(n);
    r.targetType === f.yV.STREAM && null != r.targetUser
        ? (null == h[t] && (h[t] = {}), (h[t][String(r.targetUser.id)] = r))
        : r.targetType === f.yV.EMBEDDED_APPLICATION && null != r.targetApplication
          ? (null == m[t] && (m[t] = {}), (m[t][r.targetApplication.id] = r))
          : (p[t] = r);
}
function C(e) {
    let { channelId: t } = e;
    p[t] = null;
}
function R(e) {
    let { channelId: t } = e;
    p[t] = null;
}
function O(e) {
    (E[e.invite.code] = _.A.createFromServer(e.invite)),
        (r = s()(o()(u()(Object.values(E), "createdAt"))) ?? null),
        (I = !1);
}
function b() {
    I = !1;
}
function D(e) {
    null != e.invites &&
        e.invites.forEach((e) => {
            null != E[e.code] && delete E[e.code];
        }),
        (r = s()(o()(u()(Object.values(E), "createdAt"))) ?? null),
        (A = !1);
}
function L() {
    A = !0;
}
function w() {
    I = !0;
}
function M() {
    g = !0;
}
function x(e) {
    (E = {}),
        e.invites.forEach((e) => {
            E[e.code] = _.A.createFromServer(e);
        }),
        (r = s()(o()(u()(Object.values(E), "createdAt"))) ?? null),
        (g = !1);
}
function P(e) {
    delete p[e.channelId];
}
function k(e) {
    (T = new Map(T)).set(S(e.inviteCode), e.receivedInstallationId);
}
function U(e) {
    let { inviteCode: t } = e,
        n = S(t);
    if (!T.has(n)) return !1;
    (T = new Map(T)).delete(n);
}
function G(e) {
    let { inviteCode: t } = e;
    return null != t && U({ inviteCode: t });
}
function F() {
    if (0 === T.size) return !1;
    T = new Map();
}
class V extends c.Ay.Store {
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
              ? m[e]?.[r]
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
let B = new V(d.h, {
    CONNECTION_OPEN: y,
    CHANNEL_DELETE: v,
    FRIEND_INVITE_CREATE_SUCCESS: O,
    FRIEND_INVITE_CREATE_FAILURE: b,
    FRIEND_INVITE_REVOKE_SUCCESS: D,
    INSTANT_INVITE_CREATE_SUCCESS: N,
    INSTANT_INVITE_CREATE_FAILURE: C,
    INSTANT_INVITE_REVOKE_SUCCESS: R,
    FRIEND_INVITE_REVOKE_REQUEST: L,
    FRIEND_INVITE_CREATE_REQUEST: w,
    FRIEND_INVITES_FETCH_REQUEST: M,
    FRIEND_INVITES_FETCH_RESPONSE: x,
    INSTANT_INVITE_CLEAR: P,
    INSTANT_INVITE_RECEIVED_INSTALLATION_ID_SET: k,
    INSTANT_INVITE_RECEIVED_INSTALLATION_ID_CLEAR: U,
    INVITE_MODAL_CLOSE: G,
    LOGOUT: F,
});

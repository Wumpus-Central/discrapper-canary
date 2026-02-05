"use strict";
let r;
n.d(t, { A: () => M });
var i = n(177029),
    a = n.n(i),
    s = n(818125),
    o = n.n(s),
    l = n(725918),
    u = n.n(l),
    c = n(311907),
    d = n(73153),
    _ = n(671759),
    f = n(172799);
let p = {},
    h = {},
    m = {},
    g = {},
    E = !1,
    A = !1,
    I = !1;
function T() {
    (p = {}), (h = {}), (m = {}), (g = {}), (r = null), (A = !1), (I = !1), (E = !1);
}
function y(e) {
    let { channel: t } = e;
    delete p[t.id], delete h[t.id], delete m[t.id];
}
function S(e) {
    let { channelId: t, invite: n } = e,
        r = _.A.createFromServer(n);
    r.targetType === f.yV.STREAM && null != r.targetUser
        ? (null == h[t] && (h[t] = {}), (h[t][String(r.targetUser.id)] = r))
        : r.targetType === f.yV.EMBEDDED_APPLICATION && null != r.targetApplication
          ? (null == m[t] && (m[t] = {}), (m[t][r.targetApplication.id] = r))
          : (p[t] = r);
}
function v(e) {
    let { channelId: t } = e;
    p[t] = null;
}
function C(e) {
    let { channelId: t } = e;
    p[t] = null;
}
function b(e) {
    (g[e.invite.code] = _.A.createFromServer(e.invite)),
        (r = a()(o()(u()(Object.values(g), "createdAt"))) ?? null),
        (I = !1);
}
function N() {
    I = !1;
}
function R(e) {
    null != e.invites &&
        e.invites.forEach((e) => {
            null != g[e.code] && delete g[e.code];
        }),
        (r = a()(o()(u()(Object.values(g), "createdAt"))) ?? null),
        (A = !1);
}
function O() {
    A = !0;
}
function D() {
    I = !0;
}
function L() {
    E = !0;
}
function w(e) {
    (g = {}),
        e.invites.forEach((e) => {
            g[e.code] = _.A.createFromServer(e);
        }),
        (r = a()(o()(u()(Object.values(g), "createdAt"))) ?? null),
        (E = !1);
}
function x(e) {
    delete p[e.channelId];
}
class P extends c.Ay.Store {
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
        return E;
    }
    canRevokeFriendInvite() {
        return null != r && !A && !I;
    }
}
let M = new P(d.h, {
    CONNECTION_OPEN: T,
    CHANNEL_DELETE: y,
    FRIEND_INVITE_CREATE_SUCCESS: b,
    FRIEND_INVITE_CREATE_FAILURE: N,
    FRIEND_INVITE_REVOKE_SUCCESS: R,
    INSTANT_INVITE_CREATE_SUCCESS: S,
    INSTANT_INVITE_CREATE_FAILURE: v,
    INSTANT_INVITE_REVOKE_SUCCESS: C,
    FRIEND_INVITE_REVOKE_REQUEST: O,
    FRIEND_INVITE_CREATE_REQUEST: D,
    FRIEND_INVITES_FETCH_REQUEST: L,
    FRIEND_INVITES_FETCH_RESPONSE: w,
    INSTANT_INVITE_CLEAR: x,
});

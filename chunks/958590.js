let r;
n.d(t, {
    A: () => k,
});
var i,
    a = n(177029),
    s = n.n(a),
    o = n(818125),
    l = n.n(o),
    c = n(725918),
    u = n.n(c),
    d = n(311907),
    f = n(73153),
    p = n(671759),
    _ = n(172799);

function h(e, t, n) {
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
let m = {},
    g = {},
    E = {},
    b = {},
    y = !1,
    O = !1,
    A = !1;

function v() {
    (m = {}), (g = {}), (E = {}), (b = {}), (r = null), (O = !1), (A = !1), (y = !1);
}

function S(e) {
    let { channel: t } = e;
    delete m[t.id], delete g[t.id], delete E[t.id];
}

function I(e) {
    let { channelId: t, invite: n } = e,
        r = p.A.createFromServer(n);
    r.targetType === _.yV.STREAM && null != r.targetUser
        ? (null == g[t] && (g[t] = {}), (g[t][String(r.targetUser.id)] = r))
        : r.targetType === _.yV.EMBEDDED_APPLICATION && null != r.targetApplication
          ? (null == E[t] && (E[t] = {}), (E[t][r.targetApplication.id] = r))
          : (m[t] = r);
}

function T(e) {
    let { channelId: t } = e;
    m[t] = null;
}

function C(e) {
    let { channelId: t } = e;
    m[t] = null;
}

function N(e) {
    var t;
    (b[e.invite.code] = p.A.createFromServer(e.invite)),
        (r = null != (t = s()(l()(u()(Object.values(b), "createdAt")))) ? t : null),
        (A = !1);
}

function R() {
    A = !1;
}

function w(e) {
    var t;
    null != e.invites &&
        e.invites.forEach((e) => {
            null != b[e.code] && delete b[e.code];
        }),
        (r = null != (t = s()(l()(u()(Object.values(b), "createdAt")))) ? t : null),
        (O = !1);
}

function P() {
    O = !0;
}

function D() {
    A = !0;
}

function x() {
    y = !0;
}

function L(e) {
    var t;
    (b = {}),
        e.invites.forEach((e) => {
            b[e.code] = p.A.createFromServer(e);
        }),
        (r = null != (t = s()(l()(u()(Object.values(b), "createdAt")))) ? t : null),
        (y = !1);
}

function j(e) {
    delete m[e.channelId];
}
class M extends (i = d.Ay.Store) {
    getInvite(e) {
        var t, n;
        let {
            targetType: r,
            targetUserId: i,
            targetApplicationId: a,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return r === _.yV.STREAM && null != i
            ? null == (t = g[e])
                ? void 0
                : t[i]
            : r === _.yV.EMBEDDED_APPLICATION && null != a
              ? null == (n = E[e])
                  ? void 0
                  : n[a]
              : m[e];
    }
    getFriendInvite() {
        return r;
    }
    getFriendInvitesFetching() {
        return y;
    }
    canRevokeFriendInvite() {
        return null != r && !O && !A;
    }
}
h(M, "displayName", "InstantInviteStore");
let k = new M(f.h, {
    CONNECTION_OPEN: v,
    CHANNEL_DELETE: S,
    FRIEND_INVITE_CREATE_SUCCESS: N,
    FRIEND_INVITE_CREATE_FAILURE: R,
    FRIEND_INVITE_REVOKE_SUCCESS: w,
    INSTANT_INVITE_CREATE_SUCCESS: I,
    INSTANT_INVITE_CREATE_FAILURE: T,
    INSTANT_INVITE_REVOKE_SUCCESS: C,
    FRIEND_INVITE_REVOKE_REQUEST: P,
    FRIEND_INVITE_CREATE_REQUEST: D,
    FRIEND_INVITES_FETCH_REQUEST: x,
    FRIEND_INVITES_FETCH_RESPONSE: L,
    INSTANT_INVITE_CLEAR: j,
});

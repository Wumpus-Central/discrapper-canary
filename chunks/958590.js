let i;
n.d(t, { A: () => N });
var l = n(177029),
    a = n.n(l),
    r = n(818125),
    s = n.n(r),
    o = n(725918),
    d = n.n(o),
    u = n(17928),
    c = n(228366),
    h = n(671759),
    E = n(172799);
let A = {},
    _ = {},
    p = {},
    g = {},
    f = !1,
    I = !1,
    S = !1,
    T = new Map();
function m(e) {
    return e.toLowerCase();
}
function C(e) {
    let { inviteCode: t } = e,
        n = m(t);
    if (!T.has(n)) return !1;
    (T = new Map(T)).delete(n);
}
class O extends u.Ay.Store {
    static displayName = "InstantInviteStore";
    getInvite(e) {
        let {
            targetType: t,
            targetUserId: n,
            targetApplicationId: i,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return t === E.yV.STREAM && null != n
            ? _[e]?.[n]
            : t === E.yV.EMBEDDED_APPLICATION && null != i
              ? p[e]?.[i]
              : A[e];
    }
    getFriendInvite() {
        return i;
    }
    getFriendInvitesFetching() {
        return f;
    }
    canRevokeFriendInvite() {
        return null != i && !I && !S;
    }
    getReceivedInstallationIdForInviteCode(e) {
        return T.get(m(e));
    }
}
let N = new O(c.h, {
    CONNECTION_OPEN: function () {
        (A = {}), (_ = {}), (p = {}), (g = {}), (i = null), (I = !1), (S = !1), (f = !1);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        delete A[t.id], delete _[t.id], delete p[t.id];
    },
    FRIEND_INVITE_CREATE_SUCCESS: function (e) {
        (g[e.invite.code] = h.A.createFromServer(e.invite)),
            (i = a()(s()(d()(Object.values(g), "createdAt"))) ?? null),
            (S = !1);
    },
    FRIEND_INVITE_CREATE_FAILURE: function () {
        S = !1;
    },
    FRIEND_INVITE_REVOKE_SUCCESS: function (e) {
        null != e.invites &&
            e.invites.forEach((e) => {
                null != g[e.code] && delete g[e.code];
            }),
            (i = a()(s()(d()(Object.values(g), "createdAt"))) ?? null),
            (I = !1);
    },
    INSTANT_INVITE_CREATE_SUCCESS: function (e) {
        let { channelId: t, invite: n } = e,
            i = h.A.createFromServer(n);
        i.targetType === E.yV.STREAM && null != i.targetUser
            ? (null == _[t] && (_[t] = {}), (_[t][String(i.targetUser.id)] = i))
            : i.targetType === E.yV.EMBEDDED_APPLICATION && null != i.targetApplication
              ? (null == p[t] && (p[t] = {}), (p[t][i.targetApplication.id] = i))
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
        I = !0;
    },
    FRIEND_INVITE_CREATE_REQUEST: function () {
        S = !0;
    },
    FRIEND_INVITES_FETCH_REQUEST: function () {
        f = !0;
    },
    FRIEND_INVITES_FETCH_RESPONSE: function (e) {
        (g = {}),
            e.invites.forEach((e) => {
                g[e.code] = h.A.createFromServer(e);
            }),
            (i = a()(s()(d()(Object.values(g), "createdAt"))) ?? null),
            (f = !1);
    },
    INSTANT_INVITE_CLEAR: function (e) {
        delete A[e.channelId];
    },
    INSTANT_INVITE_RECEIVED_INSTALLATION_ID_SET: function (e) {
        (T = new Map(T)).set(m(e.inviteCode), e.receivedInstallationId);
    },
    INSTANT_INVITE_RECEIVED_INSTALLATION_ID_CLEAR: C,
    INVITE_MODAL_CLOSE: function (e) {
        let { inviteCode: t } = e;
        return null != t && C({ inviteCode: t });
    },
    LOGOUT: function () {
        if (0 === T.size) return !1;
        T = new Map();
    },
});

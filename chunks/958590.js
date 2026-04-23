let i;
n.d(t, { A: () => N });
var r = n(177029),
    l = n.n(r),
    a = n(818125),
    s = n.n(a),
    o = n(725918),
    d = n.n(o),
    u = n(17928),
    c = n(228366),
    h = n(671759),
    E = n(172799);
let _ = {},
    p = {},
    A = {},
    f = {},
    g = !1,
    I = !1,
    T = !1,
    S = new Map();
function m(e) {
    return e.toLowerCase();
}
function O(e) {
    let { inviteCode: t } = e,
        n = m(t);
    if (!S.has(n)) return !1;
    (S = new Map(S)).delete(n);
}
class C extends u.Ay.Store {
    static displayName = "InstantInviteStore";
    getInvite(e) {
        let {
            targetType: t,
            targetUserId: n,
            targetApplicationId: i,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return t === E.yV.STREAM && null != n
            ? p[e]?.[n]
            : t === E.yV.EMBEDDED_APPLICATION && null != i
              ? A[e]?.[i]
              : _[e];
    }
    getFriendInvite() {
        return i;
    }
    getFriendInvitesFetching() {
        return g;
    }
    canRevokeFriendInvite() {
        return null != i && !I && !T;
    }
    getReceivedInstallationIdForInviteCode(e) {
        return S.get(m(e));
    }
}
let N = new C(c.h, {
    CONNECTION_OPEN: function () {
        (_ = {}), (p = {}), (A = {}), (f = {}), (i = null), (I = !1), (T = !1), (g = !1);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        delete _[t.id], delete p[t.id], delete A[t.id];
    },
    FRIEND_INVITE_CREATE_SUCCESS: function (e) {
        (f[e.invite.code] = h.A.createFromServer(e.invite)),
            (i = l()(s()(d()(Object.values(f), "createdAt"))) ?? null),
            (T = !1);
    },
    FRIEND_INVITE_CREATE_FAILURE: function () {
        T = !1;
    },
    FRIEND_INVITE_REVOKE_SUCCESS: function (e) {
        null != e.invites &&
            e.invites.forEach((e) => {
                null != f[e.code] && delete f[e.code];
            }),
            (i = l()(s()(d()(Object.values(f), "createdAt"))) ?? null),
            (I = !1);
    },
    INSTANT_INVITE_CREATE_SUCCESS: function (e) {
        let { channelId: t, invite: n } = e,
            i = h.A.createFromServer(n);
        i.targetType === E.yV.STREAM && null != i.targetUser
            ? (null == p[t] && (p[t] = {}), (p[t][String(i.targetUser.id)] = i))
            : i.targetType === E.yV.EMBEDDED_APPLICATION && null != i.targetApplication
              ? (null == A[t] && (A[t] = {}), (A[t][i.targetApplication.id] = i))
              : (_[t] = i);
    },
    INSTANT_INVITE_CREATE_FAILURE: function (e) {
        let { channelId: t } = e;
        _[t] = null;
    },
    INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
        let { channelId: t } = e;
        _[t] = null;
    },
    FRIEND_INVITE_REVOKE_REQUEST: function () {
        I = !0;
    },
    FRIEND_INVITE_CREATE_REQUEST: function () {
        T = !0;
    },
    FRIEND_INVITES_FETCH_REQUEST: function () {
        g = !0;
    },
    FRIEND_INVITES_FETCH_RESPONSE: function (e) {
        (f = {}),
            e.invites.forEach((e) => {
                f[e.code] = h.A.createFromServer(e);
            }),
            (i = l()(s()(d()(Object.values(f), "createdAt"))) ?? null),
            (g = !1);
    },
    INSTANT_INVITE_CLEAR: function (e) {
        delete _[e.channelId];
    },
    INSTANT_INVITE_RECEIVED_INSTALLATION_ID_SET: function (e) {
        (S = new Map(S)).set(m(e.inviteCode), e.receivedInstallationId);
    },
    INSTANT_INVITE_RECEIVED_INSTALLATION_ID_CLEAR: O,
    INVITE_MODAL_CLOSE: function (e) {
        let { inviteCode: t } = e;
        return null != t && O({ inviteCode: t });
    },
    LOGOUT: function () {
        if (0 === S.size) return !1;
        S = new Map();
    },
});

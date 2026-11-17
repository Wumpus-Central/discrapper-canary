let i;
var r = n(189613),
    a = n.n(r),
    s = n(641733),
    l = n.n(s),
    o = n(63494),
    d = n.n(o),
    c = n(294630),
    u = n(855986),
    _ = n(73153),
    E = n(671759);
let A = {},
    f = {},
    h = {},
    I = {},
    p = !1,
    m = !1,
    g = !1,
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
class C extends u.Ay.Store {
    static displayName = "InstantInviteStore";
    getInvite(e) {
        let {
            targetType: t,
            targetUserId: n,
            targetApplicationId: i,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return t === c.y.STREAM && null != n
            ? f[e]?.[n]
            : t === c.y.EMBEDDED_APPLICATION && null != i
              ? h[e]?.[i]
              : A[e];
    }
    getFriendInvite() {
        return i;
    }
    getFriendInvitesFetching() {
        return p;
    }
    canRevokeFriendInvite() {
        return null != i && !m && !g;
    }
    getReceivedInstallationIdForInviteCode(e) {
        return T.get(S(e));
    }
}
let O = new C(_.h, {
    CONNECTION_OPEN: function () {
        ((A = {}), (f = {}), (h = {}), (I = {}), (i = null), (m = !1), (g = !1), (p = !1));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        (delete A[t.id], delete f[t.id], delete h[t.id]);
    },
    FRIEND_INVITE_CREATE_SUCCESS: function (e) {
        ((I[e.invite.code] = E.A.createFromServer(e.invite)),
            (i = a()(l()(d()(Object.values(I), "createdAt"))) ?? null),
            (g = !1));
    },
    FRIEND_INVITE_CREATE_FAILURE: function () {
        g = !1;
    },
    FRIEND_INVITE_REVOKE_SUCCESS: function (e) {
        (null != e.invites &&
            e.invites.forEach((e) => {
                null != I[e.code] && delete I[e.code];
            }),
            (i = a()(l()(d()(Object.values(I), "createdAt"))) ?? null),
            (m = !1));
    },
    INSTANT_INVITE_CREATE_SUCCESS: function (e) {
        let { channelId: t, invite: n } = e,
            i = E.A.createFromServer(n);
        i.targetType === c.y.STREAM && null != i.targetUser
            ? (null == f[t] && (f[t] = {}), (f[t][String(i.targetUser.id)] = i))
            : i.targetType === c.y.EMBEDDED_APPLICATION && null != i.targetApplication
              ? (null == h[t] && (h[t] = {}), (h[t][i.targetApplication.id] = i))
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
        m = !0;
    },
    FRIEND_INVITE_CREATE_REQUEST: function () {
        g = !0;
    },
    FRIEND_INVITES_FETCH_REQUEST: function () {
        p = !0;
    },
    FRIEND_INVITES_FETCH_RESPONSE: function (e) {
        ((I = {}),
            e.invites.forEach((e) => {
                I[e.code] = E.A.createFromServer(e);
            }),
            (i = a()(l()(d()(Object.values(I), "createdAt"))) ?? null),
            (p = !1));
    },
    INSTANT_INVITE_CLEAR: function (e) {
        delete A[e.channelId];
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
n.d(t, {}, { A: O });

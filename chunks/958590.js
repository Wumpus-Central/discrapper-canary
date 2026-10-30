let i;
n.d(t, { A: () => O });
var r = n(189613),
    a = n.n(r),
    s = n(641733),
    l = n.n(s),
    o = n(63494),
    d = n.n(o),
    c = n(294630),
    u = n(17928),
    _ = n(73153),
    E = n(671759);
let A = {},
    h = {},
    f = {},
    I = {},
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
class C extends u.Ay.Store {
    static displayName = "InstantInviteStore";
    getInvite(e) {
        let {
            targetType: t,
            targetUserId: n,
            targetApplicationId: i,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return t === c.y.STREAM && null != n
            ? h[e]?.[n]
            : t === c.y.EMBEDDED_APPLICATION && null != i
              ? f[e]?.[i]
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
let O = new C(_.h, {
    CONNECTION_OPEN: function () {
        ((A = {}), (h = {}), (f = {}), (I = {}), (i = null), (T = !1), (m = !1), (p = !1));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        (delete A[t.id], delete h[t.id], delete f[t.id]);
    },
    FRIEND_INVITE_CREATE_SUCCESS: function (e) {
        ((I[e.invite.code] = E.A.createFromServer(e.invite)),
            (i = a()(l()(d()(Object.values(I), "createdAt"))) ?? null),
            (m = !1));
    },
    FRIEND_INVITE_CREATE_FAILURE: function () {
        m = !1;
    },
    FRIEND_INVITE_REVOKE_SUCCESS: function (e) {
        (null != e.invites &&
            e.invites.forEach((e) => {
                null != I[e.code] && delete I[e.code];
            }),
            (i = a()(l()(d()(Object.values(I), "createdAt"))) ?? null),
            (T = !1));
    },
    INSTANT_INVITE_CREATE_SUCCESS: function (e) {
        let { channelId: t, invite: n } = e,
            i = E.A.createFromServer(n);
        i.targetType === c.y.STREAM && null != i.targetUser
            ? (null == h[t] && (h[t] = {}), (h[t][String(i.targetUser.id)] = i))
            : i.targetType === c.y.EMBEDDED_APPLICATION && null != i.targetApplication
              ? (null == f[t] && (f[t] = {}), (f[t][i.targetApplication.id] = i))
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

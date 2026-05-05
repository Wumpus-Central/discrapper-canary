"use strict";
n.d(t, { A: () => M }), n(321073);
var i = n(989349),
    r = n.n(i),
    s = n(17928),
    a = n(713402),
    o = n(228366),
    l = n(287809),
    u = n(927813),
    c = n(821124),
    d = n(513461),
    _ = n(212455);
let f = new Map(),
    h = {};
function p(e, t) {
    (h[e] = t), f.set(e, r()());
}
function E(e, t, n) {
    if (t !== n && null != t) {
        if (t === d.B5.SUBMITTED) {
            let t = h[e];
            p(e, t + 1);
        }
        if (n === d.B5.SUBMITTED) {
            let t = h[e];
            p(e, Math.max(0, t - 1));
        }
    }
}
let m = {},
    g = !1,
    A = (e, t) => `guild-${e}-${t}`;
function I(e) {
    let t,
        n = [];
    return n.push(((t = e.joinRequestId), `guild-join-request=${t}`)), n.push(A(e.guildId, e.applicationStatus)), n;
}
let T = new a.J(I, (e) => `${e.joinRequestId}`),
    S = new a.J(I, (e) => `${e.joinRequestId}`),
    N = new a.J(I, (e) => `${e.actionedAt}`);
function y(e) {
    return T.get(e);
}
function C(e) {
    (D[e.joinRequestId] = e),
        T.set(e.joinRequestId, e),
        (0, c.ar)(e.applicationStatus) && (N.delete(e.joinRequestId), S.set(e.joinRequestId, e)),
        (0, c.mf)(e.applicationStatus) && (S.delete(e.joinRequestId), N.set(e.joinRequestId, e));
}
function v(e) {
    let { guildId: t, request: n } = e,
        i = (0, _.j)(n),
        r = l.default.getCurrentUser();
    if (null == r || i.userId === r.id) return !1;
    let s = y(i.joinRequestId)?.applicationStatus;
    return E(t, i.applicationStatus, s), C(i), !0;
}
let O = {},
    R = {},
    b = {},
    D = {},
    L = 10 * u.A.Seconds.MINUTE;
class w extends s.Ay.Store {
    initialize() {
        this.waitFor(l.default);
    }
    static displayName = "GuildJoinRequestStoreV2";
    getRequest(e) {
        return D[e];
    }
    getRequests(e, t) {
        let n = A(e, t);
        return (0, c.mf)(t) ? N.values(n) : (0, c.ar)(t) ? S.values(n) : T.values(n);
    }
    getSubmittedGuildJoinRequestTotal(e) {
        return h[e];
    }
    isFetching() {
        return g;
    }
    hasFetched(e) {
        if (!f.has(e)) return !1;
        let t = f.get(e);
        return null != t && r()().diff(t, "seconds") < L;
    }
    getSelectedApplicationTab(e) {
        let t = d.B5.SUBMITTED;
        return O[e] ?? t;
    }
    getSelectedSortOrder(e) {
        return R[e] ?? d._e.TIMESTAMP_DESC;
    }
    getSelectedGuildJoinRequest(e) {
        let t = b[e];
        return null != t ? y(t.joinRequestId) : null;
    }
    getRequestsForUser(e, t) {
        let n = m[`${e}:${t}`];
        return null == n ? null : n.map((e) => y(e)).filter((e) => null != e);
    }
}
let M = new w(o.h, {
    GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS: function (e) {
        let { joinRequest: t } = e;
        C(t);
    },
    GUILD_JOIN_REQUESTS_FOR_USER_FETCH_SUCCESS: function (e) {
        let { guildId: t, userId: n, requests: i } = e;
        i.forEach(C), (m[`${t}:${n}`] = i.map((e) => e.joinRequestId));
    },
    GUILD_JOIN_REQUESTS_FETCH_SUCCESS: function (e) {
        let { status: t, requests: n, total: i, guildId: r } = e;
        (g = !1),
            t === d.B5.SUBMITTED && p(r, i),
            n.forEach((e) => {
                C(e);
            });
    },
    GUILD_JOIN_REQUESTS_FETCH_START: function () {
        g = !0;
    },
    GUILD_JOIN_REQUESTS_FETCH_FAILURE: function () {
        g = !1;
    },
    GUILD_JOIN_REQUEST_CREATE: v,
    GUILD_JOIN_REQUEST_UPDATE: v,
    GUILD_JOIN_REQUEST_DELETE: function (e) {
        let { id: t, guildId: n } = e,
            i = y(t);
        null != i && (E(n, "DELETED", i.applicationStatus), delete D[t], T.delete(t), S.delete(t), N.delete(t));
    },
    GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: function (e) {
        let { guildId: t, applicationTab: n } = e;
        n !== O[t] && (O[t] = n);
    },
    GUILD_JOIN_REQUESTS_SET_SORT_ORDER: function (e) {
        let { guildId: t, sortOrder: n, applicationStatus: i } = e;
        n !== R[t] && ((R[t] = n), (0, c.mf)(i) && N.clear(), (0, c.ar)(i) && S.clear());
    },
    GUILD_JOIN_REQUESTS_SET_SELECTED: function (e) {
        let { guildId: t, request: n } = e;
        b[t] = n;
    },
});

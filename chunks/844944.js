n(321073);
var i = n(536637),
    r = n.n(i),
    a = n(855986),
    s = n(713402),
    l = n(73153),
    o = n(287809),
    d = n(927813),
    c = n(821124),
    u = n(513461),
    _ = n(212455);
let E = new Map(),
    A = {};
function f(e, t) {
    ((A[e] = t), E.set(e, r()()));
}
function h(e, t, n) {
    if (t !== n && null != t) {
        if (t === u.B5.SUBMITTED) {
            let t = A[e];
            f(e, t + 1);
        }
        if (n === u.B5.SUBMITTED) {
            let t = A[e];
            f(e, Math.max(0, t - 1));
        }
    }
}
let I = {},
    p = new Set(),
    m = (e) => `guild-join-request=${e}`,
    g = (e, t) => `guild-${e}-${t}`;
function T(e) {
    let t = [];
    return (t.push(m(e.joinRequestId)), t.push(g(e.guildId, e.applicationStatus)), t);
}
let S = new s.J(T, (e) => `${e.joinRequestId}`),
    N = new s.J(T, (e) => `${e.joinRequestId}`),
    C = new s.J(T, (e) => `${e.actionedAt}`);
function O(e) {
    return S.get(e);
}
function R(e) {
    ((v[e.joinRequestId] = e),
        S.set(e.joinRequestId, e),
        (0, c.ar)(e.applicationStatus) && (C.delete(e.joinRequestId), N.set(e.joinRequestId, e)),
        (0, c.mf)(e.applicationStatus) && (N.delete(e.joinRequestId), C.set(e.joinRequestId, e)));
}
function L(e) {
    let { guildId: t, request: n } = e,
        i = (0, _.j)(n),
        r = o.default.getCurrentUser();
    if (null == r || i.userId === r.id) return !1;
    let a = O(i.joinRequestId)?.applicationStatus;
    return (h(t, i.applicationStatus, a), R(i), !0);
}
let y = {},
    D = {},
    b = {},
    v = {},
    P = 10 * d.A.Seconds.MINUTE;
class M extends a.Ay.Store {
    initialize() {
        this.waitFor(o.default);
    }
    static displayName = "GuildJoinRequestStoreV2";
    getRequest(e) {
        return v[e];
    }
    getRequests(e, t) {
        let n = g(e, t);
        return (0, c.mf)(t) ? C.values(n) : (0, c.ar)(t) ? N.values(n) : S.values(n);
    }
    getSubmittedGuildJoinRequestTotal(e) {
        return A[e];
    }
    isFetching(e, t) {
        return p.has(g(e, t));
    }
    hasFetched(e) {
        if (!E.has(e)) return !1;
        let t = E.get(e);
        return null != t && r()().diff(t, "seconds") < P;
    }
    getSelectedApplicationTab(e) {
        let t = u.B5.SUBMITTED;
        return y[e] ?? t;
    }
    getSelectedSortOrder(e) {
        return D[e] ?? u._e.TIMESTAMP_DESC;
    }
    getSelectedGuildJoinRequest(e) {
        let t = b[e];
        return null != t ? O(t.joinRequestId) : null;
    }
    getRequestsForUser(e, t) {
        let n = I[`${e}:${t}`];
        return null == n ? null : n.map((e) => O(e)).filter((e) => null != e);
    }
}
let U = new M(l.h, {
    GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS: function (e) {
        let { joinRequest: t } = e;
        R(t);
    },
    GUILD_JOIN_REQUESTS_FOR_USER_FETCH_SUCCESS: function (e) {
        let { guildId: t, userId: n, requests: i } = e;
        (i.forEach(R), (I[`${t}:${n}`] = i.map((e) => e.joinRequestId)));
    },
    GUILD_JOIN_REQUESTS_FETCH_SUCCESS: function (e) {
        let { status: t, requests: n, total: i, guildId: r } = e;
        (p.delete(g(r, t)),
            t === u.B5.SUBMITTED && f(r, i),
            n.forEach((e) => {
                R(e);
            }));
    },
    GUILD_JOIN_REQUESTS_FETCH_START: function (e) {
        let { guildId: t, status: n } = e;
        p.add(g(t, n));
    },
    GUILD_JOIN_REQUESTS_FETCH_FAILURE: function (e) {
        let { guildId: t, status: n } = e;
        p.delete(g(t, n));
    },
    GUILD_JOIN_REQUEST_CREATE: L,
    GUILD_JOIN_REQUEST_UPDATE: L,
    GUILD_JOIN_REQUEST_DELETE: function (e) {
        let { id: t, guildId: n } = e,
            i = O(t);
        null != i && (h(n, "DELETED", i.applicationStatus), delete v[t], S.delete(t), N.delete(t), C.delete(t));
    },
    GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: function (e) {
        let { guildId: t, applicationTab: n } = e;
        n !== y[t] && (y[t] = n);
    },
    GUILD_JOIN_REQUESTS_SET_SORT_ORDER: function (e) {
        let { guildId: t, sortOrder: n, applicationStatus: i } = e;
        n !== D[t] && ((D[t] = n), (0, c.mf)(i) && C.clear(), (0, c.ar)(i) && N.clear());
    },
    GUILD_JOIN_REQUESTS_SET_SELECTED: function (e) {
        let { guildId: t, request: n } = e;
        b[t] = n;
    },
});
n.d(t, {}, { A: U });

"use strict";
n.d(t, { A: () => P }), n(321073);
var i = n(989349),
    r = n.n(i),
    a = n(17928),
    s = n(713402),
    l = n(228366),
    o = n(287809),
    d = n(927813),
    c = n(821124),
    u = n(513461),
    _ = n(212455);
let E = new Map(),
    A = {};
function h(e, t) {
    (A[e] = t), E.set(e, r()());
}
function I(e, t, n) {
    if (t !== n && null != t) {
        if (t === u.B5.SUBMITTED) {
            let t = A[e];
            h(e, t + 1);
        }
        if (n === u.B5.SUBMITTED) {
            let t = A[e];
            h(e, Math.max(0, t - 1));
        }
    }
}
let f = {},
    p = !1,
    T = (e, t) => `guild-${e}-${t}`;
function m(e) {
    let t,
        n = [];
    return n.push(((t = e.joinRequestId), `guild-join-request=${t}`)), n.push(T(e.guildId, e.applicationStatus)), n;
}
let g = new s.J(m, (e) => `${e.joinRequestId}`),
    S = new s.J(m, (e) => `${e.joinRequestId}`),
    N = new s.J(m, (e) => `${e.actionedAt}`);
function C(e) {
    return g.get(e);
}
function O(e) {
    (v[e.joinRequestId] = e),
        g.set(e.joinRequestId, e),
        (0, c.ar)(e.applicationStatus) && (N.delete(e.joinRequestId), S.set(e.joinRequestId, e)),
        (0, c.mf)(e.applicationStatus) && (S.delete(e.joinRequestId), N.set(e.joinRequestId, e));
}
function R(e) {
    let { guildId: t, request: n } = e,
        i = (0, _.j)(n),
        r = o.default.getCurrentUser();
    if (null == r || i.userId === r.id) return !1;
    let a = C(i.joinRequestId)?.applicationStatus;
    return I(t, i.applicationStatus, a), O(i), !0;
}
let L = {},
    y = {},
    D = {},
    v = {},
    b = 10 * d.A.Seconds.MINUTE;
class M extends a.Ay.Store {
    initialize() {
        this.waitFor(o.default);
    }
    static displayName = "GuildJoinRequestStoreV2";
    getRequest(e) {
        return v[e];
    }
    getRequests(e, t) {
        let n = T(e, t);
        return (0, c.mf)(t) ? N.values(n) : (0, c.ar)(t) ? S.values(n) : g.values(n);
    }
    getSubmittedGuildJoinRequestTotal(e) {
        return A[e];
    }
    isFetching() {
        return p;
    }
    hasFetched(e) {
        if (!E.has(e)) return !1;
        let t = E.get(e);
        return null != t && r()().diff(t, "seconds") < b;
    }
    getSelectedApplicationTab(e) {
        let t = u.B5.SUBMITTED;
        return L[e] ?? t;
    }
    getSelectedSortOrder(e) {
        return y[e] ?? u._e.TIMESTAMP_DESC;
    }
    getSelectedGuildJoinRequest(e) {
        let t = D[e];
        return null != t ? C(t.joinRequestId) : null;
    }
    getRequestsForUser(e, t) {
        let n = f[`${e}:${t}`];
        return null == n ? null : n.map((e) => C(e)).filter((e) => null != e);
    }
}
let P = new M(l.h, {
    GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS: function (e) {
        let { joinRequest: t } = e;
        O(t);
    },
    GUILD_JOIN_REQUESTS_FOR_USER_FETCH_SUCCESS: function (e) {
        let { guildId: t, userId: n, requests: i } = e;
        i.forEach(O), (f[`${t}:${n}`] = i.map((e) => e.joinRequestId));
    },
    GUILD_JOIN_REQUESTS_FETCH_SUCCESS: function (e) {
        let { status: t, requests: n, total: i, guildId: r } = e;
        (p = !1),
            t === u.B5.SUBMITTED && h(r, i),
            n.forEach((e) => {
                O(e);
            });
    },
    GUILD_JOIN_REQUESTS_FETCH_START: function () {
        p = !0;
    },
    GUILD_JOIN_REQUESTS_FETCH_FAILURE: function () {
        p = !1;
    },
    GUILD_JOIN_REQUEST_CREATE: R,
    GUILD_JOIN_REQUEST_UPDATE: R,
    GUILD_JOIN_REQUEST_DELETE: function (e) {
        let { id: t, guildId: n } = e,
            i = C(t);
        null != i && (I(n, "DELETED", i.applicationStatus), delete v[t], g.delete(t), S.delete(t), N.delete(t));
    },
    GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: function (e) {
        let { guildId: t, applicationTab: n } = e;
        n !== L[t] && (L[t] = n);
    },
    GUILD_JOIN_REQUESTS_SET_SORT_ORDER: function (e) {
        let { guildId: t, sortOrder: n, applicationStatus: i } = e;
        n !== y[t] && ((y[t] = n), (0, c.mf)(i) && N.clear(), (0, c.ar)(i) && S.clear());
    },
    GUILD_JOIN_REQUESTS_SET_SELECTED: function (e) {
        let { guildId: t, request: n } = e;
        D[t] = n;
    },
});

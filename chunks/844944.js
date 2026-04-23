"use strict";
n.d(t, { A: () => b }), n(321073);
var i = n(989349),
    r = n.n(i),
    s = n(17928),
    a = n(713402),
    o = n(228366),
    l = n(287809),
    d = n(927813),
    _ = n(821124),
    u = n(513461),
    c = n(212455);
let E = new Map(),
    h = {};
function m(e, t) {
    (h[e] = t), E.set(e, r()());
}
function f(e, t, n) {
    if (t !== n && null != t) {
        if (t === u.B5.SUBMITTED) {
            let t = h[e];
            m(e, t + 1);
        }
        if (n === u.B5.SUBMITTED) {
            let t = h[e];
            m(e, Math.max(0, t - 1));
        }
    }
}
let g = !1,
    p = (e, t) => `guild-${e}-${t}`;
function A(e) {
    let t,
        n = [];
    return n.push(((t = e.joinRequestId), `guild-join-request=${t}`)), n.push(p(e.guildId, e.applicationStatus)), n;
}
let I = new a.J(A, (e) => `${e.joinRequestId}`),
    T = new a.J(A, (e) => `${e.joinRequestId}`),
    S = new a.J(A, (e) => `${e.actionedAt}`);
function N(e) {
    (v[e.joinRequestId] = e),
        I.set(e.joinRequestId, e),
        (0, _.ar)(e.applicationStatus) && (S.delete(e.joinRequestId), T.set(e.joinRequestId, e)),
        (0, _.mf)(e.applicationStatus) && (T.delete(e.joinRequestId), S.set(e.joinRequestId, e));
}
function C(e) {
    var t;
    let { guildId: n, request: i } = e,
        r = (0, c.j)(i),
        s = l.default.getCurrentUser();
    if (null == s || r.userId === s.id) return !1;
    let a = ((t = r.joinRequestId), I.get(t))?.applicationStatus;
    return f(n, r.applicationStatus, a), N(r), !0;
}
let R = {},
    O = {},
    y = {},
    v = {},
    D = 10 * d.A.Seconds.MINUTE;
class L extends s.Ay.Store {
    initialize() {
        this.waitFor(l.default);
    }
    static displayName = "GuildJoinRequestStoreV2";
    getRequest(e) {
        return v[e];
    }
    getRequests(e, t) {
        let n = p(e, t);
        return (0, _.mf)(t) ? S.values(n) : (0, _.ar)(t) ? T.values(n) : I.values(n);
    }
    getSubmittedGuildJoinRequestTotal(e) {
        return h[e];
    }
    isFetching() {
        return g;
    }
    hasFetched(e) {
        if (!E.has(e)) return !1;
        let t = E.get(e);
        return null != t && r()().diff(t, "seconds") < D;
    }
    getSelectedApplicationTab(e) {
        let t = u.B5.SUBMITTED;
        return R[e] ?? t;
    }
    getSelectedSortOrder(e) {
        return O[e] ?? u._e.TIMESTAMP_DESC;
    }
    getSelectedGuildJoinRequest(e) {
        var t;
        let n = y[e];
        return null != n ? ((t = n.joinRequestId), I.get(t)) : null;
    }
}
let b = new L(o.h, {
    GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS: function (e) {
        let { joinRequest: t } = e;
        N(t);
    },
    GUILD_JOIN_REQUESTS_FETCH_SUCCESS: function (e) {
        let { status: t, requests: n, total: i, guildId: r } = e;
        (g = !1),
            t === u.B5.SUBMITTED && m(r, i),
            n.forEach((e) => {
                N(e);
            });
    },
    GUILD_JOIN_REQUESTS_FETCH_START: function () {
        g = !0;
    },
    GUILD_JOIN_REQUESTS_FETCH_FAILURE: function () {
        g = !1;
    },
    GUILD_JOIN_REQUESTS_BULK_ACTION: function (e) {
        let { guildId: t, action: n } = e;
        I.values(p(t, u.B5.SUBMITTED)).forEach((e) => {
            N({ ...e, applicationStatus: n });
        }),
            m(t, 0);
    },
    GUILD_JOIN_REQUEST_CREATE: C,
    GUILD_JOIN_REQUEST_UPDATE: C,
    GUILD_JOIN_REQUEST_DELETE: function (e) {
        let { id: t, guildId: n } = e,
            i = I.get(t);
        null != i && (f(n, "DELETED", i.applicationStatus), delete v[t], I.delete(t), T.delete(t), S.delete(t));
    },
    GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: function (e) {
        let { guildId: t, applicationTab: n } = e;
        n !== R[t] && (R[t] = n);
    },
    GUILD_JOIN_REQUESTS_SET_SORT_ORDER: function (e) {
        let { guildId: t, sortOrder: n } = e;
        if (n === O[t]) return;
        O[t] = n;
        let i = R[t] ?? u.B5.SUBMITTED;
        "REVIEW_APPLICATION" !== i && ((0, _.mf)(i) && S.clear(), (0, _.ar)(i) && T.clear());
    },
    GUILD_JOIN_REQUESTS_SET_SELECTED: function (e) {
        let { guildId: t, request: n } = e;
        y[t] = n;
    },
});

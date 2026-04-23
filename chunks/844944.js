"use strict";
n.d(t, { A: () => L }), n(321073);
var r = n(989349),
    i = n.n(r),
    s = n(311907),
    a = n(713402),
    o = n(73153),
    l = n(287809),
    u = n(927813),
    c = n(821124),
    d = n(513461),
    _ = n(212455);
let f = new Map(),
    p = {};
function h(e, t) {
    (p[e] = t), f.set(e, i()());
}
function E(e, t, n) {
    if (t !== n && null != t) {
        if (t === d.B5.SUBMITTED) {
            let t = p[e];
            h(e, t + 1);
        }
        if (n === d.B5.SUBMITTED) {
            let t = p[e];
            h(e, Math.max(0, t - 1));
        }
    }
}
let m = !1,
    g = (e, t) => `guild-${e}-${t}`;
function A(e) {
    let t,
        n = [];
    return n.push(((t = e.joinRequestId), `guild-join-request=${t}`)), n.push(g(e.guildId, e.applicationStatus)), n;
}
let I = new a.J(A, (e) => `${e.joinRequestId}`),
    T = new a.J(A, (e) => `${e.joinRequestId}`),
    S = new a.J(A, (e) => `${e.actionedAt}`);
function y(e) {
    (R[e.joinRequestId] = e),
        I.set(e.joinRequestId, e),
        (0, c.ar)(e.applicationStatus) && (S.delete(e.joinRequestId), T.set(e.joinRequestId, e)),
        (0, c.mf)(e.applicationStatus) && (T.delete(e.joinRequestId), S.set(e.joinRequestId, e));
}
function N(e) {
    var t;
    let { guildId: n, request: r } = e,
        i = (0, _.j)(r),
        s = l.default.getCurrentUser();
    if (null == s || i.userId === s.id) return !1;
    let a = ((t = i.joinRequestId), I.get(t))?.applicationStatus;
    return E(n, i.applicationStatus, a), y(i), !0;
}
let v = {},
    C = {},
    O = {},
    R = {},
    b = 10 * u.A.Seconds.MINUTE;
class D extends s.Ay.Store {
    initialize() {
        this.waitFor(l.default);
    }
    static displayName = "GuildJoinRequestStoreV2";
    getRequest(e) {
        return R[e];
    }
    getRequests(e, t) {
        let n = g(e, t);
        return (0, c.mf)(t) ? S.values(n) : (0, c.ar)(t) ? T.values(n) : I.values(n);
    }
    getSubmittedGuildJoinRequestTotal(e) {
        return p[e];
    }
    isFetching() {
        return m;
    }
    hasFetched(e) {
        if (!f.has(e)) return !1;
        let t = f.get(e);
        return null != t && i()().diff(t, "seconds") < b;
    }
    getSelectedApplicationTab(e) {
        let t = d.B5.SUBMITTED;
        return v[e] ?? t;
    }
    getSelectedSortOrder(e) {
        return C[e] ?? d._e.TIMESTAMP_DESC;
    }
    getSelectedGuildJoinRequest(e) {
        var t;
        let n = O[e];
        return null != n ? ((t = n.joinRequestId), I.get(t)) : null;
    }
}
let L = new D(o.h, {
    GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS: function (e) {
        let { joinRequest: t } = e;
        y(t);
    },
    GUILD_JOIN_REQUESTS_FETCH_SUCCESS: function (e) {
        let { status: t, requests: n, total: r, guildId: i } = e;
        (m = !1),
            t === d.B5.SUBMITTED && h(i, r),
            n.forEach((e) => {
                y(e);
            });
    },
    GUILD_JOIN_REQUESTS_FETCH_START: function () {
        m = !0;
    },
    GUILD_JOIN_REQUESTS_FETCH_FAILURE: function () {
        m = !1;
    },
    GUILD_JOIN_REQUESTS_BULK_ACTION: function (e) {
        let { guildId: t, action: n } = e;
        I.values(g(t, d.B5.SUBMITTED)).forEach((e) => {
            y({ ...e, applicationStatus: n });
        }),
            h(t, 0);
    },
    GUILD_JOIN_REQUEST_CREATE: N,
    GUILD_JOIN_REQUEST_UPDATE: N,
    GUILD_JOIN_REQUEST_DELETE: function (e) {
        let { id: t, guildId: n } = e,
            r = I.get(t);
        null != r && (E(n, "DELETED", r.applicationStatus), delete R[t], I.delete(t), T.delete(t), S.delete(t));
    },
    GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: function (e) {
        let { guildId: t, applicationTab: n } = e;
        n !== v[t] && (v[t] = n);
    },
    GUILD_JOIN_REQUESTS_SET_SORT_ORDER: function (e) {
        let { guildId: t, sortOrder: n } = e;
        if (n === C[t]) return;
        C[t] = n;
        let r = v[t] ?? d.B5.SUBMITTED;
        "REVIEW_APPLICATION" !== r && ((0, c.mf)(r) && S.clear(), (0, c.ar)(r) && T.clear());
    },
    GUILD_JOIN_REQUESTS_SET_SELECTED: function (e) {
        let { guildId: t, request: n } = e;
        O[t] = n;
    },
});

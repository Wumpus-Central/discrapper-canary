"use strict";
n.d(t, { A: () => W }), n(321073);
var r = n(989349),
    i = n.n(r),
    a = n(311907),
    s = n(713402),
    o = n(73153),
    l = n(287809),
    u = n(927813),
    c = n(821124),
    d = n(513461),
    _ = n(212455);
let f = "DELETED",
    p = new Map(),
    h = {};
function m(e) {
    return h[e];
}
function g(e, t) {
    (h[e] = t), p.set(e, i()());
}
function E(e, t, n) {
    if (t !== n && null != t) {
        if (t === d.B5.SUBMITTED) {
            let t = m(e);
            g(e, t + 1);
        }
        if (n === d.B5.SUBMITTED) {
            let t = m(e);
            g(e, Math.max(0, t - 1));
        }
    }
}
function A(e) {
    let { joinRequest: t } = e;
    w(t);
}
let I = !1;
function T() {
    I = !0;
}
function y(e) {
    let { status: t, requests: n, total: r, guildId: i } = e;
    (I = !1),
        t === d.B5.SUBMITTED && g(i, r),
        n.forEach((e) => {
            w(e);
        });
}
function S() {
    I = !1;
}
let v = (e) => `guild-join-request=${e}`,
    C = (e, t) => `guild-${e}-${t}`;
function b(e) {
    let t = [];
    return t.push(v(e.joinRequestId)), t.push(C(e.guildId, e.applicationStatus)), t;
}
let N = new s.J(b, (e) => `${e.joinRequestId}`),
    R = new s.J(b, (e) => `${e.joinRequestId}`),
    O = new s.J(b, (e) => `${e.actionedAt}`);
function D(e) {
    return N.get(e);
}
function L(e) {
    delete j[e], N.delete(e), R.delete(e), O.delete(e);
}
function w(e) {
    (j[e.joinRequestId] = e),
        N.set(e.joinRequestId, e),
        (0, c.ar)(e.applicationStatus) && (O.delete(e.joinRequestId), R.set(e.joinRequestId, e)),
        (0, c.mf)(e.applicationStatus) && (R.delete(e.joinRequestId), O.set(e.joinRequestId, e));
}
function x(e) {
    let { guildId: t, request: n } = e,
        r = (0, _.j)(n),
        i = l.default.getCurrentUser();
    if (null == i || r.userId === i.id) return !1;
    let a = D(r.joinRequestId)?.applicationStatus;
    return E(t, r.applicationStatus, a), w(r), !0;
}
function P(e) {
    let { id: t, guildId: n } = e,
        r = D(t);
    null != r && (E(n, f, r.applicationStatus), L(t));
}
function M(e) {
    let { guildId: t, action: n } = e;
    N.values(C(t, d.B5.SUBMITTED)).forEach((e) => {
        w({ ...e, applicationStatus: n });
    }),
        g(t, 0);
}
let k = {};
function U(e) {
    let { guildId: t, applicationTab: n } = e;
    n !== k[t] && (k[t] = n);
}
let G = {};
function V(e) {
    let { guildId: t, sortOrder: n } = e;
    if (n === G[t]) return;
    G[t] = n;
    let r = k[t] ?? d.B5.SUBMITTED;
    "REVIEW_APPLICATION" !== r && ((0, c.mf)(r) && O.clear(), (0, c.ar)(r) && R.clear());
}
let F = {};
function B(e) {
    let { guildId: t, request: n } = e;
    F[t] = n;
}
let j = {},
    H = 10 * u.A.Seconds.MINUTE;
class Y extends a.Ay.Store {
    initialize() {
        this.waitFor(l.default);
    }
    static displayName = "GuildJoinRequestStoreV2";
    getRequest(e) {
        return j[e];
    }
    getRequests(e, t) {
        let n = C(e, t);
        return (0, c.mf)(t) ? O.values(n) : (0, c.ar)(t) ? R.values(n) : N.values(n);
    }
    getSubmittedGuildJoinRequestTotal(e) {
        return h[e];
    }
    isFetching() {
        return I;
    }
    hasFetched(e) {
        if (!p.has(e)) return !1;
        let t = p.get(e);
        return null != t && i()().diff(t, "seconds") < H;
    }
    getSelectedApplicationTab(e) {
        let t = d.B5.SUBMITTED;
        return k[e] ?? t;
    }
    getSelectedSortOrder(e) {
        return G[e] ?? d._e.TIMESTAMP_DESC;
    }
    getSelectedGuildJoinRequest(e) {
        let t = F[e];
        return null != t ? D(t.joinRequestId) : null;
    }
}
let W = new Y(o.h, {
    GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS: A,
    GUILD_JOIN_REQUESTS_FETCH_SUCCESS: y,
    GUILD_JOIN_REQUESTS_FETCH_START: T,
    GUILD_JOIN_REQUESTS_FETCH_FAILURE: S,
    GUILD_JOIN_REQUESTS_BULK_ACTION: M,
    GUILD_JOIN_REQUEST_CREATE: x,
    GUILD_JOIN_REQUEST_UPDATE: x,
    GUILD_JOIN_REQUEST_DELETE: P,
    GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: U,
    GUILD_JOIN_REQUESTS_SET_SORT_ORDER: V,
    GUILD_JOIN_REQUESTS_SET_SELECTED: B,
});

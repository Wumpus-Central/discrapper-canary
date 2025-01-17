var i,
    a = r(47120);
var s = r(653041);
var o = r(913527),
    l = r.n(o),
    u = r(442837),
    c = r(759174),
    d = r(570140),
    f = r(430824),
    _ = r(594174),
    h = r(70956),
    p = r(881952),
    m = r(246364),
    g = r(937111),
    E = r(981631);
function v(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let I = new Map(),
    T = {};
function b(e) {
    return T[e];
}
function y(e, n) {
    (T[e] = n), I.set(e, l()());
}
function S(e, n, r) {
    if (n !== r && null != n) {
        if (n === m.wB.SUBMITTED) {
            let n = b(e);
            y(e, n + 1);
        }
        if (r === m.wB.SUBMITTED) {
            let n = b(e);
            y(e, Math.max(0, n - 1));
        }
    }
}
function A(e) {
    let { joinRequest: n } = e;
    B(n);
}
let N = !1;
function C() {
    N = !0;
}
function R(e) {
    let { status: n, requests: r, total: i, guildId: a } = e;
    (N = !1),
        n === m.wB.SUBMITTED && y(a, i),
        r.forEach((e) => {
            B(e);
        });
}
function O() {
    N = !1;
}
let D = (e) => 'guild-join-request='.concat(e),
    L = (e, n) => 'guild-'.concat(e, '-').concat(n);
function x(e) {
    let n = [];
    return n.push(D(e.joinRequestId)), n.push(L(e.guildId, e.applicationStatus)), n;
}
let w = new c.h(x, (e) => ''.concat(e.joinRequestId)),
    P = new c.h(x, (e) => ''.concat(e.joinRequestId)),
    M = new c.h(x, (e) => ''.concat(e.actionedAt));
function k(e) {
    return w.get(e);
}
function U(e) {
    delete z[e], w.delete(e), P.delete(e), M.delete(e);
}
function B(e) {
    (z[e.joinRequestId] = e), w.set(e.joinRequestId, e), (0, p.Nd)(e.applicationStatus) && (M.delete(e.joinRequestId), P.set(e.joinRequestId, e)), (0, p.bk)(e.applicationStatus) && (P.delete(e.joinRequestId), M.set(e.joinRequestId, e));
}
function G(e) {
    var n;
    let { guildId: r, request: i } = e,
        a = (0, g.j)(i),
        s = _.default.getCurrentUser();
    if (null == s || a.userId === s.id) return !1;
    let o = null === (n = k(a.joinRequestId)) || void 0 === n ? void 0 : n.applicationStatus;
    return S(r, a.applicationStatus, o), B(a), !0;
}
function Z(e) {
    let { id: n, guildId: r } = e,
        i = k(n);
    null != i && (S(r, null, i.applicationStatus), U(n));
}
function F(e) {
    let { guildId: n, action: r } = e;
    w.values(L(n, m.wB.SUBMITTED)).forEach((e) => {
        B({
            ...e,
            applicationStatus: r
        });
    }),
        y(n, 0);
}
let V = {};
function j(e) {
    let { guildId: n, applicationTab: r } = e;
    r !== V[n] && (V[n] = r);
}
let H = {};
function Y(e) {
    var n;
    let { guildId: r, sortOrder: i } = e;
    if (i === H[r]) return;
    H[r] = i;
    let a = null !== (n = V[r]) && void 0 !== n ? n : m.wB.SUBMITTED;
    'REVIEW_APPLICATION' !== a && ((0, p.bk)(a) && M.clear(), (0, p.Nd)(a) && P.clear());
}
let W = {};
function K(e) {
    let { guildId: n, request: r } = e;
    W[n] = r;
}
let z = {},
    q = 10 * h.Z.Seconds.MINUTE;
class Q extends (i = u.ZP.Store) {
    getRequest(e) {
        return z[e];
    }
    getRequests(e, n) {
        let r = L(e, n);
        return (0, p.bk)(n) ? M.values(r) : (0, p.Nd)(n) ? P.values(r) : w.values(r);
    }
    getSubmittedGuildJoinRequestTotal(e) {
        return T[e];
    }
    isFetching() {
        return N;
    }
    hasFetched(e) {
        if (!I.has(e)) return !1;
        let n = I.get(e);
        return null != n && l()().diff(n, 'seconds') < q;
    }
    getSelectedApplicationTab(e) {
        var n;
        let r = f.Z.getGuild(e),
            i = this.getRequests(e, m.wB.SUBMITTED).length > 0,
            a = (null == r ? void 0 : r.hasFeature(E.oNc.CLAN)) && !i ? 'REVIEW_APPLICATION' : m.wB.SUBMITTED;
        return null !== (n = V[e]) && void 0 !== n ? n : a;
    }
    getSelectedSortOrder(e) {
        var n;
        return null !== (n = H[e]) && void 0 !== n ? n : m.Nw.TIMESTAMP_DESC;
    }
    getSelectedGuildJoinRequest(e) {
        let n = W[e];
        return null != n ? k(n.joinRequestId) : null;
    }
}
v(Q, 'displayName', 'GuildJoinRequestStoreV2'),
    (n.Z = new Q(d.Z, {
        GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS: A,
        GUILD_JOIN_REQUESTS_FETCH_SUCCESS: R,
        GUILD_JOIN_REQUESTS_FETCH_START: C,
        GUILD_JOIN_REQUESTS_FETCH_FAILURE: O,
        GUILD_JOIN_REQUESTS_BULK_ACTION: F,
        GUILD_JOIN_REQUEST_CREATE: G,
        GUILD_JOIN_REQUEST_UPDATE: G,
        GUILD_JOIN_REQUEST_DELETE: Z,
        GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: j,
        GUILD_JOIN_REQUESTS_SET_SORT_ORDER: Y,
        GUILD_JOIN_REQUESTS_SET_SELECTED: K
    }));

n.d(t, { Z: () => q }), n(47120), n(653041);
var i,
    r = n(913527),
    a = n.n(r),
    s = n(442837),
    o = n(759174),
    l = n(570140),
    u = n(430824),
    c = n(594174),
    d = n(70956),
    f = n(881952),
    _ = n(246364),
    p = n(937111),
    h = n(981631);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let g = 'DELETED',
    E = new Map(),
    v = {};
function y(e) {
    return v[e];
}
function I(e, t) {
    (v[e] = t), E.set(e, a()());
}
function T(e, t, n) {
    if (t !== n && null != t) {
        if (t === _.wB.SUBMITTED) {
            let t = y(e);
            I(e, t + 1);
        }
        if (n === _.wB.SUBMITTED) {
            let t = y(e);
            I(e, Math.max(0, t - 1));
        }
    }
}
function b(e) {
    let { joinRequest: t } = e;
    k(t);
}
let S = !1;
function A() {
    S = !0;
}
function N(e) {
    let { status: t, requests: n, total: i, guildId: r } = e;
    (S = !1),
        t === _.wB.SUBMITTED && I(r, i),
        n.forEach((e) => {
            k(e);
        });
}
function C() {
    S = !1;
}
let R = (e) => 'guild-join-request='.concat(e),
    O = (e, t) => 'guild-'.concat(e, '-').concat(t);
function D(e) {
    let t = [];
    return t.push(R(e.joinRequestId)), t.push(O(e.guildId, e.applicationStatus)), t;
}
let L = new o.h(D, (e) => ''.concat(e.joinRequestId)),
    x = new o.h(D, (e) => ''.concat(e.joinRequestId)),
    w = new o.h(D, (e) => ''.concat(e.actionedAt));
function P(e) {
    return L.get(e);
}
function M(e) {
    delete W[e], L.delete(e), x.delete(e), w.delete(e);
}
function k(e) {
    (W[e.joinRequestId] = e), L.set(e.joinRequestId, e), (0, f.Nd)(e.applicationStatus) && (w.delete(e.joinRequestId), x.set(e.joinRequestId, e)), (0, f.bk)(e.applicationStatus) && (x.delete(e.joinRequestId), w.set(e.joinRequestId, e));
}
function U(e) {
    var t;
    let { guildId: n, request: i } = e,
        r = (0, p.j)(i),
        a = c.default.getCurrentUser();
    if (null == a || r.userId === a.id) return !1;
    let s = null === (t = P(r.joinRequestId)) || void 0 === t ? void 0 : t.applicationStatus;
    return T(n, r.applicationStatus, s), k(r), !0;
}
function G(e) {
    let { id: t, guildId: n } = e,
        i = P(t);
    null != i && (T(n, g, i.applicationStatus), M(t));
}
function B(e) {
    let { guildId: t, action: n } = e;
    L.values(O(t, _.wB.SUBMITTED)).forEach((e) => {
        k({
            ...e,
            applicationStatus: n
        });
    }),
        I(t, 0);
}
let Z = {};
function F(e) {
    let { guildId: t, applicationTab: n } = e;
    n !== Z[t] && (Z[t] = n);
}
let V = {};
function j(e) {
    var t;
    let { guildId: n, sortOrder: i } = e;
    if (i === V[n]) return;
    V[n] = i;
    let r = null !== (t = Z[n]) && void 0 !== t ? t : _.wB.SUBMITTED;
    'REVIEW_APPLICATION' !== r && ((0, f.bk)(r) && w.clear(), (0, f.Nd)(r) && x.clear());
}
let H = {};
function Y(e) {
    let { guildId: t, request: n } = e;
    H[t] = n;
}
let W = {},
    K = 10 * d.Z.Seconds.MINUTE;
class z extends (i = s.ZP.Store) {
    getRequest(e) {
        return W[e];
    }
    getRequests(e, t) {
        let n = O(e, t);
        return (0, f.bk)(t) ? w.values(n) : (0, f.Nd)(t) ? x.values(n) : L.values(n);
    }
    getSubmittedGuildJoinRequestTotal(e) {
        return v[e];
    }
    isFetching() {
        return S;
    }
    hasFetched(e) {
        if (!E.has(e)) return !1;
        let t = E.get(e);
        return null != t && a()().diff(t, 'seconds') < K;
    }
    getSelectedApplicationTab(e) {
        var t;
        let n = u.Z.getGuild(e),
            i = this.getRequests(e, _.wB.SUBMITTED).length > 0,
            r = (null == n ? void 0 : n.hasFeature(h.oNc.CLAN)) && !i ? 'REVIEW_APPLICATION' : _.wB.SUBMITTED;
        return null !== (t = Z[e]) && void 0 !== t ? t : r;
    }
    getSelectedSortOrder(e) {
        var t;
        return null !== (t = V[e]) && void 0 !== t ? t : _.Nw.TIMESTAMP_DESC;
    }
    getSelectedGuildJoinRequest(e) {
        let t = H[e];
        return null != t ? P(t.joinRequestId) : null;
    }
}
m(z, 'displayName', 'GuildJoinRequestStoreV2');
let q = new z(l.Z, {
    GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS: b,
    GUILD_JOIN_REQUESTS_FETCH_SUCCESS: N,
    GUILD_JOIN_REQUESTS_FETCH_START: A,
    GUILD_JOIN_REQUESTS_FETCH_FAILURE: C,
    GUILD_JOIN_REQUESTS_BULK_ACTION: B,
    GUILD_JOIN_REQUEST_CREATE: U,
    GUILD_JOIN_REQUEST_UPDATE: U,
    GUILD_JOIN_REQUEST_DELETE: G,
    GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: F,
    GUILD_JOIN_REQUESTS_SET_SORT_ORDER: j,
    GUILD_JOIN_REQUESTS_SET_SELECTED: Y
});

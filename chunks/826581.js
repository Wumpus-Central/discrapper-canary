n.d(t, { Z: () => J }), n(47120), n(653041);
var r,
    i = n(913527),
    o = n.n(i),
    a = n(442837),
    s = n(759174),
    l = n(570140),
    c = n(430824),
    u = n(594174),
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
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = 'DELETED',
    v = new Map(),
    O = {};
function I(e) {
    return O[e];
}
function S(e, t) {
    (O[e] = t), v.set(e, o()());
}
function T(e, t, n) {
    if (t !== n && null != t) {
        if (t === _.wB.SUBMITTED) {
            let t = I(e);
            S(e, t + 1);
        }
        if (n === _.wB.SUBMITTED) {
            let t = I(e);
            S(e, Math.max(0, t - 1));
        }
    }
}
function N(e) {
    let { joinRequest: t } = e;
    G(t);
}
let A = !1;
function C() {
    A = !0;
}
function R(e) {
    let { status: t, requests: n, total: r, guildId: i } = e;
    (A = !1),
        t === _.wB.SUBMITTED && S(i, r),
        n.forEach((e) => {
            G(e);
        });
}
function P() {
    A = !1;
}
let w = (e) => 'guild-join-request='.concat(e),
    D = (e, t) => 'guild-'.concat(e, '-').concat(t);
function L(e) {
    let t = [];
    return t.push(w(e.joinRequestId)), t.push(D(e.guildId, e.applicationStatus)), t;
}
let x = new s.h(L, (e) => ''.concat(e.joinRequestId)),
    M = new s.h(L, (e) => ''.concat(e.joinRequestId)),
    k = new s.h(L, (e) => ''.concat(e.actionedAt));
function j(e) {
    return x.get(e);
}
function U(e) {
    delete q[e], x.delete(e), M.delete(e), k.delete(e);
}
function G(e) {
    (q[e.joinRequestId] = e), x.set(e.joinRequestId, e), (0, f.Nd)(e.applicationStatus) && (k.delete(e.joinRequestId), M.set(e.joinRequestId, e)), (0, f.bk)(e.applicationStatus) && (M.delete(e.joinRequestId), k.set(e.joinRequestId, e));
}
function B(e) {
    var t;
    let { guildId: n, request: r } = e,
        i = (0, p.j)(r),
        o = u.default.getCurrentUser();
    if (null == o || i.userId === o.id) return !1;
    let a = null == (t = j(i.joinRequestId)) ? void 0 : t.applicationStatus;
    return T(n, i.applicationStatus, a), G(i), !0;
}
function F(e) {
    let { id: t, guildId: n } = e,
        r = j(t);
    null != r && (T(n, y, r.applicationStatus), U(t));
}
function V(e) {
    let { guildId: t, action: n } = e;
    x.values(D(t, _.wB.SUBMITTED)).forEach((e) => {
        G(b(g({}, e), { applicationStatus: n }));
    }),
        S(t, 0);
}
let Z = {};
function H(e) {
    let { guildId: t, applicationTab: n } = e;
    n !== Z[t] && (Z[t] = n);
}
let W = {};
function Y(e) {
    var t;
    let { guildId: n, sortOrder: r } = e;
    if (r === W[n]) return;
    W[n] = r;
    let i = null != (t = Z[n]) ? t : _.wB.SUBMITTED;
    'REVIEW_APPLICATION' !== i && ((0, f.bk)(i) && k.clear(), (0, f.Nd)(i) && M.clear());
}
let K = {};
function z(e) {
    let { guildId: t, request: n } = e;
    K[t] = n;
}
let q = {},
    Q = 10 * d.Z.Seconds.MINUTE;
class X extends (r = a.ZP.Store) {
    getRequest(e) {
        return q[e];
    }
    getRequests(e, t) {
        let n = D(e, t);
        return (0, f.bk)(t) ? k.values(n) : (0, f.Nd)(t) ? M.values(n) : x.values(n);
    }
    getSubmittedGuildJoinRequestTotal(e) {
        return O[e];
    }
    isFetching() {
        return A;
    }
    hasFetched(e) {
        if (!v.has(e)) return !1;
        let t = v.get(e);
        return null != t && o()().diff(t, 'seconds') < Q;
    }
    getSelectedApplicationTab(e) {
        var t;
        let n = c.Z.getGuild(e),
            r = this.getRequests(e, _.wB.SUBMITTED).length > 0,
            i = (null == n ? void 0 : n.hasFeature(h.oNc.CLAN)) && !r ? 'REVIEW_APPLICATION' : _.wB.SUBMITTED;
        return null != (t = Z[e]) ? t : i;
    }
    getSelectedSortOrder(e) {
        var t;
        return null != (t = W[e]) ? t : _.Nw.TIMESTAMP_DESC;
    }
    getSelectedGuildJoinRequest(e) {
        let t = K[e];
        return null != t ? j(t.joinRequestId) : null;
    }
}
m(X, 'displayName', 'GuildJoinRequestStoreV2');
let J = new X(l.Z, {
    GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS: N,
    GUILD_JOIN_REQUESTS_FETCH_SUCCESS: R,
    GUILD_JOIN_REQUESTS_FETCH_START: C,
    GUILD_JOIN_REQUESTS_FETCH_FAILURE: P,
    GUILD_JOIN_REQUESTS_BULK_ACTION: V,
    GUILD_JOIN_REQUEST_CREATE: B,
    GUILD_JOIN_REQUEST_UPDATE: B,
    GUILD_JOIN_REQUEST_DELETE: F,
    GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: H,
    GUILD_JOIN_REQUESTS_SET_SORT_ORDER: Y,
    GUILD_JOIN_REQUESTS_SET_SELECTED: z
});

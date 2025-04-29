n.d(t, { Z: () => Q }), n(388685), n(539854);
var r,
    i = n(913527),
    o = n.n(i),
    a = n(442837),
    s = n(759174),
    l = n(570140),
    c = n(594174),
    u = n(70956),
    d = n(881952),
    f = n(246364),
    _ = n(937111);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = 'DELETED',
    b = new Map(),
    y = {};
function O(e) {
    return y[e];
}
function v(e, t) {
    (y[e] = t), b.set(e, o()());
}
function I(e, t, n) {
    if (t !== n && null != t) {
        if (t === f.wB.SUBMITTED) {
            let t = O(e);
            v(e, t + 1);
        }
        if (n === f.wB.SUBMITTED) {
            let t = O(e);
            v(e, Math.max(0, t - 1));
        }
    }
}
function S(e) {
    let { joinRequest: t } = e;
    j(t);
}
let T = !1;
function A() {
    T = !0;
}
function N(e) {
    let { status: t, requests: n, total: r, guildId: i } = e;
    (T = !1),
        t === f.wB.SUBMITTED && v(i, r),
        n.forEach((e) => {
            j(e);
        });
}
function C() {
    T = !1;
}
let R = (e) => 'guild-join-request='.concat(e),
    P = (e, t) => 'guild-'.concat(e, '-').concat(t);
function w(e) {
    let t = [];
    return t.push(R(e.joinRequestId)), t.push(P(e.guildId, e.applicationStatus)), t;
}
let D = new s.h(w, (e) => ''.concat(e.joinRequestId)),
    L = new s.h(w, (e) => ''.concat(e.joinRequestId)),
    x = new s.h(w, (e) => ''.concat(e.actionedAt));
function M(e) {
    return D.get(e);
}
function k(e) {
    delete K[e], D.delete(e), L.delete(e), x.delete(e);
}
function j(e) {
    (K[e.joinRequestId] = e), D.set(e.joinRequestId, e), (0, d.Nd)(e.applicationStatus) && (x.delete(e.joinRequestId), L.set(e.joinRequestId, e)), (0, d.bk)(e.applicationStatus) && (L.delete(e.joinRequestId), x.set(e.joinRequestId, e));
}
function U(e) {
    var t;
    let { guildId: n, request: r } = e,
        i = (0, _.j)(r),
        o = c.default.getCurrentUser();
    if (null == o || i.userId === o.id) return !1;
    let a = null == (t = M(i.joinRequestId)) ? void 0 : t.applicationStatus;
    return I(n, i.applicationStatus, a), j(i), !0;
}
function G(e) {
    let { id: t, guildId: n } = e,
        r = M(t);
    null != r && (I(n, E, r.applicationStatus), k(t));
}
function B(e) {
    let { guildId: t, action: n } = e;
    D.values(P(t, f.wB.SUBMITTED)).forEach((e) => {
        j(g(h({}, e), { applicationStatus: n }));
    }),
        v(t, 0);
}
let V = {};
function F(e) {
    let { guildId: t, applicationTab: n } = e;
    n !== V[t] && (V[t] = n);
}
let Z = {};
function H(e) {
    var t;
    let { guildId: n, sortOrder: r } = e;
    if (r === Z[n]) return;
    Z[n] = r;
    let i = null != (t = V[n]) ? t : f.wB.SUBMITTED;
    'REVIEW_APPLICATION' !== i && ((0, d.bk)(i) && x.clear(), (0, d.Nd)(i) && L.clear());
}
let Y = {};
function W(e) {
    let { guildId: t, request: n } = e;
    Y[t] = n;
}
let K = {},
    z = 10 * u.Z.Seconds.MINUTE;
class q extends (r = a.ZP.Store) {
    getRequest(e) {
        return K[e];
    }
    getRequests(e, t) {
        let n = P(e, t);
        return (0, d.bk)(t) ? x.values(n) : (0, d.Nd)(t) ? L.values(n) : D.values(n);
    }
    getSubmittedGuildJoinRequestTotal(e) {
        return y[e];
    }
    isFetching() {
        return T;
    }
    hasFetched(e) {
        if (!b.has(e)) return !1;
        let t = b.get(e);
        return null != t && o()().diff(t, 'seconds') < z;
    }
    getSelectedApplicationTab(e) {
        var t;
        let n = f.wB.SUBMITTED;
        return null != (t = V[e]) ? t : n;
    }
    getSelectedSortOrder(e) {
        var t;
        return null != (t = Z[e]) ? t : f.Nw.TIMESTAMP_DESC;
    }
    getSelectedGuildJoinRequest(e) {
        let t = Y[e];
        return null != t ? M(t.joinRequestId) : null;
    }
}
p(q, 'displayName', 'GuildJoinRequestStoreV2');
let Q = new q(l.Z, {
    GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS: S,
    GUILD_JOIN_REQUESTS_FETCH_SUCCESS: N,
    GUILD_JOIN_REQUESTS_FETCH_START: A,
    GUILD_JOIN_REQUESTS_FETCH_FAILURE: C,
    GUILD_JOIN_REQUESTS_BULK_ACTION: B,
    GUILD_JOIN_REQUEST_CREATE: U,
    GUILD_JOIN_REQUEST_UPDATE: U,
    GUILD_JOIN_REQUEST_DELETE: G,
    GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: F,
    GUILD_JOIN_REQUESTS_SET_SORT_ORDER: H,
    GUILD_JOIN_REQUESTS_SET_SELECTED: W
});

n.d(t, { A: () => Z }), n(896048), n(321073);
var r,
    i = n(989349),
    a = n.n(i),
    s = n(311907),
    o = n(713402),
    l = n(73153),
    c = n(287809),
    u = n(927813),
    d = n(821124),
    f = n(513461),
    p = n(212455);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
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
let E = "DELETED",
    b = new Map(),
    y = {};
function O(e) {
    return y[e];
}
function A(e, t) {
    (y[e] = t), b.set(e, a()());
}
function v(e, t, n) {
    if (t !== n && null != t) {
        if (t === f.B5.SUBMITTED) {
            let t = O(e);
            A(e, t + 1);
        }
        if (n === f.B5.SUBMITTED) {
            let t = O(e);
            A(e, Math.max(0, t - 1));
        }
    }
}
function S(e) {
    let { joinRequest: t } = e;
    k(t);
}
let I = !1;
function T() {
    I = !0;
}
function C(e) {
    let { status: t, requests: n, total: r, guildId: i } = e;
    (I = !1),
        t === f.B5.SUBMITTED && A(i, r),
        n.forEach((e) => {
            k(e);
        });
}
function N() {
    I = !1;
}
let R = (e) => "guild-join-request=".concat(e),
    w = (e, t) => "guild-".concat(e, "-").concat(t);
function P(e) {
    let t = [];
    return t.push(R(e.joinRequestId)), t.push(w(e.guildId, e.applicationStatus)), t;
}
let D = new o.J(P, (e) => "".concat(e.joinRequestId)),
    x = new o.J(P, (e) => "".concat(e.joinRequestId)),
    L = new o.J(P, (e) => "".concat(e.actionedAt));
function j(e) {
    return D.get(e);
}
function M(e) {
    delete z[e], D.delete(e), x.delete(e), L.delete(e);
}
function k(e) {
    (z[e.joinRequestId] = e),
        D.set(e.joinRequestId, e),
        (0, d.ar)(e.applicationStatus) && (L.delete(e.joinRequestId), x.set(e.joinRequestId, e)),
        (0, d.mf)(e.applicationStatus) && (x.delete(e.joinRequestId), L.set(e.joinRequestId, e));
}
function U(e) {
    var t;
    let { guildId: n, request: r } = e,
        i = (0, p.j)(r),
        a = c.default.getCurrentUser();
    if (null == a || i.userId === a.id) return !1;
    let s = null == (t = j(i.joinRequestId)) ? void 0 : t.applicationStatus;
    return v(n, i.applicationStatus, s), k(i), !0;
}
function G(e) {
    let { id: t, guildId: n } = e,
        r = j(t);
    null != r && (v(n, E, r.applicationStatus), M(t));
}
function V(e) {
    let { guildId: t, action: n } = e;
    D.values(w(t, f.B5.SUBMITTED)).forEach((e) => {
        k(g(h({}, e), { applicationStatus: n }));
    }),
        A(t, 0);
}
let F = {};
function B(e) {
    let { guildId: t, applicationTab: n } = e;
    n !== F[t] && (F[t] = n);
}
let H = {};
function Y(e) {
    var t;
    let { guildId: n, sortOrder: r } = e;
    if (r === H[n]) return;
    H[n] = r;
    let i = null != (t = F[n]) ? t : f.B5.SUBMITTED;
    "REVIEW_APPLICATION" !== i && ((0, d.mf)(i) && L.clear(), (0, d.ar)(i) && x.clear());
}
let W = {};
function K(e) {
    let { guildId: t, request: n } = e;
    W[t] = n;
}
let z = {},
    q = 10 * u.A.Seconds.MINUTE;
class X extends (r = s.Ay.Store) {
    initialize() {
        this.waitFor(c.default);
    }
    getRequest(e) {
        return z[e];
    }
    getRequests(e, t) {
        let n = w(e, t);
        return (0, d.mf)(t) ? L.values(n) : (0, d.ar)(t) ? x.values(n) : D.values(n);
    }
    getSubmittedGuildJoinRequestTotal(e) {
        return y[e];
    }
    isFetching() {
        return I;
    }
    hasFetched(e) {
        if (!b.has(e)) return !1;
        let t = b.get(e);
        return null != t && a()().diff(t, "seconds") < q;
    }
    getSelectedApplicationTab(e) {
        var t;
        let n = f.B5.SUBMITTED;
        return null != (t = F[e]) ? t : n;
    }
    getSelectedSortOrder(e) {
        var t;
        return null != (t = H[e]) ? t : f._e.TIMESTAMP_DESC;
    }
    getSelectedGuildJoinRequest(e) {
        let t = W[e];
        return null != t ? j(t.joinRequestId) : null;
    }
}
_(X, "displayName", "GuildJoinRequestStoreV2");
let Z = new X(l.h, {
    GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS: S,
    GUILD_JOIN_REQUESTS_FETCH_SUCCESS: C,
    GUILD_JOIN_REQUESTS_FETCH_START: T,
    GUILD_JOIN_REQUESTS_FETCH_FAILURE: N,
    GUILD_JOIN_REQUESTS_BULK_ACTION: V,
    GUILD_JOIN_REQUEST_CREATE: U,
    GUILD_JOIN_REQUEST_UPDATE: U,
    GUILD_JOIN_REQUEST_DELETE: G,
    GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: B,
    GUILD_JOIN_REQUESTS_SET_SORT_ORDER: Y,
    GUILD_JOIN_REQUESTS_SET_SELECTED: K,
});

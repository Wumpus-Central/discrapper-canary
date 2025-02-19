n.d(e, { Z: () => B }), n(47120), n(653041), n(301563);
var r,
    i,
    o,
    a,
    s = n(133080),
    l = n(412788),
    E = n(594174),
    u = n(709054),
    d = n(260722),
    c = n(735079),
    _ = n(546791),
    T = n(292352);
function S(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = n),
        t
    );
}
function N(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            r.forEach(function (e) {
                S(t, e, n[e]);
            });
    }
    return t;
}
function I(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(e)).forEach(function (n) {
                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
        t
    );
}
let C = null,
    y = null,
    A = {},
    p = Y(),
    g = h(),
    f = null,
    L = (null === (i = window) || void 0 === i ? void 0 : null === (r = i.location) || void 0 === r ? void 0 : r.pathname) === T.ix.FAMILY_CENTER_MY_FAMILY ? T.dG.REQUESTS : (null === (a = window) || void 0 === a ? void 0 : null === (o = a.location) || void 0 === o ? void 0 : o.pathname) === T.ix.FAMILY_CENTER_SETTINGS ? T.dG.SETTINGS : T.dG.ACTIVITY,
    R = !1,
    M = !1,
    D = null,
    U = null,
    v = {};
function Y() {
    return {
        [T.MY.USER_ADD]: {},
        [T.MY.GUILD_ADD]: {},
        [T.MY.USER_INTERACTION]: {},
        [T.MY.GUILD_INTERACTION]: {},
        [T.MY.USER_CALLED]: {}
    };
}
function h() {
    return {
        [T.MY.USER_ADD]: 0,
        [T.MY.GUILD_ADD]: 0,
        [T.MY.USER_INTERACTION]: 0,
        [T.MY.GUILD_INTERACTION]: 0,
        [T.MY.USER_CALLED]: 0
    };
}
function O() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return arguments.length > 1 && arguments[1], (A = t.length > 0 ? t.reduce((t, e) => I(N({}, t), { [e.user_id]: e }), {}) : {});
}
function m(t) {
    void 0 !== t && (g = t);
}
function W(t, e) {
    let n = e ? p : Y();
    return (p = t.reduce((t, e) => {
        let r = e.display_type;
        return void 0 !== n[r] && void 0 === n[r][e.event_id] && (t[r][e.event_id] = e), t;
    }, n));
}
function b(t) {
    v = t.reduce((t, e) => I(N({}, t), { [e.id]: new c.J(e) }), v);
}
function F() {
    M = !0;
}
function w(t) {
    let { linkedUsers: e, familyCenterTeenActivity: n } = t,
        { actions: r, guilds: i, totals: o, teenId: a, rangeStartId: s } = n;
    (C = a), (y = s), W(r), m(o), b(i), O(e), (M = !1), (D = u.default.fromTimestamp(Date.now())), (R = !0);
}
function j(t) {
    let { linkedUsers: e } = t;
    O(e);
}
function P(t) {
    let { linkedUsers: e } = t;
    O(e);
}
function k(t) {
    let { familyCenterTeenActivity: e } = t;
    if (void 0 === e) return;
    let { actions: n, totals: r, guilds: i, teenId: o, rangeStartId: a } = e;
    (C = o), (y = a), W(n), m(r), b(i), (M = !1), (D = u.default.fromTimestamp(Date.now()));
}
function H(t) {
    let { familyCenterTeenActivity: e } = t,
        { actions: n, guilds: r } = e;
    W(n, !0), b(r);
}
function G(t) {
    let { linkedUsers: e } = t;
    O(e);
}
function V(t) {
    let { linkedUsers: e } = t;
    O(e, !0);
}
function Q(t) {
    let { linkCode: e } = t;
    f = e;
}
function Z(t) {
    let { tab: e } = t;
    L = e;
}
function x(t) {
    let { user: e } = t;
    if (void 0 === e.linked_users) return;
    let n = E.default.getUsers();
    e.linked_users.some((t) => {
        let { user_id: e } = t;
        return void 0 === n[e];
    }) && e.linked_users.length > Object.keys(A).length
        ? d.ZP.fetchLinkedUsers()
        : O(e.linked_users);
}
function K(t) {
    var e;
    let { countryCode: n } = t;
    null != n && (U = null !== (e = (0, s.Zz)(n)) && void 0 !== e ? e : null);
}
function z() {
    (C = null), (y = null), (A = {}), (p = Y()), (g = h()), (v = {}), (M = !1), (D = null);
}
class X extends l.Z {
    initialize() {
        this.waitFor(E.default);
    }
    loadCache() {
        let t = this.readSnapshot(X.LATEST_SNAPSHOT_VERSION);
        null != t &&
            (O(t.linkedUsers),
            b(t.guilds),
            W(t.teenActivity),
            (g = t.teenActivityTotals.reduce((t, e) => {
                let [n, r] = e.split(':'),
                    i = (0, _.jV)(n);
                return void 0 === i ? t : I(N({}, t), { [i]: parseInt(r, 10) });
            }, h())));
    }
    takeSnapshot() {
        return {
            version: X.LATEST_SNAPSHOT_VERSION,
            data: {
                linkedUsers: Object.values(A),
                teenActivityTotals: Object.entries(g).map((t) => {
                    let [e, n] = t;
                    return ''.concat(e, ':').concat(n);
                }),
                teenActivity: (function () {
                    let t = [];
                    return (
                        Object.entries(p).forEach((e) => {
                            let [n, r] = e;
                            t.push(...Object.values(r));
                        }),
                        t
                    );
                })(),
                guilds: Object.values(v)
            }
        };
    }
    getSelectedTeenId() {
        return C;
    }
    getLinkedUsers() {
        return A;
    }
    getLinkTimestamp(t) {
        var e;
        let n = A[t];
        return null == n ? null : null !== (e = n.updated_at) && void 0 !== e ? e : n.created_at;
    }
    getRangeStartTimestamp() {
        return null == y ? null : u.default.extractTimestamp(y);
    }
    getActionsForDisplayType(t) {
        return Object.values(p[t]);
    }
    getTotalForDisplayType(t) {
        return g[t];
    }
    getLinkCode() {
        return f;
    }
    getGuild(t) {
        return v[t];
    }
    getSelectedTab() {
        return L;
    }
    getStartId() {
        return y;
    }
    getIsInitialized() {
        return R;
    }
    getUserCountry() {
        return U;
    }
    isLoading() {
        return M;
    }
    canRefetch() {
        return null === D || u.default.age(D) > T.Of;
    }
    constructor() {
        super({
            CURRENT_USER_UPDATE: x,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            FAMILY_CENTER_INITIAL_LOAD: w,
            FAMILY_CENTER_FETCH_START: F,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: j,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: k,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: H,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: P,
            FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: G,
            FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: V,
            FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: Q,
            FAMILY_CENTER_HANDLE_TAB_SELECT: Z,
            SET_LOCATION_METADATA: K,
            LOGOUT: z
        });
    }
}
S(X, 'displayName', 'FamilyCenterStore'), S(X, 'LATEST_SNAPSHOT_VERSION', 3);
let B = new X();
